import React from 'react'
import { motion } from 'framer-motion'
import seeMoreImg from '../assets/asset_28.png'

function SeeMore() {
  return (
    <div className='h-full w-full bg-white'>
      <div className='flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-[48px] items-center lg:items-start justify-center max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96 py-8 sm:py-12 lg:py-[65px]'>
        
        {/* Image */}
        <img 
          src={seeMoreImg} 
          className=' sm:h-[240px] lg:h-[280px] w-auto flex-shrink-0' 
          alt="See More" 
        />

        {/* Text */}
        <div className='text-left lg:text-left h-full max-w-xl lg:max-w-none'>
          <h2 className='text-[#212121] text-4xl sm:text-5xl lg:text-[38px] font-black tracking-tight '>
            Want to see more?
          </h2>
          <p className='text-[#8e8e8e] text-base sm:text-lg tracking-tight mb-6 sm:mb-8 lg:mb-7 mt-3'>
            Our Gallery is full of solutions published by teams who use Notion to supercharge their work, 
            create a feeling of organization, and foster collaborative workflows.
          </p>

          {/* Button */}
          <motion.a
            whileHover={{
              scale: 1.02,
              backgroundColor: "#f8f8f8",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 0.2
            }}
            href="#"
            className="font-semibold border-2 py-2 px-4 rounded-lg border-gray-200 bg-white hover:bg-gray-100 cursor-pointer text-[#444444] transition-colors duration-200 text-base"
          >
            Explore the Gallery
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default SeeMore
