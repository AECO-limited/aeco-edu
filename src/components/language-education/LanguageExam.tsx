import Image from "next/image"

export default function LanguageExam() {

    return (
        <section>
            <section className="m-auto md:w-[86vw]  ">
                {/* <section className="md:p-10 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='text-5xl font-semibold'>Partnership Development</h3>
                                <p className="text-lg text-gray-700">AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </p>

                            </section>
                        </div>
                        <div className='md:flex gap-x-4'>
                            <Image width="500" height="500" style={{
                                width: "100%", objectFit: "cover", objectPosition: "center left"
                            }}
                                className='rounded-md'
                                src="/assets/landscape/student-placement1.jpg" alt='' ></Image>
                        </div>
                    </section>
                </section>
                <div className="h-4 bg-gray-50 my-16"></div> */}

                <section className="md:p-10 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6">
                        <div className='md:flex gap-x-4'>
                            <Image width="500" height="500" style={{
                                width: "100%", objectFit: "cover", objectPosition: "center left"
                            }}
                                className='rounded-md'
                                src="/assets/landscape/student-placement1.jpg" alt='' ></Image>
                        </div>
                        <div className='md:flex justify-center md:p-5 flex-col-reverse' >
                            <section className="space-y-4">
                                <h3 className='text-5xl font-semibold'>What we do</h3>
                                {
                                    [1, 1, 1, 1, 1].map((item, index) => {
                                        return (
                                            <p key={index} className="text-lg font-light p-3 text-gray-700  border-[1px] rounded shadow border-[var(--primary-500)]">Institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guarante</p>
                                        )
                                    })
                                }
                            </section>
                        </div>

                    </section>
                </section>


                <div className="h-4 bg-gray-50 my-16"></div>

                <section className=' md:w-[85vw] m-auto'>
                    <section className="md:p-10 ">
                        <section className="px-4">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='text-5xl font-semibold mb-10'>Administration of Exams</h3>
                                </section>
                            </div>
                            <section className='md:grid-cols-3 grid gap-10'>
                                {[1, 1, 1].map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 md:p-10 bg-[var(--primary-500)] space-y-2 text-white'>
                                            <h2 className="text-3xl">Action {index + 1}</h2>
                                            <p className='text-lg font-light'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nemo sunt quo nobis aliquam aut veniam numquam voluptates iure doloremque.
                                            </p>

                                        </div>
                                    )
                                })}
                            </section>

                        </section>
                    </section>
                </section>

            </section>


            <div className="h-4 bg-gray-50 my-16"></div>

            <section className=' md:w-[85vw] m-auto'>
                <section className="md:pb-10 ">
                    <section className="px-4">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='text-5xl font-semibold mb-10'>Our Language Exams</h3>
                            </section>
                        </div>
                        <section className='md:grid-cols-3 grid gap-10'>
                            {[1, 1, 1].map((item, index) => {
                                return (
                                    <div key={index} className='p-4 md:p-10 border-[var(--primary-500)] space-y-2 border rounded'>
                                        <h2 className="text-3xl">Exam {index + 1}</h2>
                                        <p className='text-lg font-light'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nemo sunt quo nobis aliquam aut veniam numquam voluptates iure doloremque.
                                        </p>

                                    </div>
                                )
                            })}
                        </section>

                    </section>
                </section>
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>

            <section className=' md:w-[85vw] m-auto'>
                <section className="grid md:grid-cols-3 p-2 col-span-10 ">
                    <div className='flex flex-col justify-center gap-y-6'>
                        <h2 className='font-semibold text-5xl '>Exam Centers</h2>
                        <p className="text-lg">These are our Exam centers around the world</p>

                    </div>
                    <div className='col-span-2 my-8'>
                        <Image src="/assets/landscape/map.png" width="1000" height="1000" alt="" />
                    </div>

                </section>
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>


        </section>
    )
}