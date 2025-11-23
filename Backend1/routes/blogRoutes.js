import express from "express";
import { getAllBlogs } from "../controller/blogController.js";

const blogRoutes = express();

blogRoutes.get("/all", async (req, res) => {
  const result = await getAllBlogs();
  if (!result.success) {
    res.status(500).json({ error: result.error, success: false });
    return;
  }
  res.status(201).json({ content: result.content, success: true });
  return;
});

export default blogRoutes;