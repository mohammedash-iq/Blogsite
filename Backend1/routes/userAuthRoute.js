import express from "express";
import {
  loginController,
  signinController,
} from "../controller/userAuthController.js";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password) {
    res.status(400).json({message:"Please Provide all the Credentials",result:false});
    return;
  }
  //return an array if the credentials are proper [accesstoken,refreshtoken], else returns an array boolean value false and error message
  const result = await loginController(email, password);
  if (result[0] == false) {
    res.status(401).json({ message: result[1], result: false });
    return;
  }
  const [accessToken, refreshToken] = result;
  res.status(201).json({ token: accessToken, result: true });
  return;
});

authRouter.post("/signin", async (req, res) => {
  const { username, password, email } = req.body;
  if (!email | !username | !password) {
    res.status(400).json({message:"Please Provide all the Credentials",result:false});
    return;
  }
  //return an array if the credentials are proper [accesstoken,refreshtoken], else returns an array boolean value false and error message
  const result = await signinController(username, email, password);
  if (result[0] == false) {
    res.status(401).json({ message: result[1], result: false });
    return;
  }
  const [accessToken, refreshToken] = result;
  res.status(201).json({ token: accessToken, result: true });
  return;
});

export default authRouter;
