import express from "express";
import { getAllBlogs } from "../controller/blogController.js";

const blogRoutes = express();

blogRoutes.get("/all", async (req, res) => {
  const result = await getAllBlogs();
  if (!result) {
    res.status(500).json({ message: "Internal server Error", result: false });
    return;
  }
  res.status(201).json({ message: result, result: true });
  return;
});

export default blogRoutes;