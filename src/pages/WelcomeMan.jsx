import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormFields from '../Components/FormFields';
import Button from '../Components/Button';
import SessionDetails from '../Components/SessionDetails';
import Assignments from './Assignments';
import UploadButton from './bucket';
import Mobile from './Mobile';




export default function Welcome({token}) {
    const navigate = useNavigate();
    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
      }
    
    return (
        <div>
        <div className='bg-black hidden sm:block  h-screen w-screen px-10 '>
            <div className='flex justify-between pt-10 mb-10'>
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
            <h1 className='text-white font-bold text-2xl text-center'>Hie Man</h1>
            </div>
            </div>
          
<div className='flex'>

<div className='flex w-1/4 flex-col font-bold text-lg'>
    <div className='text-white bold'>Home</div>
    <div className='text-white bold py-10'>Profile</div>

    
    <div className='text-white bold' onClick={handleLogout}>Log Out</div>

</div>

<div className='flex w-full ml-10 bg-black'>
    <div className='w-3/4 bg-red-200 mr-10 rounded-xl px-4 font-medium text-gray-700 pb-8'>
        <div className='flex flex-row'>
       <div className='mr-10 bold font-bold text-black text-2xl'>Workout</div> 
       <div className='mr-10 bold text-red-600 font-bold text-2xl'>Session</div>
       </div>
<SessionDetails course='REAL MAN RUNWAY OVERVIEW' state='Register' date='24/02/24'/>
<SessionDetails  course='FATHERING' state='Not Active' date='23/03/24'/>
<SessionDetails course='COURAGE' state='Register' date='20/04/24'/>
<SessionDetails  course='FAITHFULNESS' state='Not Active' date='29/06/24'/>
<SessionDetails course='RESPONSIBILITY' state='Register' date='27/07/24'/>
<SessionDetails  course='COMMUNICATION' state='Not Active' date='24/08/24'/>
<SessionDetails course='MONEY' state='Register' date='26/10/24'/>
<SessionDetails  course='SEXUAL INTERGRITY' state='Not Active' date='23/11/24'/>


    </div>
    <div className='w-1/4 bg-red-200 rounded-xl px-2'>
    <div className='font-bold    text-black mb-4'>Building People Building Dreams</div>
    <div className='flex flex-row justify-between'>
        <div className='bg-red-500 text-white rounded-xl font-bold  px-2'>Due</div>
        <div className=''>03 May 2024</div>
    </div>
    <div className='bg-black my-4  text-white rounded-xl py-2 flex bold px-2'><UploadButton /></div>
       <div className='font-bold   text-black mt-20 '>MAXIMISED MANHOOD</div>
    <div className='flex flex-row justify-between'>
        <div className='bg-red-500 text-white rounded-xl font-bold  px-2'>Due</div>
        <div className=''>13 SEP 2024</div>
    </div>
    <div >
    <div className='bg-black my-4  text-white rounded-xl py-2 flex bold px-2'><UploadButton /></div>
    </div>
    </div>
</div>




</div>

<div className=' bg-red-200  mt-9 px-2 rounded-xl py-4 w-full'>
<div className='flex flex-row mb-5'>
       <div className='mr-10 bold font-bold text-2xl'>Welcome</div> 
       <div className='mr-10 bold  text-2xl text-red-600'>Man</div>
       </div>
    <div>1. Attend minimum if 5/8 Work Out Sessions</div>
    <div>2. Be fully engaged in serving have successfully completed the probationary period</div>
    <div>3. Read and complete Building People Building Dreams and Maximise Manhoodand submit the assignments
      on or before deadline at 5pm</div>
<div>4. Invite of unsaved colleague as your witness to graduation ceremony</div>
5. Budget for Purchase of Regalia</div>




</div>

<div className="lg:hidden"> 
  <Mobile/>
</div>

        </div>
        
        
       
    )
}