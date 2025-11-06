import express, { json } from "express"
import dotenv from "dotenv"
import authRouter from "./routes/userAuthRoute.js";
import userBlogRoutes from "./routes/useBlogRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config()
const PORT=process.env.PORT;
const app=express()
app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.status(200).send("you are in the backend")
})

app.use("/user",authRouter)

app.use("/api/user/blog",userBlogRoutes)

app.use("/api/blogs",blogRoutes)

app.listen(PORT,()=>{
    console.log(`Server started on port: ${PORT}`)
})
