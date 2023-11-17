import React from 'react'

const events = [
    {
        "image": "https://pfst.cf2.poecdn.net/processed/5278a0e12571393b6be44b0be88c949d0d7cc403133674b324705e6dd83d8ea8",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Experience the Future",
        "description": "Join us for a groundbreaking event where we explore the latest advancements in technology and innovation. Discover how these developments are shaping the world and revolutionizing various industries. Engage with industry experts, thought leaders, and visionaries as they share their insights and experiences. Don't miss out on this opportunity to be at the forefront of change and gain valuable knowledge for your own journey towards success."
    },
    {
        "image": "https://pfst.cf2.poecdn.net/processed/5278a0e12571393b6be44b0be88c949d0d7cc403133674b324705e6dd83d8ea8",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Ignite Your Creativity",
        "description": "Unleash your creativity and explore the limitless possibilities of artistic expression. Join us for an immersive event that celebrates the power of art, music, and culture. Experience captivating performances, engage in interactive workshops, and connect with fellow artists from around the world. Discover new techniques, gain inspiration, and leave with a renewed passion for your craft. Ignite your creativity and let your imagination soar to new heights."
    },
    {
        "image": "https://pfst.cf2.poecdn.net/processed/5278a0e12571393b6be44b0be88c949d0d7cc403133674b324705e6dd83d8ea8",
        "date": {
            "month": "APR",
            "day": "14"
        },
        "title": "Empowering Women in Business",
        "description": "Join us for an empowering event dedicated to celebrating and supporting women in business. Gain valuable insights from successful female leaders who have shattered glass ceilings and overcome challenges. Learn strategies for personal and professional growth, network with like-minded individuals, and discover opportunities for collaboration. Together, let's break barriers, inspire change, and create a more inclusive and diverse business landscape."
    },
    {
        "image": "https://pfst.cf2.poecdn.net/processed/5278a0e12571393b6be44b0be88c949d0d7cc403133674b324705e6dd83d8ea8",
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
            <div className="grid grid-cols-4 gap-10">
                {
                    events.map((event, index) => {
                        return (
                            <div className="shadow bg-white rounded-lg">
                                <img src="https://www.cvent.com/sites/default/files/image/2021-01/conference-speaker.jpg" className='w-100 rounded-t-lg' alt="" />
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