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
  (err) => {
    if (err) {
      console.log("error creating or Connecting to User table" + err);
    }
  }
);

dbPool.query("CREATE TABLE IF NOT EXISTS Blogs (blog_id INT AUTO_INCREMENT PRIMARY KEY, user_id INT,title VARCHAR(200) NOT NULL,content TEXT NOT NULL,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE)",(err)=>{
  if(err){
    console.log("error connecting or creating blogs database table"+ err)
  }
});

export default dbPool;
