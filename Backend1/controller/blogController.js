import dbPool from "../database/db.js";

async function getAllBlogs() {
  try {
    const [row] = await dbPool.promise().query("SELECT blog_id,title,category,description,created_at,likes,views,user_id FROM Blogs ORDER BY created_at DESC");
    return { content: row, success: true };
  } catch (err) {
    console.log("Error fetching blogs", err);
    return { error: err, success: false };
  }
}

async function getBlog(id) {
  try {
    const [row] = await dbPool.promise().query("SELECT * FROM Blogs WHERE blog_id =?", [id])
    return { content: row, success: true }
  }
  catch (err) {
    console.log("Error fetching blog", err)
    return { success: false, error: err }
  }

}
export { getAllBlogs, getBlog };