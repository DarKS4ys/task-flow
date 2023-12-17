"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import { ImSad } from 'react-icons/im';
import { Button } from './ui/button';

export default function Unauthorized() {
    const router = useRouter();
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-[25vh] overflow-hidden">
      <div className="w-[50%] h-[50%] relative flex items-center justify-center">
        <ImSad size={80} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-semibold">Unauthorized</h1>
        <p className='font-light text-muted-foreground'>You are not allowed to view this page</p>
      </div>
      <Button className='w-1/3 font-bold uppercase' onClick={router.back}>Go Back</Button>
    </div>
  );
}
