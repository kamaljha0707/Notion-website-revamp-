import React, { useRef, useEffect } from 'react';
import tracker from '../assets/trackers.mp4';
import { motion } from 'framer-motion';

function ProductReview() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play();
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-full w-full bg-white max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96 py-12 sm:py-[72px] flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center justify-center">
      {/* Video */}
      <video
        src={tracker}
        ref={videoRef}
        muted
        playsInline
        className="w-fit lg:w-1/2 h-[300px] sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[500px] 2xl:h-[450px] object-cover rounded-lg"
      ></video>

      {/* Text Content */}
      <div className="text-left max-w-full lg:max-w-[600px]">
        <h2 className="text-4xl lg:text-[53px] lg:leading-[1.1] tracking-tighter  mb-[10px] font-extrabold text-[#212121]">
          Create workflows across your must-have tools.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-[#666666] mb-6">
          Pull Google Calendars into the team wiki, push updates into Slack automatically, embed Figma files into a project brief, create Jira tickets from feedback tables, and more with our 600+ integrations.
        </p>
        <motion.a
          href="#"
          className="inline-block border py-2 px-4 sm:px-5 rounded-lg bg-black text-white hover:bg-gray-800 text-center font-medium text-sm sm:text-base"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Browse
        </motion.a>
      </div>
    </div>
  );
}

export default ProductReview;
