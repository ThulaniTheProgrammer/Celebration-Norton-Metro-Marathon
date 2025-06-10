

import React from 'react'
import { Form, useNavigate } from 'react-router-dom'
import FormFields from '../Components/FormFields';
import Button from '../Components/Button';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://aqlztcsukugmsztrrkau.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxbHp0Y3N1a3VnbXN6dHJya2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NzQyMTgsImV4cCI6MjA1MzU1MDIxOH0.jjefq42swAHHFCfAjE66gDniK4fyJaYOl5iDNBfzmcc');



const Register = () => {
    const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [Racetype, setRacetype] = useState('');
  const [NextOfKin, setNextOfKin] = useState('');
  const [Tshirt, setTshirt] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const { data, error } = await supabase.from('Marathon').insert([{ Name, Surname, Email, Mobile,Age,NextOfKin,Racetype,Gender}]);
      if (error) {
          throw error;
      }
      console.log('Data inserted successfully:', data);
      // Reset the form
        
    setName('');
    setSurname('');
    setEmail('');
    setMobile('');
    setAge('');
    setGender('');
    setRacetype('');
    setNextOfKin('');
    setTshirt('');
    navigate('/Thankyou'); // Redirect to the home page after successful registration

  } catch (error) {
      console.error('Error inserting data:', error);
  }


   


  };

  
   

    
    return (
  <div className="w-full min-h-screen bg-cover bg-center flex flex-col items-center px-4 py-10"
    style={{
      backgroundImage: `url('https://aqlztcsukugmsztrrkau.supabase.co/storage/v1/object/sign/buck/DSC05638.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2M3NGYxODUyLTExNWMtNGFhYy04MmEzLWNkZDc0ZDg0YzY1NiJ9.eyJ1cmwiOiJidWNrL0RTQzA1NjM4LmpwZyIsImlhdCI6MTc0NzMxNTM4OSwiZXhwIjoxNzc4ODUxMzg5fQ.sexSCYNMFjVdrrCSgCbypSnQ26CRSwgOlJ1syV0DLNk')`
    }}
  >
    <img
      src="https://celebrate.org/wp-content/uploads/2023/12/Celebration-Ministires-Horizontal-Black.png"
      alt="Logo"
      className="w-48 flex items-left justify-left h-auto mb-6"
    />

    <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-4xl p-8">
      <h2 className="text-center text-4xl font-bold text-blue-700 mb-2">Celebration Fun Run</h2>
      <p className="text-center text-gray-600 mb-6">Please fill out the registration form below</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Surname */}
        <div className="flex flex-col md:flex-row gap-6">
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="First Name"
            className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" value={Surname} onChange={(e) => setSurname(e.target.value)} placeholder="Last Name"
            className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Email & Mobile */}
        <div className="flex flex-col md:flex-row gap-6">
          <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
            className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="tel" value={Mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number"
            className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Age & Gender */}
        <div className="flex flex-col md:flex-row gap-6">
          <input type="number" value={Age} onChange={(e) => setAge(e.target.value)} placeholder="Age"
            className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <select value={Gender} onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-3 border border-blue-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          
          </select>
        </div>

        {/* Race Type & Next of Kin */}
        <div className="flex flex-col md:flex-row gap-6">
          <select value={Racetype} onChange={(e) => setRacetype(e.target.value)}
            className="w-full px-4 py-3 border border-blue-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Race Type</option>
            <option value="5km">5km</option>
            <option value="10km">10km</option>
            <option value="21km">21km</option>
            <option value="Other">Other</option>
          </select>

          <input type="text" value={NextOfKin} onChange={(e) => setNextOfKin(e.target.value)} placeholder="Next of Kin Mobile Number"
            className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* T-Shirt Size */}
        <div>
          <select value={Tshirt} onChange={(e) => setTshirt(e.target.value)}
            className="w-full px-4 py-3 border border-blue-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select T-Shirt Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X-Large">X-Large</option>
          </select>
        </div>

        {/* Terms */}
        <div className="flex items-center">
          <input type="checkbox" id="consent" className="mr-2" required />
          <label htmlFor="consent" className="text-sm text-gray-700">
            I accept the <a href="/Terms" className="text-blue-600 underline">Terms and Conditions</a>
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit"
            className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg rounded-xl transition duration-300">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
);}

export default Register;