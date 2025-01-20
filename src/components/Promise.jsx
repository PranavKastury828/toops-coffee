"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Promise = () => {
  return (
    <section className="relative py-32 my-20">
      {/* Background with parallel slanted edges */}
      <div
        className="absolute inset-0 bg-[#FA932F] -skew-y-6 origin-[0,0] z-0"
        style={{ transform: "skewY(-6deg)" }}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <motion.div
            className="relative h-[300px] sm:h-[400px] lg:h-[500px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/our-promise.png"
                alt="Our welcoming space"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-white mb-8">
              Our Promise
            </h2>
            <div className="space-y-6 font-raleway text-white/90">
              <motion.p
                className="text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Toops Coffee will always be welcoming as a space and will always
                grow in quality as a product. If Toops were a person, they would
                be friendly, open and heartwarming.
              </motion.p>
              <motion.p
                className="text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Someone that keeps the energy up even on low days and when to
                engage people in conversation, making a positive impact on the
                people that they come in contact with.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promise;
