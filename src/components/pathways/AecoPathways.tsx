import Image from 'next/image'
import React from 'react'
import { IoSchool, IoSchoolOutline } from 'react-icons/io5'
import PartnerPathwayCard from './PartnerPathwayCard'
import { partners } from '@/pages'
import WhatCanYouStudyCard from './WhatCanYouStudyCard'


const reasonsToJoinPathways = [
    "Have a smooth ride through their Degree programme with outstanding performance",
    "Meet the direct entry requirements into their desired degree programme abroad",
    "Identify the challenges in their dream industries from day one",
    "Equip them with the relevant hard skills and Soft skills needed for a successful career in their chosen industry and field of study",
    "Enhance the Employability skills talents need in this 21st century, so they can succeed in the workplace of the future",
    "Understand the contexts",
    "Develop and implement solutions that solve the challenges and fits the context thus advancing their industries",
    "Prepare for jobs that have not yet been created by their industries",
    "Prepare for technologies that have not yet been invented",
    "Prepare solutions to problems they don’t yet know will arise"
]

const studyPaths = [
    {
        "title": "Health & Biomedical Science Pathway",
        "options": [
            "Nursing",
            "Pharmacy",
            "Medicine",
            "Dentistry",
            "Physiotherapy",
            "Midwifery",
            "Medical Laboratory Sciences",
            "Medical Imaging"
        ]
    },
    {
        "title": "ICT Pathway",
        "options": [
            "Computer Science",
            "Software Engineering",
            "Networking",
            "Cyber Security"
        ]
    },
    {
        "title": "Business & Management Pathway",
        "options": [
            "Accounting",
            "Management",
            "HRM",
            "Marketing"
        ]
    },
    {
        "title": "Engineering & Technology Pathway",
        "options": [
            "Chemical Engineering",
            "Mechanical Engineering"
        ]
    }
]

const IYPHostCenters = [
    {
        "name": "St. Allessandro University Institute (SAU)",
        "id": "sau",
        "body": "St. Allessandro University Institute (SAU) is a prestigious institution dedicated to providing quality education.",
        "logo": "/assets/sau.png",
        image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "tag": "",
        'link': ""
    },
    {
        "name": "St. Louis University Institute (SLUI)",
        "id": "slui",
        "body": "St. Louis University Institute (SLUI) is committed to academic excellence and innovation.",
        "logo": "https://www.slui.org/images/logo_red.webp",
        image: "https://www.chiodini.com/wp-content/uploads/2017/07/Untitled-2.jpg",
        "tag": "",
        'link': ""
    },
    {
        "name": "Gracious University Institute",
        "id": "gracious",
        "body": "Gracious University Institute offers a wide range of educational programs to foster intellectual growth.",
        "logo": "",
        image: "https://images-intl.prod.aws.idp-connect.com/commimg/myhotcourses/institution/CH/myhc_264812.jpg",
        "tag": "",
        'link': ""
    },
    {
        "name": "Mountain Higher Institute of Sustainable Studies (MHISS)",
        "id": "mhiss",
        "body": "Mountain Higher Institute of Sustainable Studies (MHISS) focuses on sustainability and environmental studies.",
        "logo": "https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-1/277557853_370860431718022_5728520329575471247_n.png?stp=c13.0.480.480a_dst-png_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFd7wmMWrQ2ClLiLs11NGk-t4LrkkwfVjC3guuSTB9WMJNYsUzHFZ5mdrH4TyeD_yxsyuDVTOtSDuFM6Dhdu0V3&_nc_ohc=rfud68Tn2FAAX8wc7wB&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfB4WFTPyE7qs19676q5fnKyN_Q-ZoEZTnUVTpP4uRXKfg&oe=65690E9F",
        image: "https://images.pexels.com/photos/7395911/pexels-photo-7395911.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "tag": "",
        'link': ""
    }
]

const studyOptions = [
    "Direct entry into bachelor degree Year 1 in some of our partner universities abroad.",
    "Direct progression into HND or bachelor degree year 2 in any of our local partner university.",
    "Continuation into HND or bachelor degree year 2 in the partner host center.",
    "Direct entry into year two in some of our partner universities abroad."
];

