"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const images = [
    "/images/hero-section.jpg",
    "/images/hero-section-2.jpg",
    "/images/hero-section-3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    setIsLoaded(true);
    return () => clearInterval(timer);
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="100svh lg:min-h-[100svh] flex flex-col lg:flex-row relative">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 sm:px-8 md:p-16 bg-white relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="max-w-lg text-center lg:text-left w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-comfortaa font-bold mb-3 text-[#FA932F] tracking-wide"
          >
            T O O P S
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg font-raleway text-gray-500 mb-6"
          >
            pronounced /too - ps/
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl font-raleway text-gray-700 leading-relaxed"
          >
            The neighbourhood coffee shop that broke the cookie-cutter coffee
            culture of Hyderabad.
          </motion.p>

          {/* Mobile Progress Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center lg:hidden space-x-2"
          >
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentImage
                    ? "w-8 bg-[#FA932F]"
                    : "w-2 bg-[#FA932F]/30"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Image Slideshow */}
      <div className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-screen overflow-hidden order-first lg:order-last">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Coffee shop ambiance"
              fill
              priority={currentImage === 0}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
            {/* Enhanced Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FA932F]/30 to-[#FFC75D]/30"
              style={{ mixBlendMode: "multiply" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Desktop Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImage ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Mobile Overlay Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent lg:hidden" />
      </div>
    </section>
  );
};

export default Hero;
