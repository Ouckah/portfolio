import React from 'react';
import Image from 'next/image';

import { NavLink } from '../NavLink';

const icon = 'https://static.hudl.com/users/prod/13761413_f643c62bc0fa4c828142ceee77217c3f.jpg';

export const Header = () =>
(
    <>
    
        <div className='static bg-almost-black-500 h-28'>
            <div className='fixed flex flex-row justify-between items-center px-20 w-full p-5'>
                <Image className='w-20 h-20 rounded-full' src={icon}/>
                <div className='flex flex-row justify-evenly items-center gap-20'>
                    
                    <NavLink text='Home' link='.'/>
                    <NavLink text='About' link='/about'/>
                    <NavLink text='Socials' link='/socials'/>

                </div>
                <div className='w-20'/>
            </div>
        </div>
    
    </>
)