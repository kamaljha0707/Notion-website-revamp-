import { motion } from 'framer-motion'
import React from 'react'
import heroVideo from '../assets/herosection-video.mp4'

function Hero() {
    return (
        <>
        <div className='h-full w-full bg-[#ffe6c9]'>
            <div className="herosection  m-0 h-full w-full bg-[#ffe6c9] max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96 pt-[60px]">
                {/* Heading Section */}
                <div className="w-full">
                    <motion.h1 className='text-[#212121] text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-2 font-black tracking-tight leading-tight' 
                    initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        Your all-in-one <br /> collaborative workspace.
                    </motion.h1>
                    <motion.h2 className='text-[#666666] text-lg sm:text-xl md:text-2xl' 
                     initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}>
                        Notion brings teams and tools together for a more organized work day.
                    </motion.h2>
                </div>

                {/* Buttons Section */}
                <motion.div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 w-full pt-7 h-full' 
                initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}>
                    <motion.button
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                            duration: 0.2
                        }}
                        className="bg-black py-3 sm:py-4 px-5 sm:px-7 tracking-tight rounded-xl font-semibold text-lg sm:text-xl text-center text-white cursor-pointer w-full sm:w-auto"
                    >
                        Get started for free
                    </motion.button>

                    <motion.button
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
                        className="text-[#444444] tracking-tight py-3 sm:py-4 px-5 sm:px-7 rounded-xl font-semibold text-lg sm:text-xl text-center border-2 border-gray-200 bg-white cursor-pointer w-full sm:w-auto"
                    >
                        Contact sales
                    </motion.button>
                </motion.div>

                {/* Video Section */}
                 <motion.div  className="mt-10 sm:mt-14 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[755px] 2xl:h-[755px] relative overflow-hidden rounded-lg" initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}>
                    <video
                        src={heroVideo}
                        title="Homepage Hero Doc"
                        muted
                        loop
                        autoPlay
                        playsInline
                        poster="https://sanity-images.imgix.net/production/198748cb2ccc135be1b8e9d8f59a05987299ded1-2272x1520.png?h=450&dpr=2&auto=format,compress"
                        className="w-full h-full "
                    />
                </motion.div> 
            </div>
        </div>
        </>
    )
}

export default Hero