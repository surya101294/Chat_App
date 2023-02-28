import "../index.css"
import React, { useContext, useState } from 'react'
import { UserContext } from "./UserContextProvider"
import axios from 'axios'

const Login = () => {
    const [name,setName]= useState("")
    const [password,setPassword]= useState("")
    const [status,setStatus]= useState("register")  //check login or register
   const {setUsername, setId} = useContext(UserContext)

   const handleSubmit= async(e)=>{
    e.preventDefault()
    const url= status==="register"? "register":"login";
    // const {data} = await axios.post(url, {name,password})
     await axios.post(url, {name,password}).then((res)=> {

         console.log(res);
         setStatus(name)
         setId(res.data.id)
        }).catch((err)=>{
            console.log(err);
        })
   }
console.log(status);
  return (
    <div className='bg-blue-50 h-screen flex items-center'>
        <form className='w-64 mx-auto mb-12' onSubmit={(e)=>handleSubmit(e)}>
      <input type="text" placeholder='email' value={name} onChange={e=> setName(e.target.value)}
      className="block w-full rounded-sm p-2 mb-2 border" />
      <input type="text" placeholder='password' value={password} onChange={e=> setPassword(e.target.value)}
      className="block w-full rounded-sm p-2 mb-2 border" />

      <button className='bg-blue-500 text-white block w-full rounded-sm p-2'>
        {status==="register"? "Register" : "Login"}
      </button>
      <div className="text-center mt-2">
{status==="register" && (
    <div>
        Already a member?
        <button onClick={()=>setStatus("login")}>Login here</button>
    </div>
)}
      </div>
      </form>
    </div>
  )
}

export default Login
