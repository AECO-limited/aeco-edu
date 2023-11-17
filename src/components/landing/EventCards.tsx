import React from 'react'

const events = [

    {
        "image": "https://media.istockphoto.com/id/1175031702/photo/speaker-giving-presentation-on-scientific-business-conference.webp?b=1&s=170667a&w=0&k=20&c=iOOZK7OMaEA9nWKybGZKH9VRUiJLh1huctCWjySNTSg=",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Ignite Your Creativity",
        "description": "Unleash your creativity and explore the limitless possibilities of artistic expression. Join us for an immersive event that celebrates the power of art, music, and culture. Experience captivating performances, engage in interactive workshops, and connect with fellow artists from around the world. Discover new techniques, gain inspiration, and leave with a renewed passion for your craft. Ignite your creativity and let your imagination soar to new heights."
    },
    {
        "image": "https://media.istockphoto.com/id/1186603900/photo/diverse-businesspeople-gathered-together-for-negotiations-lead-by-african-businesswoman.webp?b=1&s=170667a&w=0&k=20&c=0iPB7aIXPrFUbyJHC2QBOxRn8gr7XcG9ocF-AQeFMr8=",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Empowering Women in Business",
        "description": "Join us for an empowering event dedicated to celebrating and supporting women in business. Gain valuable insights from successful female leaders who have shattered glass ceilings and overcome challenges. Learn strategies for personal and professional growth, network with like-minded individuals, and discover opportunities for collaboration. Together, let's break barriers, inspire change, and create a more inclusive and diverse business landscape."
    },
    {
        "image": "https://www.mohawkcollege.ca/sites/default/files/International/Images/student-international-events.jpg",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Health and Wellness Retreat",
        "description": "Take a break from the demands of daily life and embark on a transformative journey to prioritize your health and well-being. Join us for a rejuvenating retreat that combines mindfulness practices, physical activities, and expert guidance to help you achieve balance and inner harmony. Recharge your mind, body, and soul in a serene and supportive environment. Leave feeling refreshed, inspired, and equipped with tools to maintain a healthy lifestyle."
    },
    {
        "image": "https://media.istockphoto.com/id/1426311994/photo/african-leader-manager-and-ceo-with-a-business-woman-in-the-office-with-her-team-in-the.webp?b=1&s=170667a&w=0&k=20&c=2Estd8U0KoANslWK0mrJUNZVJ7yJ9nORpB13rj_q62I=",
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
                                <img src={event.image} className='w-full rounded-t-lg' alt="" />
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
                                            </p>
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