import dbPool from "../database/db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

// return an array with a boolean value and reason for the error else return array with refresh token and access token
async function loginController(email, password) {
  try {
    //check if the user exists
    const [row, fields] = await dbPool.promise().query({
      sql: "SELECT email FROM Users WHERE email= ?",
      values: [email],
    });
    if (row.length === 0) {
      return [false, "User doesn't exist"];
    }

    // Retrieve the hashed password from the database
    const passrow = await dbPool.promise().query({
      sql: "SELECT user_id, password_hash FROM Users WHERE email= ?",
      values: [email],
    });
    // Compare the provided password with the hashed password from the database
    const result = await bcrypt.compare(password, passrow[0][0].password_hash);

    if (result) {
      return [true, passrow[0][0].user_id];
    }
    return [false, "Incorrect Password"];
  } catch (err) {
    console.log(err);
    return [false, "Internal Server error"];
  }
}

//return an array with a boolean value and reason for the error else return array with refresh token and access token
async function signinController(username, email, password) {
  try {
    // Check for existing user by email or username
    const [row] = await dbPool.promise().query({
      sql: "SELECT email FROM Users WHERE email=?",
      values: [email],
    });
    if (row.length > 0) {
      return [false, "User already exists"];
    }
    // Insert new user into the database
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const updaterow = await dbPool.promise().query({
      sql: "INSERT INTO Users (email, username, password_hash) VALUES (?,?,?);",
      values: [email, username, hashedPassword],
    });
    return [true, updaterow[0].user_id];
  } catch (err) {
    console.log(err);
    return [false, "Internal Server Error"];
  }
}

export { loginController, signinController };
