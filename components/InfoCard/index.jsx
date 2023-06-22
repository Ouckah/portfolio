import React from 'react';

/*
  Emojis: https://emoji.craftwork.design/
*/

export const InfoCard = ({ title, description, image, emoji, primary, top }) =>
{
    if (primary) 
    {
        return (
            <>
    
                <div className='flex xl:flex-row flex-col gap-5 items-center w-full h-full bg-almost-black-500 rounded-2xl drop-shadow-md transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-2xl'>
                    <img className='xl:rounded-l-2xl rounded-t-2xl w-full h-60 object-cover' src={image}/>
                    <div className='flex flex-col p-6 gap-4'>
                        <h1 className='text-3xl font-semibold h-1/2'>{title}</h1>
                        <p className='text-lg h-30'>{description}</p>
                    </div>
                    {
                        top ? 
                        (<img className='w-1/3 h-36 xl:pr-10 xl:pb-0 pb-10 object-contain object-top' src={emoji}/>) 
                        : 
                        (<img className='w-1/3 h-36 xl:pr-10 xl:pb-0 pb-10 object-contain' src={emoji}/>)
                    }
                </div>
            
            </>
        )
    }
    else
    {
        return (
            <>
    
                <div className='flex xl:flex-row flex-col gap-5 items-center w-full h-full bg-almost-black-500 rounded-2xl drop-shadow-md transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-2xl'>
                    <img className='w-1/3 h-36 xl:pl-10 xl:pt-0 pt-10 object-contain' src={emoji}/>
                    <div className='flex flex-col p-6 gap-4'>
                        <h1 className='text-3xl font-semibold h-1/2'>{title}</h1>
                        <p className='text-lg h-30'>{description}</p>
                    </div>
                    {
                        top ?
                        (<img className='xl:rounded-r-2xl xl:rounded-b-none rounded-b-2xl w-full h-60 object-cover object-top' src={image}/>) 
                        : 
                        (<img className='xl:rounded-r-2xl xl:rounded-b-none rounded-b-2xl w-full h-60 object-cover' src={image}/>)
                    }
                </div>
            
            </>
        )
    }
}