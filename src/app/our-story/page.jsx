// src/app/our-story/page.jsx
"use client";
import React from "react";
import StoryHero from "@/components/StoryHero";
import HistorySection from "@/components/HistorySection";
import MeetTheTeam from "@/components/MeetTheTeam";

const OurStory = () => {
  return (
    <main className="bg-white">
      <StoryHero />
      <HistorySection />
      <MeetTheTeam />
    </main>
  );
};

export default OurStory;
