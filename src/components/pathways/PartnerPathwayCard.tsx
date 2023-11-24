import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'


interface Partner {
    name: string;
    logo: string;
    image: string;
    tag: string;
    body: string;
    link: string;
}

const PartnerPathwayCard: React.FC<{ partner: Partner }> = ({ partner }) => {
    const [hovered, setHovered] = useState(false)


    return (
        <div onMouseOver={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}
            className='shadow-xl space-y-4 rounded-md cursor-pointer bg-black  h-[500px] bg-cover relative' style={{ backgroundImage: `url(${partner.image})`, }}>
            <button className='text-white bg-[var(--secondary-500)] px-3 p-2 rounded-full text-lg m-4'>{partner.name}</button>
            <div className="h-[60%] absolute bottom-0 overflow-hidden rounded-b-md  w-full p-3" style={{ backgroundImage: "linear-gradient(to top, black, #000d,#000b,#000a,  transparent)" }}>
                <motion.section
                    initial={{ y: 250 }}
                    animate={{ y: hovered ? 0 : 250 }}
                    className='md:pr-10 space-y-4'>
                    <Image alt='' src={partner.logo} width={"100"} height={100} objectFit='contain' className='rounded-md' />
                    <div className='md:text-lg text-white'>
                        {partner.body.length > 200 ? partner.body.substring(0, 150) + '...' : partner.body}
                    </div>
                    <button className='text-white border-white border rounded-full px-3 p-2'>Learn More </button>
                </motion.section>
            </div>
        </div>
    )
}

export default PartnerPathwayCard