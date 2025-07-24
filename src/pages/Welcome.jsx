import React from 'react';
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (
    <div
      className="w-screen min-h-screen flex flex-col bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://doxyxvdantoibzijpfra.supabase.co/storage/v1/object/sign/hub/DSC05531.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMzAwZTdmMS1jNWNiLTRkODUtODYwNi03MzNjYmIxMWJjN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodWIvRFNDMDU1MzEuanBnIiwiaWF0IjoxNzUwMjU2MTUyLCJleHAiOjE3ODE3OTIxNTJ9.UfgMuquWQ4VfcKoktGJoSH8wNud8kXWvnGb-kJPParw')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Logo */}
      <div className="z-10 p-4">
        <img
          src="https://celebrate.org/wp-content/uploads/2023/12/Celebration-Ministires-Horizontal-Black.png"
          alt="Logo"
          className="w-36 sm:w-48"
        />
      </div>

      {/* Main content */}
      <div className="z-10 flex flex-col justify-center items-center text-center text-white px-4 py-8 sm:py-16">
        <div className="text-3xl sm:text-5xl font-extrabold drop-shadow-lg">
          <Typewriter
            options={{
              strings: ['Welcome to'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
        <div className="text-xl sm:text-3xl font-bold mt-2">Celebration Fun Run</div>
        <div className="text-lg sm:text-2xl mt-2 font-semibold text-blue-200">
          2025 Fun Run Registration Platform
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10">
          <a
            href="/Register"
            className="bg-blue-700 hover:bg-blue-600 transition text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold"
          >
            Register as Runner
          </a>
          <a
            href="/RegisterCyclist"
            className="bg-green-700 hover:bg-green-600 transition text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold"
          >
            Register as Cyclist
          </a>
        </div>
      </div>

      {/* Payment Section */}
      <div className="z-10 mt-16 mb-10 px-6 sm:px-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 text-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-2">💳 USD Bank Transfer</h2>
            <p className="text-sm sm:text-base">🏦 Stanbic Bank - Borrowdale Branch</p>
            <p className="text-sm sm:text-base font-medium">Account Name: Celebration Church Norton</p>
            <p className="text-sm sm:text-base">USD Account #: 9140009229867</p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-2">💵 ZWL Bank Transfer</h2>
            <p className="text-sm sm:text-base">🏦 Stanbic Bank - Borrowdale Branch</p>
            <p className="text-sm sm:text-base font-medium">Account Name: Celebration Church Norton</p>
            <p className="text-sm sm:text-base">ZWL Account #: 9140009229859</p>
            <p className="text-sm sm:text-base">Sort Code: 03104</p>
            <p className="text-sm sm:text-base">Swift Code: SBICZWHX</p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-2">📱 Other Payments</h2>
            <p className="text-sm sm:text-base font-medium">
              Ecocash USD: <br />
             
            </p>
            <p className="text-sm sm:text-base font-medium mt-4">
              💬 Cash: Call <a href="tel:0774521028" className="underline">0774521028</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
