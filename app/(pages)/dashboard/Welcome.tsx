"use client"

import React, { useEffect, useState } from 'react';

export default function Welcome({userName}: {userName: string | null}) {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good afternoon');
      } else if (currentHour >= 18 && currentHour < 22) {
        setGreeting('Good evening');
      } else {
        setGreeting('Good night');
      }
    };

    getGreeting();
  }, []);

  return <p className="text-xl font-medium">{greeting}, <span className='text-2xl'>{userName}</span>!</p>
}
