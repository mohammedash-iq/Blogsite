import express from "express";
import {
  getAllUserBlogs,
  updateBlog,
  deleteBlog,
  createBlog,
} from "../controller/userBlogController.js";

const userBlogRoutes = express.Router();

// This route should be protected by authentication middleware
userBlogRoutes.get("/all", async (req, res) => {
  const user_id = req.user.id; // Assumes middleware adds user info to req
  //funtion results in boolean false if any error occured else returns all the user blogs
  const result = await getAllUserBlogs(user_id);
  if (!result) {
    res.status(500).json({ message: "Internal server Error", result: false });
    return;
  }
  res.status(201).json({ message: result, result: true });
  return;
});
// This route should be protected by authentication middleware
userBlogRoutes.post("/create", async (req, res) => {
  const { title, content } = req.body;
  if (!title | !content) {
    res
      .status(400)
      .json({ message: "Please Provide all the Credentials", result: false });
    return;
  }
  const user_id = req.user.id; // Assumes middleware adds user info to req
  const result = await createBlog(title, content, user_id);
  if (!result) {
    res.status(500).json({ message: "Internal server Error", result: false });
    return;
  }
  res.status(201).json({ message: "Created blog successfully", result: true });
  return;
});

// This route should be protected by authentication middleware
userBlogRoutes.delete("/delete/:blogId", async (req, res) => {
  // TODO: Add logic to ensure the user owns this blog before deleting
  const blogId = req.params.blogId;
  const result = await deleteBlog(blogId);
  if (!result) {
    res.status(500).json({ message: "Internal Server Error", result: false });
    return;
  }
  res.status(201).json({ message: "Deleted blog successfully", result: true });
  return;
});
// This route should be protected by authentication middleware
userBlogRoutes.patch("/update", async (req, res) => {
  // The blog_id should come from the request, e.g., req.params or req.body
  const { blog_id, title, content } = req.body;
  // TODO: Add logic to ensure the user owns this blog before updating
  const result = await updateBlog(blog_id, req.body.title, req.body.content);
  if (!result) {
    res.status(500).json({ message: "Internal Server Error", result: false });
    return;
  }
  res.status(201).json({ message: "Updated blog successfully", result: true });
  return;
});

export default userBlogRoutes;
