const DB_URL = "http://localhost:4000/users";

export async function loginUser(userName, userPassword) {
  const fetchURL =
    DB_URL + `?user_name=${userName}&user_password=${userPassword}`;

  const reqInit = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(fetchURL, reqInit);
  const jsonResData = await response.json();

  if (jsonResData.length > 0) {
    return {
      loggedIn: true,
      user_details: {
        user_id: jsonResData[0].id,
        user_name: jsonResData[0].user_name,
        user_email: jsonResData[0].user_email,
        user_gender: jsonResData[0].user_gender,
      },
    };
  } else {
    return { loggedIn: false };
  }
}

export async function registerUser(
  userName,
  userPassword,
  userEmail,
  userGender,
  userPersonality
) {
  const fetchURL = DB_URL;
  const data = {
    user_name: userName,
    user_password: userPassword,
    user_email: userEmail,
    user_gender: userGender,
    user_personality: userPersonality,
  };

  const reqInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = await fetch(fetchURL, reqInit);
  const jsonResData = await response.json();
  return jsonResData;
}
