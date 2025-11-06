import express from "express";
import {
  loginController,
  signinController,
} from "../controller/userAuthController.js";
import {checkJwtToken,jwtTokenGenerator} from "../controller/jwtController.js";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password) {
    res
      .status(400)
      .json({ message: "Please Provide all the Credentials", result: false });
    return;
  }
  //return an array if the credentials are proper [accesstoken,refreshtoken], else returns an array boolean value false and error message
  const result = await loginController(email, password);
  if (result[0] == false) {
    res.status(401).json({ message: result[1], result: false });
    return;
  } else {
    const user_id = result[1];
    const [accessToken, refreshToken] = jwtTokenGenerator(user_id, email);
    res.cookie("token",refreshToken,{httpOnly:true})
    res.status(201).json({ token: accessToken, result: true });
  }
  
  return;
});

authRouter.post("/signin", async (req, res) => {
  const { username, password, email } = req.body;
  if (!email | !username | !password) {
    res
      .status(400)
      .json({ message: "Please Provide all the Credentials", result: false });
    return;
  }
  //return an array if the credentials are proper [accesstoken,refreshtoken], else returns an array boolean value false and error message
  const result = await signinController(username, email, password);
  if (result[0] == false) {
    res.status(401).json({ message: result[1], result: false });
    return;
  }
  const [accessToken, refreshToken] = jwtTokenGenerator(result[1], email);
  res.cookie("token",refreshToken,{httpOnly:true})
  res.status(201).json({ token: accessToken, result: true });
  return;
});

export default authRouter;
