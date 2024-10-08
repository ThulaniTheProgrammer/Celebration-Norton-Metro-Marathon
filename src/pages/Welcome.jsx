import React from 'react';
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (
    
    <div className='h-screen w-screen flex flex-col bg-no-repeat bg-cover' style={{ backgroundImage: "url('https://bywjfszqwytcvsftccvd.supabase.co/storage/v1/object/public/Marathon/marathon-6660178_1280.jpg?t=2024-07-29T09%3A09%3A01.933Z')", filter: 'brightness(100%)' }}>
      <img src="https://bywjfszqwytcvsftccvd.supabase.co/storage/v1/object/public/Marathon/download__1_-removebg-preview.png?t=2024-07-29T20%3A41%3A58.096Z" alt="Logo" className="w-20 h-10" />
      <div className='text-center flex justify-center items-center opacity-800 text-white text-4xl font-extrabold opacity-800 mt-40'>
      <Typewriter
          options={{
            strings: ['Welcome to'],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
      <div className='text-center flex justify-center items-center opacity-800 text-white lg:text-4xl text:2xl  font-extrabold opacity-800 '>Celebration Fun Run</div>
      <div className='text-center flex justify-center items-center opacity-800 text-white text-4xl text:2xl font-extrabold opacity-800 '>2024 Fun Run Registration Platform</div>
    
      <div className='text-center flex justify-center items-center opacity-800 text-gray-600 text-sm font-extrabold opacity-800 mt-20 '> 
        <a href="/Register" className='text-white text-center text-xl font-semibold  flex justify-center items-center  w-45 bg-blue-800 px-4 py-4 rounded-xl lg:mr-20'>Register As Runner</a>



        <div  className='text-white text-center  text-xl font-semibold  justify-center items-center   w-45 bg-slate-700 px-4 py-4 hidden rounded-xl ml-20'>Register As Sponsor</div>



      </div>

      
    
      <div className=" text-white mb-0 h-full mt-10 flex flex-col lg:flex-row justify-between bg-blue-800 p-8 rounded shadow">
        
                
                <div>
                <h1 className="text-3xl font-bold pb-2 lg:mb-0">Payment Methods!</h1>
                <p className="">1. BRANCH: CBZ Samora Branch</p>
                <p className="font-semibold">Account Name: Celebration Church Norton</p>
                <p className="text-lg">USD Account Number: 66961190610042</p>
                
                </div>
               <div>
               <p className="text-lg font-semibold pt-2 lg:mt-2">2. Ecocash USD: *151*2*1*37296*AMT*66961190610042#  </p>
               <p className="text-lg pt-2 font-semibold">3. For cash payments contact 0774521028</p>
               </div>
            </div>
   
    </div>
  ); 
};

export default Welcome;
