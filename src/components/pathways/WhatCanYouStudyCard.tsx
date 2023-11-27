import React from 'react'
import { IoSchoolOutline } from 'react-icons/io5'


interface Path {
    title: string;
    options: string[];
}


const WhatCanYouStudyCard: React.FC<{
    pathway: Path
}> = ({ pathway }) => {
    return (
        <section className='border border-[var(--secondary-500)] h-full space-y-4 rounded-md py-6 bg-white'>
            < div className='heading4 p-3 text-center' > {pathway.title} </div >
            <div >
                <IoSchoolOutline className=' text-5xl mb-5 m-auto text-[var(--secondary-500)]' />
            </div>
            <ul className='p-3 text-gray-600 '>
                {
                    pathway.options.map((option, index) => {
                        return (
                            <li key={index}>
                                {option}
                            </li>
                        )
                    })
                }
            </ul>

        </section >
    )
}

export default WhatCanYouStudyCard