import React from 'react';
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (
    
    <div className='h-screen w-screen flex flex-col bg-no-repeat bg-cover' style={{ backgroundImage: "url('https://bywjfszqwytcvsftccvd.supabase.co/storage/v1/object/public/Marathon/marathon-6660178_1280.jpg?t=2024-07-29T09%3A09%3A01.933Z')", filter: 'brightness(100%)' }}>
      
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
      <div className='text-center flex justify-center items-center opacity-800 text-white lg:text-4xl text:2xl  font-extrabold opacity-800 '>Celebration Norton Metro</div>
      <div className='text-center flex justify-center items-center opacity-800 text-white lg:text-4xl text:2xl font-extrabold opacity-800 '>2024 Fun Run Registration Platform</div>
    
      <div className='text-center flex justify-center items-center opacity-800 text-gray-600 text-sm font-extrabold opacity-800 mt-20 '> 
        <a href="/Register" className='text-white text-center text-xl font-semibold  flex justify-center items-center  w-45 bg-blue-700 px-4 py-4 rounded-xl lg:mr-20'>Register As Runner</a>

        <div  className='text-white text-center  text-xl font-semibold  justify-center items-center   w-45 bg-blue-700 px-4 py-4 hidden rounded-xl ml-20'>Register As Sponsor</div>

      </div>

      
    
   
    </div>
  );
};

export default Welcome;
