async function auth_user(action, userName, userPassword) {
  const data = {
    user_name: userName,
    user_password: userPassword,
  };

  const payload = {
    method: "post",
    mode: "cors",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };

  console.log(payload);

  const URI = `http://localhost:9000/auth/${action}`;

  const serverResponse = await fetch(URI, payload);
  const jsonData = await serverResponse.json();

  return jsonData;
}

export default auth_user;
