import express from "express";
import { getAllBlogs, getBlog } from "../controller/blogController.js";

const blogRoutes = express();

//enpoint for getting all the blogs form the database
blogRoutes.get("/all", async (req, res) => {
  const result = await getAllBlogs();
  if (!result.success) {
    res.status(500).json({ error: result.error, success: false });
    return;
  }
  res.status(201).json({ content: result.content, success: true });
  return;
});

// enpoint for getting a specific blog from the database
blogRoutes.get("/:id", async (req, res) => {
  const id = req.params.id
  const result = await getBlog(id)
  if (!result.success) {
    res.status(500).json({ error: result.error, success: false })
    return
  }
  res.status(201).json({ content: result.content, success: true })
})

export default blogRoutes;