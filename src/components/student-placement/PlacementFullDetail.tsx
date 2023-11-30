import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PlacementFullDetail = () => {

    //json array with countryName, countryFlag an id
    const countries = [
        {
            countryName: "Cameroon",
            countryFlag: "https://cdn.britannica.com/42/5042-004-7FF4ACCA/Flag-Cameroon.jpg",
            id: 1
        },
        {
            countryName: "Nigeria",
            countryFlag: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
            id: 2
        },
        {
            countryName: "Ukraine",
            countryFlag: "https://cdn.britannica.com/14/4814-004-7C0DF1BB/Flag-Ukraine.jpg",
            id: 3
        },
        {
            countryName: "Canada",
            countryFlag: "https://cdn.britannica.com/68/7068-050-54679E29/Flag-Canada.jpg",
            id: 4
        },
        {
            countryName: "UK",
            countryFlag: "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
            id: 5
        },
        {
            countryName: "Zambia",
            countryFlag: "https://cdn.britannica.com/31/4231-004-F1DBFAE7/Flag-Zambia.jpg",
            id: 6
        },
        {
            countryName: "Malta",
            countryFlag: "https://cdn.britannica.com/86/2286-050-C9E3A660/Flag-Malta.jpg",
            id: 7
        },
        {
            countryName: "Dubai",
            countryFlag: "https://cdn.britannica.com/82/5782-004-BD7056FF/Flag-United-Arab-Emirates.jpg",
            id: 8
        },
        {
            countryName: "Germany",
            countryFlag: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
            id: 9
        },
        {
            countryName: "Spain",
            countryFlag: "https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg",
            id: 10
        },
        {
            countryName: "South Africa",
            countryFlag: "https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg",
            id: 11
        },
        {
            countryName: "Ghana",
            countryFlag: "https://cdn.britannica.com/54/5054-050-8EC06097/Flag-Ghana.jpg",
            id: 12
        },


    ]


    return (
        <section className=' p-6'>
            <section id="study-abroad" className="lg:grid grid-cols-10  md:w-[80vw] m-auto mb-14">
                <div className='col-span-6 flex flex-col justify-center gap-y-6'>
                    <h3 className='  mb-5 heading2'>
                        Study Abroad
                    </h3>
                    <div>
                        The process of choosing a university and study program in a new country can be challenging, given the many quality and fraudulent options available, as well as the numerous wonderful locations to re
                        side in. If you are unsure of where to start, or if you think you know where to go but want expert advice first, then consult us before you proceed. We can recommend excellent options and locations, and advise you on courses, career paths, and potential financial assistance solutions. We handle all the details, ensure you meet the entry requirements, and discuss visa requirements at this stage. We are fast, reliable, and highly experienced in managing applications to international universities, having worked with both private and public universities in over 50 different countries. Contact us for your admissions into your dream university.
                    </div>

                </div>
                <div className='col-span-4'>
                    <Image width="300" height="300" src="/assets/avatar/image avatar two.png" alt="" style={{ width: "100%" }} />
                </div>
                <section className="grid md:grid-cols-3 p-2 col-span-10 py-14">
                    <div className='flex flex-col justify-center gap-y-6'>
                        <h2 className='heading3   mb-5'>Our Partners</h2>
                        <div>We have Partners all Over the world, we are here to help you get the best education. Find Courses, Courses and programs provided by these partners</div>
                        <Link href="https://aecoedu.studentpanel.net/search/academic/program" target='_blank' className="btn-secondary w-[200px]">
                            Get Started
                        </Link>
                    </div>
                    <div className='col-span-2 my-8'>
                        <Image src="/assets/landscape/map.png" width="300" height="300" alt="" />
                    </div>

                </section >
            </section >

            <div className="h-4 my-10 bg-gray-50"></div>
            <section className="md:grid grid-cols-10  md:w-[75vw] m-auto mb-14">
                <div className='col-span-4'>
                    <Image width="300" height="300" src="/assets/avatar/image avatar one.png" alt="" style={{ width: "100%" }} />
                </div>
                <div id="study-locally" className='col-span-6 flex flex-col justify-center gap-y-6'>
                    <h3 className='  mb-5 heading2'>
                        Study Locally
                    </h3>
                    <div>
                        <p className="mb-3">
                            We Listen to You!
                            Provide us with your education history, interests, skills, goals, and preferred institution, course, and location. After understanding your personal and professional goals, we will identify local universities and colleges offering courses that align with your career path.
                            We Handle the Application Process!
                        </p>
                        <p>
                            You don't need to worry about the paperwork; we'll handle everything. We will submit the application on your behalf and liaise with your educational provider to ensure a smooth process. Your role is to ensure you have the necessary transcripts, certificates, sufficient financial resources, and meet any language requirements. If you need help with these, just let us know in the initial consultation.

                        </p>
                    </div>
                </div>
                <section className="grid md:grid-cols-3 p-2 col-span-10 py-14 gap-3 ">
                    <div className='flex flex-col justify-center gap-y-6 '>
                        <h2 className='  mb-5 heading2' >Supported Countries</h2>
                        <Link href="https://aecoedu.studentpanel.net/search/academic/program" target='_blank' className="btn-secondary w-[200px]">
                            Get Started
                        </Link>
                    </div>
                    <div className='col-span-2 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 grid'>
                        {/* list of countries and flags */}
                        {
                            countries.map((country) => (
                                <div key={country.id} className='text-center'>
                                    <Image src={country.countryFlag} className='m-auto' style={{ height: "100px", objectFit: "contain", }} width="100" height="100" alt="" />
                                    <div className='text-gray-500'>{country.countryName}</div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </section >
            <div className="h-4 my-10 bg-gray-50"></div>



            <section className="grid md:grid-cols-10  md:w-[80vw] m-auto" id='study-online'>
                <div className='col-span-4'>
                    <Image width="300" height="300" src="/assets/avatar/image avatar three.png" alt="" style={{ width: "100%" }} />
                </div>
                <div className='col-span-6 flex flex-col justify-center gap-y-6'>
                    <h3 className='  mb-5 heading2'>
                        Study Online
                    </h3>
                    <div>

                        <p className='mb-5'>
                            We're excited to introduce a new, convenient pathway to achieve your academic aspirations. With the rise of high-quality online education, you no longer need to travel abroad. Instead, you can access top-tier education right from your home, eliminating the complexities of visa applications and allowing you to study at your own pace and within your budget. Online learning marries the benefits of studying abroad with the comfort of home.
                        </p>
                        <p className='mb-5'>
                            Many top-tier universities worldwide offer fully-accredited online courses, eliminating the need for travel and overseas living expenses. This mode of learning is particularly beneficial for those balancing work and other commitments.
                        </p>
                        <p className='mb-5'>
                            However, it's important to remember that the accreditation and recognition of the online program you opt for are crucial. They ensure your online degree isn't merely valid but also valued by employers. We're here to assist you in this process, guiding you to select the best online programs that align with your objectives and requirements. Let us help you write the next chapter of your educational journey.
                        </p>
                    </div>
                    <Link href="https://aecoedu.studentpanel.net/search/academic/program" target='_blank' className="btn-secondary w-[200px]">
                        Get Started
                    </Link>
                </div>
            </section >
        </section >
    )
}

export default PlacementFullDetail