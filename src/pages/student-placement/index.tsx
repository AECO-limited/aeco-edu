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
                        <div className="pb-12 overflow-x-hidden bg-gray-50">

                            <section className="relative">
                                <div
                                    className="bg-cover bg-center w-full h-[70vh]  overflow-hidden relative"
                                    style={{ backgroundImage: `url("/assets/landscape/student-placement1.jpg")` }}
                                >
                                    <div className="h-full w-full from-[#000000c5] to-transparent bg-gradient-to-t w-100 bg-opacity-25 flex justify-center flex-col px-10 md:px-32 text-white space-y-8 text-center">
                                        <h2 className=" heading1 mb-5 ">Study At Your Dream University</h2>
                                        <div className=" heading44 font-normal  ">
                                            Find your ideal field of study and get placed in a top-tier university, home and abroad.
                                        </div>
                                    </div>
                                </div>

                            </section>
                            <section className=" -translate-y-28">
                                <DescriptionCards />
                            </section>

                            <section className="bg-white">
                                <section className="mb-14">
                                    <PlacementFullDetail />
                                </section>


                                <div className="h-4 my-10 bg-gray-50"></div>

                                <div className="items-center justify-center flex flex-col px-4 md:px-10 pb-20">
                                    <div className="grid items-center justify-center px-10">
                                        <div className="text-center text-[var(--neutral-600)] font-bold   mb-5 my-2 heading2">
                                            What People Say About Us
                                        </div>
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

