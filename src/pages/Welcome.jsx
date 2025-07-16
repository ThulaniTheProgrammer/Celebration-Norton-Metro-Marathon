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
      <img
        src="https://celebrate.org/wp-content/uploads/2023/12/Celebration-Ministires-Horizontal-Black.png"
        alt="Logo"
        className="w-32 h-8 sm:w-40 sm:h-10 mt-4 ml-4"
      />
      <div className="text-center flex justify-center items-center text-white text-2xl sm:text-4xl font-extrabold mt-20 sm:mt-40">
        <Typewriter
          options={{
            strings: ['Welcome to'],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
      <div className="text-center flex justify-center items-center text-white text-lg sm:text-2xl font-extrabold mt-2">Celebration Fun Run</div>
      <div className="text-center flex justify-center items-center text-white text-xl sm:text-4xl font-extrabold mt-2">2025 Fun Run Registration Platform</div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 sm:mt-20">
        <a
          href="/Register"
          className="text-white text-center text-base sm:text-xl font-semibold flex justify-center items-center w-4/5 sm:w-45 bg-blue-800 px-4 py-3 sm:py-4 rounded-xl"
        >
          Register as runner
        </a>
        <a
          href="/RegisterCyclist"
          className="text-white text-center text-base sm:text-xl font-semibold flex justify-center items-center w-4/5 sm:w-45 bg-blue-800 px-4 py-3 sm:py-4 rounded-xl"
        >
          Register as cyclist
        </a>
        <div className="text-white text-center  text-base sm:text-xl font-semibold justify-center items-center w-4/5 sm:w-45 bg-slate-700 px-4 py-3 sm:py-4 hidden rounded-xl">
          Register as runner
        </div>
      </div>

      <div className="text-white mt-10 sm:mt-40 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between bg-blue-800 p-4 sm:p-8 rounded shadow w-11/12 max-w-6xl mx-auto">
        <div className="mb-4 lg:mb-0 flex-1">
          <h1 className="text-xl sm:text-3xl font-bold pb-2">Payment Methods!</h1>
          <p className="text-sm sm:text-base">1. BRANCH: Stanbic Bank Borrowdale Branch</p>
          <p className="font-semibold text-sm sm:text-base">Account Name: Celebration Church Norton</p>
          <p className="text-base sm:text-lg">USD Account Number: 9140009229867</p>
        </div>
        <div className="mb-4 lg:mb-0 flex-1">
          <h1 className="text-xl sm:text-3xl font-bold pb-2">Payment Methods!</h1>
          <p className="text-sm sm:text-base">1. BRANCH: Stanbic Bank Borrowdale Branch</p>
          <p className="font-semibold text-sm sm:text-base">Account Name: Celebration Church Norton</p>
          <p className="text-base sm:text-lg">ZWG Account Number: 9140009229859</p>
          <p className="font-semibold text-sm sm:text-base">Sort Code: 03104</p>
          <p className="text-base sm:text-lg">Swift Code: SBICZWHX</p>
        </div>
        <div className="flex-1">
          <p className="text-base sm:text-lg font-semibold pt-2 lg:mt-2">2. Ecocash USD: *151*2*1*37296*AMT*66961190610022#</p>
          <p className="text-base sm:text-lg pt-2 font-semibold">3. For cash payments contact 0774521028</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
