import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormFields from '../../Components/FormFields';
import Button from '../../Components/Button';
import SessionDetails from '../../Components/SessionDetails';
import Assignments from '../Assignments';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineSnippets } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";



export default function ManageMan() {
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
            <div className='rounded-full bg-red-200 h-10 w-10'>
            
            </div>
            <h1 className='text-white font-bold'>Hie Man</h1>
            </div>
            </div>
          
<div className='flex'>

<div className='flex w-1/4 flex-col font-bold text-lg'>
    <div className='text-white bold'>Home</div>
    <div className='text-white bold py-10'>Profile</div>
    <div className='text-white bold'>Log Out</div>

</div>

<div className='flex flex-col w-full ml-10 bg-black'>
<div className='flex justify-between mb-5'>
<div className='text-white text-2xl font-bold'>RegisteredMan</div>
<div className='flex-row flex  '>
    <div className='text-white px-2 py-2 bg-[#9B5C5E] texx-lg mx-10'>Manage</div>  
    <div className='text-white  px-2 py-2 bg-[#9B5C5E] text-lg' onClick={() => window.print()}>Print</div>
    
</div>
</div>

    <div className='w-full bg-red-200 mr-10    '>
      
    <div className="container w-full  ">
      <table className="table-auto w-full text-lg font-light ">
        <thead className='px-10 bg-[#EFA9A9] mt-5'>
        <tr className='p-10'>
                  <th>Surnmae</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>MaritalStatus</th>
            
                  <th>Church</th>
                  <th>Age</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
        </thead>
        <tbody className=''>
          {orders.map((row, index) => (
            <tr key={row.id} className={index % 3 === 0 ? 'bg-[#D3948C]' : index % 3 === 1 ? 'bg-[#9B5C5E]' : 'bg-[#EFA9A9]'}>
                    <td style={{ textAlign: 'center' }}>{row.Surname}</td>
                    <td style={{ textAlign: 'center' }}>{row.Email}</td>
                    <td style={{ textAlign: 'center' }}>{row.Mobile}</td>
                    <td style={{ textAlign: 'center' }}>{row.MaritalStatus}</td>
                    <td style={{ textAlign: 'center' }}>{row.Church}</td>
                    <td style={{ textAlign: 'center' }}>{row.Age}</td>
                    <td style={{ textAlign: 'center' }}>{row.Address}</td>
                  
                    <td style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <MdOutlineEditNote />
                </div>
              </td>

              <td style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <MdDelete />
                </div>
              </td>
                   

                   
                  </tr>
          ))}
        </tbody>
      </table>
    </div>


    </div>
  
</div>




</div>



        </div>
    )
}