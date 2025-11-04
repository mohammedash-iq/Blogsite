import express from "express"

const authRouter=express.Router()

authRouter.post("/login",(req,res)=>{
    const {email,password}=req.body
    if (!email|!password){
        res.status(400).send('provide credentials')
        return;
    }
    res.status(200).json({email:email,password:password})
})

authRouter.post("/signin",(req,res)=>{
    const {username,password,email}=req.body;
    if(!email|!username|!password){
        res.status(400).send("provide Credentials")
        return
    }
    res.status(201).json({username:username,email:email,password:password})
})

export default authRouter;