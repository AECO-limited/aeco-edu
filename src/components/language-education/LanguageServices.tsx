import { IoLaptopOutline, IoPencilOutline, IoPeopleOutline, IoSchoolOutline } from "react-icons/io5";


export default function LanguageServices() {

    return (
        <div>

            <div className="grid md:grid-cols-2  m-auto gap-5 p-10 md:w-[80vw]">
                <div className="shadow  p-4 p-6 space-y-4 bg-white py-10 ">
                    <button className="p-2 bg-blue-500 rounded-md">
                        <IoPencilOutline className=" text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className=' font-medium'>Language Exam</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" text-gray-700">
                        Ace the most important international language certifications
                    </div>

                </div>
                <div className="shadow  p-4 p-6  space-y-4 bg-white py-10">
                    <button className="p-2 bg-green-500 rounded-md">
                        <IoPeopleOutline className=" text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className=' font-medium'>Language Training</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <div className=" text-gray-700">
                        Improve your language level to gain confidence in everyday speech
                    </div>

                </div>


            </div>
        </div>
    )
}