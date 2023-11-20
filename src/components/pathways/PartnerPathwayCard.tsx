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
            className='shadow-xl space-y-4 rounded-md cursor-pointer  h-[500px] bg-cover relative' style={{ backgroundImage: `url(${partner.image})`, }}>
            <button className='bg-white px-3 p-2 rounded-full text-sm m-4'>{partner.name}</button>
            <div className="h-[50%] absolute bottom-0 overflow-hidden bg-gradient-to-t from-black to-[#00000000] w-full p-3">
                <motion.section
                    initial={{ y: 150 }}
                    animate={{ y: hovered ? 0 : 200 }}
                    className='md:pr-10 space-y-4'>
                    <Image alt='' src={partner.logo} width={"100"} height={100} objectFit='contain' className='rounded-md' />
                    <p className='md:text-sm text-white'>
                        {partner.body.length > 200 ? partner.body.substring(0, 150) + '...' : partner.body}
                    </p>
                    <button className='text-white border-white border rounded-full px-3 p-2'>Learn More </button>
                </motion.section>
            </div>
        </div>
    )
}

export default PartnerPathwayCard