import Image from "next/image"

export default function PartnershipDevelopment() {

    return (
        <section>
            <section className="m-auto md:w-[86vw]  " id="partnership-development">
                <section className="p-6 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='heading2 mb-5'>Partnership Development</h3>
                                <div className=" font-light">
                                    With years of experience in the education industry, we know every important stakeholder you can network and partner with, locally and internationally. Knowing who to partner with and how has never been simple, and it has also never been more necessary. We facilitate this tedious process for you and ensure your partnership benefits you directly. AECO Education connects you with these institutions to create long-lasting and sustainable agreements, with universities and education organizations of high standards, which will benefit your institution and students, accelerate your growth and enhance your brand.
                                </div>
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

                <section className="p-6 ">
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
                                <p>

                                    A  partnership is a win-win for you and the institution you’re partnering with. The deeply embedded nature of our partnerships will enable your institution achieve its wildest dreams.
                                    We facilitate partnerships across the following domains:
                                </p>
                                {
                                    [" Franchising (To boost your programmes portfolio)",
                                        "Student Exchange programmes",
                                        "Mentorship & Degree Award",
                                        "Accreditation.",
                                        "Feeder Schools Partnership",
                                    ].map((item, index) => {
                                        return (
                                            <div key={index} className=" p-3 text-gray-700  border-[1px] rounded shadow border-[var(--primary-500)]">{item}</div>
                                        )
                                    })
                                }
                            </section>
                        </div>

                    </section>
                </section>


                {/* <div className="h-4 bg-gray-50 my-16"></div>

                <section className="p-6 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='heading2 mb-5'>How we Orchestrate Partnerships</h3>
                                <div className=" text-gray-700">AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </div>

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
                </section> */}

            </section>

            <div className="h-4 bg-gray-50"></div>


        </section>
    )
}