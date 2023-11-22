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
import { IoAirplaneOutline, IoChevronDown, IoSchoolOutline, IoWifiOutline } from "react-icons/io5";
import DescriptionCards from "@/components/student-placement/DescriptionCards";
import PlacementFullDetail from "@/components/student-placement/PlacementFullDetail";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export default function Events() {

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
                            <section className="relative mb-14">
                                <div
                                    className="bg-cover bg-center w-full h-[90vh] sm:h-[85vh] md:h-[80vh] overflow-hidden relative"
                                    style={{ backgroundImage: `url("/assets/landscape/events.jpg")` }}
                                >
                                    <div className="h-full w-[98%] sm:w-[90%] md:w-[75%] xl:w-[55%] from-[#000000c5] to-transparent bg-gradient-to-r w-100 bg-opacity-25 flex justify-center flex-col px-10 md:px-32 text-white space-y-8">
                                        <h2 className="text-6xl font-bold">Events</h2>
                                        <p className=" font-normal text-lg ">
                                            Our Events provide you with the necessary preparation, guidance, and connections to ensure a smooth transition to your dream university or institution.
                                        </p>
                                        <button className="btn-secondary w-[200px]">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </section>

                            <div className="px-10 -translate-y-28">
                                <section className="bg-[var(--primary-500)] p-3 rounded-xl">
                                    <div className="md:grid grid-cols-3 p-8 py-3 gap-10 gap-y-5 space-y-5">
                                        <div className="text-2xl font-bold col-span-3 text-white">Search Event</div>
                                        <div className="border-b border-white text-white">
                                            <label htmlFor="">Event Name</label>
                                            <input type="text" className="border-none w-full text-sm font-light text-gray-300 outline-none block bg-transparent border-2" />
                                        </div>
                                        <div className="border-b border-white text-white">
                                            <label htmlFor="">Place</label>
                                            <input type="text" className="border-none w-full text-sm font-light text-gray-300 outline-none block bg-transparent border-2" />
                                        </div>
                                        <div className="border-b border-white text-white">
                                            <label htmlFor="">Time</label>
                                            <input type="time" className="border-none w-full text-sm font-light text-gray-300 outline-none block bg-transparent border-2" />
                                        </div>
                                        <div className="col-span-3 flex justify-end">
                                            <button className="btn-primary bg-[var(--primary-700)] w-[140px]">Search</button>
                                        </div>
                                    </div>
                                </section>
                            </div>


                            <section>
                                <section className="">
                                    <div className="md:flex justify-between w-full px-10">
                                        <p className="text-center mb-5 md:mb-2 font-bold text-3xl">
                                            Upcoming Events
                                        </p>
                                        <div className="flex gap-x-4 justify-center md:justify-end">
                                            <button className="bg-gray-200 rounded-full p-2 md:py-0 px-3 text-sm font-light">
                                                <select className="bg-transparent">
                                                    <option value="">Weekdays</option>
                                                </select>
                                            </button>
                                            <button className="bg-gray-200 rounded-full p-2 md:py-0 px-3 text-sm font-light">
                                                <select className="bg-transparent">
                                                    <option value="">Category</option>
                                                </select>
                                            </button>
                                            <button className="bg-gray-200 rounded-full p-2 md:py-0 px-3 text-sm font-light">
                                                <select className="bg-transparent">
                                                    <option value="">Event Type</option>
                                                </select>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <EventCards />
                                    </div>
                                </section>
                            </section>
                            <div className="h-[100px]"></div>
                        </div>

                    </TopNav>
                </div>
            </main>
        </>
    );
}
