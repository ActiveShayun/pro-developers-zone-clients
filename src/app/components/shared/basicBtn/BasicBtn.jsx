'use client'
import React from 'react';
import { LuCircleArrowOutUpLeft } from "react-icons/lu";

const BasicBtn = ({ text }) => {
    return (
        <div className=' bg-gradient-to-l from-white/50 to-white/20 backdrop-blur-3xl w-[138px] rounded-full'>
            <button className='w-full flex items-center justify-between py-2.5 px-2  gap-8 '>
                <span className='text-2xl font-medium text-white'>{text}</span>
                <span className='bg-white text-black p-2 rounded-full -rotate-227'>
                    <LuCircleArrowOutUpLeft />
                </span>
            </button>
        </div>
    );
};

export default BasicBtn;
