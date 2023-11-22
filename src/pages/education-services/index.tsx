"use client";
import {
    PartnerCard,
    PartnersLogo,
    TopNav,
    Services,
    FullNews,
    SubNews,
    Testimonials,
} from "@/components";
import { useGetAllNews } from "@/hooks/newsHooks";
import Head from "next/head";
import { Inter } from 'next/font/google'
import DescriptionCards from "@/components/student-placement/DescriptionCards";
import { IoSchoolOutline, IoAirplaneOutline, IoWifiOutline, IoLaptopOutline, IoPeople, IoPeopleOutline } from "react-icons/io5";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function EducationServices() {

    return (
        <>
            <Head>
                <title>AECO EDUCATION</title>
                <meta name="description" content="Travel abroad to work, study..." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </Head>
            <main className={inter.className}>
                <div>
                    <TopNav>
                        <div className="overflow-x-hidden bg-gray-50">
                            <section className="relative">
                                <div
                                    className="bg-cover bg-center w-full h-[90vh] sm:h-[85vh] md:h-[80vh] overflow-hidden relative"
                                    style={{ backgroundImage: `url("/assets/landscape/education-hero.jpg")` }}
                                >
                                    <div className="h-full w-[98%] sm:w-[90%] md:w-[75%] xl:w-[55%] from-[#000000c5] to-transparent bg-gradient-to-r w-100 bg-opacity-25 flex justify-center flex-col px-10 md:px-32 text-white space-y-8">
                                        <h2 className="text-6xl font-bold">Education Services</h2>
                                        <p className=" font-normal text-lg ">
                                            Our Education Services provide you with the necessary preparation, guidance, and connections to ensure a smooth transition to your dream university or institution.
                                        </p>
                                        <button className="btn-secondary w-[200px]">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <section className=" -translate-y-28">
                                <EducationServicesOverView />
                            </section>
                            <section className="bg-white">
                                <section>
                                    <EducationServiceOverview />
                                </section>
                                <section>
                                    <EducationServicesStakeHolders />
                                </section>
                                <section>
                                    {/* <EducationServicesStakeHolders /> */}
                                </section>
                            </section>

                            <section className="bg-white">
                                <PartnershipDevelopment />
                            </section>

                        </div>
                    </TopNav>
                </div>
            </main>
        </>
    );
}


function EducationServiceOverview() {

    return (
        <section>
            <section className="m-auto md:w-[86vw]  ">
                <section className="md:p-10 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='text-5xl font-semibold'>Teachmint ISP</h3>
                                <p className="text-sm text-gray-700">AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </p>

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


function EducationServicesStakeHolders() {

    return (
        <div>

            <div className="grid md:grid-cols-3  m-auto gap-5 p-10 md:w-[80vw]">
                <h3 className='text-4xl font-semibold col-span-3'>Benefits to Stakeholders</h3>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-blue-500 rounded-md">
                        <IoLaptopOutline className="text-2xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-2xl font-medium'>Students</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-sm text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-green-500 rounded-md">
                        <IoPeopleOutline className="text-2xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-2xl font-medium'>Parents</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-sm text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-yellow-500 rounded-md">
                        <IoSchoolOutline className="text-2xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-2xl font-medium'>Teachers, Schools and Admins</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-sm text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>
                <div className="">

                </div>
            </div>
            <div className="h-4 bg-gray-50"></div>
        </div>
    )
}


function PartnershipDevelopment() {

    return (
        <section>
            <section className="m-auto md:w-[86vw]  ">
                <section className="md:p-10 ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6">
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='text-5xl font-semibold'>Partnership Development</h3>
                                <p className="text-sm text-gray-700">AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </p>

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
                                <h3 className='text-5xl font-semibold'>What we do</h3>
                                {
                                    [1, 1, 1, 1, 1].map((item, index) => {
                                        return (
                                            <p className="text-sm p-3 text-gray-700 border-gray-300 border-[1px] rounded ">Institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </p>
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
                                <h3 className='text-5xl font-semibold'>How we Orchestrate Partnerships</h3>
                                <p className="text-sm text-gray-700">AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </p>

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
                        <div className='md:flex flex-col justify-center md:p-5' >
                            <section className="space-y-4">
                                <h3 className='text-5xl font-semibold'>Student Recruitment</h3>
                                <p className="text-sm text-gray-700">AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. AECO Educational Services has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </p>

                            </section>
                        </div>
                        <div className='md:flex gap-x-4'>
                            <Image width="500" height="500" style={{
                                width: "100%", objectFit: "cover", objectPosition: "center left"
                            }}
                                className='rounded-md'
                                src="/assets/landscape/pathways-1.jpg" alt='' ></Image>
                        </div>
                    </section>
                </section>
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>


        </section>
    )
}

function EducationServicesOverView() {

    return (
        <div>

            <div className="grid md:grid-cols-3  m-auto gap-5 p-10 md:w-[80vw]">
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-blue-500 rounded-md">
                        <IoLaptopOutline className="text-2xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-2xl font-medium'>Teachermint ISP</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-sm text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-green-500 rounded-md">
                        <IoPeopleOutline className="text-2xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-2xl font-medium'>Partnership Development</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-sm text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>
                <div className="shadow p-4 space-y-4 bg-white py-10">
                    <button className="p-2 bg-yellow-500 rounded-md">
                        <IoSchoolOutline className="text-2xl text-white" />
                    </button>
                    <section className="space-y-2">
                        <h3 className='text-2xl font-medium'>Student Recruitment</h3>
                        <div className="w-1/4 h-[2px] bg-orange-500"></div>
                    </section>
                    <p className="text-sm text-gray-700">
                        Studying education services offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options
                    </p>

                </div>

            </div>
        </div>
    )
}