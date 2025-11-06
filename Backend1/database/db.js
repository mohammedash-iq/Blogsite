import mysql2 from "mysql2";

var dbPool = mysql2.createPool({
  connectionLimit: 3,
  host: "localhost",
  user: "root",
  password: "password",
  database: "blogsite",
});

dbPool.on("connection", () => {
  console.log("connection successful to database.");
});

dbPool.query(
  "CREATE TABLE IF NOT EXISTS Users ( user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL UNIQUE, password_hash VARCHAR(255) NOT NULL, profile_picture VARCHAR(255), bio TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);",
  (error) => {
    if (error) {
      console.log("error creating or Connecting to User table" + error);
    }
  }
);

export default dbPool;
