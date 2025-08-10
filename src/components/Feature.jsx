import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import docIcon from '../assets/asset 20.svg'
import hubIcon from '../assets/asset 22.svg'
import trackersIcon from '../assets/asset 24.svg'
import appIcon from '../assets/asset 26.svg'
import replaces1 from '../assets/asset 21.png'
import replaces2 from '../assets/asset 23.png'
import replaces3 from '../assets/asset 25.png'
import replaces4 from '../assets/asset 27.png'
import featureVideo1 from '../assets/features1.mp4'
import featureVideo2 from '../assets/features2.mp4'
import featureVideo3 from '../assets/features3.mp4'
import featureVideo4 from '../assets/features4.mp4'

function Feature() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      heading: 'Writeups',
      para: 'Notion is familiar like a doc and engaging like an app, so your team can jump in quickly, collaborate effectively, and make decisions that stick.',
      icon: docIcon,
      ButtonText: "Explore Zoom's decision doc",
      replaces: replaces1,
      video: featureVideo1
    },
    {
      heading: 'Hubs',
      para: 'Teams move quicker together. So give them a place to get on the same page while centralizing everything from strategy to schedules.',
      icon: hubIcon,
      ButtonText: "Explore Notion's team hub",
      replaces: replaces2,
      video: featureVideo2
    },
    {
      heading: 'Trackers',
      para: 'Tables talk to each other, edits sync everywhere, views are personalized—and you can ditch the hacky spreadsheets.',
      icon: trackersIcon,
      ButtonText: "Explore Figma’s product roadmap",
      replaces: replaces3,
      video: featureVideo3
    },
    {
      heading: 'Applications',
      para: "With Notion, anyone can design a time-saving solution with a formula, button, or automation. And replace niche apps in your tool stack.",
      icon: appIcon,
      ButtonText: "Explore Google's LaunchCal",
      replaces: replaces4,
      video: featureVideo4
    }
  ];

  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col gap-8 lg:gap-12 xl:gap-[72px] items-center justify-center max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96 py-[72px]">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] lg:leading-snug  tracking-tighter font-extrabold text-[#212121] text-center lg:text-left">
          
          4 ways <span className="text-[#EE5A29]">50,000+ teams</span> use Notion to supercharge their work days.
        </h2>

        {/* Cards */}
        <div className="w-full flex flex-col gap-[72px]">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`flex flex-col-reverse lg:flex-row gap-10 lg:gap-28 ${index !== 0 ? 'border-t pt-8' : ''}`}
            >
              {/* Text  */}
              <div className="flex w-full lg:w-[50%] gap-5 sm:gap-7">
                <img src={card.icon} alt={`${card.heading} icon`} className="w-12 h-12 sm:w-14 sm:h-14" />
                <div>
                  <h2 className="text-[#212121] text-2xl sm:text-[38px] font-extrabold mb-2">{card.heading}</h2>
                  <p className="text-[#666666] text-sm sm:text-base tracking-tight">{card.para}</p>
                  <motion.a
                    href="#"
                    className="inline-block border py-2 px-4 sm:px-5 my-4 sm:my-5 rounded-lg bg-black text-white hover:bg-gray-800 text-center font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {card.ButtonText}
                  </motion.a>
                  <div className="mt-16 sm:mt-[117px]">
                    <span className="text-[#212121] tracking-tight font-semibold border-t border-[#828080] py-3 sm:py-4 text-sm sm:text-base">Replaces</span>
                    <img src={card.replaces} className="h-10 sm:h-12 mt-3 sm:mt-4" alt="" />
                  </div>
                </div>
              </div>

              {/* Video  */}
              <video
                src={card.video}
                ref={(el) => (videoRefs.current[index] = el)}
                muted
                loop
                playsInline
                className="w-full lg:w-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[433px] overflow-hidden border-2 border-[rgb(var(--neutral1000-rgb,0,0,0))] shadow-[8px_8px_rgb(var(--neutral1000-rgb,0,0,0))] rounded-xl object-cover"
              ></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
