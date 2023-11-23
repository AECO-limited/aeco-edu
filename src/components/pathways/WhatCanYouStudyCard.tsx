import React from 'react'
import { IoSchoolOutline } from 'react-icons/io5'

const WhatCanYouStudyCard = () => {
    return (
        <section className='border border-[var(--secondary-500)]  space-y-4 rounded-md py-6 bg-white'>
            < div className='text-2xl font-bold p-3 text-center' > study </div >
            <div >
                <IoSchoolOutline className='text-3xl md:text-6xl m-auto text-[var(--secondary-500)]' />
            </div>
            <div className='p-3 text-gray-600 '>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </div>

        </section >
    )
}

export default WhatCanYouStudyCard