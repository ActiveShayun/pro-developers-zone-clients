import React from 'react';
import SubBtn from '../shared/subbtn/SubBtn';


const SoftwareService = () => {
    return (
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-5
         items-start justify-between lg:min-h-[500px] w-full border border-red-800'>
            {/* Column 1 */}
            <div className='lg:col-span-1 justify-between w-ful h-full flex lg:flex-col lg:pt-20 lg:pb-4 text-white border border-red-800'>
                <div className='lg:relative'>
                    <SubBtn text={'Website Development'} />
                    <div className='hidden lg:block w-[30px] absolute right-3  
                      top-1/2 h-[40px] border-t border-r 
                    border-t-white/50 border-r-white/50  rounded-tr-xl'></div>
                </div>

                <div className='lg:relative'>
                    <SubBtn text={'Mobile App Development'} />
                    <div className='hidden lg:block w-[40px] absolute -top-16 -right-4 h-[40px] 
                     border-t border-l border-t-white/50 border-l-white/50 
                    rounded-tl-xl'></div>
                </div>
            </div>

            {/* Column 2 */}
            <div className='col-span-3 py-4 lg:py-7 h-full  w-full relative z-10
             rounded-2xl'>
                {/* Overlay blur background */}
                <div className='bg-[#3c7f81] opacity-35 shadow-[#3c7f81] absolute w-full 
                lg:min-h-[500px] h-full top-0 left-0 backdrop-blur-3xl rounded-2xl'></div>

                {/* Main content */}
                <div className='grid lg:grid-cols-5 grid-cols-1 w-full h-full items-center justify-between z-50 relative px-4 lg:px-9 py-3 lg:py-7'>

                    {/* Left box with buttons */}
                    <div className='col-span-3 w-full flex flex-col gap-4 border border-[#3b7f80]/40 px-4 py-4 lg:pt-10 rounded-2xl'
                        style={{
                            background: 'radial-gradient(circle at center, #3b7f80 40%, transparent 70%)'
                        }}
                    >
                        <div className='text-xl w-full flex justify-between items-start text-[#F8F8F8B3]'>
                            <p>Aug</p>
                            <p>Sep</p>
                            <p>Oct</p>
                        </div>
                        <div className='space-y-4 lg:space-y-8 py-4 lg:pb-10'>
                            <SubBtn text={'Mobile app'} position={true} service={true} />
                            <SubBtn text={'Software'} service={true} />
                            <SubBtn text={'Website'} service={true} position={true} />
                        </div>
                    </div>

                    {/* Right content */}
                    <div className='col-span-2 lg:mt-0 lg:ml-6 w-full'>
                        <h3 className='text-[28px] lg:text-[35px] font-medium text-white'>
                            Software Service Solutions
                        </h3>
                        <p className='text-base lg:text-lg text-white'>
                            Plan, track, and manage projects with precision tools.
                        </p>
                    </div>
                </div>
            </div>

            {/* Column 3 */}
            <div className='col-span-1 flex lg:flex-col flex-row  items-end justify-between h-full w-full lg:pt-20 lg:pb-4 text-white'>
                <div className='lg:relative'>
                    <SubBtn text={'Website Development'} />
                    <div className='hidden lg:block w-[30px] absolute -left-8  
                      top-1/2 h-[40px] border-t border-l 
                    border-t-white/50 border-r-white/50  rounded-tl-xl'></div>
                </div>

                <div className='lg:relative'>
                    <SubBtn text={'Mobile App Development'} />
                    <div className='hidden lg:block w-[40px] absolute -top-16 -left-6 h-[40px] 
                     border-t border-r border-t-white/50 border-l-white/50 
                    rounded-tr-xl'></div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareService;
