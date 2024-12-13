import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OverlappingImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const imageVariants = {
    initial: (direction) => ({
      scale: direction > 0 ? 0.9 : 1.1,
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      zIndex: 0
    }),
    animate: {
      scale: 1,
      x: 0,
      opacity: 1,
      zIndex: 10,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100
      }
    },
    exit: (direction) => ({
      scale: direction > 0 ? 1.1 : 0.9,
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      zIndex: 0,
      transition: {
        duration: 1
      }
    })
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={1}>
        {images.map((image, index) => (
          currentIndex === index && (
            <motion.div
              key={index}
              custom={1}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 w-full h-full"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            >
              {/* Image with overlapping effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${image})`,
                  transform: 'scale(1.1)',
                  filter: 'brightness(0.8)'
                }}
              />
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${image})`,
                  clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)',
                  transform: 'scale(1.05)',
                  filter: 'brightness(0.9)'
                }}
              />
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${image})`,
                  clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)',
                  transform: 'scale(1.02)',
                  filter: 'brightness(1)'
                }}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OverlappingImageCarousel;
