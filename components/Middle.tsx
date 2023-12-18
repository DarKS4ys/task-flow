import React from 'react';
import FeatureCard from './Landing/FeatureCard';
import Features from './Landing/Features';

export default function Middle() {
  const features = [
    {
      name: 'Task Manager',
      description:
        'Effortlessly conquer your daily tasks and boost productivity with our sleek Task Manager.',
      color:
        'bg-gradient-to-br from-green-600/70 to-green-800 dark:from-green-300 dark:to-green-600/70',
    },

    {
      name: 'Code Nexus',
      description:
        'Discover, organize, and collaborate on your code snippets seamlessly with Code Nexus.',
      color:
        'bg-gradient-to-br from-primary/50 to-red-500 dark:from-primary/20 dark:to-red-500/70',
    },

    {
      name: 'Canvas Studio',
      description:
        'Unleash your creative potential on a versatile and seamless canvas with Canvas Studio.',
      color:
        'bg-gradient-to-br from-blue-300 to-purple-500 dark:from-blue-300 dark:to-purple-500/70',
    },
  ];
  return (
    <div className="w-full bg-white dark:bg-[#03060E] py-20">
      <div className="flex flex-col gap-4 items-center justify-center px-4 md:px-8 w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold">One tool, all your needs</h1>
        <Features features={features} />
      </div>
    </div>
  );
}
