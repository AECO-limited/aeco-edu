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
import AboutPathways from "@/components/pathways/AboutPathways";
import AecoPathways from "@/components/pathways/AecoPathways";

const inter = Inter({ subsets: ['latin'] })

export default function Pathways() {

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
                                    style={{ backgroundImage: `url("/assets/landscape/pathways-hero.jpg")` }}
                                >
                                    <div className="h-full w-[98%] sm:w-[90%] md:w-[75%] xl:w-[55%] from-[#000000c5] to-transparent bg-gradient-to-r w-100 bg-opacity-25 flex justify-center flex-col px-10 md:px-32 text-white space-y-8">
                                        <h2 className="text-6xl font-bold">Pathways</h2>
                                        <p className=" font-normal text-lg ">
                                            Our pathways provide you with the necessary preparation, guidance, and connections to ensure a smooth transition to your dream university or institution.
                                        </p>
                                        <button className="btn-secondary w-[200px]">
                                            Get Started
                                        </button>
                                    </div>
                                </div>

                            </section>
                            <section>
                                <section className="bg-gray-50">
                                    <AboutPathways />
                                </section>


                                <section>
                                    <AecoPathways />
                                </section>


                                <section>

                                </section>




                            </section>
                        </div>
                    </TopNav>
                </div>
            </main>
        </>
    );
}
