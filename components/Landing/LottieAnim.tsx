'use client'
import React from 'react'
import animationData from '@/app/lotties/lottie.json';
import Lottie from 'lottie-react';

export default function LottieAnim() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  return (
     <Lottie animationData={animationData} />
  )
}
