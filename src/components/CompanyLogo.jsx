import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'
import { motion } from 'framer-motion';
import { fadeIn} from '../utils/motion';

const CompanyLogo = () => {
    // Define an array of company logos
    const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <motion.div
    variants={fadeIn('up',0.8)}
    initial="hidden"
    whileInView="show"
    className='container w-full mx-auto py-20 overflow-hidden gap-8 flex sm:flex-row flex-col sm:items-center items-start'>
        <div className='w-[300px] shrink-0 text-gray-600 border-l-4 px-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left'>
            Proud partner at <br/> Hubspot & Segment
        </div>

        {/* Mapping through the logos array to display each logo */}
        <div className='flex animate-marquee whitespace-nowrap'>
            {
            logos.map((logo, index) => (
                <img key={index} src={logo} alt='company logo' className='mx-12 h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
            ))}

            {/* duplicate for seamless loop */}
            {
            logos.map((logo, index) => (
                <img key={index + logos.length} src={logo} alt='company logo' className='mx-12 h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
            ))}
        </div>
    </motion.div>
  )
}

export default CompanyLogo