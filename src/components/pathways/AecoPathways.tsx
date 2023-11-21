import Image from 'next/image'
import React from 'react'
import { IoSchool, IoSchoolOutline } from 'react-icons/io5'
import PartnerPathwayCard from './PartnerPathwayCard'
import { partners } from '@/pages'
import WhatCanYouStudyCard from './WhatCanYouStudyCard'

const AecoPathways = () => {
    return (
        <div className='bg-gray-50 px-8 md:px-0'>
            <div className="h-20"></div>

            <div className="m-auto md:w-[80vw] mb-10">
                <div className="p-10">
                    <section className=" px-4  grid md:grid-cols-2">
                        <div className='flex flex-col justify-center p-5' >

                            <section className="space-y-4">
                                <h3 className='text-4xl font-semibold'>International Year Programs (IYP)</h3>
                                <p className="text-sm text-gray-700">
                                    Our International Year Program is a transformative experience that prepares you for success in higher education. Designed for international students, this program combines language development, academic skills enhancement, and cultural integration, setting you up for a seamless transition to universities abroad. Immerse yourself in a supportive learning environment, gain invaluable cross-cultural insights, and develop the academic and personal skills needed to thrive in your future studies.
                                </p>
                            </section>


                        </div>
                        <div className='flex gap-x-4'>
                            <Image width="500" height="500" style={{
                                height: "400px", objectFit: "cover", width: "300px", objectPosition: "center right"
                            }}
                                className='rounded-md'
                                src="/assets/landscape/international.jpg" alt='' ></Image>
                            <Image width="500" height="500" style={{
                                height: "250px", objectFit: "cover", width: "200px", objectPosition: "center left"
                            }}
                                className='rounded-md'
                                src="/assets/landscape/international1.jpg" alt='' ></Image>
                        </div>

                    </section>
                </div>
                <div className='py-14'>
                    <h3 className='text-2xl font-semibold text-center mb-7'>
                        Present progression options
                    </h3>
                    <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                        {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                            return (
                                <section key={index} className='shadow-xl space-y-4 rounded-md py-6 bg-white'>
                                    <div className='text-xl font-bold p-3 text-center'>Progression {index + 1}</div>
                                    <div >
                                        <IoSchoolOutline className='text-6xl m-auto' />
                                    </div>
                                    <p className='p-3 text-gray-600 text-sm'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                                    </p>

                                </section>
                            )
                        })}
                    </aside>
                </div>
            </div >
            <section className="bg-white">
                <div className="m-auto md:w-[80vw] ">
                    <div className="p-10">
                        <section className=" px-4  grid md:grid-cols-2">

                            <div className='flex flex-col justify-center p-5' >

                                <section className="space-y-4">
                                    <h3 className='text-3xl font-semibold'>Why Join a pathway</h3>
                                    <p className="text-sm text-gray-700">AECO Education has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </p>

                                </section>


                            </div>
                            <div className='flex gap-x-4'>
                                <Image width="500" height="500" style={{
                                    width: "100%", objectFit: "cover", objectPosition: "center left"
                                }}
                                    className='rounded-md'
                                    src="/assets/landscape/international1.jpg" alt='' ></Image>
                            </div>
                        </section>
                    </div>

                    <div className='py-14'>
                        <h3 className='text-2xl font-semibold text-center mb-7'>
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
                    <div className='py-14 pb-24'>
                        <h3 className='text-2xl font-semibold text-center mb-7'>
                            What you can study
                        </h3>
                        <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                            {
                                [1, 1, 1, 1].map((item, index) => {
                                    return (
                                        <div key={index} className=''>
                                            <WhatCanYouStudyCard />
                                        </div>
                                    )
                                })
                            }
                        </aside>
                    </div>
                </div>

            </section>


            <section className="bg-white">
                <div className="m-auto md:w-[80vw] ">
                    <div className="p-10">
                        <section className=" px-4  grid md:grid-cols-2">

                            <div className='flex gap-x-4'>
                                <Image width="500" height="500" style={{
                                    height: "250px", objectFit: "cover", width: "200px", objectPosition: "center left"
                                }}
                                    className='rounded-md'
                                    src="/assets/landscape/international1.jpg" alt='' ></Image>
                                <Image width="500" height="500" style={{
                                    height: "400px", objectFit: "cover", width: "300px", objectPosition: "center right"
                                }}
                                    className='rounded-md'
                                    src="/assets/landscape/international.jpg" alt='' ></Image>

                            </div>

                            <div className='flex flex-col justify-center p-5' >

                                <section className="space-y-4">
                                    <h3 className='text-5xl font-semibold'>Partner Pathways</h3>
                                    <p className="text-sm text-gray-700">AECO Education has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </p>
                                </section>
                            </div>


                        </section>

                    </div>
                    <div className='py-24'>
                        <h3 className='text-2xl font-semibold text-center mb-7'>
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
                    </div>
                </div >
            </section>

        </div >
    )
}

export default AecoPathways