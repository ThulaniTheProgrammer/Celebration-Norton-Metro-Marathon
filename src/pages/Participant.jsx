import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const supabase = createClient(
  'https://aqlztcsukugmsztrrkau.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxbHp0Y3N1a3VnbXN6dHJya2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NzQyMTgsImV4cCI6MjA1MzU1MDIxOH0.jjefq42swAHHFCfAjE66gDniK4fyJaYOl5iDNBfzmcc'
);

const Participants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      const { data, error } = await supabase.from('Marathon').select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setParticipants(data);
      }
    };

    fetchParticipants();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Celebration Fun Run Participants', 14, 16);
    doc.autoTable({
      startY: 20,
      head: [['Name', 'Surname', 'Email', 'Mobile', 'Age', 'Gender', 'Race Type', 'Next of Kin']],
      body: participants.map(p => [
        p.Name,
        p.Surname,
        p.Email,
        p.Mobile,
        p.Age,
        p.Gender,
        p.Racetype,
        p.NextOfKin
      ]),
    });
    doc.save('FunRun_Participants.pdf');
  };

  return (
    <div className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: `url('https://aqlztcsukugmsztrrkau.supabase.co/storage/v1/object/sign/buck/DSC05638.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2M3NGYxODUyLTExNWMtNGFhYy04MmEzLWNkZDc0ZDg0YzY1NiJ9.eyJ1cmwiOiJidWNrL0RTQzA1NjM4LmpwZyIsImlhdCI6MTc0NzMxNTM4OSwiZXhwIjoxNzc4ODUxMzg5fQ.sexSCYNMFjVdrrCSgCbypSnQ26CRSwgOlJ1syV0DLNk')`
      }}
    >
      <img
        src="https://celebrate.org/wp-content/uploads/2023/12/Celebration-Ministires-Horizontal-Black.png"
        alt="Logo"
        className="w-48 h-auto mb-6"
      />

      <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl max-w-7xl mx-auto p-6 overflow-x-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Registered Participants</h2>

        <button
          onClick={downloadPDF}
          className="mb-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-xl transition duration-300"
        >
          Download PDF
        </button>

        <table className="w-full table-auto border-collapse border border-blue-300 rounded-lg">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="border border-blue-300 px-4 py-2">Name</th>
              <th className="border border-blue-300 px-4 py-2">Surname</th>
              <th className="border border-blue-300 px-4 py-2">Email</th>
              <th className="border border-blue-300 px-4 py-2">Mobile</th>
              <th className="border border-blue-300 px-4 py-2">Age</th>
              <th className="border border-blue-300 px-4 py-2">Gender</th>
              <th className="border border-blue-300 px-4 py-2">Race Type</th>
              <th className="border border-blue-300 px-4 py-2">Next of Kin</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p, index) => (
              <tr key={index} className="text-center hover:bg-blue-50">
                <td className="border border-blue-300 px-4 py-2">{p.Name}</td>
                <td className="border border-blue-300 px-4 py-2">{p.Surname}</td>
                <td className="border border-blue-300 px-4 py-2">{p.Email}</td>
                <td className="border border-blue-300 px-4 py-2">{p.Mobile}</td>
                <td className="border border-blue-300 px-4 py-2">{p.Age}</td>
                <td className="border border-blue-300 px-4 py-2">{p.Gender}</td>
                <td className="border border-blue-300 px-4 py-2">{p.Racetype}</td>
                <td className="border border-blue-300 px-4 py-2">{p.NextOfKin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Participants;
