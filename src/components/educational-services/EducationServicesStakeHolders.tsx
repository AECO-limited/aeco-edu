import { IoLaptopOutline, IoPeopleOutline, IoSchoolOutline } from "react-icons/io5";

export default function EducationServicesStakeHolders() {

    return (
        <div className="">

            <section className="mid:grid md:grid-cols-3 space-y-6  m-auto gap-5 p-6 md:w-[80vw]">
                <h3 className='text-4xl md:text-6xl mb-5 font-semibold col-span-3'>Benefits to Stakeholders</h3>
                <div className="shadow p-4 space-y-4 border border-orange-300 rounded-md  py-10 ">
                    <button className="p-2 bg-orange-500 rounded-md">
                        <IoLaptopOutline className="text-3xl " />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Students</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" font-light">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </div>

                </div>
                <div className="shadow p-4 space-y-4 border border-orange-300 rounded-md  py-10  ">
                    <button className="p-2 bg-orange-500 rounded-md">
                        <IoPeopleOutline className="text-3xl " />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Parents</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" font-light">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </div>

                </div>
                <div className="shadow p-4 space-y-4 border border-orange-300 rounded-md  py-10  ">
                    <button className="p-2 bg-orange-500 rounded-md">
                        <IoSchoolOutline className="text-3xl " />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Teachers, Schools and Admins</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" font-light">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </div>

                </div>
                <div className="">

                </div>
            </section>
            <div className="h-4 bg-gray-50"></div>
        </div>
    )
}
