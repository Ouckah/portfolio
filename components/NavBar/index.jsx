import React from 'react';

import { NavLink } from '../NavLink';

const icon = 'https://static.hudl.com/users/prod/13761413_f643c62bc0fa4c828142ceee77217c3f.jpg';

export const NavBar = () =>
(
    <>
    
        <div className='bg-almost-black-500 max-w-screen w-full h-28'>
            <div className='flex justify-evenly items-center px-20 w-full h-28'>
                <div className='flex flex-row justify-evenly items-center lg:gap-20 gap-8'>
                    
                    <NavLink text='Home' link='.'/>
                    <NavLink text='About' link='/about'/>
                    <NavLink text='Projects' link='/projects'/>

                </div>
            </div>
        </div>
    
    </>
)