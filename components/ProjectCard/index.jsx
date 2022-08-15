import React from 'react';
import Image from 'next/image';

export const ProjectCard = ({ title, description, image }) =>
(
    <>
    
        <div className='flex flex-col items-center w-[30em] h-full bg-almost-black-100 rounded-2xl drop-shadow-md transition-all duration-300 hover:scale-95 hover:drop-shadow-2xl cursor-pointer'>
            <Image className='rounded-t-2xl w-full h-[20em] object-cover' src={image}/>
            <div className='flex flex-col p-10 gap-7'>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    
    </>
)