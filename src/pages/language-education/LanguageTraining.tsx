import Image from "next/image"
import { partners } from ".."
import PartnerPathwayCard from "@/components/pathways/PartnerPathwayCard"
import { languages } from "@/components/language-education/_data"

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
                                        The solution for learning a new language
                                        Begin or continue learning the language of your choice. Practice, speak, and gain confidence.
                                        With our unique approach and global leading partners delivering premium language training, we will provide you with the perfect solution for the language you desired to learn any where you are or in your preferred destination.
                                    </div>

                                </section>
                            </div>
                            <div className='md:flex gap-x-4'>
                                <Image width="300" height="300" style={{
                                    width: "100%", objectFit: "cover", objectPosition: "center left"
                                }}
                                    className='rounded-md'
                                    src="/assets/landscape/international1.jpg" alt='' ></Image>
                            </div>
                        </section>
                    </section>

                    <div className="h-4 bg-gray-50 my-16"></div>
                </section>





                <section className=' md:w-[90vw] m-auto'>
                    <section className="p-6 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading3 mb-5'>Our Languages</h3>
                                    <p>What Language will you like to Learn ?</p>
                                </section>
                            </div>
                            <section className='md:grid-cols-3 grid gap-5 md:gap-10'>
                                {languages.map((lang, index) => {
                                    return (
                                        <div key={index} className='p-6 bg-[var(--primary-500)] space-y-2 text-white'>
                                            <h2 className="">{lang.language}</h2>
                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section>

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