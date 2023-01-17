import { fetchUser, sendFriendReq } from "./helpers";

const DB_URI = "http://localhost:4000";

async function dataHandler(req, res) {
  console.log(`BODY ========================================`);
  console.log(req.body);

  const { action, data } = req.body;

  if (action == "send_friend_req") {
    const response = await sendFrienReqHandler(
      data.receiver_id,
      data.sender_id,
      data.sender_name,
      data.sender_msg
    );
    res.status(200).json(response);
  } else if (action == "remove_friend_req") {
    const response = await removeFriendReqHnadler(data.friend_req_id);
    res.status(200).json({});
  } else if (action == "get_friend_reqs") {
    const response = await getFriendReqHandler(data.user_id);
    res.status(200).json(response);
  } else if (action == "add_friend") {
    const response = await addFriendHandler(data.user_id, data.friend_id);
    res.status(200).json(response);
  } else if (action == "remove_friend") {
    removeFriendHandler();
  } else if (action == "get_friends_list") {
    const response = await getFriendsListHandler(data.user_id);
    res.status(200).json(response);
  } else if (action == "get_posts") {
    const responseData = await getPostsHandler(data.page, data.user_id);
    res.status(200).json(responseData);
  } else if (action == "get_post") {
    const responseData = await getPostHandler(data.post_id);
    res.status(200).json(responseData);
  } else if (action == "save_post") {
    const responseData = await savePostHandler(
      data.author_id,
      data.author_name,
      data.visibility,
      data.post_title,
      data.post_content,
      data.timestamp
    );
    res.status(200).json({});
  } else if (action == "delete_post") {
    const responseData = await deletePostHandler(postID);
  } else if (action == "get_friend_data") {
    const response = await getFriendDetailsHandler(data.friend_id);
    res.status(200).json(response);
  } else if (action == "get_feed") {
    const response = await getFeedHandler(data.user_id_list);
    res.status(200).json(response);
  } else if (action == "update_user_data") {
    const response = await updateUserDataHandler(
      data.user_id,
      data.user_name,
      data.user_password,
      data.user_email,
      data.user_bio
    );
    res.status(200).json({ status: "OK", ...response });
  }
}

export default dataHandler;

// ==========================================================================

async function deletePostHandler(postID) {
  console.log(`DELETE POST ======================================`);
  const response = await fetch(`${DB_URI}/posts/${postID}`, {
    method: "DELETE",
  });

  const jsonResData = await response.json();
  console.log(`===================================================`);
  return jsonResData;
}

