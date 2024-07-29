

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://ftfeuxtlygcirfcukrwi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0ZmV1eHRseWdjaXJmY3VrcndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0OTU4NzQsImV4cCI6MjAyNTA3MTg3NH0.6-3zKHOxW-PvvUnV9Uq3WNT_R-oK1yLgpiHV4820oWM');

function UploadButton() {
    const [selectedDocument, setSelectedDocument] = useState(null);

    const handleDocumentUpload = async (event) => {
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
                    alert('Document uploaded successfully!');
                }
            }
        }
    };

    return (
        <div>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleDocumentUpload} />
        </div>
    );
}

export default UploadButton;