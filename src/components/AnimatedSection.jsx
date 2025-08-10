import React, { useRef, useEffect, useState } from 'react';
import fallbackImage from '../assets/asset 18.jpeg';
import { CanvasImg } from '../components/CanvasImg';

function AnimatedSection() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [images, setImages] = useState([]);

  // Load all 117 images
  useEffect(() => {
    const imageArray = [];
    for (let i = 1; i <= 117; i++) {
      const img = new Image();
      img.src = CanvasImg[`img${i}`];
      imageArray.push(img);
    }
    setImages(imageArray);
  }, []);

  // Draw specific frame
  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const image = images[index];

    if (context && image?.complete) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  };

  // Scroll logic 
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || images.length === 0) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      const scrollProgress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);

      
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
      const frameIndex = Math.floor(clampedProgress * 116); 

      renderFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial render
    const interval = setInterval(() => {
      if (images[0]?.complete) {
        renderFrame(0);
        clearInterval(interval);
      }
    }, 50);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [images]);

  return (
    <section ref={sectionRef} className="h-[800vh] md:h-[800vh]">
      <div className="sticky top-0 flex flex-col items-center justify-start ">
        <canvas
          ref={canvasRef}
          width={1157}
          height={651}
          className="h-screen w-full  max-w-[2560px] min-h-[400px] object-cover bg-white"
        />
        {/* Fallback Image */}
        <img
          src={fallbackImage}
          alt="Notion workspace"
          className="object-contain w-full h-full hidden"
        />
      </div>
    </section>
  );
}

export default AnimatedSection;
