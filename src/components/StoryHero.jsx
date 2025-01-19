"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const StoryHero = () => {
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 0, -10],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const fasterFloating = {
    y: [-10, 0, -10],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const images = [
    {
      src: "/images/our-story-1.jpg",
      alt: "Toops Coffee Story Image 1",
      className: "h-[320px] sm:h-[400px] md:h-[480px] lg:h-[640px]",
    },
    {
      src: "/images/our-story-2.jpg",
      alt: "Toops Coffee Story Image 2",
      className: "h-[280px] sm:h-[360px] md:h-[400px] lg:h-[480px]",
    },
    {
      src: "/images/our-story-3.jpg",
      alt: "Toops Coffee Story Image 3",
      className: "h-[320px] sm:h-[400px] md:h-[480px] lg:h-[640px]",
    },
    {
      src: "/images/our-story-4.jpg",
      alt: "Toops Coffee Story Image 4",
      className: "h-[280px] sm:h-[360px] md:h-[400px] lg:h-[480px]",
    },
    {
      src: "/images/our-story-5.jpg",
      alt: "Toops Coffee Story Image 5",
      className:
        "h-[320px] sm:h-[400px] md:h-[480px] lg:h-[640px] lg:-mt-[160px]",
    },
    {
      src: "/images/our-story-6.jpg",
      alt: "Toops Coffee Story Image 6",
      className: "h-[280px] sm:h-[360px] md:h-[400px] lg:h-[480px]",
    },
  ];

  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Text Content */}
          <div className="flex items-start lg:items-center lg:h-full lg:min-h-[calc(640px*2+1.5rem)]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 py-8 lg:py-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-comfortaa font-bold text-[#FA932F]">
                Our Story
              </h1>
              <div className="text-base sm:text-lg md:text-xl font-raleway text-gray-700 space-y-4 lg:space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  What does Toops mean? It is short for Toopalli, the founder's
                  last name. The name was chosen to evoke a sense of a friendly
                  neighborhood coffee shop.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-600"
                >
                  Toops coffee is a friendly neighbourhood coffee shop that grew
                  out of a garage. The brand exists to bring together people
                  over coffee. The space allows people to cross paths with
                  like-minded individuals while getting a great cup of coffee.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Bento Box Images */}
          <div className="relative mt-6 lg:mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative w-full ${image.className}`}
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover={fasterFloating}
                >
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryHero;
