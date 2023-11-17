import Image from 'next/image';
import React from 'react'

const events = [

    {
        "image": "/assets/event-1.webp",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Ignite Your Creativity",
        "description": "Unleash your creativity and explore the limitless possibilities of artistic expression. Join us for an immersive event that celebrates the power of art, music, and culture. Experience captivating performances, engage in interactive workshops, and connect with fellow artists from around the world. Discover new techniques, gain inspiration, and leave with a renewed passion for your craft. Ignite your creativity and let your imagination soar to new heights."
    },
    {
        "image": "/assets/event-2.webp",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Empowering Women in Business",
        "description": "Join us for an empowering event dedicated to celebrating and supporting women in business. Gain valuable insights from successful female leaders who have shattered glass ceilings and overcome challenges. Learn strategies for personal and professional growth, network with like-minded individuals, and discover opportunities for collaboration. Together, let's break barriers, inspire change, and create a more inclusive and diverse business landscape."
    },
    {
        "image": "/assets/event-3.jpeg",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Health and Wellness Retreat",
        "description": "Take a break from the demands of daily life and embark on a transformative journey to prioritize your health and well-being. Join us for a rejuvenating retreat that combines mindfulness practices, physical activities, and expert guidance to help you achieve balance and inner harmony. Recharge your mind, body, and soul in a serene and supportive environment. Leave feeling refreshed, inspired, and equipped with tools to maintain a healthy lifestyle."
    },
    {
        "image": "/assets/event-4.webp",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Health and Wellness Retreat",
        "description": "Take a break from the demands of daily life and embark on a transformative journey to prioritize your health and well-being. Join us for a rejuvenating retreat that combines mindfulness practices, physical activities, and expert guidance to help you achieve balance and inner harmony. Recharge your mind, body, and soul in a serene and supportive environment. Leave feeling refreshed, inspired, and equipped with tools to maintain a healthy lifestyle."
    },


];


const EventCards = () => {
    return (
        <div className='p-10'>
            <div className=" grid md:grid-cols-2 xl:grid-cols-4 gap-10">
                {
                    events.map((event, index) => {
                        return (
                            <div className="shadow bg-white rounded-lg ">
                                <Image width={100} height={100} style={{ width: "100%", height: "auto" }} src={event.image} className='w-full rounded-t-lg' alt="" />
                                <div className="px-6 py-10">
                                    <div className="flex gap-7">
                                        <section>
                                            <small className='text-sm text-[var(--secondary-500)]'>{event.date.month}</small>
                                            <h2 className='text-2xl font-semibold'>{event.date.day}</h2>
                                        </section>
                                        <section>
                                            <div className="font-bold text-xl mb-2">{event.title}</div>
                                            <p className="text-gray-600 text-sm">
                                                {event.description.length > 200 ? event.description.substring(0, 200) + '...' : event.description}
                                            </p><div></div>
                                        </section>
                                    </div>
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