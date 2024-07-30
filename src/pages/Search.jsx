import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://bywjfszqwytcvsftccvd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5d2pmc3pxd3l0Y3ZzZnRjY3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNDI5NTksImV4cCI6MjAzNzgxODk1OX0.DTRQvPueJoTGcvfaa6_5BfQPq9yD13Si6OI2y3rqy5k');

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const { data, error } = await supabase
                .from('Marathon')
                .select('*')
                .ilike('Name', `%${searchTerm}%`);

            if (error) {
                throw error;
            }

            setSearchResults(data);
        } catch (error) {
            console.error('Error searching data:', error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {searchResults.map((result) => (
                <div key={result.id}>{result.name}</div>
            ))}
        </div>
    );
}
