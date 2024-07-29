import React from 'react'

export default function MobileProps({tittle,date}) {
  return (
    <div className='mt-2'>
           <div className='bg-yellow-200 rounded-xl px-5 mx-4 py-5'>
              <div className='flex flex-row justify-between'>

            <div className='flex flex-col'>
                <div className='font-bold'>
           {tittle}
             </div>
             <div className='italic'>
           {date}
             </div>
            </div>
            <div className='bg-red-500 text-white rounded-xl px-3 py-4 items-center justify-start'>
                Register
            </div>

              </div>
            </div>
    </div>
  )
}
