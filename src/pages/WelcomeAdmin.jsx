
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormFields from '../Components/FormFields';
import Button from '../Components/Button';
import SessionDetails from '../Components/SessionDetails';
import Assignments from './Assignments';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineSnippets } from "react-icons/ai";
import Registration from './Registration';
import RegisteredMan from './Table/RegisteredMan';
import RegisteredFacilitator from './Table/RegisteredFacilitator';  



export default function WelcomeAdmin() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const fetchOrders = async () => {
  
        const supabase = createClient('https://nhgwlsmmqjlszkjncurg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ3dsc21tcWpsc3pram5jdXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzAyNzcsImV4cCI6MjAyNTI0NjI3N30.d_XWelkD4W4eo4R5eJybKzXfuG02WIemtAQwSU-oW1g');

  
        const { data, error } = await supabase
          .from('Realman')
          .select('Name, Surname, Email, Mobile, MaritalStatus, Church, Age, Address');
        
        if (error) {
          console.error('Error fetching orders:', error);
        } else {
          setOrders(data);
        }
      };
  
      fetchOrders();
    }, []);





    
    return (
        <div className='bg-black  h-screen w-screen px-10  '>
            <div className='flex justify-between pt-5 mb-20'>
            <div className='flex items-center flex-row  start border-b border-red-500'>
                <h1 className='text-white text-4xl bold pd-10'>BE</h1>
                <h1 className='text-red-600 text-4xl bold px-2'>THAT</h1>
                <h1 className='text-white text-4xl bold'>M</h1>
                <h1 className='text-red-600 text-4xl bold'>A</h1>
                <h1 className='text-white text-4xl bold'>N</h1>
               
            </div>
          
             <div>
            <div className='rounded-full bg-red-500 h-10 w-10'>
            
            </div>
            <h1 className='text-white font-bold'>Hie Man</h1>
            </div>
            </div>
          
<div className='flex'>

<div className='flex w-1/4 flex-col font-bold text-lg'>
    <div className='text-white bold'>Home</div>
    <div className='text-white bold py-10'>Profile</div>
    <div className='text-white bold'>LogOut</div>

</div>

<div className='flex w-full ml-10 bg-black'>
<div className='flex flex-col mr-5 w-80'>
  <button onClick={() => navigate("/RegisteredMan")}>
<div className='w-full  border  mb-10 border-red-500 h-32   rounded-xl mr-4 px-2'>
   <div>
    <div className='text-white font-bold text-start pt-4'>Total Registered Man</div>
    <div className='flex justify-between mt-4'>
        <div  className=' text-red-300 font-bold'>10000</div>
        <div  className=' text-[#D3948C]'><AiFillSignal /></div>
    </div>
   </div>
    </div>
    </button>
    <button onClick={() => navigate("/RegisteredFacilitator")}>
    <div className='w-full  border  border-red-500 h-32   rounded-xl mr-4 px-2'>
    <div>
    <div className='text-white font-bold text-start pt-4'>Total Facilitators</div>
    <div className='flex justify-between mt-4'>
        <div  className=' text-red-300 font-bold'>1000</div>
        <div  className=' text-[#D3948C]'><AiOutlineSnippets /></div>
    </div>
   </div>
    </div>
    </button>

    <div className='w-full  border my-10  border-red-500 h-32   rounded-xl mr-4 px-2'>
   <div>
    <div className='text-white font-bold pt-4'>Register A New Man</div> 
    <div className='text-white font-bold'>Man</div> 
    <div className='flex justify-between mt-4'>
      
        <div  className=' text-red-300 bg-red-500 px-4 py-2 w-full text-center rounded-lg font-bold' onClick={() => navigate("/Register")}>
         <button className='font-bold text-lg'>Register</button> 
          </div>
       
    </div>
   </div>
    </div>

    <div className='w-full  border  border-red-100 h-32   rounded-xl mr-4 px-2'>
    <div>
    <div className='text-white font-bold pt-4'>Register A New </div> 
    <div className='text-white font-bold'>Facilitator</div> 
    <div className='flex justify-between mt-4'>
        <div  className=' text-red-300 bg-red-500 px-4 py-2 w-full text-center font-bold rounded-lg 'onClick={() => navigate("/Register")}>
         <button className='font-bold text-lg'>Register</button> 
          </div>
       
    </div>
   </div>
    </div>

    </div>
    
    <div className='w-full bg-red-200 mr-10 rounded-xl  mx-10  '>
     
    <div className="container w-full  ">
      <table className="table-auto w-full ">
        <thead className='px-10 bg-[#EFA9A9] mt-5 '>
        <tr className='p-10'>
                  <th className='px-7' style={{ textAlign: 'start' }}>Surnmae</th>
                  <th className='px-7' style={{ textAlign: 'start' }} >Email</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>Mobile</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>MaritalStatus</th>
            
                  <th className='px-7' style={{ textAlign: 'start' }}>Church</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>Age</th>
                    <th className='px-7' style={{ textAlign: 'start' }}>Address</th>
                </tr>
        </thead>
        <tbody className=''>
          {orders.map((row, index) => (
            <tr key={row.id} className={index % 3 === 0 ? 'bg-[#D3948C]' : index % 3 === 1 ? 'bg-[#9B5C5E]' : 'bg-[#EFA9A9]'}>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Surname}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Email}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Mobile}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.MaritalStatus}</td>
                    <td sclassName='' style={{ textAlign: 'start' }}>{row.Church}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Age}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Address}</td>
                  </tr>
          ))}
        </tbody>
      </table>
    </div>


    </div>
  
</div>




</div>
<div className='w-full flex  justify-center mt-10 mr-10 rounded-xl   '>
      
    <div className="container w-full ml-28  ">
    <table className="table-auto w-full ">
        <thead className='px-10 bg-[#EFA9A9] mt-5'>
        <tr className='p-10'>
                  <th className='px-7' style={{ textAlign: 'start' }}>Surnmae</th>
                  <th className='px-7' style={{ textAlign: 'start' }} >Email</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>Mobile</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>MaritalStatus</th>
            
                  <th className='' style={{ textAlign: 'start' }}>Church</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>Age</th>
                    <th className='px-7' style={{ textAlign: 'start' }}>Address</th>
                </tr>
        </thead>
        <tbody className=''>
          {orders.map((row, index) => (
            <tr key={row.id} className={index % 3 === 0 ? 'bg-[#D3948C]' : index % 3 === 1 ? 'bg-[#9B5C5E]' : 'bg-[#EFA9A9]'}>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Surname}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Email}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Mobile}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.MaritalStatus}</td>
                    <td sclassName='px-7' style={{ textAlign: 'start' }}>{row.Church}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Age}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Address}</td>
                  </tr>
          ))}
        </tbody>
      </table>
    </div>


    </div>


        </div>
    )
}