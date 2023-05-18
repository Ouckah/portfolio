import Link from 'next/link';
import React from 'react';

export const ProjectCard = ({ title, description, image, date, link }) =>
(
    <>

        <Link href={"projects/" + link}>
            <div className='flex flex-col items-center max-w-screen w-auto h-full bg-almost-black-100 rounded-2xl drop-shadow-md transition-all duration-300 hover:scale-95 hover:drop-shadow-2xl cursor-pointer'>
                <img className='rounded-t-2xl w-full h-[20em] object-cover' src={image}/>
                <div className='flex flex-col p-10 gap-7'>
                    <h1 className='text-4xl font-semibold'>{title}</h1>
                    <p className='text-xl'>{description}</p>
                    <p className='text-lg italic opacity-50'>{date}</p>
                </div>
            </div>
        </Link> 
    
    </>
)