'use client'
import React from 'react';
import SoftWareTitle from '../shared/title/SoftWareTitle';


const SoftWareChamber = () => {
    return (
        <div className='bg-white lg:mt-[108px] mt-16 lg:py-20 py-10 px-4 lg:px-8'>
            <div>
                <SoftWareTitle
                    firstLine={' At Software Chamber,'}
                    greyText={'we specialize'}
                    lastText={'in'}
                    secondLine={'turning complex challenges into elegant'}
                    lastLine={'digital solutions'}
                />
            </div>
            <section className='grid grid-cols-1 lg:grid-cols-8 gap-4 w-full h-[500px] mt-4 lg:mt-20'>
                {/* col 1 */}
                <div className='flex flex-col justify-between col-span-2'>
                    <div>
                        <span className='text-6xl block mb-3'>20+</span>
                        <span className='text-3xl text-gray-500'>Tech Partners</span>
                    </div>
                    <div>
                        <span className='text-6xl block mb-3'>150+</span>
                        <span className='text-3xl text-gray-500'>Project Completed</span>
                    </div>
                    <div>
                        <span className='text-6xl block mb-3'>1K+</span>
                        <span className='text-3xl text-gray-500'>Satisfied Customers</span>
                    </div>
                </div>
                {/* col 1 */}
                <div className='col-span-3 relative h-full w-full group overflow-hidden'>
                    <img 
                    className='h-full object-cover rounded-xl group-hover:scale-120 transition transform duration-600 overflow-hidden'
                     src={'/business.jpg'} alt="" />
                    <div className='h-full w-full absolute top-0 left-0 bg-black rounded-xl opacity-40'></div>
                </div>
                {/* col 3 */}
                <div className='col-span-3'>
                    <img src={'/business.jpg'} alt="" />
                </div>
            </section>
        </div>
    );
};

export default SoftWareChamber;

//At Software Chamber,
// we specialize in 