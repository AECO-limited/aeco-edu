import React from 'react'

import Image from "next/image"

export default function StudentRecruitments() {

    return (
        <section className="bg-white">
            <section >

                <section className=' md:w-[85vw] m-auto' id='student-recruitment'>
                    {/* <div className="h-4 bg-gray-50 my-16"></div> */}
                    <section className="p-6 ">
                        <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading2 mb-5'>Student Recruitment</h3>
                                    <div className=" font-light">
                                        We are dedicated to enabling education institutions recruit the best quality students locally and internationally. With over 7 years experience in the business of recruiting best quality students  as well as well counselors with over 11 years experienced in the business, we will help you institition exceed its recruitment goals season after season. Let us discuss how to optimize your brands visibility and student enrollment  exponentially.
                                    </div>
                                </section>
                            </div>
                            <div className='md:flex gap-x-4'>
                                <Image width="200" height="200" style={{
                                    width: "100%", objectFit: "cover", objectPosition: "center left"
                                }}
                                    className='rounded-md'
                                    src="/assets/landscape/pathways-1.jpg" alt='' ></Image>
                            </div>
                        </section>
                    </section>
                </section>

                <div className="h-4 bg-gray-50 my-16"></div>

                {/* <section className=' md:w-[85vw] m-auto'>
                    <section className="p-6 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading2 mb-5'>What we do</h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-3 grid gap-10'>
                                {[1, 1, 1].map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 p-6 bg-[var(--primary-500)] space-y-2 text-white'>
                                            <h2 className="">Service {index + 1}</h2>
                                            <div className=' font-light'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nemo sunt quo nobis aliquam aut veniam numquam voluptates iure doloremque.
                                            </div>

                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section> */}

                {/* <div className="h-4 bg-gray-50 my-16"></div> */}

                <section className=' md:w-[85vw] m-auto'>
                    <section className="p-6 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading3 mb-5'>Who we we recruit for? </h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-3 grid gap-10'>
                                {[
                                    "Universities and Colleges",
                                    "Vocational Trainining Institutions",
                                    "Language Training Institutions/Centers",
                                    "Junior/High Schools"
                                ].map((item, index) => {
                                    return (
                                        <div key={index} className='p-6 border-[var(--primary-500)] space-y-2 border rounded'>
                                            {/* <h2 className="text">Person {index + 1}</h2> */}
                                            <div className=' font-semibold'>
                                                {item}
                                            </div>

                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section>

                {/* <div className="h-4 bg-gray-50 my-16"></div>

                <section className=' md:w-[85vw] m-auto'>
                    <section className="p-6 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading2 mb-5'>How we recruit</h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-2 grid gap-5'>
                                {[1, 1, 1].map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 shadow md:p-5 border-[var(--primary-500)] space-y-2 border rounded'>
                                            <h2 className="">Step {index + 1}</h2>
                                            <div className=' font-light'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nemo sunt quo nobis aliquam aut veniam numquam voluptates iure doloremque.
                                            </div>

                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section> */}

                <div className="h-4 bg-white py-16"></div>


            </section >
        </section>
    )
}