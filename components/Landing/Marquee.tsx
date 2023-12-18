import React from 'react';
import { ParallaxText } from './Parallax';

export default function Marquee() {
  return (
    <section className="pt-20 bg-white dark:bg-[#03060E]">
      <div
        className="mx-auto max-w-6xl relative"
      >
        <div className="absolute left-0 h-full bg-gradient-to-r from-white dark:from-[#03060E] to-transparent w-[25%] z-20" />
        <div className="absolute right-0 h-full bg-gradient-to-l from-white dark:from-[#03060E] to-transparent w-[25%] z-20" />
        <ParallaxText baseVelocity={-5}>Task</ParallaxText>
        <ParallaxText baseVelocity={5}>Flow</ParallaxText>
      </div>
    </section>
  );
}
