import React from 'react'


export default function SessionDetails({course,state,date}){
  return (
    
    <div className='flex justify-between items-center flex-row mt-5'>
    <div className='w-80 text-black'>{course}</div>
    <div className='bg-red-500 text-white px-2 py-2 w-24 rounded-2xl'>{state}</div>
    <div className=' text-black'>{date}</div>

</div>
  )
}
