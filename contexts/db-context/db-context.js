import {
  getFeed,
  getPosts,
  getPost,
  savePost,
  deletePost,
  getFriendReqs,
  sendFriendReq,
  removeFriendReq,
  addFriend,
  removeFriend,
  getFriendIdList,
  getFriendDetails,
  updateUserData,
} from "./db-context-helpers";
import React from "react";

const DBContext = React.createContext({
  getFeed: getFeed,
  getPosts: getPosts,
  getPost: getPost,
  savePost: savePost,
  deletePost: deletePost,
  getFriendReqs: getFriendReqs,
  sendFriendReq: sendFriendReq,
  removeFriendReq: removeFriendReq,
  addFriend: addFriend,
  removeFriend: removeFriend,
  getFriendIdList: getFriendIdList,
  getFriendDetails: getFriendDetails,
  updateUserData: updateUserData,
});

function DBContextProvider({ children }) {
  return (
    <DBContext.Provider
      value={{
        getFeed: getFeed,
        getPosts: getPosts,
        getPost: getPost,
        savePost: savePost,
        deletePost: deletePost,
        getFriendReqs: getFriendReqs,
        sendFriendReq: sendFriendReq,
        removeFriendReq: removeFriendReq,
        addFriend: addFriend,
        removeFriend: removeFriend,
        getFriendIdList: getFriendIdList,
        getFriendDetails: getFriendDetails,
        updateUserData: updateUserData,
      }}
    >
      {children}
    </DBContext.Provider>
  );
}

export default DBContextProvider;
export { DBContext };
