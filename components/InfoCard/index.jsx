import React from 'react';
export const InfoCard = ({ title, description, image, emoji }) =>
(
    <>
    
        <div className='flex xl:flex-row flex-col gap-5 items-center w-2/3 h-full bg-almost-black-500 rounded-2xl drop-shadow-md transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-2xl'>
            <img className='xl:rounded-l-2xl rounded-t-2xl w-full h-60 object-cover' src={image}/>
            <div className='flex flex-col p-6 gap-4'>
                <h1 className='text-3xl font-semibold h-1/2'>{title}</h1>
                <p className='text-lg h-30'>{description}</p>
            </div>
            <img className='w-1/3 h-36 xl:pr-10 pb-10 object-contain' src={emoji}/>
        </div>
    
    </>
)