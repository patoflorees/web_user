"use client";

import { useState } from 'react';
import Link from 'next/link';


export default function Page2() {
    const [color, setColor] = useState('gray');

    const changeColor = (newColor:string) => {
        setColor(newColor);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            
            <div className='w-64 h-32 mb-4' style={{backgroundColor: color}}></div>
            <div className='grid grid-cols-2 gap-4'>
                <button 
                    onClick={() => changeColor('red')}
                    className='w-32 h-16 bg-red-500 text-white rounded=md'
                >
                    Red
                </button>
                <button 
                    onClick={() => changeColor('green')}
                    className='w-32 h-16 bg-green-500 text-white rounded=md'
                >
                    Green
                </button>
                <button 
                    onClick={() => changeColor('blue')}
                    className='w-32 h-16 bg-blue-500 text-white rounded=md'
                >
                    Blue
                </button>
                <button 
                    onClick={() => changeColor('yellow')}
                    className='w-32 h-16 bg-yellow-500 text-white rounded=md'
                >
                    Yellow
                </button>
                
            </div>
            <button 
                    onClick={() => changeColor('gray')}
                    className='w-32 h-16 bg-white-500 text-black rounded=md'
                >
                    Reset
                </button>
        </div>
    );
  }
