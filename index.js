import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

app.use(express.json());

const EmailRateLimit = rateLimit({
    windowMs: 15*60*3000,
    max: 5,
    message :"Too many request",
    keyGenerator: (req,res)=>req.body.email
})
 
app.use("/login",EmailRateLimit);
app.post ("/login",(req,res)=>{
    const email = req.body.email;
    res.status(200).json({
        message:"lkmrekrjperjkporjrt"
    })
})

const LoginRateLimit = rateLimit({
    windowMs: 15*60*3000,
    max: 5,
    message :"Too many request"
})

app.use("/",LoginRateLimit);
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Get request"
    })
})


app.listen (3000,()=>{
    console.log("3000 port")
})