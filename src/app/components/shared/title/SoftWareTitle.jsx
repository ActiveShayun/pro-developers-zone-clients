import React from 'react';
import { SiGooglegemini } from "react-icons/si";
import { HiMiniArrowTrendingUp } from "react-icons/hi2"

const SoftWareTitle = () => {
    return (
        <h2 className='text-4xl lg:text-6xl font-medium lg:text-center text-left'>
            <img className='kg:h-12 h-10 w-10 inline-block' src={'/ai.PNG'} alt="" />
            At Software Chamber,
            <span className='text-gray-500 ml-2'>we specialize </span>
            in turning complex challenges into elegant
            <span className='text-gray-500 ml-3 lg:block'>digital solutions</span>
            <HiMiniArrowTrendingUp className="inline-block text-3xl lg:text-4xl -rotate-90 relative  lg:top-2 ml-1" />

        </h2>
    );
};

export default SoftWareTitle;