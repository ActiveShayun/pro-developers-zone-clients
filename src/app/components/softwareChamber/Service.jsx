import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Service = () => {
    const cardData = [
        {
            'title': 'Web & Mobile App Development',
            'description': 'Software Chamber specializes in creating powerful, scalable, and secure e-',
            'bg': true
        },
        {
            'title': 'Application Software Services',
            'description': 'Software Chamber specializes in creating powerful, scalable, and secure e-'
        },
        {
            'title': 'Software Coding & Optimuation',
            'description': 'Software Chamber specializes in creating powerful, scalable, and secure e-',
            'bg': true
        }
    ]

    return (
        <div className='mt-24'>
            <h2 className='lg:text-7xl text-4xl font-medium lg:mb-12 mb-4'>
                Services
                <img className='inline-block' src={'/gemini.png'} alt="" />
            </h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                {
                    cardData.map(card => {
                        return <div
                            className={`${card.bg ? 'bg-[#F3F3F3] text-gray-500' : 'bg-[#27B4A3] text-white'} p-8 space-y-10 rounded-2xl`}
                            key={card.title}>
                            <h2 className={`${card.bg ? ' text-black' : 'text-white'} text-4xl`}>
                                {card.title}
                            </h2>
                            <p className='text-xl '>{card.description}</p>
                            <p className='bg-white inline-block p-3 rounded-full'>
                                <MdArrowOutward className='bg-white text-black  rounded-full flex items-center justify-center' />
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Service;