import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function jwtTokenGenerator(user_id, email) {
  const accessToken = jwt.sign(
    {
      user_id: user_id,
      email: email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "10m",
    }
  );
  const refreshToken = jwt.sign(
    {
      user_id: user_id,
      email: email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "30d",
    }
  );
  return [accessToken, refreshToken];
}

function checkJwtToken(token) {
  const decoded = jwt.verify(token, process.env.JWT_KEY);
}

export { checkJwtToken, jwtTokenGenerator };
