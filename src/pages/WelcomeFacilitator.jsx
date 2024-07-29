import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormFields from '../Components/FormFields';
import Button from '../Components/Button';
import SessionDetails from '../Components/SessionDetails';
import Assignments from './Assignments';
import MobileFacilitator from './MobileFacilitator';


export default function Welcome() {
    const navigate = useNavigate();

    
    return (
        <div>
        <div className='bg-black   hidden sm:block   h-screen w-screen px-4'>
            <div className='flex justify-between pt-10 mb-10'>
            <div className='flex items-center flex-row  start underline'>
                <h1 className='text-white text-4xl bold pd-10'>BE</h1>
                <h1 className='text-red-600 text-4xl bold px-2'>THAT</h1>
                <h1 className='text-white text-4xl bold'>M</h1>
                <h1 className='text-red-600 text-4xl bold'>A</h1>
                <h1 className='text-white text-4xl bold'>N</h1>
            </div>
             <div>
            <div className='rounded-full bg-red-300 h-10 w-10'>
            
            </div>
            <h1 className='text-white font-bold'>Hie Man</h1>
            </div>
            </div>
          
<div className='flex'>

<div className='flex w-1/4 flex-col font-bold'>
    <div className='text-white bold'>Home</div>
    <div className='text-white bold py-11'>Profile</div>
    <div className='text-white bold'>Log Out</div>

</div>

<div className='flex w-full ml-10 bg-black'>
    <div className='w-3/4 bg-red-200 mr-10 text-black rounded-xl px-4 pb-8'>
        <div className='flex flex-row'>
       <div className='mr-10 bold text-3xl font-bold'>MANAGE</div> 
       <div className='mr-10 bold text-red-600 text-3xl font-bold'>ATTENDANCE</div>
       </div>
<SessionDetails course='REAL MAN RUNWAY OVERVIEW' state='Register' date='24/02/24'/>
<SessionDetails  course='FATHERING' state='Not Active' date='23/03/24'/>
<SessionDetails course='COURAGE' state='Not Active' date='20/04/24'/>
<SessionDetails  course='FAITHFULNESS' state='Not Active' date='29/06/24'/>
<SessionDetails course='RESPONSIBILITY' state='Not Active' date='27/07/24'/>
<SessionDetails  course='COMMUNICATION' state='Not Active' date='24/08/24'/>
<SessionDetails course='MONEY' state='Not Active' date='26/10/24'/>
<SessionDetails  course='SEXUAL INTERGRITY' state='Not Active' date='23/11/24'/>


    </div>
    <div className='w-1/4 bg-red-200 rounded-xl text-black font-bold    relative'>
      
    <div className='mb-4'>
    <div className='flex justify-center mb-8 text-3xl font-bold'>Cell Group</div>
   
    <div className='flex flex-row justify-between'>
        <div className='tex-white rounded-xl px-2'>Name</div>
        <div className=''>Surname</div>
        <div className='bg-red-500 texr-white rounded-xl px-2'>Manage</div>
    </div>
    <div className='flex justify-center items-center absolute bottom-2 w-full'>
    <button className="flex justify-center items-center text-2xl bg-red-600 w-full text-white h-10 px-4 py-2 mx-4 my-4  rounded-2xl w-50  text-center">
        Register
    </button>
    </div>
    </div>


    </div>
</div>




</div>



        </div>

        <div className="lg:hidden">
            <MobileFacilitator/>
        </div>
</div>
    )
}