import express from "express";
import { getAllUserBlogs, updateBlog, deleteBlog, createBlog } from "../controller/userBlogController.js";

const userBlogRoutes = express.Router();


userBlogRoutes.get("/all", async (req, res) => {
  const user_id = req.user.id; // Assumes middleware adds user info to req
  const result = await getAllUserBlogs(user_id);
  if (!result) {
    res.status(500).json({ error: "Internal server Error", success: false });
    return;
  }
  res.status(201).json({ content: result, success: true });
  return;
});


userBlogRoutes.post("/create", async (req, res) => {
  const { title, content } = req.body;
  if (!title | !content) {
    res
      .status(400)
      .json({ error: "Please Provide all the Credentials", success: false });
    return;
  }
  const user_id = req.user.id; // Assumes middleware adds user info to req
  const result = await createBlog(title, content, user_id);
  if (!result) {
    res.status(500).json({ error: "Internal server Error", success: false });
    return;
  }
  res.status(201).json({ message: "Created blog successfully", success: true });
  return;
});



userBlogRoutes.delete("/delete/:blogId", async (req, res) => {
  // TODO: Add logic to ensure the user owns this blog before deleting
  const blogId = req.params.blogId;
  const result = await deleteBlog(blogId);
  if (!result) {
    res.status(500).json({ error: "Internal Server Error", success: false });
    return;
  }
  res.status(201).json({ message: "Deleted blog successfully", success: true });
  return;
});



userBlogRoutes.patch("/update", async (req, res) => {
  // The blog_id should come from the request, e.g., req.params or req.body
  const { blog_id, title, content } = req.body;
  // TODO: Add logic to ensure the user owns this blog before updating
  const result = await updateBlog(blog_id, req.body.title, req.body.content);
  if (!result) {
    res.status(500).json({ error: "Internal Server Error", success: false });
    return;
  }
  res.status(201).json({ message: "Updated blog successfully", success: true });
  return;
});

export default userBlogRoutes;
