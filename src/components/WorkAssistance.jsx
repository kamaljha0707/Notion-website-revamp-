import React from 'react'
import card1 from '../assets/asset 97.jpeg'
import card2 from '../assets/asset 98.jpeg'
import card3 from '../assets/asset 99.jpeg'
import { motion } from 'framer-motion'

function WorkAssistance() {
    return ( 
        <div className="h-full w-full max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96 py-[72px]">
            {/* Heading */}
            <div className="text-left">
                <h2 className="text-4xl lg:text-[53px] lg:leading-tight tracking-tighter font-extrabold text-[#212121] mb-2">
                    Take the busywork out of your work <br className="hidden lg:block" /> with Notion AI.
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-[#666666]">
                    The connected work assistant that knows your team—and can take action for you.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {/* Card 1 */}
                <motion.div
                    className="bg-gray-200 border rounded-lg cursor-pointer flex flex-col"
                    whileHover={{
                        y: -2,
                        scale: 1.01,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                        transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                            mass: 0.5
                        }
                    }}
                    whileTap={{
                        scale: 0.98,
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    initial={false}
                >
                    <img src={card1} className=" h-36  lg:h-1/2 w-full rounded-t-lg object-cover" alt="" />
                    <div className="flex-1 bg-white rounded-b-lg py-6 px-6 sm:px-8">
                        <h3 className="text-lg sm:text-xl text-[#212121] font-semibold tracking-tight mb-1">
                            Get answers faster with AI chat.
                        </h3>
                        <p className="text-sm sm:text-md text-[#8e8e8e]">
                            Spark dynamic dialogue with Notion AI to brainstorm, create content, or ask questions.
                        </p>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    className="bg-gray-200 border rounded-lg cursor-pointer flex flex-col"
                    whileHover={{
                        y: -2,
                        scale: 1.01,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                        transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                            mass: 0.5
                        }
                    }}
                    whileTap={{
                        scale: 0.98,
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    initial={false}
                >
                    <img src={card2} className="h-36  lg:h-1/2 w-full rounded-t-lg object-cover" alt="" />
                    <div className="flex-1 bg-white rounded-b-lg py-6 px-6 sm:px-8">
                        <h3 className="text-lg sm:text-xl text-[#212121] font-semibold tracking-tight mb-1">
                            Create more with AI assistant.
                        </h3>
                        <p className="text-sm sm:text-md text-[#8e8e8e]">
                            Let Notion AI start from scratch, summarize, or generate tables, so you can share your
                            work—faster.
                        </p>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    className="bg-gray-200 border rounded-lg cursor-pointer flex flex-col"
                    whileHover={{
                        y: -2,
                        scale: 1.01,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                        transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                            mass: 0.5
                        }
                    }}
                    whileTap={{
                        scale: 0.98,
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    initial={false}
                >
                    <img src={card3} className="h-36  lg:h-1/2 w-full rounded-t-lg object-cover" alt="" />
                    <div className="flex-1 bg-white rounded-b-lg py-6 px-6 sm:px-8">
                        <h3 className="text-lg sm:text-xl text-[#212121] font-semibold tracking-tight mb-1">
                            Save time with AI column.
                        </h3>
                        <p className="text-sm sm:text-md text-[#8e8e8e]">
                            Turn data into insights, or tedious tasks into auto-generated content with the ability
                            to use AI at scale.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WorkAssistance
