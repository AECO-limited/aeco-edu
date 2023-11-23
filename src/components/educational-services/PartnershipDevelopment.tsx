import Image from "next/image"

export default function PartnershipDevelopment() {

    return (
        <section>
            <section className="m-auto md:w-[86vw]  ">
                <section className="md:p-10 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='text-6xl font-semibold'>Partnership Development</h3>
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
                <div className="h-4 bg-gray-50 my-16"></div>

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
                                <h3 className='text-6xl font-semibold'>What we do</h3>
                                {
                                    [1, 1, 1, 1, 1].map((item, index) => {
                                        return (
                                            <p key={index} className=" p-3 text-gray-700  border-[1px] rounded shadow border-[var(--primary-500)]">Institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guarante</p>
                                        )
                                    })
                                }
                            </section>
                        </div>

                    </section>
                </section>


                <div className="h-4 bg-gray-50 my-16"></div>

                <section className="md:p-10 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='text-6xl font-semibold'>How we Orchestrate Partnerships</h3>
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

            </section>

            <div className="h-4 bg-gray-50"></div>


        </section>
    )
}