const institutions = [
    {
        "name": "ONCAMPUS UK",
        "id": "sau",
        "body": "ONCAMPUS UK",
        "logo": "/assets/sau.jpg",
        image: "https://images-intl.prod.aws.idp-connect.com/commimg/myhotcourses/institution/CH/myhc_264812.jpg",
        "tag": "",
        'link': ""
    },
    {
        "name": "ONCAMPUS - IRELAND",
        "id": "slui",
        "body": "ONCAMPUS - IRELAND",
        "logo": "",
        image: "https://images-intl.prod.aws.idp-connect.com/commimg/myhotcourses/institution/CH/myhc_264812.jpg",
        "tag": "",
        'link': ""
    },
    {
        "name": "ONCAMPIS - PARIS",
        "id": "gracious",
        "body": "ONCAMPIS - PARIS",
        "logo": "",
        image: "https://images-intl.prod.aws.idp-connect.com/commimg/myhotcourses/institution/CH/myhc_264812.jpg",
        "tag": "",
        'link': ""
    },
    {
        "name": "ONCAMPUS - USA",
        "id": "mhiss",
        "body": "ONCAMPUS - USA",
        "logo": "",
        image: "https://images-intl.prod.aws.idp-connect.com/commimg/myhotcourses/institution/CH/myhc_264812.jpg",
        "tag": "",
        'link': ""
    }
]

