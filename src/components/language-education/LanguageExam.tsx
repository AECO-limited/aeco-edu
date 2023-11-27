import Image from "next/image"

export default function LanguageExam() {

    return (
        <section>
            <section className="m-auto md:w-[86vw]  ">


                {/* <section className="p-6 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                        <div className='md:flex gap-x-4'>
                            <Image width="500" height="500" style={{
                                width: "100%", objectFit: "cover", objectPosition: "center left"
                            }}
                                className='rounded-md'
                                src="/assets/landscape/student-placement1.jpg" alt='' ></Image>
                        </div>
                        <div className='md:flex justify-center md:p-5 flex-col-reverse' >
                            <section className="space-y-4">
                                <h3 className='heading2 mb-5'>What we do</h3>
                                {
                                    [1, 1, 1, 1, 1].map((item, index) => {
                                        return (
                                            <div key={index} className=" font-light p-3 text-gray-700  border-[1px] rounded shadow border-[var(--primary-500)]">Institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guarante</div>
                                        )
                                    })
                                }
                            </section>
                        </div>

                    </section>
                 <div className="h-4 bg-gray-50 my-16"></div> 
                </section> */}



                <section className='p md:w-[85vw] m-auto'>
                    <section className="p-6 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading2 mb-5 '>Our Language Exam solutions include</h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-3 grid gap-10'>
                                {["Exam Preperation", "Preparation and coaching", "Practice and Mock sessions"].map((item, index) => {
                                    return (
                                        <div key={index} className='p-6 bg-[var(--primary-500)] space-y-2 text-white'>
                                            <h2 className="">{item}</h2>
                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section>

            </section>


            <div className="h-4 bg-gray-50 my-16"></div>

            {/* <section className=' md:w-[85vw] m-auto'>
                <section className="md:pb-10 ">
                    <section className="px-4">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='heading2 mb-5'>Our Language Exams</h3>
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
            </section>

            <div className="h-4 bg-gray-50 my-16"></div> */}

            <section className=' md:w-[85vw] m-auto'>
                <section className="grid md:grid-cols-3 p-2 col-span-10 ">
                    <div className='flex flex-col justify-center gap-y-6'>
                        <div className="">We collaborate with premium language training and exam centers around the world.</div>
                    </div>
                    <div className='col-span-2 my-8'>
                        <Image src="/assets/landscape/map.png" width="1000" height="1000" alt="" />
                    </div>
                </section>
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>


        </section >
    )
}