import { IoLaptopOutline, IoPeopleOutline, IoSchoolOutline } from "react-icons/io5";

export default function EducationServicesStakeHolders() {

    return (
        <div>

            <div className="grid md:grid-cols-3  m-auto gap-5 p-10 md:w-[80vw]">
                <h3 className='text-5xl font-semibold col-span-3'>Benefits to Stakeholders</h3>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-blue-500 rounded-md">
                        <IoLaptopOutline className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Students</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-lg text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-green-500 rounded-md">
                        <IoPeopleOutline className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Parents</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-lg text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-yellow-500 rounded-md">
                        <IoSchoolOutline className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Teachers, Schools and Admins</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-lg text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>
                <div className="">

                </div>
            </div>
            <div className="h-4 bg-gray-50"></div>
        </div>
    )
}
