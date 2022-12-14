import React from 'react';
import Image from 'next/image';

export const InfoCard = ({ title, description, image, emoji }) =>
(
    <>
    
        <div className='flex flex-row items-center w-2/3 h-[20em] bg-almost-black-500 rounded-2xl drop-shadow-md transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-2xl'>
            <Image className='rounded-l-2xl h-full' src={image}/>
            <div className='flex flex-col p-10 gap-7'>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p className='text-xl'>{description}</p>
            </div>
            <Image className='w-1/2 h-1/2 pr-14' src={emoji}/>
        </div>
    
    </>
)