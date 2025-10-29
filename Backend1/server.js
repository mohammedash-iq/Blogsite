import express from "express"
import dotenv from "dotenv"

dotenv.config()
const PORT=process.env.PORT;
const app=express()

app.get("/",(req,res)=>{
    res.status(200).send("you are in the backend")
})

app.listen(PORT,()=>{
    console.log(`Server started on port: ${PORT}`)
})
