'use client';

import React, { useRef } from 'react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

interface Feature {
  name: string;
  description: string;
  color: string;
}

export default function Features({ features }: { features: Feature[] }) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index * 2.5,
      },
    }),
  };
  return (
    <motion.div className="grid mx-auto grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-8"
    >
      {features.map((feature, i) => (
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={i}
          key={i}
        >
          <TiltCard color={feature.color} title={feature.name}/>
        </motion.div>
      ))}
    </motion.div>
  );
}
