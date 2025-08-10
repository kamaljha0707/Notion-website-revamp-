import React from 'react'
import figma from '../assets/asset 11.svg'
import newYorkTimes from '../assets/asset 12.svg'
import square from '../assets/asset 13.svg'
import doordash from '../assets/asset 14.svg'
import toast from '../assets/asset 15.svg'
import ted from '../assets/asset 16.svg'
import uber from '../assets/asset 17.svg'

function Teams() {
    return (
        <div className="w-full bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 2xl:px-40 py-12 md:py-16 lg:py-[72px]">
                <h3 className='text-lg sm:text-xl text-[#666666] text-center'>
                    A few of the 50,000+ teams collaborating on Notion.
                </h3>
                
                <div className='flex justify-center items-center flex-wrap mt-6 sm:mt-8 gap-6 sm:gap-8 lg:gap-10'>
                    {/* Logo images with responsive sizing */}
                    <img src={figma} alt="Figma" className="" />
                    <img src={newYorkTimes} alt="New York Times" className="" />
                    <img src={square} alt="Square" className="" />
                    <img src={doordash} alt="DoorDash" className="" />
                    <img src={toast} alt="Toast" className="" />
                    <img src={ted} alt="TED" className="" />
                    <img src={uber} alt="Uber" className="" />
                </div>
            </div>
        </div>
    )
}

export default Teams