import { loginUser, registerUser } from "./auth-helpers";

async function AuthHandler(req, res) {
  console.log(`BODY ===============================`);
  console.log(req.body);
  console.log(`====================================`);

  const {
    action,
    user_name,
    user_password,
    user_email,
    user_gender,
    user_personality,
  } = req.body;

  if (action === "login") {
    const response = await loginUser(user_name, user_password);

    console.log(`LOGIN RESPONSE ==============================`);
    console.log(response);
    console.log(`=============================================`);

    res.status(200).json(response);
  }

  if (action === "register") {
    const response = await registerUser(
      user_name,
      user_password,
      user_email,
      user_gender,
      user_personality
    );

    console.log(`LOGIN RESPONSE ==============================`);
    console.log(response);
    console.log(`=============================================`);

    res.status(200).json(response);
  }
}

export default AuthHandler;
