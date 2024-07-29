
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
const supabase = createClient('https://nhgwlsmmqjlszkjncurg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ3dsc21tcWpsc3pram5jdXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzAyNzcsImV4cCI6MjAyNTI0NjI3N30.d_XWelkD4W4eo4R5eJybKzXfuG02WIemtAQwSU-oW1g');



const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase.from('realman').insert([{ name, surname, email, phone }]);
            if (error) {
                throw error;
            }
            console.log('Data inserted successfully:', data);
            // Reset the form
            setName('');
            setSurname('');
            setEmail('');
            setPhone('');
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Surname:
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Registration;