async function savePostHandler(
  authorID,
  authorName,
  visibility,
  postTitle,
  postContent,
  timestamp
) {
  console.log(`SAVE POST ==============================================`);
  const data = {
    author_id: authorID,
    author_name: authorName,
    visibility: visibility,
    post_title: postTitle,
    post_content: postContent,
    timestamp: timestamp,
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  console.log(reqInit);

  const response = await fetch(`${DB_URI}/posts`, reqInit);
  const jsonResData = await response.json();
  console.log(`=========================================================`);
  return jsonResData;
}

async function getFeedHandler(userIdList) {
  console.log(`FEED ==================================================`);
  const posts = [];

  let URI = `${DB_URI}/posts?`;

  for (let userID of userIdList) {
    URI += `author_id=${userID}&`;
  }

  URI += `&visibility=friends`;
  console.log(URI);

  const friendPostResponse = await fetch(URI);
  let jsonResData = await friendPostResponse.json();
  posts.push(...jsonResData);
  console.log(jsonResData);

  const publicPostResponse = await fetch(`${DB_URI}/posts?visibility=everyone`);
  jsonResData = await publicPostResponse.json();
  posts.push(...jsonResData);
  console.log(jsonResData);

  console.log(posts);
  console.log(`==================================================`);

  return posts;
}

async function getPostsHandler(page, userID) {
  console.log(`GET POSTS ==========================================`);
  if (page == "user_profile") {
    const response = await fetch(`${DB_URI}/posts?author_id=${userID}`);
    var jsonResData = await response.json();
  } else if (page == "stranger_profile") {
    const URI = `${DB_URI}/posts?author_id=${userID}&visibility=everyone`;
    const response = await fetch(URI);
    var jsonResData = await response.json();
  }

  console.log(jsonResData);
  console.log(`=======================================================`);
  return jsonResData;
}

async function getPostHandler(postID) {
  console.log(`GET POST ============================================`);
  const response = await fetch(`${DB_URI}/posts/${postID}`);
  const jsonResData = await response.json();
  console.log(`=====================================================`);
  return jsonResData;
}

async function getFriendReqHandler(userID) {
  console.log(`GET FRIEND REQS ============================================`);
  const response = await fetch(`${DB_URI}/friend_reqs?receiver_id=${userID}`);
  const jsonResData = await response.json();
  console.log(jsonResData);
  console.log(`===========================================================\n`);
  return jsonResData;
}

async function sendFrienReqHandler(
  receiverID,
  senderID,
  senderName,
  senderMsg
) {
  console.log(`SEND FRIEND REQ ====================================`);

  const currentFriendReqsRes = await fetch(
    `${DB_URI}/friend_reqs?receiver_id=${receiverID}`
  );
  const jsonCurrentFriendReqs = await currentFriendReqsRes.json();

  for (let friendReq of jsonCurrentFriendReqs) {
    if (friendReq.sender_id == senderID) {
      return {
        status: "OK",
        msg: "You already sent a friend request to this person.",
      };
    }
  }

  const data = {
    receiver_id: receiverID,
    sender_id: senderID,
    sender_name: senderName,
    sender_msg: senderMsg,
  };

  const reqInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  console.log(reqInit);

  const response = await fetch(`${DB_URI}/friend_reqs`, reqInit);
  const jsonResData = await response.json();
  console.log(`====================================================\n`);
  return { status: "OK", msg: "Friend request sent.", ...jsonResData };
}

async function removeFriendReqHnadler(reqID) {
  console.log(`REMOVE FRIEND REQ ===================================`);
  const reqInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${DB_URI}/friend_reqs/${reqID}`, reqInit);
  const jsonResData = await response.json();
  console.log(`======================================================\n`);
  return jsonResData;
}

async function addFriendHandler(userID, friendID) {
  console.log(`ADD FRIEND ==================================================`);
  const friendListResponse = await fetch(
    `${DB_URI}/friend_lists?owner_id=${userID}`
  );
  const jsonFriendListResData = await friendListResponse.json();
  console.log(jsonFriendListResData);
  const friendObj = jsonFriendListResData[0];
  console.log(friendObj);

  if (friendObj && friendObj.friend_ids.length > 0) {
    const data = {
      owner_id: userID,
      friend_ids: [...friendObj.friend_ids, friendID],
    };

    console.log(data);

    var reqInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log(reqInit);

    const friendListUpdateResponse = await fetch(
      `${DB_URI}/friend_lists/${friendObj.id}`,
      reqInit
    );
    var jsonResData = await friendListUpdateResponse.json();
    console.log(jsonResData);

    // SECOND STEP
    const friendListResponse = await fetch(
      `${DB_URI}/friend_lists?owner_id=${friendID}`
    );
    const jsonFriendListResData = await friendListResponse.json();
    console.log(jsonFriendListResData);
    const friendObj = jsonFriendListResData[0];
    console.log(friendObj);

    if (friendObj && friendObj.friend_ids.length > 0) {
      const data = {
        owner_id: userID,
        friend_ids: [...friendObj.friend_ids, userID],
      };

      console.log(data);

      var reqInit = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      console.log(reqInit);

      const friendListUpdateResponse = await fetch(
        `${DB_URI}/friend_lists/${friendObj.id}`,
        reqInit
      );
      var jsonResData = await friendListUpdateResponse.json();
      console.log(jsonResData);
    }
  } else {
    const data = {
      owner_id: userID,
      friend_ids: [friendID],
    };

    console.log(data);

    var reqInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log(reqInit);

    const friendListUpdateResponse = await fetch(
      `${DB_URI}/friend_lists/`,
      reqInit
    );
    var jsonResData = await friendListUpdateResponse.json();
  }

  console.log(jsonResData);
  console.log(`============================================================\n`);
  return jsonResData;
}

async function removeFriendHandler() {
  const response = await fetch(`${DB_URI}/friend_lists?owner_id=${userID}`);
  const jsonResData = await response.json();
  console.log(jsonResData);
}

async function getFriendsListHandler(userID) {
  console.log(`FRIENDS LIST ==================================`);

  const response = await fetch(`${DB_URI}/friend_lists?owner_id=${userID}`);
  const jsonResData = await response.json();
  console.log(jsonResData);

  console.log(`===================================================`);

  if (jsonResData.length > 0 && jsonResData[0].friend_ids) {
    return jsonResData[0].friend_ids;
  } else {
    return [];
  }
}

async function getFriendDetailsHandler(friendID) {
  console.log(`FRIEND DATA =============================================`);

  const response = await fetch(`${DB_URI}/users?id=${friendID}`);
  const jsonResData = await response.json();

  const returnData = {
    user_id: jsonResData[0].id,
    user_name: jsonResData[0].user_name,
    user_email: jsonResData[0].user_email,
  };

  console.log(returnData);

  console.log(`=========================================================`);
  return returnData;
}

async function updateUserDataHandler(
  userID,
  userName,
  userPassword,
  userEmail,
  userBio
) {
  console.log(`UPDATE USER =============================================`);

  const data = {
    user_name: userName,
    user_password: userPassword,
    user_email: userEmail,
    user_bio: userBio,
  };

  console.log(data);
  const reqInit = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  console.log(reqInit);
  const response = await fetch(`${DB_URI}/users/${userID}`, reqInit);
  const jsonResData = await response.json();
  console.log(jsonResData);
  console.log(`=======================================================`);
  return {
    user_name: jsonResData.user_name,
    user_email: jsonResData.user_email,
    user_bio: jsonResData.user_bio,
    user_gender: jsonResData.user_gender,
    user_personality: jsonResData.user_personality,
  };
}
