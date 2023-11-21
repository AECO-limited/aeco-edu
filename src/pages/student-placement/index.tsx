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
import EventCards from "@/components/landing/EventCards";
import { IoAirplaneOutline, IoSchoolOutline, IoWifiOutline } from "react-icons/io5";
import DescriptionCards from "@/components/student-placement/DescriptionCards";
import PlacementFullDetail from "@/components/student-placement/PlacementFullDetail";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function StudentPlacement() {

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
                        <div className="pb-12 overflow-x-hidden">

                            <section className="relative">
                                <div
                                    className="bg-cover bg-center w-full h-[95vh] sm:h-[90vh] md:h-[85vh] overflow-hidden relative"
                                    style={{ backgroundImage: `url("/assets/landscape/student-placement1.jpg")` }}
                                >
                                    <div className="h-full w-[98%] sm:w-[90%] md:w-[75%] xl:w-[55%] from-[#000000c5] to-transparent bg-gradient-to-r w-100 bg-opacity-25 flex justify-center flex-col px-10 md:px-32 text-white space-y-8">
                                        <h2 className="text-6xl font-bold">Student Placement</h2>
                                        <p className=" font-normal text-lg ">
                                            Discover the perfect educational path for your future success with AECO Education's Student Placement services.
                                        </p>
                                        <button className="btn-secondary w-[200px]">
                                            Get Started
                                        </button>
                                    </div>
                                </div>

                            </section>
                            <section>
                                <section className="bg-gray-50">
                                    <DescriptionCards />
                                </section>


                                <section>
                                    <PlacementFullDetail />
                                </section>





                                <div className="mt-20  py-10 bg-gray-50 items-center justify-center flex flex-col px-4 md:px-10">
                                    <div className="grid items-center justify-center px-10">
                                        <p className="text-center mb-4 text-[var(--neutral-600)] font-bold text-4xl lg:text-5xl my-2">
                                            Testimonials
                                        </p>
                                    </div>
                                    <div className="mt-4  ">
                                        <Testimonials />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </TopNav>
                </div>
            </main>
        </>
    );
}
