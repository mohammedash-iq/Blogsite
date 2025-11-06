import express from "express";
import {
  getAllUserBlogs,
  updateBlog,
  deleteBlog,
  createBlog,
} from "../controller/blogController.js";

const userBlogRoutes = express.Router();

userBlogRoutes.get("/all", async (req, res) => {
  const user_id = 1;
  //funtion results in boolean false if any error occured else returns all the user blogs
  const result = await getAllUserBlogs(user_id);
  if (!result) {
    res.status(500).json({ message: "Internal server Error", result: false });
    return;
  }
  res.status(201).json({ message: result, result: true });
  return;
});

userBlogRoutes.post("/create", async (req, res) => {
  const { title, content } = req.body;
  if (!title | !content) {
    res
      .status(400)
      .json({ message: "Please Provide all the Credentials", result: false });
    return;
  }
  const user_id = 1;
  const result = await createBlog(title, content, user_id);
  if (!result) {
    res.status(500).json({ message: "Internal server Error", result: false });
    return;
  }
  res.status(201).json({ message: "Created blog successfully", result: true });
  return;
});

userBlogRoutes.delete("/delete/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const result = await deleteBlog(blogId);
  if (!result) {
    res.status(500).json({ message: "Internal Server Error", result: false });
    return;
  }
  res.status(201).json({ message: "Deleted blog successfully", result: true });
  return;
});

userBlogRoutes.patch("/update", async (req, res) => {
  const blog_id = 5;
  const result = await updateBlog(blog_id, req.body.title, req.body.content);
  if (!result) {
    res.status(500).json({ message: "Internal Server Error", result: false });
    return;
  }
  res.status(201).json({ message: "Updated blog successfully", result: true });
  return;
});

export default userBlogRoutes;
