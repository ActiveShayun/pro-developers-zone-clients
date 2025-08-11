import React from 'react';
import { BiSolidRadio } from "react-icons/bi";
import { TbUserScan } from "react-icons/tb";

const Title = (
    {
        firstLineText,
        secondLineTextOne,
        secondLineTextTwo,
        lastLineText
    }
) => {
    return (
        <div>
            <h1 className='lg:text-8xl text-4xl text-left font-medium text-white lg:text-center'>
                {/* first line */}
                <span className={'text-[#00FFE0] block'}>
                    {firstLineText}
                </span>
                {/* second line */}
                <span className='bg-gradient-to-b from-[#00FFE0] to-white  bg-clip-text text-transparent flex items-end justify-start lg:justify-center gap-4 border'
                >
                    {secondLineTextOne}
                    <span className={'bg-radial-[at_40%_50%] from-black to-100%  to-[#2CCEBA]/60 text-center rounded-xl text-white lg:p-3.5 p-1 relative top-3 lg:top-0'}
                    >
                        <BiSolidRadio className='lg:w-16 lg:h-16 w-10 h-10' />
                    </span>
                    <span className={`bg-radial-[at_40%_50%] from-black to-100% 
                   to-[#2CCEBA]/60 text-center rounded-xl text-white lg:p-3.5 p-1  p-1 relative top-3 lg:top-0`}>
                        <TbUserScan className='lg:w-16 lg:h-16 w-10 h-10' />
                    </span>
                    {secondLineTextTwo}
                </span>
                {/* third line */}
                <span>
                    {lastLineText}
                </span>
            </h1>
        </div>
    );
};

export default Title;

// At Software Chamber,
//  we specialize in
//   turning complex
//   challenges into
//   elegant digital solutions
//We are your Software  Devolopment        Team
// in The Cloud