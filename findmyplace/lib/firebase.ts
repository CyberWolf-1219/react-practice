import { initializeApp } from "firebase/app";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  FieldValue,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { PropertyData, SearchData, userObj } from "../types/types";

const firebaseConfig = {
  apiKey: "AIzaSyCXv-fBTT_5mfRO9aziM7P-GU1x365PgZE",
  authDomain: "find-my-place-fdb17.firebaseapp.com",
  projectId: "find-my-place-fdb17",
  storageBucket: "find-my-place-fdb17.appspot.com",
  messagingSenderId: "661973508057",
  appId: "1:661973508057:web:d4360e2c646e8499af43c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();
const usersCollection = collection(db, "users");
const propertiesCollection = collection(db, "properties");
const geolocationsCollection = collection(db, "geolocations");
const bookmarksCollection = collection(db, "bookmarks");

const storage = getStorage(app);

// Functions
export async function uploadImage(imageName: string, data: any) {
  const imageRef = ref(storage, `images/${imageName}`);

  const uploadResult = await uploadString(imageRef, data, "data_url");
  console.log(`=================================================`);
  console.log(uploadResult.ref.toString());
  console.log(`=================================================`);
  const fileUrl = await getDownloadURL(uploadResult.ref);
  return {
    filePath: fileUrl,
  };
}

// USER COLLECTION
export async function checkUserExistence(userEmail: string) {
  const q = query(usersCollection, where("email", "==", userEmail));
  const queryResult = await getDocs(q);
  if (queryResult.size > 0) {
    return true;
  } else {
    return false;
  }
}

export async function getUser(userEmail: string) {
  const q = query(usersCollection, where("email", "==", userEmail));
  const queryResult = await getDocs(q);

  const user: { id: string; data: DocumentData } = {
    id: "",
    data: {},
  };

  queryResult.forEach((doc) => {
    user.id = doc.id;
    user.data = doc.data();
  });
  return user;
}

export async function addUser(userObj: userObj) {
  const result = await addDoc(usersCollection, userObj);
}

export async function removeUser(userId: string) {
  const docRef = doc(db, "users", userId);
  const result = await deleteDoc(docRef);
}

// PROPERTY COLLECTION
export async function addProperty(data: PropertyData) {
  const result = await addDoc(propertiesCollection, data);
  console.log(result);
  return result;
}

export async function getListings(data: SearchData) {
  const properties: Array<any> = [];
  const q = query(
    propertiesCollection,
    where("country", "==", data.country),
    where("city", "==", data.city),
    // where("propertyType", "==", data.type),
    where("pricePerMonth", "<=", data.price)
  );
  const allListings = await getDocs(q);
  console.log(`RAW LISTING PULL: `, allListings);
  allListings.forEach((property) => {
    console.log(`LISTING PULL: `, property.id, property.data());
    properties.push({ id: property.id, ...property.data() });
  });
  return properties;
}

export async function getProvidersListings(providerID: string) {
  const q = query(propertiesCollection, where("providerID", "==", providerID));
  const matchedDocs = await getDocs(q);

  const listings: Array<Object> = [];
  matchedDocs.forEach((doc) => {
    const docDetails = { id: doc.id, ...doc.data };
    console.log(`MATCHED PROVIDER DOC: `, docDetails);
    listings.push(docDetails);
  });
  return listings;
}

export async function getBookmarkedListings(idArray: Array<string>) {
  const docs = await getDocs(propertiesCollection);
  const listings: Array<any> = [];

  docs.forEach((doc) => {
    const listing = { id: doc.id, ...doc.data() };
    console.log(`BOOKMARKD LISTING: `, listing);
    if (idArray.includes(listing.id)) {
      console.log(`MATCH FOUND: `, listing.id);
      listings.push({ id: doc.id, ...doc.data() });
    }
  });

  return listings;
}

export async function getPropertyDetails(propertyId: string) {}
export async function deleteProperty(propertyId: string) {}

// GEOLOCATION COLLECION
export async function getCities(data: string) {
  const q = query(geolocationsCollection, where("country", "==", data));

  console.log("FETCHING...");
  const queryResult = await getDocs(q);

  const cities: Array<object> = [];
  queryResult.forEach((doc) => {
    cities.push({
      id: doc.id,
      cityName: doc.data().city,
      lng: doc.data().lng,
      lat: doc.data().lat,
    });
  });
  return cities;
}

// BOOKMARKS COLLECTION

export async function checkBookmarked(userID: string, propertyID: string) {
  const q = query(
    bookmarksCollection,
    where("userID", "==", userID),
    where("bookmarks", "array-contains", propertyID)
  );
  const matchedDocs = await getDocs(q);
  console.log(`CHECK BOOKMARKED: `, matchedDocs.docs);

  if (matchedDocs.size > 0) {
    return true;
  } else {
    return false;
  }
}

export async function checkBookmarksDocExistance(userID: string) {
  const q = query(bookmarksCollection, where("userID", "==", userID));
  const result = await getDocs(q);

  let docId = null;
  if (result.size > 0) {
    result.forEach((doc) => {
      console.log(doc.id);
      docId = doc.id;
    });
  }

  return docId;
}

export async function getBookmarkedListingIds(userID: string) {
  console.log(`PULLING BOOKMARKS...`);
  const q = query(bookmarksCollection, where("userID", "==", userID));
  const queryResult = await getDocs(q);

  let bookmarks: Array<string> = [];
  queryResult.forEach((doc) => {
    console.log(`BOOKMARKS: `, doc.id, doc.data());
    bookmarks = doc.data().bookmarks;
  });

  return bookmarks;
}

export async function addBookmark(userID: string, properytID: string) {
  const bookmarkDocId = await checkBookmarksDocExistance(userID);

  if (bookmarkDocId) {
    const bookmarkDocRef = doc(db, "bookmarks", bookmarkDocId);
    const bookmarkDocUpdateResult = await updateDoc(bookmarkDocRef, {
      bookmarks: arrayUnion(properytID),
    });
    console.log(`BOOKMARK DOC UPDATE: `, bookmarkDocUpdateResult);
    return bookmarkDocUpdateResult;
  } else {
    const bookmarkDocCreationResult = await addDoc(bookmarksCollection, {
      userID: userID,
      bookmarks: [properytID],
    });
    console.log(`BOOKMARK DOC CREATION: `, bookmarkDocCreationResult);
    return bookmarkDocCreationResult;
  }
}

export async function getBookmarkDocId(userID: string) {
  const q = query(bookmarksCollection, where("userID", "==", userID));
  const matchedDoc = await getDocs(q);

  let docID = null;
  matchedDoc.forEach((doc) => {
    docID = doc.id;
  });

  return docID;
}

export async function removeBookmark(userID: string, propertyID: string) {
  const docID = await getBookmarkDocId(userID);
  if (docID) {
    const docRef = doc(db, "bookmarks", docID);
    const bookmarkRemoveResult = await updateDoc(docRef, {
      bookmarks: arrayRemove(propertyID),
    });
    console.log(`BOOKMARK REMOVE RESULT: `, bookmarkRemoveResult);
    return bookmarkRemoveResult;
  }
}
