require("dotenv").config()
const cors= require("cors")
const express= require("express")
const connection = require("./db")
const {userRouter} = require("./routes/UserRoutes")

const app= express()

app.use(cors())
app.use(express.json())
app.get("/", (req,res)=>{
    console.log("Welcome");
    res.send("Welcome page")
})

app.use("/user", userRouter)

app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log(`server running  at ${process.env.PORT}`);
    }catch(err){
        console.log(err);
    }
})