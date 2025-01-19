"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HistorySection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [isGsapLoaded, setIsGsapLoaded] = useState(false);

  const historyData = [
    {
      image: "/images/history-1.jpg",
      text: "Toops coffee started as an idea to bring people together over great coffee. Being a vision that started during COVID, things were uncertain when it came to execution on a longer-term or at a larger scale. This was one of the best things that could have happened because it gave time for the business to build itself around the people that were attracted to specialty coffee. As the business took shape, people were a part of the building story.",
    },
    {
      image: "/images/history-2.jpg",
      text: "The first day of Toops Coffee was just a table and a pourover kit with a few choices for coffee beans. The idea was to sell one coffee on the first day. The rest would fall into place as the idea took shape. Small beginnings, barebones, cozy, simple. By this time the tiny idea became reality, The menu was complete, and a small stream of steady customers walked in every day. A tiny neighborhood coffeeshop.",
    },
    {
      image: "/images/history-3.jpg",
      text: "Slowly but surely, more coffees were brewed for more customers every day, and this was when Toops Coffee was crafted. The idea and vision came to life with the limited crowd then. This was when I realized that Toops Coffee was not only about bringing people together over great coffee, but it was actually about giving anyone and everyone an opportunity to meet each other whilst getting a great cup of coffee. This meant the forming of unlikely friendships, small communities of athletes and coffee lovers forming, with Toops Coffee as the location to come together. People created a routine for themselves here, giving them a space to look to for positive conversations and great coffee.",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadGsap = async () => {
        const gsapModule = await import("gsap");
        const scrollTriggerModule = await import("gsap/dist/ScrollTrigger");
        const gsap = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        const cards = cardsRef.current;

        cards.forEach((card, index) => {
          // Set initial state
          gsap.set(card, {
            opacity: 0,
            y: 100,
            x: index % 2 === 0 ? -50 : 50,
          });

          // Create scroll trigger animation that only plays once
          gsap.to(card, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%", // Starts animation when 20% of the card is in view
              toggleActions: "play none none none", // Only plays animation once, never reverses
              once: true, // Ensures the animation only happens once
            },
          });
        });

        setIsGsapLoaded(true);
      };

      loadGsap();

      // Cleanup function
      return () => {
        if (isGsapLoaded) {
          import("gsap/dist/ScrollTrigger").then((module) => {
            const ScrollTrigger = module.ScrollTrigger;
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          });
        }
      };
    }
  }, [isGsapLoaded]);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-comfortaa font-bold text-[#FA932F] text-center mb-16">
          Our History
        </h2>

        {/* History Cards */}
        <div className="relative space-y-32">
          {historyData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center
                ${
                  index % 2 === 0
                    ? "md:ml-0 md:mr-[10%]"
                    : "md:ml-[10%] md:mr-0"
                }`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={item.image}
                  alt={`Toops Coffee History ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              </div>

              {/* Text Container */}
              <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
                <div className="font-raleway text-gray-700 text-lg leading-relaxed">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
