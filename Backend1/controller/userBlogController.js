import dbPool from "../database/db.js";

//funtion creates a blog using the parameters and updates the database
async function createBlog(title, content, user_id) {
  try {
    await dbPool.promise().query({
      sql: "INSERT INTO Blogs (user_id, title, content) VALUES (?,?,?)",
      values: [user_id, title, content],
    });
    return true;
  } catch (err) {
    console.log("Error creating the blog ", err);
    return false;
  }
}

//function deletes the blog using the blogid provided and updates the database
async function deleteBlog(blogId) {
  try {
    const [row] =await dbPool.promise().query({
      sql: "DELETE FROM Blogs WHERE blog_id=?",
      values: [blogId],
    });
    return true;
  } catch (err) {
    console.log("Error Deleting the blog", err);
    return false;
  }
}

//function that takes blogid,title ,body aas parameters and updates the blog in the database
async function updateBlog(blogId, title, content) {
  try {
    const [row] = await dbPool.promise().query({
      sql: "UPDATE Blogs SET title=?,content=? WHERE blog_id=?",
      values: [ title, content,blogId],
    });
    return true;
  } catch (err) {
    console.log("Error updating blog", err);
    return false;
  }
}

//takes the used_id as parameter and gets all the user related blogs from the database and retuns it
async function getAllUserBlogs(user_id) {
  try {
    const [row] = await dbPool.promise().query({
      sql: "SELECT * FROM Blogs WHERE User_id=?",
      values: [user_id],
    });
     return row;
  } catch (err) {
    console.log("Error fetching blogs for the user", err);
    return false;
  }
}

export { getAllUserBlogs, deleteBlog, updateBlog, createBlog };
