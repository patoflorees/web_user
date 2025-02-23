'use client';
import {useState } from 'react';

export default function Counter(){
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState('');

    const handleIncrease = (e: React.FormEvent) =>{
        e.preventDefault();
        setCounter(counter + 1);
        setError(''); // If counter can increase, leave error message empty   
};
    const handleDecrease = (e: React.FormEvent) =>{
        e.preventDefault();
        if (counter > 0) {
        setCounter(counter - 1);
        setError(''); // If counter can decrease, leave error message empty
        } else {
            setError('Error: Counter cannot go below 0.');
        }
};
    return(
        <main className = "flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">{counter}</h1>
            {error && <p className="text-red-600">{error}</p>}
                <button
                   onClick={handleIncrease}
                    className="w-60 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                    Increase number
                </button>
                
                    <button
                        onClick={handleDecrease}
                        className="w-60 bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition-colors"
                        >
                        Decrease number
                    </button>
                
            
        </main>
    );
}