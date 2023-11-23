import { IoLaptopOutline, IoPencilOutline, IoPeopleOutline, IoSchoolOutline } from "react-icons/io5";


export default function LanguageServices() {

    return (
        <div>

            <div className="grid md:grid-cols-2  m-auto gap-5 p-10 md:w-[80vw]">
                <div className="shadow  p-4 md:p-10 space-y-4 bg-white py-10 ">
                    <button className="p-2 bg-blue-500 rounded-md">
                        <IoPencilOutline className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Exam Preperations</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className="text-lg text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </div>

                </div>
                <div className="shadow  p-4 md:p-10  space-y-4 bg-white py-10">
                    <button className="p-2 bg-green-500 rounded-md">
                        <IoPeopleOutline className="text-3xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-3xl font-medium'>Language Training</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className="text-lg text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </div>

                </div>


            </div>
        </div>
    )
}