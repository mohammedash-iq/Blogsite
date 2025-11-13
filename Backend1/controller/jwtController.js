import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function jwtTokenGenerator({ user_id, email }) {
  const accessToken = jwt.sign({ user_id: user_id, email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
  const refreshToken = jwt.sign({ user_id: user_id, email: email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30d" });
  return { accessToken: accessToken, refreshToken: refreshToken };
}

function checkJwtToken(token) {
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}

export { checkJwtToken, jwtTokenGenerator };
