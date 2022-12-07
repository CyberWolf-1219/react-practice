import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { stringify } from "querystring";
import { userObj } from "../types/types";

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

// Functions
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
