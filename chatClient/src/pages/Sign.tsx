import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sign() {
    const [userSignUp,setUserSignUp] = useState<{email:string, password:string}>({email:"", password:""})
    const [userSignIn,setUserSignIn] = useState<{email:string, password:string}>({email:"", password:""})
    const navigate = useNavigate()
  const handleSignUp = async ()=>{
    try{
        const res = await axios.post()
        if(res){
          navigate("/home")
        }
    }
    catch(err){

    }
  }

  const handleSignIn = async ()=>{
    try{
        const res = await axios.post()
        if(res){
          navigate("/home")
        }  
    }
    catch(err){
      
    }
  }

  return (
    <div className='grid grid-cols-6'>
      {/* sign up */}
      <div className='col-span-3'>
        <h1>New Account? Sign Up</h1>
        <input 
            placeholder='Enter Email'
            onChange={(e)=>{
                setUserSignUp((prev)=>({...prev,email:e.target.value}))
            }} />

        <input 
            placeholder='Enter Password'
            onChange={(e)=>{
                setUserSignUp((prev)=>({...prev,password:e.target.value}))
            }} />

        <button 
            onClick={()=>{handleSignUp()}}
            disabled={(userSignUp.email != "" && userSignUp.password != "")}
            >Sign Up</button>
      </div>

      {/* sign in */}
      <div className='col-span-3'>
        <h1>Already have an accout? Sign In</h1>
        <input 
            placeholder='Enter Email'
            onChange={(e)=>{
                setUserSignIn((prev)=>({...prev,email:e.target.value}))
            }} />

        <input 
            placeholder='Enter Password'
            onChange={(e)=>{
                setUserSignIn((prev)=>({...prev,password:e.target.value}))
            }} />

        <button 
            onClick={()=>{handleSignIn()}} 
            disabled={(userSignIn.email != "" && userSignIn.password != "")}
            >Sign Up</button>
      </div>
    </div>
  )
}
