import clsx from 'clsx';
import React from 'react';
import LottieAnim from './LottieAnim';

interface FeatureCardProps {
  title: String;
  description: String;
  color: String;
}

export default function FeatureCard({
  title,
  description,
  color,
}: FeatureCardProps) {
  return (
    <div
      className={clsx(
        'cursor-pointer flex flex-col gap-4 p-8 rounded-xl w-full hover:scale-105 transition duration-200 max-w-[30rem] mx-auto relative overflow-hidden group',
        color
      )}
    >
      <div className="rounded-lg overflow-hidden h-60 md:h-52">
        <LottieAnim/>
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="font-light">{description}</p>
      </div>

      <div className='absolute -bottom-16 left-0 rounded-t-full w-full h-[50%] bg-white flex justify-center items-center blur-[80px] opacity-0 dark:group-hover:opacity-30 group-hover:opacity-40 transition duration-500'/>
    </div>
  );
}
