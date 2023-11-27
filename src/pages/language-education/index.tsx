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
import EducationServiceOverview from "@/components/educational-services/EducationServiceOverview";
import EducationServicesOverView from "@/components/educational-services/EducationServicesOverView";
import EducationServicesStakeHolders from "@/components/educational-services/EducationServicesStakeHolders";
import PartnershipDevelopment from "@/components/educational-services/PartnershipDevelopment";
import StudentRecruitments from "@/components/educational-services/StudentRecruitments";
import ExamOverview from "@/components/language-education/ExamOverview";
import LanguageServices from "@/components/language-education/LanguageServices";
import LanguageExam from "@/components/language-education/LanguageExam";
import LanguageTraining from "./LanguageTraining";

const inter = Inter({ subsets: ['latin'] })

export default function LanguageEducation() {

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
                                    style={{ backgroundImage: `url("/assets/landscape/language-hero.jpg")` }}
                                >
                                    <div className="h-full w-full from-[#000000c5] to-transparent bg-gradient-to-t w-100 bg-opacity-25 flex justify-center flex-col px-10 md:px-32 text-white space-y-8 text-center">
                                        <h2 className="heading1">Language Training for each of your goals</h2>
                                        <h2 className="heading44">
                                            Have you got dreams, wishes and plans?
                                            We've got the method, the experts and a record of success.
                                            Give it a go!  </h2>
                                        <button className="btn-secondary w-[200px] m-auto">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <section className=" -translate-y-28">
                                <LanguageServices />
                            </section>
                            <section className="bg-white px-5 md:px-0">
                                <section>
                                    <ExamOverview />
                                </section>
                                <section>
                                    <LanguageExam />
                                </section>
                                <section>
                                    <LanguageTraining />
                                </section>
                                <section>
                                    {/* <EducationServicesStakeHolders /> */}
                                </section>
                            </section>

                            {/* <section className="bg-white">
                                <PartnershipDevelopment />
                            </section>
                            <section>
                                <StudentRecruitments />
                            </section> */}
                        </div>
                    </TopNav>
                </div >
            </main >
        </>
    );
}



