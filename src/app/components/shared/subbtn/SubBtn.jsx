import React from 'react';
import { BsFileEarmarkCheck } from "react-icons/bs";

const SubBtn = ({ text, service, position }) => {
    return (
        <button className={`${position ? 'lg:relative left-22' : ''}
             ${service ? 'lg:w-[332px] bg-none bg-transparent border-2 border-white/20 shadow-2xl text-xl' :
                ''} bg-gradient-to-l from-white/50 to-white/10 backdrop-blur-3xl text-white p-3.5  rounded-xl flex items-center gap-2 lg:gap-4 shadow-2xl`}>
            <BsFileEarmarkCheck className={`${service ? 'hidden' : 'block'}`} />
            {text}
        </button>
    )
};

export default SubBtn;