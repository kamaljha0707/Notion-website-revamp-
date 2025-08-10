import { motion } from 'framer-motion'
import React from 'react'
import bannerImg from '../assets/asset 19.png'

function Banner() {
    return (
        <div className='bg-[#D6F3FF] w-full'>
            <div className='max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96 py-8 sm:py-10 md:py-12 lg:py-[68px]'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 md:gap-8 lg:gap-12'>
                    {/* Image Container */}
                    <motion.div 
                        className='w-full lg:w-auto lg:min-w-[320px] lg:max-w-[25%]'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={bannerImg}
                            alt="banner image"
                            className='w-full h-auto max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0'
                        />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div 
                        className='text-center lg:text-left w-full lg:w-auto lg:flex-1'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black text-[#212121] leading-tight sm:leading-normal tracking-tight sm:tracking-normal mb-3 sm:mb-[13px]'>
                            "It's more powerful than Google Docs and more flexible than Airtable or Evernote."
                        </h2>
                        <p className='text-[#8e8e8e] mb-3 sm:mb-[10px] text-lg sm:text-base'>
                            -Fast Company
                        </p>
                        {/* button */}
                        <motion.a
                            href="#"
                            className="inline-block border py-2 px-5 sm:py-2 sm:px-6 my-4 sm:my-5 rounded-lg bg-black text-white hover:bg-gray-800 text-center font-medium text-base"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Compare Notion
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner