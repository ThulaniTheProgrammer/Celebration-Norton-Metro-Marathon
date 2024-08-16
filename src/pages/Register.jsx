

import React from 'react'
import { Form, useNavigate } from 'react-router-dom'
import FormFields from '../Components/FormFields';
import Button from '../Components/Button';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://bywjfszqwytcvsftccvd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5d2pmc3pxd3l0Y3ZzZnRjY3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNDI5NTksImV4cCI6MjAzNzgxODk1OX0.DTRQvPueJoTGcvfaa6_5BfQPq9yD13Si6OI2y3rqy5k');



const Register = () => {
    const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [Racetype, setRacetype] = useState('');
  const [NextOfKin, setNextOfKin] = useState('');
  const [Tshirt, setTshirt] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const { data, error } = await supabase.from('Marathon').insert([{ Name, Surname, Email, Mobile,Age,NextOfKin,Racetype,Gender}]);
      if (error) {
          throw error;
      }
      console.log('Data inserted successfully:', data);
      // Reset the form
        
    setName('');
    setSurname('');
    setEmail('');
    setMobile('');
    setAge('');
    setGender('');
    setRacetype('');
    setNextOfKin('');
    setTshirt('');
    navigate('/Thankyou'); // Redirect to the home page after successful registration

  } catch (error) {
      console.error('Error inserting data:', error);
  }


   


  };

  
   

    
    return (

       
        <div style={{ backgroundImage: "url('https://bywjfszqwytcvsftccvd.supabase.co/storage/v1/object/public/Marathon/marathon-6660178_1280.jpg?t=2024-07-29T09%3A09%3A01.933Z')", filter: 'brightness(100%)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}} className=' h-full bg-no-repeat bg-cover'>
              <img src="https://bywjfszqwytcvsftccvd.supabase.co/storage/v1/object/public/Marathon/download__1_-removebg-preview.png?t=2024-07-29T20%3A41%3A58.096Z" alt="Logo" className="w-30 h-10" />
             <form onSubmit={handleSubmit} className=''>
            <div className='flex items-center flex-row pt-10 justify-center'>
                <h1 className='text-white text-3xl lg:text-4xl bold pd-10'>Celebration</h1>
              
            </div>
            <div className='flex items-center flex-row justify-center'>
                <h1 className='text-blue-600   text-3xl bold lg:text-4xl pd-10'>Fun Run</h1>
                <h1 className='text-white text-3xl bold lg:text-4xl px-2'>Registration</h1>
            </div>
            <div className='items-center hidden lg:flex flex-row justify-center'>
                <h1 className='text-blue-600   text-xl bold lg:text-2xl pd-10'>Please fill the form below</h1>
                <h1 className='text-white text-xl bold lg:text-2xl px-2'>with your details</h1>
            </div>
          
         

<div className='lg:bg-white mx-10  mt:5 lg:mt-10 py-10 px-10 rounded-xl mb-10 '>


    
            <div className='flex justify-center items-center flex-col lg:flex-row mt-3'>

          

<div  className='mx-32 mt-3'>
<input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="bg-blue-600 h-16 w-80 text-white rounded-2xl border border-blue-500 px-4 py-2" placeholder="Enter your name" /> 

</div>

            

<div className='mx-32 mt-3 '>
    <input
        type="text"
        value={Surname}
        onChange={(e) => setSurname(e.target.value)}
        className="bg-blue-600  h-16 w-80 text-white border rounded-2xl border-blue-500 px-4 py-2"
        placeholder="Enter your Surname" />
</div>
</div>
<div className='flex justify-center items-center flex-col lg:flex-row  '>
  
<div  className='mx-32 mt-3'>
<input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} className="bg-blue-600  h-16 w-80 text-white border  rounded-2xl border-blue-500 px-4 py-2" placeholder="Enter your email" /> 

</div>


<div className='mx-32 mt-3'>
<input type="numeric" value={Mobile} onChange={(e) => setMobile(e.target.value)} className="bg-blue-600  h-16 w-80 text-white border  rounded-2xl border-blue-500 px-4 py-2" placeholder="Enter your mobile" />  
</div>
</div>


<div className='flex justify-center items-center flex-col lg:flex-row '>
    <div className='mx-32 mt-3'>
<input type="text" value={Age} onChange={(e) => setAge(e.target.value)} className="bg-blue-600  h-16 w-80 text-white border  rounded-2xl border-blue-500 px-4 py-2" placeholder="Enter your Age" /> 
</div>
<div className='mx-32 mt-3'>
<select value={Gender} onChange={(e) => setGender(e.target.value)} className="bg-blue-600 h-16 w-80 text-white border rounded-2xl border-blue-500 px-4 py-2">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
</div>
</div>
    
<div className='flex justify-center items-center flex-col lg:flex-row mt-3 '>
<div className='mx-32 mt-3'>
<select value={Racetype} onChange={(e) => setRacetype(e.target.value)} className="bg-blue-600 h-16 w-80 text-white border rounded-2xl border-blue-500 px-4 py-2">
<option value="">Select RaceType</option>
                        <option value="5km">5km</option>
                        <option value="10km">10km</option>
                        <option value="21km">21km</option>
                        <option value="Other">Other</option>
                    </select>
</div>
        <div className='mx-32 mt-3 '>
            <input type="text" value={NextOfKin} onChange={(e) => setNextOfKin(e.target.value)} className="bg-blue-600  h-16 w-80 text-white border  rounded-2xl border-blue-500 px-4 py-2" placeholder="Enter next of kin mobile number" /> 
            </div>

    </div>


    <div className='lg:mx-48 mt-3 flex justify-center items-center lg:justify-start items-start flex-col lg:flex-row '>
<select value={Tshirt} onChange={(e) => setTshirt(e.target.value)} className="bg-blue-600 h-16 w-80 text-white border rounded-2xl border-blue-500 px-4 py-2">
<option className='' value="">Select T-Shirt Size</option>
                        <option value="5km">Small</option>
                        <option value="10km">Medium</option>
                        <option value="21km">Large</option>
                        <option value="Other">X-large</option>
                    </select>
</div>


    <div className="flex  lg:mx-48 items-center ">
        <input
            type="checkbox"
            id="consent"
            className="mr-2"
            required
        />
        <label htmlFor="consent" className="lg:text-blue-600 ">
          l accept the <a href="/Terms" className="text-blue-600">Terms and Conditions</a>
        </label>
    </div>
    <div className='lg:mx-44'>
    <button className='text-xl w-full  text-center mx-0 lg:w-100 mt-20 mb-10 py-6 text-white font-bold  bg-blue-900 rounded-xl  px-2'   type="submit">Register</button>
    </div>

    </div>

   
 
    
 
          
      </form>
        </div>
       

        
    )
}

export default Register;