const AecoPathways = () => {
    return (
        <div className=' px-2 md:px-0 bg-white'>

            <section className=" bg-white">
                <div className=' md:w-[86vw] m-auto pb-16' >
                    <div className="p-6 ">
                        <section className=" px-4 py-10 md:py-0  grid md:grid-cols-2">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4">
                                    <h3 className='heading2 mb-5'>International Year Programs (IYP)</h3>
                                    <div className="space-y-5">
                                        <p>
                                            The IYP focuses on shaping the minds and learning of African high school graduates to prepare and insert them into university education as required in the 21st century as well as launch them in their journey towards career success in this new world.
                                        </p>
                                        <p>
                                            Education in the 21st century is about giving students the knowledge and skills they need to succeed in this new world, and helping them grow the confidence to practice those skills.
                                            With so much information readily available to them, 21st century skills focus more on making sense of that information, sharing and using it in smart ways.
                                        </p>
                                    </div>
                                </section>
                            </div>
                            <div className='md:flex gap-x-4 hidden '>
                                <div className="bg-[var(--secondary-500)] rounded w-fit h-fit">
                                    <Image width="500" height="500" className=' opacity-80 rounded ' style={{
                                        height: "400px", objectFit: "cover", width: "300px", objectPosition: "center right"
                                    }}
                                        src="/assets/landscape/international.jpg" alt='' ></Image>
                                </div>
                                <div className='bg-[var(--secondary-500)] h-fit rounded'>
                                    <Image width="500" height="500" style={{
                                        height: "250px", objectFit: "cover", width: "200px", objectPosition: "center left"
                                    }}
                                        className='rounded-md opacity-70'
                                        src="https://images.pexels.com/photos/4350108/pexels-photo-4350108.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' ></Image>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>

            </section >


            <div className="h-4 bg-gray-50"></div>

            <section className="bg-white py-10 md:py-0">
                <section className="m-auto md:w-[86vw] ">
                    <section className="p-6 ">
                        <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                            <div className='md:flex flex-col justify-center md:p-5' >
                                <section className="space-y-4 text-gray-700">
                                    <h3 className='heading2 text-black'>Why Join a pathway</h3>
                                    <div className=" text-gray-700">AECO Education has established strong partnerships with renowned universities and institutions worldwide, offering you exclusive pathways to further your education. Through our partner pathways, you can enjoy a range of benefits, including guaranteed admission, credit transfers, specialized programs, and seamless transition processes. </div>
                                    <ol className='pl-3 '>
                                        {
                                            reasonsToJoinPathways.map((item, index) => {
                                                return (
                                                    <li key={index} className='list-disc list-inside mb-2'>
                                                        {item}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ol>
                                    <p>
                                        Upon graduating from the IYP, we expect students to have the right skills and attitude to be the lamb light in their progression degree programmes and eventually graduate to impact companies and industries they will work with from day one.
                                    </p>
                                </section>
                            </div>
                            <div className='md:flex gap-x-4'>
                                <Image width="500" height="500" style={{
                                    width: "100%", objectFit: "cover", objectPosition: "center left"
                                }}
                                    className='rounded-md'
                                    src="https://images.pexels.com/photos/2943603/pexels-photo-2943603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' ></Image>
                            </div>

                        </section>
                    </section>
                </section>

                <div className="h-4 bg-gray-50 my-16"></div>


                <section className="m-auto md:w-[86vw] ">

                    <h3 className='heading2 mb-5 text-center '>
                        What you can study
                    </h3>
                    <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                        {
                            studyPaths.map((item, index) => {
                                return (
                                    <div key={index} className='text-center'>
                                        <WhatCanYouStudyCard pathway={item} />
                                    </div>
                                )
                            })
                        }
                    </aside>
                </section>


                <div className="h-4 bg-gray-50 my-16"></div>

                <section className="m-auto md:w-[86vw] mb-24">

                    <div className='mb-24 text-center '>
                        <h3 className='heading2'>
                            Our IYP Host Centers
                        </h3>
                        <p className='mb-8 heading44'>
                            The IYP is ancored by top tier unieversities across Africa and you can choose to study with any of our partner host centers;
                        </p>
                        <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                            {IYPHostCenters.map((item, index) => {
                                return (
                                    <section key={index} >
                                        <PartnerPathwayCard partner={item} />
                                    </section>
                                )
                            })}
                        </aside>
                    </div>

                </section>
            </section>


            {/* <div className="h-4 bg-gray-50 my-16"></div> */}


            <section className="bg-gray-50 py-16">
                <section className="m-auto md:w-[86vw] ">
                    <div className=''>
                        <h3 className='heading2 text-center mb-6'>
                            Progression Options
                        </h3>
                        <aside className="p-2 md:grid-cols-4 gap-5 grid " >
                            {studyOptions.map((item, index) => {
                                return (
                                    <section key={index} className={`shadow-xl text-center space-y-4  rounded-md py-6 ${index == 0 ? "bg-[var(--primary-800)]" : index == 1 ? "bg-[var(--primary-700)]" : index == 2 ? "bg-[var(--primary-600)]" : "bg-[var(--primary-500)]"} text-white`}>
                                        <div className=' font-bold p-3 text-center heading4'>Progression {index + 1}</div>
                                        <div >
                                            <IoSchoolOutline className='  mb-5 m-auto text-5xl ' />
                                        </div>
                                        <div className='p-3  font-light '>
                                            {item}
                                        </div>

                                    </section>
                                )
                            })}
                        </aside>
                    </div>
                </section>
            </section>

            {/* <div className="h-10 bg-gray-50 my-16"></div> */}


            <section className="m-auto md:w-[86vw] ">
                <div className="p-6 mb-5">
                    <section className=" px-4 py-10 md:py-0  grid md:grid-cols-2 ">

                        <div className='md:flex gap-x-4 hidden '>
                            <div className='bg-[var(--secondary-500)] h-fit rounded'>
                                <Image width="500" height="500" style={{
                                    height: "250px", objectFit: "cover", width: "200px", objectPosition: "center left"
                                }}
                                    className='rounded-md opacity-70'
                                    src="https://images.pexels.com/photos/6077122/pexels-photo-6077122.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' ></Image>
                            </div>
                            <div className="bg-[var(--secondary-500)] rounded h-fit w-fit">
                                <Image width="500" height="500" className=' opacity-80 rounded ' style={{
                                    height: "400px", objectFit: "cover", width: "300px", objectPosition: "center right"
                                }}
                                    src="https://images.pexels.com/photos/4560079/pexels-photo-4560079.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' ></Image>
                            </div>
                        </div>

                        <div className='md:flex flex-col justify-center md:p-5' id='#partner-pathways' >

                            <section className="space-y-4">
                                <h3 className='heading2 mb-5'>Partner Pathways</h3>
                                <div className="">
                                    We have enabled partnerships with the best pathway providers in Europe and America for students who desire to continue their university education  abroad to enable them a smooth entry into their desired university and degree programme.
                                </div>
                            </section>
                        </div>


                    </section>

                </div>
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>
        </div >
    )
}

export default AecoPathways