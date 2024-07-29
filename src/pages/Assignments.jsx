import React from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://ftfeuxtlygcirfcukrwi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0ZmV1eHRseWdjaXJmY3VrcndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0OTU4NzQsImV4cCI6MjAyNTA3MTg3NH0.6-3zKHOxW-PvvUnV9Uq3WNT_R-oK1yLgpiHV4820oWM');





export default function Assignments() {

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const { data, error } = await supabase.storage
        .from('bucket')
        .upload(`documents/${file.name}`, file);

    if (error) {
        console.error('Error uploading document:', error.message);
    } else {
        console.log('Document uploaded successfully:', data.Key);

        // Get the document URL
        const { publicURL, error: urlError } = await supabase.storage
            .from('bucket')
            .getPublicUrl(`documents/${file.name}`);

        if (urlError) {
            console.error('Error getting document URL:', urlError.message);
        } else {
            console.log('Document URL fetched successfully:', publicURL);

            // Put the document URL into the "realman" table
            const { data: insertData, error: insertError } = await supabase
                .from('Realman')
                .insert([{ url: publicURL }]);

            if (insertError) {
                console.error('Error inserting document URL:', insertError.message);
            } else {
                console.log('Document URL inserted successfully:', insertData);
                alert('Thank you for submitting your assignments');
            }
        }
    }
};

  return (
    <div className='mb-4'>
    <div className='flex justify-center bold font-bold text-2xl pb-5'>Assignment</div>
    <div className=''>Building People Building Dreams</div>
    <div className='flex flex-row justify-between'>
        <div className='bg-red-500 texr-white rounded-xl px-2'>Due</div>
        <div className=''>2 May 2024</div>
    </div>
    <div className='justify-end flex px-2'>
    <div className='bg-black  text-white rounded-xl py-2 bold px-2' type="file" accept=".doc,.docx,.pdf" onClick={handleFileUpload}>Upload</div>
    </div>
    </div>

  )
}
