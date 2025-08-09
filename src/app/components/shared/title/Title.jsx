import React from 'react';
import { BiSolidRadio } from "react-icons/bi";
import { TbUserScan } from "react-icons/tb";

const Title = () => {
    return (
        <div>
            <h1 className='text-9xl font-medium text-white text-center'>
                <span className='text-[#00FFE0] block'>
                    We are your Software
                </span>
                <span className='bg-gradient-to-b from-[#00FFE0] to-white
                bg-clip-text text-transparent flex items-end gap-4'>
                    Development
                    <span className='bg-radial-[at_40%_50%] from-black to-100% 
                 to-[#2CCEBA]/60 text-center rounded-xl text-white p-3.5 '>
                        <BiSolidRadio className='w-16 h-16' />
                    </span>
                    <span className='bg-radial-[at_40%_50%] from-black to-100% 
                 to-[#2CCEBA]/60 text-center rounded-xl text-white p-3.5 '>
                        <TbUserScan className='w-16 h-16' />
                    </span>
                    Team
                </span>
                <span>
                    in The Cloud
                </span>
            </h1>
        </div>
    );
};

export default Title;