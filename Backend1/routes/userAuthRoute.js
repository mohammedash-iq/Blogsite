import express from "express";
import { loginController, signinController } from "../controller/userAuthController.js";
import { checkJwtToken, jwtTokenGenerator } from "../controller/jwtController.js";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password) {
    res.status(400).json({ error: "Please Provide all the Credentials", success: false });
    return;
  }
  const result = await loginController({ email: email, password: password });
  if (!result.success) {
    res.status(409).json({ error: result.error, success: false });
    return;
  }
  const tokens = jwtTokenGenerator({ user_id: result.user_id, email: email });
  res.cookie("jwt", tokens.refreshToken, { httpOnly: true })
  res.status(201).json({ jwt: tokens.accessToken, success: true });
  return;
});

authRouter.post("/signin", async (req, res) => {
  const { username, password, email } = req.body;
  if (!email | !username | !password) {
    res.status(400).json({ error: "Please Provide all the Credentials", success: false });
    return;
  }

  const result = await signinController({ username: username, email: email, password: password });
  if (!result.success) {
    res.status(409).json({ error: result.error, success: false });
    return;
  }
  const tokens = jwtTokenGenerator({ user_id: result.user_id, email: email });
  res.cookie("jwt", tokens.refreshToken, { httpOnly: true })
  res.status(201).json({ jwt: tokens.accessToken, success: true });
  return;
});

//refresh jwt token 
// app.post('/refresh', (req, res) => {
//     if (req.cookies?.jwt) {
//         const refreshToken = req.cookies.jwt;

//         // Verifying refresh token
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
//             (err, decoded) => {
//                 if (err) {

//                     // Wrong Refesh Token
//                     return res.status(406).json({ message: 'Unauthorized' });
//                 }
//                 else {
//                     // Correct token we send a new access token
//                     const accessToken = jwt.sign({
//                         username: userCredentials.username,
//                         email: userCredentials.email
//                     }, process.env.ACCESS_TOKEN_SECRET, {
//                         expiresIn: '10m'
//                     });
//                     return res.json({ accessToken });
//                 }
//             })
//     } else {
//         return res.status(406).json({ message: 'Unauthorized' });
//     }
// })

export default authRouter;
