import users from "./../data/users.js";

function auth_login(loginData) {
  const result = check_user(loginData.user_name, loginData.user_password);
  return result;
}

function auth_register(registerData) {
  const result = add_user(registerData.user_name, registerData.user_password);
  return result;
}

function check_user(userName, userPassword) {
  for (let user of users) {
    console.log(user);

    if (user.userName === userName && user.password === userPassword) {
      console.log(`FOUND MATCHING CREDENTIALS...`);
      return { loggedIn: true, user_name: userName };
    }
  }

  console.log(`DID NOT FOUND MATCHING CREDENTIALS...`);
  return { loggedIn: false };
}

function add_user(userName, userPassword) {
  users.push({ userName: userName, password: userPassword });
  console.log(users);
  return { registered: true };
}

export { auth_login, auth_register };
