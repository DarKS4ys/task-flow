'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import OnboardingCard from './OnboardingCard';
import { FcPlanner } from "react-icons/fc";
import { Button } from './ui/button';
import clsx from 'clsx';

export default function Onboarding() {
  const { theme, setTheme } = useTheme();
  const [activeCard, setActiveCard] = useState<string>( theme ? theme.charAt(0).toUpperCase() + theme.slice(1) : 'Light' )
  const [questionIndex, setQuestionIndex] = useState(0);

  const cardData = [
    {
      description: "Define milestones and track progress",
      title: 'Dark',
      icon: <FcPlanner size={72} />
    },
    {
      description: "Track tasks",
      title: 'Light',
      icon: <FcPlanner size={72} />
    }
  ]

  const handleClick = (card: any) => {
    setTheme(card.title.toLowerCase())

    setActiveCard(activeCard === card.title ? '' : card.title)
  }


  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="border-4 border-primary/20 w-full relative flex flex-col gap-4 md:gap-8 justify-between px-20 pt-16 pb-10 bg-accent/75 backdrop-blur-lg shadow rounded-lg items-center text-primary h-full">
        <motion.span
          className="absolute text-4xl right-0 top-0 justify-center flex w-full py-5 drop-shadow-md pointer-events-none dark:text-opacity-100"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.55,
            duration: 0.65,
          }}
        >
          👋
        </motion.span>
        <motion.div
          className="flex flex-col items-center gap-1 mt-2"
          initial={{ opacity: 0, y: '30%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            duration: 1,
          }}
        >
          <h1 className="text-3xl font-semibold">Welcome to Task Flow!</h1>
          <p className="text-lg opacity-70">Let&apos;s get you started</p>
        </motion.div>

        <motion.div className='grid grid-cols-2 gap-4'>
          {
            cardData.map((card, i) => (
              <OnboardingCard className={clsx(activeCard == card.title && 'border-blue-500 ring-2')} onClick={() => handleClick(card)} activeCard={activeCard} description={card.description} title={card.title} icon={card.icon} key={card.title} />
            ))
          }
        </motion.div>

        <Button disabled={(activeCard == '')} className='w-72'>Proceed</Button>
      </div>
    </div>
  );
}
