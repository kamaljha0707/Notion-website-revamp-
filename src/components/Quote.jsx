import React from 'react'
import openAiImg from '../assets/openai-logo.webp'
import img from '../assets/asset 77.png'

function Quote() {
  return (
    <>
      <div className="h-full w-full bg-white max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96 py-8 sm:py-12 md:py-16 lg:py-[112px]">
        <div className="flex flex-col items-start max-w-[1920px]  py-8 sm:py-12 md:py-[86px] px-4 sm:px-6 md:px-[38px] bg-[#FFE6C9] rounded-xl">
          <img
            src={openAiImg}
            className="h-[32px] sm:h-[36px] md:h-[42px] w-auto"
            alt=""
          />
          <h1 className="quote mt-6 sm:mt-8 text-2xl sm:text-[28px] md:text-[34px] lg:text-[38px] leading-snug sm:leading-tight">
            “There’s power in a single platform where <br className="hidden sm:block" /> you can do all your work. Notion is that single <br className="hidden sm:block" /> place.”
          </h1>
          <div className="h-full w-full flex items-center gap-3 mt-6 sm:mt-8">
            <img
              src={img}
              className="h-10 w-10 sm:h-[42px] sm:w-11 rounded-full border border-gray-200 bg-white"
              alt=""
            />
            <div>
              <span className="text-[#212121] text-sm sm:text-base font-semibold">
                Spencer Swan
              </span>
              <p className="text-xs sm:text-sm text-[#8e8e8e]">
                Assoc Dir of Product Management, OpenAI
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quote
