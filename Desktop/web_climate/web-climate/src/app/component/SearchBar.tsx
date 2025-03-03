'use client';
import {useState} from 'react';

const SearchBar = ({ onSearch }) => {
    const[city,setCity] = useState('');

    const handleSearch = () => {
        if (city) {
            onSearch(city);
            setCity('');
        }
    };

    return(
        <div className = "flex items-center space-x-4">
            <input
                type = "text"
                value = {city}
                onChange = {(e) => setCity(e.target.value)}
                placeholder = "Enter city name"
                className = "p-2 border rounded"
            />
            <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </div>
    );
};

export default SearchBar;