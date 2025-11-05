import dbPool from "../database/db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

// return an array with a boolean value and reason for the error else return array with refresh token and access token
async function loginController(email, password) {
  try {
    //check if the user exists
    const [rows] = await dbPool.promise().query({
      sql: "SELECT ? FROM Users WHERE email= ?",
      values: ["email",email]});
    if (rows.length == 0) {
      return [false, "User doesn't exist"];
    }

    // Retrieve the hashed password from the database
    const [dbPassword] = await dbPool.promise().query({
      sql: "SELECT ? FROM Users WHERE email=?",
      values: ["password_hash",email]});
    console.log(dbPassword);
    // Compare the provided password with the hashed password from the database
    const result = await bcrypt.compare(password, dbPassword[0].password_hash);
    if (result) {
      return ["accesstoken", "refreshtoken"];
    }
    return [false, "Incorrect Password"];
  } catch (err) {
    return [false, "Internal Server error"];
  }
}

//return an array with a boolean value and reason for the error else return array with refresh token and access token
async function signinController(username, email, password) {
  try {
    // Check for existing user by email or username
    const [rows] = await dbPool.promise().query({
      sql: "SELECT ? FROM Users WHERE email=?",
      values: ["email",email]});
    console.log(rows);
    if (rows.length > 0) {
      return [false, "User already exists"];
    }
    // Insert new user into the database
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await dbPool.promise().query({
      sql: "INSERT INTO Users (email, username, password_hash) VALUES (?,?,?);",
      values: [email, username, hashedPassword]    });
    return ["accesstoken", "refreshtoken"];
  } catch (err) {
    console.log(err);
    return [false, "Internal Server Error"];
  }
}

export { loginController, signinController };
