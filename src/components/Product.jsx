"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-[#FA932F] mb-6">
              Our Product
            </h2>
            <div className="space-y-4 font-raleway text-gray-700">
              <p className="text-lg">
                Our coffees are a part of specialty coffee as we follow the same
                standards in sourcing, roasting and brewing that the SCA
                (Specialty Coffee Association) has prescribed.
              </p>
              <p className="text-lg">
                We currently serve a 100% Arabica coffee. Roasted in Nagpur,
                India. The coffees are sourced from the coffee belt of India.
                Exploring other species of coffee is in the pipeline for the
                future.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/our-product.jpg"
              alt="Our coffee products"
              fill
              className="object-cover rounded-2xl shadow-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
