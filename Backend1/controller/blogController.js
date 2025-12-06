import dbPool from "../database/db.js";

async function getAllBlogs() {
  try {
    const [row] = await dbPool.promise().query("SELECT blog_id,title,discription,updated_at FROM Blogs");
    return { content: row, success: true };
  } catch (err) {
    console.log("Error fetching blogs", err);
    return { error: err, success: false };
  }
}

export { getAllBlogs };