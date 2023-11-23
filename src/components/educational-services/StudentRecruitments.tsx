import React from 'react'

import Image from "next/image"

export default function StudentRecruitments() {

    return (
        <section className="bg-white">
            <section >

                <section className=' md:w-[85vw] m-auto'>
                    {/* <div className="h-4 bg-gray-50 my-16"></div> */}
                    <section className="md:p-10 text-white bg-[var(--primary-500)]">
                        <section className=" px-4  grid md:grid-cols-2 gap-6">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='text-3xl md:text-6xl font-semibold'>Student Recruitment</h3>
                                    <div className=" font-light">AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, </div>

                                </section>
                            </div>
                            <div className='md:flex gap-x-4'>
                                <Image width="500" height="500" style={{
                                    width: "100%", objectFit: "cover", objectPosition: "center left"
                                }}
                                    className='rounded-md'
                                    src="/assets/landscape/pathways-1.jpg" alt='' ></Image>
                            </div>
                        </section>
                    </section>
                </section>

                <div className="h-4 bg-gray-50 my-16"></div>

                <section className=' md:w-[85vw] m-auto'>
                    <section className="md:p-10 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='text-3xl md:text-6xl font-semibold'>What we do</h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-3 grid gap-10'>
                                {[1, 1, 1].map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 md:p-10 bg-[var(--primary-500)] space-y-2 text-white'>
                                            <h2 className="text-3xl">Service {index + 1}</h2>
                                            <div className=' font-light'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nemo sunt quo nobis aliquam aut veniam numquam voluptates iure doloremque.
                                            </div>

                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section>

                <div className="h-4 bg-gray-50 my-16"></div>

                <section className=' md:w-[85vw] m-auto'>
                    <section className="md:p-10 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='text-3xl md:text-6xl font-semibold'>Who we offer it to </h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-3 grid gap-10'>
                                {[1, 1, 1].map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 md:p-10 border-[var(--primary-500)] space-y-2 border rounded'>
                                            <h2 className="text-3xl">Person {index + 1}</h2>
                                            <div className=' font-light'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nemo sunt quo nobis aliquam aut veniam numquam voluptates iure doloremque.
                                            </div>

                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section>

                <div className="h-4 bg-gray-50 my-16"></div>

                <section className=' md:w-[85vw] m-auto'>
                    <section className="md:p-10 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='text-3xl md:text-6xl font-semibold'>How we recruit</h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-2 grid gap-5'>
                                {[1, 1, 1].map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 shadow md:p-5 border-[var(--primary-500)] space-y-2 border rounded'>
                                            <h2 className="text-3xl">Step {index + 1}</h2>
                                            <div className=' font-light'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nemo sunt quo nobis aliquam aut veniam numquam voluptates iure doloremque.
                                            </div>

                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section>

                <div className="h-4 bg-gray-50 my-16"></div>


            </section >
        </section>
    )
}