import React from 'react';
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (
    
   <div
  className="w-screen min-h-screen flex flex-col bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: `url('https://doxyxvdantoibzijpfra.supabase.co/storage/v1/object/sign/hub/DSC05531.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMzAwZTdmMS1jNWNiLTRkODUtODYwNi03MzNjYmIxMWJjN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodWIvRFNDMDU1MzEuanBnIiwiaWF0IjoxNzUwMjU2MTUyLCJleHAiOjE3ODE3OTIxNTJ9.UfgMuquWQ4VfcKoktGJoSH8wNud8kXWvnGb-kJPParw')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(100%)',
  }}
>
      <img src="https://celebrate.org/wp-content/uploads/2023/12/Celebration-Ministires-Horizontal-Black.png" alt="Logo" className="w-40 h-10" />
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
      <div className='text-center flex justify-center items-center opacity-800 text-white tex  font-extrabold opacity-800 '>Celebration Fun Run</div>
      <div className='text-center flex justify-center items-center opacity-800 text-white text-4xl text:2xl font-extrabold opacity-800 '>2025 Fun Run Registration Platform</div>
    
      <div className='text-center flex justify-center items-center opacity-800 text-gray-600 text-sm font-extrabold opacity-800 mt-20 '> 
        <a href="/Register" className='text-white text-center text-xl font-semibold  flex justify-center items-center  w-45 bg-blue-800 px-4 py-4 rounded-xl lg:mr-20'>Register as runner</a>

        <a href="/RegisterCyclist" className='text-white text-center text-xl font-semibold  flex justify-center items-center  w-45 bg-blue-800 px-4 py-4 rounded-xl lg:mr-20'>Register as cyclist</a>

        <div  className='text-white text-center  text-xl font-semibold  justify-center items-center   w-45 bg-slate-700 px-4 py-4  hidden rounded-xl ml-20'>Register as runner</div>

      </div>

      
    
      <div className=" text-white mb-0 h-full mt-40 flex flex-col lg:flex-row justify-between bg-blue-800 p-8 rounded shadow">
        
                
                <div>
                <h1 className="text-3xl font-bold pb-2 lg:mb-0">Payment Methods!</h1>
                <p className="">1. BRANCH: Stanbic Bank Borrowdale Branch</p>
                <p className="font-semibold">Account Name: Celebration Church Norton</p>
                <p className="text-lg">USD Account Number: 9140009229867</p>
                
                </div>
                <div>
                <h1 className="text-3xl font-bold pb-2 lg:mb-0">Payment Methods!</h1>
                <p className="">1. BRANCH: Stanbic Bank Borrowdale Branch</p>
                <p className="font-semibold">Account Name: Celebration Church Norton</p>
                <p className="text-lg"> ZWG   Account Number: 9140009229859</p>
                <p className="font-semibold">Sort Code: 03104
                </p>
                <p className="text-lg">Swift Code: SBICZWHX</p>
                
                
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
