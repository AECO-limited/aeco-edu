import Image from "next/image";

export default function EducationServiceOverview() {

    return (
        <section>
            <section id="teachmint-isp" className="m-auto md:w-[86vw]  bg-[var(--primary-500)] text-white">
                <section className="md:p-10 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='text-3xl md:text-6xl font-semibold'>Teachmint ISP</h3>
                                <div className=" ">AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </div>

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
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>
        </section>
    )
}
