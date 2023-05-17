import React from 'react';

import { NavLink } from '../NavLink';

const icon = 'https://static.hudl.com/users/prod/13761413_f643c62bc0fa4c828142ceee77217c3f.jpg';

export const Header = () =>
(
    <>
    
        <div className='bg-almost-black-500 h-28'>
            <div className='flex flex-row justify-evenly items-center px-20 w-full h-28 p-5'>
                <div className='flex flex-row justify-evenly items-center gap-20'>
                    
                    <NavLink text='Home' link='.'/>
                    <NavLink text='About' link='/about'/>
                    <NavLink text='Projects' link='/projects'/>
                    <NavLink text='Socials' link='/socials'/>

                </div>
            </div>
        </div>
    
    </>
)