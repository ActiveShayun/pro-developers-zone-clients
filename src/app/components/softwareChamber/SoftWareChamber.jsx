'use client'
import React from 'react';
import SoftWareTitle from '../shared/title/SoftWareTitle';


const SoftWareChamber = () => {
    return (
        <div className='bg-white lg:mt-[108px] mt-16 lg:py-20 py-10 px-4 lg:px-8'>
            <div>
                <SoftWareTitle />
            </div>
            <section className='grid grid-cols-1 lg:grid-cols-10 gap-4 w-full h-[500px] mt-4 lg:mt-20'>
                {/* col 1 */}
                <div className='flex flex-col justify-between col-span-2'>
                    <div>
                        <span className='text-5xl block mb-3'>20+</span>
                        <span className='text-3xl text-gray-500'>Tech Partners</span>
                    </div>
                    <div>
                        <span className='text-5xl block mb-3'>150+</span>
                        <span className='text-3xl text-gray-500'>Project Completed</span>
                    </div>
                    <div>
                        <span className='text-5xl block mb-3'>1K+</span>
                        <span className='text-3xl text-gray-500'>Satisfied Customers</span>
                    </div>
                </div>
                {/* col 2 */}
                <div className='col-span-5 relative h-full w-full group overflow-hidden'>
                    <img
                        className='h-full object-cover rounded-xl group-hover:scale-120 transition transform duration-600 overflow-hidden'
                        src={'/business.jpg'} alt="" />
                    <div className='h-full w-full absolute top-0 left-0 bg-black rounded-xl opacity-40'></div>
                </div>
                {/* col 3 */}
                <div className='col-span-5 flex flex-col justify-between'>
                    <div className='grid grid-cols-6 items-start gap-4'>
                        <div className='col-span-1 bg-[#27B4A3] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                            <p className='bg-white w-2 h-2 p-3 flex items-center justify-center text-black rounded-full'>
                                1
                            </p>
                        </div>
                        <div className='col-span-5'>
                            <h5 className='text-3xl'>Your Team in the cloud</h5>
                            <p>We Hire Best and brightest Talents to build world class technology</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 items-start gap-4'>
                        <div className='col-span-1 bg-[#27B4A3] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                            <p className='bg-white w-2 h-2 p-3 flex items-center justify-center text-black rounded-full'>
                                1
                            </p>
                        </div>
                        <div className='col-span-5'>
                            <h5 className='text-4xl'>Grow more with less</h5>
                            <p>We have a competitive pricing structure</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 items-start gap-4'>
                        <div className='col-span-1 bg-[#27B4A3] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                            <p className='bg-white w-2 h-2 p-3 flex items-center justify-center text-black rounded-full'>
                                1
                            </p>
                        </div>
                        <div className='col-span-5'>
                            <h5 className='text-4xl'>Weekly sprint and reviews</h5>
                            <p>Our fast review and feedback loop is designed to keep in you in the driver's seat</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 items-start'>
                        <div className='col-span-1 bg-[#27B4A3] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                            <p className='bg-white w-2 h-2 p-3 flex items-center justify-center text-black rounded-full'>
                                1
                            </p>
                        </div>
                        <div  className='col-span-5'>
                            <h5 className='text-4xl'>Communication First</h5>
                            <p>We use modem tools and services to collaborate</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoftWareChamber;

