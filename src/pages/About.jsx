import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Welcome from './Welcome';



const supabase = createClient('https://ftfeuxtlygcirfcukrwi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0ZmV1eHRseWdjaXJmY3VrcndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0OTU4NzQsImV4cCI6MjAyNTA3MTg3NH0.6-3zKHOxW-PvvUnV9Uq3WNT_R-oK1yLgpiHV4820oWM');


const SignUp = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')
      navigate('/Welcome');

      
    } catch (error) {
      alert(error)
    }
  }





  return (
    <div className='bg-black h-screen px-10'>
    <form onSubmit={handleSubmit} >
    <div className='flex items-center flex-row pt-10 justify-center'>
        <h1 className='text-white text-4xl bold pd-10'>BE</h1>
        <h1 className='text-red-600 text-4xl bold px-2'>THAT</h1>
        <h1 className='text-white text-4xl bold'>M</h1>
        <h1 className='text-red-600 text-4xl bold'>A</h1>
        <h1 className='text-white text-4xl bold'>N</h1>
    </div>
    <div className="border border-red-500 mt-2 h-0.5 w-full"></div>
    <div className='flex flex-row items-center text-center justify-center mt-4'>
        <div className='text-white'>Already have an Account?</div>
        <div className='text-red-500 bold tex-lg font-bold'  onClick={() => navigate("/About")}>
          <button>
          Sign In
          </button>
          </div>
    </div>
    <div className='flex   justify-center mt-24'>
        <div className="flex w-1/2 flex-col  items-center justify-center">
            <div>
                <input 
                 placeholder="Enter your Email"
                 name="email"
                 
                 onChange={handleChange}
                
                type="email" className="bg-black h-16 w-80 text-white border rounded-2xl border-red-600 px-4 py-2"  />
            </div>
            <div className="flex flex-col items-center justify-center mt-20">
                <input  
name="password"
type="password"
onChange={handleChange}
                
                 className="bg-black w-80 h-16 text-white border rounded-2xl border-red-900 px-4 py-2" placeholder="Enter Password" />
            </div>
            <div className='flex-col items-center justify-center mt-20'>
                
                <button className="w-80 rounded-2xl text-center text-white font-poppins font-extrabold h-16 bg-red-500 px-4 py-2" type="submit"  >
                Register
                </button>
            </div>
        </div>
       
    </div>
    </form>
</div>
  )
}

export default SignUp;