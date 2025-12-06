import express, { json } from "express"
import dotenv from "dotenv"
import authRouter from "./routes/userAuthRoute.js";
import userBlogRoutes from "./routes/useBlogRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config()
const PORT = process.env.PORT;
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get("/", (req, res) => { res.status(200).send("you are in the backend") })

app.use("/user", authRouter)

app.use("/api/user/blog", userBlogRoutes)

app.use("/api/blogs", blogRoutes)

app.use((error, req, res, next) => {
    console.log(error)
    const errormessage = error.message || "An unexpected Server Error Occured!"
    res.status(500).json({ error: errormessage, success: false })
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})
