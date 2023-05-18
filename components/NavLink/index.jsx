import React from 'react';
import Link from 'next/link';



export const NavLink = ({ text, link }) =>
(
    <>
    
        <Link href={link}>
            <a><h1 className='lg:text-3xl text-lg font-bold uppercase transition duration-300 hover:blur-sm'>{text}</h1></a>
        </Link>
    
    </>
)