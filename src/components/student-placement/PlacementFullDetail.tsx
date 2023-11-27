import Image from 'next/image'
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
        }

    ]


    return (
        <section className=' p-6'>
            <section id="study-abroad" className="lg:grid grid-cols-10  md:w-[80vw] m-auto mb-14">
                <div className='col-span-6 flex flex-col justify-center gap-y-6'>
                    <h3 className='  mb-5 heading2'>
                        Study Abroad
                    </h3>
                    <div>
                        {" Studying locally offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options. Our team of experienced advisors will assist you in exploring the various programs available, matching your academic goals and aspirations. By choosing to study locally, you'll benefit from a supportive community, connections to industry professionals, and potential career opportunities in your home country."}
                    </div>

                </div>
                <div className='col-span-4'>
                    <Image width="1000" height="1000" src="/assets/avatar/image avatar two.png" alt="" style={{ width: "100%" }} />
                </div>
                <section className="grid md:grid-cols-3 p-2 col-span-10 py-14">
                    <div className='flex flex-col justify-center gap-y-6'>
                        <h2 className='heading2   mb-5'>Our Partners</h2>
                        <div>We have Partners all Over the world, we are here to help you get the best education. Find Courses, Courses and programs provided by these partners</div>
                        <button className="btn-secondary w-[200px]">
                            Get Started
                        </button>
                    </div>
                    <div className='col-span-2 my-8'>
                        <Image src="/assets/landscape/map.png" width="1000" height="1000" alt="" />
                    </div>

                </section >
            </section >

            <div className="h-4 my-10 bg-gray-50"></div>
            <section className="md:grid grid-cols-10  md:w-[75vw] m-auto mb-14">
                <div className='col-span-4'>
                    <Image width="1000" height="1000" src="/assets/avatar/image avatar one.png" alt="" style={{ width: "100%" }} />
                </div>
                <div id="study-locally" className='col-span-6 flex flex-col justify-center gap-y-6'>
                    <h3 className='  mb-5 heading2'>
                        Study Locally
                    </h3>
                    <div>
                        {" Studying locally offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options. Our team of experienced advisors will assist you in exploring the various programs available, matching your academic goals and aspirations. By choosing to study locally, you'll benefit from a supportive community, connections to industry professionals, and potential career opportunities in your home country."}
                    </div>
                </div>
                <section className="grid md:grid-cols-3 p-2 col-span-10 py-14 gap-3 ">
                    <div className='flex flex-col justify-center gap-y-6 '>
                        <h2 className='  mb-5 heading2' >Supported Countries</h2>
                        <div>Aeco Education currently supports local student placement in the following countries</div>
                        <button className="btn-secondary w-[200px]">
                            Get Started
                        </button>
                    </div>
                    <div className='col-span-2 grid-cols-2 md:grid-cols-4 grid'>
                        {/* list of countries and flags */}
                        {
                            countries.map((country) => (
                                <div key={country.id} className='text-center'>
                                    <Image src={country.countryFlag} style={{ height: "100px", objectFit: "contain", margin: "auto" }} width="100" height="100" alt="" />
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
                    <Image width="1000" height="1000" src="/assets/avatar/image avatar three.png" alt="" style={{ width: "100%" }} />
                </div>
                <div className='col-span-6 flex flex-col justify-center gap-y-6'>
                    <h3 className='  mb-5 heading2'>
                        Study Online
                    </h3>
                    <div>
                        {"  Studying locally offers numerous advantages, from cost savings to familiarity with the local education system. AECO Education works closely with esteemed universities, colleges, and educational institutions in your area to provide you with a comprehensive selection of local study options. Our team of experienced advisors will assist you in exploring the various programs available, matching your academic goals and aspirations. By choosing to study locally, you'll benefit from a supportive community, connections to industry professionals, and potential career opportunities in your home country."}
                    </div>
                    <button className="btn-secondary w-[200px]">
                        Get Started
                    </button>
                </div>
            </section >
        </section >
    )
}

export default PlacementFullDetail