import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/hero-image.png"; // Ensure you  have an image at this path
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const Hero = () => {
  return (
    <section id="home" className="container flex flex-col md:flex-row justify-between items-center mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Left section */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* star badge section */}
        <motion.div
          variants={fadeIn('right',0.2)}
          initial="hidden"
          whileInView="show"
        className="bg-gray-50 rounded-full shadow-2xl w-fit px-4 gap-2 py-2 flex items-center hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-blue-600 group-hover:text-amber-200 group-hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
         variants={textVariant(0.3)}
        initial="hidden"
          whileInView="show"
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          We boost the growth for
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
           </span>
           Companies
          <span className="inline-block ml-2 animate-pulse">🧭</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
        variants={fadeIn('up',0.5)}
        initial="hidden"
          whileInView="show"
        className="text-gray-600 text-lg md:text-xl max-w-lg">
          Our team of experts leverages cutting-edge strategies and innovative
          solutions to drive unparalleled growth and success for your business.
        </motion.p>
        {/* Call to action buttons */}
        <motion.div 
         variants={fadeIn('up',0.7)}
         initial="hidden"
         whileInView="show"
        className="flex max-w-md md:flex-row gap-4 sm:flex-row sm:w-full">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all sm:basis-2/3"
          />
          <button className="bg-blue-600 text-gray-200 px-8 py-4 rounded-xl shadow-md cursor-pointer hover:bg-gray-300 transition-all font-medium hover:shadow-lg sm:basis-1/3 flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </motion.div>
      </div>

      {/* Right section */}
      <motion.div 
      variants={fadeIn('left',0.8)}
        initial="hidden"
          whileInView="show"
      
      className="w-full md:w-1/2 space-y-8 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img src={heroImage} alt="Hero" className=" h-auto rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-200" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
