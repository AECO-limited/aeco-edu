import React from 'react'
import { IoSchoolOutline, IoAirplaneOutline, IoWifiOutline } from 'react-icons/io5'

const DescriptionCards = () => {
    return (
        <div>

            <div className="grid md:grid-cols-3  m-auto gap-5 p-10 md:w-[80vw]">
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-blue-500 rounded-md">
                        <IoSchoolOutline className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Study Locally</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" text-gray-700">
                        Studying locally offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </div>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-green-500 rounded-md">
                        <IoAirplaneOutline className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Study Abroad</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" text-gray-700">
                        Studying locally offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </div>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-yellow-500 rounded-md">
                        <IoWifiOutline className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Study Online</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" text-gray-700">
                        Studying locally offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DescriptionCards