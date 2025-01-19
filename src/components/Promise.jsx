"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Promise = () => {
  return (
    <section className="relative py-32 my-20">
      {/* Main Background with Slanted Edges and Coffee Mug */}
      <div className="absolute inset-0">
        {/* Background container with slanted edges */}
        <div
          className="absolute inset-0 bg-[#FA932F] w-[90%]"
          style={{
            clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
          }}
        />
        {/* Coffee Mug Silhouette */}
        <svg
          className="absolute right-0 top-0 h-full w-[15%]"
          viewBox="0 0 100 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 
               L60,0
               L60,100
               C90,100 100,130 100,150
               C100,170 90,200 60,200
               L60,400
               L0,400 Z"
            fill="#FA932F"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/our-promise.png"
              alt="Our welcoming space"
              fill
              className="object-cover rounded-2xl shadow-xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-white mb-8">
              Our Promise
            </h2>
            <div className="space-y-6 font-raleway text-white/90">
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Toops will always be welcoming as a space and will always grow
                in quality as a product.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                If Toops were a person, they would be friendly, open and
                heartwarming. Someone that is welcoming and has a smile on their
                face whilst exuding a positive vibe that makes people feel
                comfortable.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Someone that keeps the energy up even on low days and knows when
                to calm down and when to engage people in conversation, overall
                making a positive impact on the people that they come in contact
                with.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promise;
