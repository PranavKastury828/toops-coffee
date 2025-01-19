"use client";
import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ text, author, role }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <p className="text-gray-600 font-raleway italic mb-4">
      &ldquo;{text}&rdquo;
    </p>
    <p className="font-comfortaa font-bold text-[#FA932F]">{author}</p>
    <p className="text-sm text-gray-500 font-raleway">{role}</p>
  </motion.div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "The best coffee in Hyderabad! The atmosphere is perfect for both work and casual meetups.",
      author: "Priya Reddy",
      role: "Regular Customer",
    },
    {
      text: "Their commitment to quality coffee and customer service is unmatched. A true gem!",
      author: "Arun Kumar",
      role: "Food Blogger",
    },
    {
      text: "Finally, a coffee shop that understands the art of brewing. The single-origin options are exceptional.",
      author: "Sarah Matthews",
      role: "Coffee Enthusiast",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-comfortaa font-bold text-center text-[#FA932F] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
