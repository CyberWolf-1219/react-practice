const HEADERS = { "Content-Type": "application/json" };

const DATE = new Date();

async function getFeed(userIdList) {
  console.log(`SEND GET FEED REQ`);

  const data = {
    action: "get_feed",
    data: {
      user_id_list: userIdList,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/data", reqInit);
  const jsonResData = await response.json();
  return jsonResData;
}

async function getPosts(location, strangerID) {
  console.log(`SENDING GET POSTS REQ`);
  const data = {
    action: "get_posts",
    data: {},
  };

  if (location == "user_profile") {
    data.data = { page: "user_profile", user_id: sessionStorage.userID };
  } else if (location == "stranger_profile") {
    data.data = { page: "stranger_profile", user_id: strangerID };
  }

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const result = await fetch("/api/data", reqInit);
  const jsonData = await result.json();
  return jsonData;
}

async function getPost(postID) {
  console.log(`SENDING GET POST REQ`);

  const data = {
    action: "get_post",
    data: {
      post_id: postID,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const result = await fetch("/api/data", reqInit);
  const jsonData = await result.json();
  return jsonData;
}

async function savePost(
  authorID,
  authorName,
  visibility,
  postTitle,
  postContent
) {
  console.log(`SAVE POST REQ`);

  const data = {
    action: "save_post",
    data: {
      author_id: authorID,
      author_name: authorName,
      visibility: visibility,
      post_title: postTitle,
      post_content: postContent,
      timestamp: `${DATE.getUTCFullYear()}-${DATE.getUTCMonth()}-${DATE.getUTCDate()}/${DATE.getHours()}:${DATE.getMinutes()}`,
    },
  };

  const reqInit = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data),
  };

  const result = await fetch("/api/data", reqInit);
  const jsonData = await result.json();
  alert(`🙂: POST SAVED.`);
}

async function deletePost(postID) {
  console.log(`SENDING DELETE POST REQ`);

  const data = {
    action: "delete_post",
    data: {
      post_id: postID,
    },
  };

  const reqInit = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data),
  };

  const result = await fetch("/api/data", reqInit);
  const jsonData = await result.json();
  console.log(jsonData);
}

async function getFriendReqs() {
  console.log(`SENDING GET FRIEND REQS REQ`);

  const data = {
    action: "get_friend_reqs",
    data: {
      user_id: sessionStorage.userID,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/data", reqInit);
  const jsonResData = await response.json();
  return jsonResData;
}

async function removeFriendReq(reqID) {
  console.log(`SENDING REMOVE FRIEND REQ REQ`);

  const data = {
    action: "remove_friend_req",
    data: {
      friend_req_id: reqID,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`/api/data`, reqInit);
  const jsonResData = await response.json();
}

async function sendFriendReq(receiverID, senderMsg) {
  console.log(`SENIDNG SEND FRIEND REQ REQ`);

  const data = {
    action: "send_friend_req",
    data: {
      receiver_id: receiverID,
      sender_id: sessionStorage.userID,
      sender_name: sessionStorage.userName,
      sender_msg: senderMsg,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/data", reqInit);
  const jsonResData = await response.json();
  alert(`🙂: ${jsonResData.msg}`);
}

async function addFriend(friendID) {
  console.log(`SENDING ADD FRIEND REQ REQ`);

  const data = {
    action: "add_friend",
    data: {
      user_id: sessionStorage.userID,
      friend_id: friendID,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/data", reqInit);
  const jsonResData = await response.json();
  alert("🙂: Friend Added!");
  return jsonResData;
}

async function removeFriend(friendID) {
  console.log(`SENDING REMOVE FRIEND REQ`);
}

async function getFriendIdList() {
  console.log(`SENDING GET FRIENDS ID LIST REQ`);

  const data = {
    action: "get_friends_list",
    data: {
      user_id: sessionStorage.userID,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/data", reqInit);
  const jsonResData = await response.json();
  return jsonResData;
}

async function getFriendDetails(friendID) {
  const data = {
    action: "get_friend_data",
    data: {
      friend_id: friendID,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/data", reqInit);
  const jsonResData = await response.json();
  return jsonResData;
}

async function updateUserData(userName, userPassword, userEmail, userBio) {
  const data = {
    action: "update_user_data",
    data: {
      user_id: sessionStorage.userID,
      user_name: userName,
      user_password: userPassword,
      user_email: userEmail,
      user_bio: userBio,
    },
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/data", reqInit);
  const jsonResData = await response.json();
  console.log(jsonResData);
  if (jsonResData.status == "OK") {
    sessionStorage.userName = jsonResData.user_name;
    sessionStorage.userEmail = jsonResData.user_email;
    sessionStorage.userBio = jsonResData.user_bio;
    sessionStorage.userGender = jsonResData.user_gender;
    sessionStorage.userPersonality = jsonResData.user_personality;
    alert("😋👍: Done!");
  } else {
    alert("😐: Something Went Wrong.");
  }
}

export {
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
};

//=======================================================================
