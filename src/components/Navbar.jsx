import React, {useState} from 'react'
import {HiMenu, HiX} from 'react-icons/hi' 
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navlinks = [
    {href: '#home', label: 'Home'},
    {href: '#about', label: 'About'},
    {href: '#services', label: 'Our Services'},
    {href: '#testimonials', label: 'Testimonials'},

  ]

  return (
    <motion.nav 
    variants={fadeIn('down',0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once: true}}
    className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100'>
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo Section */}
        <div className='flex items-center gap-1 cursor-pointer'>
          <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100'></div>
          <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75'></div>
        </div>

        {/* mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2'>
          {
            isMenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
          }
        </button>

        {/* Desktop nav items */}
        <div className='hidden md:flex items-center gap-10'>
          {
            navlinks.map((link, index) => {
              return (
                <a key={index} href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`text-sm font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all duration-200 ${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}>{link.label}
                </a>
              )
            })
          }
        </div>

        {/* get in touch btn */}
        <button className='hidden md:block md:bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
          <a href="#newsletter">Get in Touch</a>
        </button>

        {/* mobile menu items */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-md flex flex-col px-5 items-start gap-6 py-6 md:hidden animate-fade-in z-50">
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`text-base font-bold ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {link.label}
              </a>
            ))}
            <button className='w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
              <a href="#newsletter">Get in Touch</a>
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
