import dbPool from "../database/db.js";

async function getAllBlogs() {
  try {
    const [row] = await dbPool.promise().query("SELECT * FROM Blogs");
    console.log(row);
    return row;
  } catch (err) {
    console.log("Error fetching blogs", err);
    return false;
  }
}

export { getAllBlogs};