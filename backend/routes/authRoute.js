import Express from "express";
import { auth_login, auth_register } from "./../helpers/authHelpers.js";

const AuthRoute = Express.Router();

AuthRoute.get("/", (req, res) => {
  console.log(req.headers);
  res.send("AUTH ROOOT");
});

AuthRoute.post("/login", (req, res) => {
  console.log(`=======================================`);
  console.log(`ATUH LOGIN`);
  console.log(`=======================================`);
  console.log(req.body);
  const loginResult = auth_login(req.body);
  loginResult.status = "successful";
  console.log(loginResult);
  res.send(loginResult);
  console.log(`=======================================`);
});

AuthRoute.post("/register", (req, res) => {
  console.log(`=======================================`);
  console.log(`ATUH REG`);
  console.log(`=======================================`);
  console.log(req.body);
  const registerResult = auth_register(req.body);
  registerResult.status = "successful";
  console.log(registerResult);
  res.send(registerResult);
  console.log(`=======================================`);
});

export default AuthRoute;
