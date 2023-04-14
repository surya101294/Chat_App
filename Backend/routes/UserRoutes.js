const express = require("express")
const { UserModel } = require("../model/userModel")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    res.send("User Router")
})

// userRouter.post("/register", async (req, res) => {
//     const { name, password } = req.body
//     try {
//         bcrypt.hash(password, 5, async function (err, hash) {
//             // Store hash in your password DB.
//             if (err) {
//                 res.send({ msg: "something went wrong", err: err.message })
//             }
//             else {
//                 const newUser = new UserModel({ name, password: hash })
//                 await newUser.save()
//                 // res.send(newUser)
//                 res.cookie("token")
//             }
//         });
//     } catch (err) {
//         res.send({ msg: "Something went wrong", err: err.message })
//     }
// })

// userRouter.post("/login", async (req, res) => {
//     const { name, password } = req.body
//     try {
//         const user = await UserModel.find({ name })
//         if (user.length>0) {
//             bcrypt.compare(password, user[0].password, async function (err, result) {

//                 if (err) {
//                     res.send({ msg: "Password is wrong", err: err.message })
//                 }
//                 else {
//                     var token = jwt.sign({ userID: user[0]._id }, 'surya');

//                     res.send({ msg: "Login Successfull", "token": token })
//                 }
//             });
//             }
//             else {
//                 res.send({ "msg": "You are Not registered, name id not found in DB" })
//             }
//     }catch (err) {
//     res.send({ msg: "Something went wrong", err: err.message })
// }
// })

userRouter.use(cookieParser())

userRouter.get("/profile",(req,res)=>{
    const token= req.cookies?.token
    if(token){
        jwt.verify(token, jwtSecret,{},(err,userData)=>{
            if(err) throw err
            res.send(userData)
        })
    }else{
        res.status(401).send("No token")
    }  
})
userRouter.post("/register", async (req, res) => {
    const { name, password } = req.body
    try {
        bcrypt.hash(password, 5, async function (err, hash) {
            if (err) {
                res.send({ msg: "something went wrong", err: err.message })
            }
            else {
                const newUser = new UserModel({ name, password: hash })
                await newUser.save()
                jwt.sign({userId:createdUser._id, name}, jwtSecret,{},(err,token)=>{
                    if(err) throw err;

                    res.cookie("token",token,{sameSite:'none',   secure:true}).status(201).send({    
                    id:createdUser._id,
                    name
                })                   
                })
                
            }
        });
    } catch (err) {
        if(err) throw err
        res.status(500).send("error")
    }
})

module.exports = { userRouter }