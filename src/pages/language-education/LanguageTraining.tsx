import Image from "next/image"
import { partners } from ".."
import PartnerPathwayCard from "@/components/pathways/PartnerPathwayCard"

export default function LanguageTraining() {

    return (
        <section>
            <section className="m-auto md:w-[86vw]  " id="language-trainings">
                <section>
                    <section className="p-6 bg-[var(--primary-500)] text-white">
                        <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading2 mb-5'>Language Training</h3>
                                    <div className=" ">
                                        Here, we work in collaboration with language training institutions from around the globe. We help students find and be placed in the best language institutions to prepare them for their language exams
                                    </div>

                                </section>
                            </div>
                            <div className='md:flex gap-x-4'>
                                <Image width="500" height="500" style={{
                                    width: "100%", objectFit: "cover", objectPosition: "center left"
                                }}
                                    className='rounded-md'
                                    src="/assets/landscape/international1.jpg" alt='' ></Image>
                            </div>
                        </section>
                    </section>

                    {/* <div className="h-4 bg-gray-50 my-16"></div> */}
                </section>





                {/* <section className=' md:w-[85vw] m-auto'>
                    <section className="p-6 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading2 mb-5 mb-10'>Our Languages</h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-3 grid gap-5 md:gap-10'>
                                {[1, 1, 1].map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 p-6 bg-[var(--primary-500)] space-y-2 text-white'>
                                            <h2 className="">Lang {index + 1}</h2>
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

            </section>


            {/* <div className="h-4 bg-gray-50 my-16"></div>

            <section className=' md:w-[85vw] m-auto'>
                <section className="md:pb-10 ">
                    <section className="px-4">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='heading2 mb-5 mb-10'>Our Language Exams</h3>
                            </section>
                        </div>
                        <section className='md:grid-cols-3 grid gap-10'>
                            {[1, 1, 1].map((item, index) => {
                                return (
                                    <div key={index} className='p-4 p-6 border-[var(--primary-500)] space-y-2 border rounded'>
                                        <h2 className="">Exam {index + 1}</h2>
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

            <div className=" bg-white h-20"></div>




        </section>
    )
}