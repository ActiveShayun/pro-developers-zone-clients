import React from 'react';
import GradientStar from './GradientStar';
import Title from '../shared/title/Title';
import BasicBtn from '../shared/basicBtn/BasicBtn';
import SoftwareService from './SoftwareService';


const Banner = () => {
    return (

        <div>
            <div className='flex justify-center mb-8 lg:mb-11'>
                <div className='bg-radial-[at_40%_50%] from-black to-100% 
                 to-[#2CCEBA]/60 text-center py-3 px-3 rounded-full border border-[#2CCEBA]'>
                    <p className='text-lg text-white font-extralight flex items-center
                   '>
                        <GradientStar />
                        Smarter Idea, instant soultions
                    </p>
                </div>
            </div>
            {/* title */}
            <div className='lg:mb-[108px] mb-8'>
                <Title />
                <div className='flex justify-center mt-4 lg:mt-8'>
                    <BasicBtn text={'Contact Us'} />
                </div>
            </div>
            <div>
                <SoftwareService />
            </div>
        </div>


    )
};

export default Banner;