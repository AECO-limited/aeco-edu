import { IoLaptopOutline, IoPeopleOutline, IoSchoolOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";




export default function EducationServicesStakeHolders() {

    return (
        <div className="">

            <section className="md:grid grid-cols-4 space-y-6  m-auto gap-5 p-6 md:w-[80vw]">
                <h3 className='heading2 mb-5 col-span-4'>Benefits to Stakeholders</h3>
                <div className="shadow p-4 space-y-4 border border-orange-300 rounded-md  py-10 ">
                    <button className="p-2 bg-orange-500 rounded-md">
                        <IoSchoolOutline className=" " />
                    </button>
                    <section className="space-y-2">
                        <h3 className=' font-medium'>Schools</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" font-light">
                        Improve efficiency by automating all the processes in your school with the most powerful school management platform.
                        Enable Better Outcomes for School Admin
                    </div>

                </div>

                <div className="shadow p-4 space-y-4 border border-orange-300 rounded-md  py-10  ">
                    <button className="p-2 bg-orange-500 rounded-md">
                        <FaChalkboardTeacher className=" " />
                    </button>
                    <section className="space-y-2">
                        <h3 className=' font-medium'>Teachers</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" font-light">
                        Create an enriching learning environment in your school by integrating top digital tools that make classroom operations seamless.
                        Enable Better Outcomes for School Teacher
                    </div>

                </div>

                <div className="shadow p-4 space-y-4 border border-orange-300 rounded-md  py-10 ">
                    <button className="p-2 bg-orange-500 rounded-md">
                        <IoLaptopOutline className=" " />
                    </button>
                    <section className="space-y-2">
                        <h3 className=' font-medium'>Students</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" font-light">
                        Never miss a session and engage in continuous learning with the assistance of classroom recordings, limitless practice questions and so much more!
                        Enable Better Outcomes for School Student
                    </div>

                </div>
                <div className="shadow p-4 space-y-4 border border-orange-300 rounded-md  py-10  ">
                    <button className="p-2 bg-orange-500 rounded-md">
                        <IoPeopleOutline className=" " />
                    </button>
                    <section className="space-y-2">
                        <h3 className=' font-medium'>Parents</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" font-light">
                        Get complete transparency over your child’s progress and stay up to date on all school activities. A unique opportunity for parents to be involved in the training process of their children.
                    </div>

                </div>

                <div className="">

                </div>
            </section>
            <div className="h-4 bg-gray-50"></div>
        </div>
    )
}
