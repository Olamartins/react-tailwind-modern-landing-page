import React from 'react'
import stats from '../assets/stats.webp'
import { IoIosArrowRoundForward } from "react-icons/io"

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center gap-12 justify-between md:gap-12'>
          {/* left  */}
            <div className='w-full md:w-1/2'>
                <img src={stats} alt="stats image" className='w-full h-auto'/>
            </div>
            {/* Right */}
            <div className='md:w-1/2 w-full'>
              <p className='text-orange-400 font-semibold'>SCHEDULE</p>
              <h2 className='text-2xl md:text-3xl font-bold text-neutral-900 mt-4 mb-6'>Streamline Your Business <br/>
              With Smart Scheduling Solutions</h2>
              <p className='text-gray-600 mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi at culpa unde rem alias aspernatur cupiditate vel error eos quam vitae est reprehenderit expedita aut, quo assumenda adipisci veniam molestiae.</p>

              <a href="#" className='text-blue-500 font-semibold flex items-center gap-2
               hover:gap-4 transition-all'>Explore scheduling features
                <IoIosArrowRoundForward className='size-8'/>
              </a>
            </div>
        </div>
       
    </section>
  )
}

export default ScheduleSection