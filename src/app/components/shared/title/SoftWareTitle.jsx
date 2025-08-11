import React from 'react';
import { SiGooglegemini } from "react-icons/si";
import { HiMiniArrowTrendingUp } from "react-icons/hi2"

const SoftWareTitle = ({ firstLine, greyText, lastText, secondLine, lastLine }) => {
    return (
        <h1 className="text-4xl lg:text-6xl font-medium space-y-2 lg:text-center text-left">
            <span className="lg:flex flex-wrap items-center lg:justify-center justify-start gap-2">
                <img className='h-12 w-12' src={'/gemini.png'} alt="" />
                <span>{firstLine}</span>
                <span className="text-gray-500 lg:mx-3">{greyText}</span>
                {lastText}
            </span>
            <span className="lg:block lg:mt-3">{secondLine}</span>
            <span className="text-gray-500 lg:flex items-center lg:justify-center justify-start mt-2">
                {lastLine}
                <HiMiniArrowTrendingUp className="text-3xl lg:text-4xl -rotate-90 relative top-1 lg:top-2 ml-1" />
            </span>

        </h1>

    );
};

export default SoftWareTitle;