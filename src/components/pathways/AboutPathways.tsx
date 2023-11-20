import Image from 'next/image'
import React from 'react'
import { IoSchoolOutline, IoAirplaneOutline, IoWifiOutline } from 'react-icons/io5'

const AboutPathways = () => {
    return (
        <div>

            <div className="m-auto md:w-[80vw]">
                <div className="p-10">
                    <section className="shadow px-4  bg-white grid md:grid-cols-2">
                        <div className='flex flex-col justify-center p-5' >

                            <section className="space-y-4">
                                <h3 className='text-3xl font-semibold'>AECO Education Pathways</h3>
                                <p className="text-sm text-gray-700">
                                    Studying locally offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                                </p>
                            </section>


                        </div>
                        <div>
                            <Image style={{ width: "100%", height: "100%" }} width="500" height="500" src="/assets/landscape/pathways-1.jpg" alt=''></Image>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default AboutPathways