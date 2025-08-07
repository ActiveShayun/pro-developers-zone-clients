'use client'
import React from 'react';
import BasicBtn from '../basicBtn/BasicBtn';
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
    return (
        <div className="navbar shadow-sm text-white">
            <div className="navbar-start">
                <div className='flex items-center gap-3'>
                    <div className='bg-gradient-to-t from-[#246965] to-black p-1 rounded-lg'>
                        <img
                            className='w-10 h-10'
                            src={'/navLogo.png'} alt="" />
                    </div>
                    <div>
                        <p className='font-medium'>Software</p>
                        <p className='tracking-[5px]'>Chamber</p>
                    </div>
                </div>
            </div>
            <div className="navbar-end lg:flex gap-4">
                <BasicBtn text={'C'} />
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className=" lg:hidden bg-white/50 backdrop-blur-3xl p-3 rounded-full flex items-center justify-center text-white">
                        <TbMenu3 className='text-2xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        menu
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;