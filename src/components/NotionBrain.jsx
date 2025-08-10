import { motion } from 'framer-motion'
import React from 'react'

function NotionBrain() {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-24 items-center justify-center max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96 py-12 md:py-16 lg:py-[72px]'>
        {/* text */}
        <div className='w-full lg:w-auto lg:flex-1 max-w-[600px] lg:max-w-none'>
          <h2 className='text-4xl sm:text-5xl lg:text-[50px] leading-[1.1] sm:leading-[1.1] lg:leading-[57px] tracking-tighter font-extrabold text-[#212121]'>
            Stop spending so <br className='hidden sm:block' /> much time searching.
          </h2>
          <p className='text-[#666666] text-lg sm:text-xl mt-3 mb-1'>
            Notion Enterprise Search finds answers in seconds—connecting your team to knowledge, tasks, and projects seamlessly.
          </p>
          <motion.a
            href="#"
            className="inline-block border py-2 px-5 sm:py-2 sm:px-6 my-4 sm:my-5 rounded-lg bg-black text-white hover:bg-gray-800 text-center font-medium text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Learn more
          </motion.a>
        </div>
        {/* iframe yt  */}
        <div className="relative w-full lg:w-auto aspect-video lg:h-[300px] rounded-xl overflow-hidden bg-gray-200">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/O5hOzqZ60PI?rel=0&modestbranding=1"
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            playsinline='1'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default NotionBrain