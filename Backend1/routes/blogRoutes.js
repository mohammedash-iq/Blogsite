import express from "express"

const blogRoutes=express()

blogRoutes.get("/all",(req,res)=>{
 res.send("getting all the routes")
})

export default blogRoutes;