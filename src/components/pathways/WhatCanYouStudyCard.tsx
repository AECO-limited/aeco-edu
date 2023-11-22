import React from 'react'
import { IoSchoolOutline } from 'react-icons/io5'

const WhatCanYouStudyCard = () => {
    return (
        <section className='border border-[var(--secondary-500)]  space-y-4 rounded-md py-6 bg-white'>
            < div className='text-xl font-bold p-3 text-center' > study </div >
            <div >
                <IoSchoolOutline className='text-6xl m-auto text-[var(--secondary-500)]' />
            </div>
            <p className='p-3 text-gray-600 text-sm'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>

        </section >
    )
}

export default WhatCanYouStudyCard