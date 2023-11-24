import React from 'react'
import { IoSchoolOutline, IoAirplaneOutline, IoWifiOutline } from 'react-icons/io5'
import { FaCcVisa, FaPeopleCarryBox, FaSchoolFlag } from "react-icons/fa6";

const DescriptionCards = () => {
    return (
        <div>

            <div className="grid md:grid-cols-3  m-auto gap-5 p-10 md:w-[80vw]">
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-blue-500 rounded-md">
                        <FaPeopleCarryBox className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Counseling</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" text-gray-700">
                        Our certified International Education Counselors will understand your career aspirations, lifestyle, and goals to provide personalized advice. As an independent entity, we offer only the finest study programs and institution options for you and your country.
                    </div>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-green-500 rounded-md">
                        <FaSchoolFlag className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Admission Processing </h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" text-gray-700">
                        We are fast, reliable, and experienced in handling applications to institutions of learning worldwide. We'll handle the process, you just need transcripts, certificates, finances, and language requirements.
                    </div>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-yellow-500 rounded-md">
                        <FaCcVisa className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Visa Guidance</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" text-gray-700">
                        Visa processes can be daunting. Trust our experienced team to guide you on documentation and requirements for study visas or residency permits. We handle applications and ensure compliance with your new course.
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DescriptionCards