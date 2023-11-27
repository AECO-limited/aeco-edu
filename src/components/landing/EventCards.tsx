import Image from 'next/image';
import React from 'react'

const events: {
    "image": string,
    "date": {
        "month": string,
        "day": string,
        "year": string
    },
    "title": string,
    "description": string,
    "category": string,
    "time": string,
    "location": string,
    "id": string
}[] = [
        {
            "image": "",
            "date": {
                "month": "December",
                "day": "14",
                "year": "2024"
            },
            "title": "Launch IU Online Programs in Cameroon",
            "description": "Join us for the launch of IU Online Programs in Cameroon. Learn about our diverse range of online courses and programs.",
            "category": "Webinar",
            "time": "14:00 - 16:00",
            "location": "Online",
            "id": "event-1"
        },
        {
            "image": "",
            "date": {
                "month": "January",
                "day": "13",
                "year": "2024"
            },
            "title": "Opuvia Career Hub Platform Launch",
            "description": "Be part of the Opuvia Career Hub Platform Launch event. Discover new career opportunities and network with professionals in your industry.",
            "category": "Webinar",
            "time": "10:00 - 12:00",
            "location": "Online",
            "id": "event-2"
        },
        {
            "image": "",
            "date": {
                "month": "January",
                "day": "13",
                "year": "2024"
            },
            "title": "Progress to Bioengineering at Loughborough University",
            "description": "Join this informative webinar to learn about the progress in the field of bioengineering at Loughborough University.",
            "category": "Webinar",
            "time": "15:00 - 17:00",
            "location": "Online",
            "id": "event-3"
        },
        {
            "image": "",
            "date": {
                "month": "January",
                "day": "26",
                "year": "2024"
            },
            "title": "Launch of IU Study Lounge in Cameroon",
            "description": "Experience the launch of IU Study Lounge in Cameroon. Discover a conducive environment for studying and collaboration.",
            "category": "Webinar",
            "time": "18:00 - 20:00",
            "location": "Online",
            "id": "event-4"
        }
    ];


const EventCards = () => {
    return (
        <div className=' p-4 p-6'>
            <div className=" grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                {
                    events.map((event, index) => {
                        return (
                            <div key={index} className="shadow-md bg-white relative rounded-lg border border-gray-100 h-[380px]">
                                {event.image && <Image width={1000} height={1000} style={{ width: "100%", height: "auto" }} src={event.image} className='w-full rounded-t-lg' alt="" />}
                                <div className="px-6 py-10 relative h-full">
                                    <div className="flex gap-4">
                                        <section>
                                            <small className=' text-[var(--secondary-500)]'>{event.date.month}</small>
                                            <h2 className=' font-semibold'>{event.date.day}</h2>
                                        </section>
                                        <section>
                                            <div className="heading4  mb-2">{event.title}</div>
                                            <div className="text-gray-600 ">
                                                {event.description.length > 100 ? event.description.substring(0, 100) + '...' : event.description}
                                            </div>
                                            <div className="h-2"></div>
                                            <div className="flex gap-2">
                                                <span className='bg-orange-200  text-xs p-2 px-3 rounded-full border-orange-500 '>{event.category}</span>
                                                <span className='bg-orange-200  text-xs p-2 px-3 rounded-full border-orange-500 '>{event.location}</span>
                                            </div>

                                        </section>

                                    </div>
                                </div>
                                <div className='absolute bottom-5 w-full bg-white'>
                                    <button className="btn-secondary bg-white border-[var(--secondary-500)] border hover:bg-orange-300 text-[var(--secondary-500)] w-[180px] m-auto">
                                        Attend
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EventCards