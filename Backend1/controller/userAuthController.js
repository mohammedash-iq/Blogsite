import dbPool from "../database/db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

async function loginController({ email, password }) {
  try {
    const [row] = await dbPool.promise().query({
      sql: "SELECT user_id, password_hash FROM Users WHERE email= ?",
      values: [email],
    });
    if (row.length === 0) {
      return { success: false, error: "User doesn't Exist!" };
    }
    // Compare the provided password with the hashed password from the database
    const passcheck = await bcrypt.compare(password, row[0].password_hash);

    if (!passcheck) {
      return { success: false, error: "Incorrect Password!" }
    }
    return { success: true, user_id: row[0].user_id };
  } catch (err) {
    console.log(err);
    return { success: false, error: "Internal Server Error!" };
  }
}

//return an array with a boolean value and reason for the error else return array with refresh token and access token
async function signinController({ username, email, password }) {
  try {
    const [row] = await dbPool.promise().query({
      sql: "SELECT email FROM Users WHERE email=?",
      values: [email],
    });
    if (row.length > 0) {
      return { success: false, error: "User already Exists!" };
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [updateRow] = await dbPool.promise().query({
      sql: "INSERT INTO Users (email, username, password_hash) VALUES (?,?,?);",
      values: [email, username, hashedPassword],
    });
    return { success: true, user_id: updateRow.insertId };
  } catch (err) {
    console.log(err);
    return { success: false, error: "Internal Server Error" };
  }
}

export { loginController, signinController };
