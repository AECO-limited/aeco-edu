import Image from 'next/image'
import React from 'react'
import { IoSchool, IoSchoolOutline } from 'react-icons/io5'
import PartnerPathwayCard from './PartnerPathwayCard'
import { partners } from '@/pages'
import WhatCanYouStudyCard from './WhatCanYouStudyCard'

const AecoPathways = () => {
    return (
        <div className=' px-2 md:px-0 bg-white'>

            <section className=" bg-white">
                <div className=' md:w-[86vw] m-auto pb-16' >
                    <div className="md:p-10 bg-[var(--primary-500)] text-white">
                        <section className=" px-4 py-10 md:py-0  grid md:grid-cols-2">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='text-6xl font-semibold'>International Year Programs (IYP)</h3>
                                    <div className="text-lg ">
                                        Our International Year Program is a transformative experience that prepares you for success in higher education. Designed for international students, this program combines language development, academic skills enhancement, and cultural integration, setting you up for a seamless transition to universities abroad. Immerse yourself in a supportive learning environment, gain invaluable cross-cultural insights, and develop the academic and personal skills needed to thrive in your future studies.
                                    </div>
                                </section>
                            </div>
                            <div className='md:flex gap-x-4 hidden '>
                                <div className="bg-[var(--secondary-500)] rounded">
                                    <Image width="500" height="500" className=' opacity-80 rounded' style={{
                                        height: "400px", objectFit: "cover", width: "300px", objectPosition: "center right"
                                    }}
                                        src="/assets/landscape/international.jpg" alt='' ></Image>
                                </div>
                                <div className='bg-[var(--secondary-500)] h-fit rounded'>
                                    <Image width="500" height="500" style={{
                                        height: "250px", objectFit: "cover", width: "200px", objectPosition: "center left"
                                    }}
                                        className='rounded-md opacity-70'
                                        src="/assets/landscape/international1.jpg" alt='' ></Image>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>

            </section >


            <div className="h-4 bg-gray-50"></div>

            <section className="bg-white py-10 md:py-0">
                <section className="m-auto md:w-[86vw] ">
                    <section className="md:p-10 ">
                        <section className=" px-4  grid md:grid-cols-2 gap-6">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='text-5xl font-semibold'>Why Join a pathway</h3>
                                    <div className="text-lg text-gray-700">AECO Education has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </div>

                                </section>
                            </div>
                            <div className='md:flex gap-x-4'>
                                <Image width="500" height="500" style={{
                                    width: "100%", objectFit: "cover", objectPosition: "center left"
                                }}
                                    className='rounded-md'
                                    src="/assets/landscape/international1.jpg" alt='' ></Image>
                            </div>
                        </section>
                    </section>
                </section>

                <div className="h-4 bg-gray-50 my-16"></div>


                <section className="m-auto md:w-[86vw] ">

                    <h3 className='text-5xl mb-4 font-semibold text-center '>
                        What you can study
                    </h3>
                    <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                        {
                            [1, 1, 1, 1].map((item, index) => {
                                return (
                                    <div key={index} className='text-center'>
                                        <WhatCanYouStudyCard />
                                    </div>
                                )
                            })
                        }
                    </aside>
                </section>


                <div className="h-4 bg-gray-50 my-16"></div>

                <section className="m-auto md:w-[86vw] mb-24">

                    <div className='mb-24'>
                        <h3 className='text-5xl font-semibold text-center mb-6'>
                            Where can you take our Pathways?
                        </h3>
                        <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                            {partners.map((item, index) => {
                                return (
                                    <section key={index} >
                                        <PartnerPathwayCard partner={item} />
                                    </section>
                                )
                            })}
                        </aside>
                    </div>

                </section>
            </section>


            {/* <div className="h-4 bg-gray-50 my-16"></div> */}


            <section className="bg-gray-50 py-16">
                <section className="m-auto md:w-[86vw] ">
                    <div className=''>
                        <h3 className='text-5xl font-semibold text-center mb-6'>
                            Progression Options
                        </h3>
                        <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                                return (
                                    <section key={index} className='shadow-xl text-center space-y-4 rounded-md py-6 bg-[var(--primary-500)] text-white'>
                                        <div className='text-2xl font-bold p-3 text-center '>Progression {index + 1}</div>
                                        <div >
                                            <IoSchoolOutline className='text-6xl m-auto ' />
                                        </div>
                                        <div className='p-3 text-lg font-light'>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                                        </div>

                                    </section>
                                )
                            })}
                        </aside>
                    </div>
                </section>
            </section>

            {/* <div className="h-10 bg-gray-50 my-16"></div> */}


            <section className="m-auto md:w-[86vw] ">
                <div className="md:p-10 mb-5 bg-[var(--primary-500)] text-white">
                    <section className=" px-4 py-10 md:py-0  grid md:grid-cols-2 ">

                        <div className='md:flex gap-x-4 hidden '>
                            <div className='bg-[var(--secondary-500)] h-fit rounded'>
                                <Image width="500" height="500" style={{
                                    height: "250px", objectFit: "cover", width: "200px", objectPosition: "center left"
                                }}
                                    className='rounded-md opacity-70'
                                    src="/assets/landscape/international1.jpg" alt='' ></Image>
                            </div>
                            <div className="bg-[var(--secondary-500)] rounded">
                                <Image width="500" height="500" className=' opacity-80 rounded' style={{
                                    height: "400px", objectFit: "cover", width: "300px", objectPosition: "center right"
                                }}
                                    src="/assets/landscape/international.jpg" alt='' ></Image>
                            </div>
                        </div>

                        <div className='md:flex flex-col justify-center md:p-5' >

                            <section className="space-y-4">
                                <h3 className='text-6xl font-semibold'>Partner Pathways</h3>
                                <div className="text-lg ">AECO Education has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </div>
                            </section>
                        </div>


                    </section>

                </div>
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>

            <section className='m-auto md:w-[86vw] mb-24'>
                <h3 className='text-5xl mb-6 font-semibold text-center '>
                    Partner institutions
                </h3>
                <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                    {partners.map((item, index) => {
                        return (
                            <section key={index} >
                                <PartnerPathwayCard partner={item} />
                            </section>
                        )
                    })}
                </aside>
            </section>
        </div >
    )
}

export default AecoPathways