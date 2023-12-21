'use client'

import clsx from 'clsx'
import React from 'react'

interface Props {
  icon: React.ReactNode
  title: string
  description: string
  activeCard: string
  onClick: () => void
  className: string
}

export default function OnboardingCard({icon, title, description, activeCard, onClick, className}: Props) {
  return (
    <div onClick={onClick} className={clsx('cursor-pointer flex flex-col gap-2 dark:border-primary/20 border-border border-2 p-4 2xl:h-80 w-full mx-auto rounded-xl justify-center items-center', className)}>
        {icon}
        <div className='flex flex-col items-center text-center gap-2'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <p>{description}</p>
        </div>
    </div>
  )
}
