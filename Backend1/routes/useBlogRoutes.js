import express from "express"

const userBlogRoutes=express.Router()

userBlogRoutes.get("/all",(req,res)=>{
res.send("getting all the blogs")
})

userBlogRoutes.post("/create",(req,res)=>{
    const {title,body}=req.body;
    res.status(201).json({title:title,body:body})
})

userBlogRoutes.delete("/delete",(req,res)=>{
    res.send("deleting a blog")
})

userBlogRoutes.patch("/update",(req,res)=>{
    res.send("updating or editing a blog")
})

export default userBlogRoutes;