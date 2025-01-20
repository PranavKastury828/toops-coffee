"use client";
import React from "react";
import Image from "next/image";
import CoffeeMug from "./CoffeeMug";
import { motion } from "framer-motion";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Sooraj Toopalli",
      role: "Founder",
      image: "/images/history-1.jpg",
    },
    {
      name: "Revati Rao",
      role: "Operations Manager",
      image: "/images/meet-the-team-1.jpg",
    },
    {
      name: "Sikandar Shaw",
      role: "Sr Barista",
      image: "/images/meet-the-team-2.jpg",
    },
    {
      name: "Chinmayee",
      role: "Chef/Barista",
      image: "/images/meet-the-team-6.jpg",
    },
    {
      name: "Sai",
      role: "Barista",
      image: "/images/meet-the-team-3.jpg",
    },
    {
      name: "Chandrasekhar",
      role: "Barista",
      image: "/images/meet-the-team-4.jpg",
    },
    {
      name: "Clatus",
      role: "Chef",
      image: "/images/meet-the-team-5.jpg",
    },
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-comfortaa font-bold text-[#FA932F] text-center mb-20"
        >
          The Toops Team
        </motion.h2>

        {/* Team Members Grid */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-y-12 gap-x-8 lg:gap-x-0"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemAnimation}
              className="flex flex-col items-center align-center basis-1/4"
            >
              {/* Image Container with Gradient Border */}
              <div className="relative mb-16">
                <div className="relative w-48 h-48">
                  {/* Gradient Border Container */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, #FFC75D, #FCAC31, #FA932F)`,
                      padding: "8px", // Increased border width
                    }}
                  >
                    {/* Image Container */}
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 192px, 192px"
                      />
                    </div>
                  </div>

                  {/* Coffee Mug positioned at top left, smaller and less overlapping */}
                  <div className="absolute -top-12 -left-12 w-2 h-2 transform -rotate-12 z-10">
                    <CoffeeMug />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-comfortaa font-bold text-[#FA932F] mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-raleway">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
