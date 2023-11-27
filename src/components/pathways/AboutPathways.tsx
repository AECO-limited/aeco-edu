import Image from 'next/image'
import React from 'react'
import { IoSchoolOutline, IoAirplaneOutline, IoWifiOutline } from 'react-icons/io5'

const AboutPathways = () => {
    return (
        <div>

            <div className="m-auto md:w-[85vw]">
                <div className="p-6">
                    <section className="shadow md:pl-5  bg-[var(--primary-500)] grid md:grid-cols-2 text-white">
                        <div className='flex flex-col justify-center p-5 ' >

                            <section className="space-y-4">
                                <div className=" text-gray-100">
                                    Our pathways avail students with the right knowledge, skills, competencies and attitude they need for education and career success in this new world(21st century).
                                </div>
                            </section>


                        </div>
                        <div>
                            <Image style={{ width: "100%", height: "100%" }} width="1000" height="500" src="/assets/landscape/pathways-1.jpg" alt=''></Image>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default AboutPathways