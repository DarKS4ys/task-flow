import React from 'react';
import ShinyButton from '../ShinyButton';
import Image from 'next/image';
import mockup from '@/public/mockup.png';
import styles from '@/components/styles/pattern.module.css'; // Import your CSS module
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full px-4 md:px-8 mx-auto relative py-16">
      <h1 className="text-6xl md:text-7xl font-semibold text-primary pt-8">
        Task Flow
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium text-center text-primary/80">
        The <span className="font-bold">only</span> task management solution{' '}
        <span className="font-bold">you&apos;ll ever need.</span>
      </p>
      {/*! !!!MOCKUP HERE!!!!!!!!!! */}
      <div className="flex gap-2">
        <Link href={session ? '/dashboard' : '/sign-in'}>
          <ShinyButton label={session ? 'Go to Dashboard' : 'Get Started'} />
        </Link>
      </div>
      <div className="flex justify-center h-[50vh] w-full mt-10 md:mt-24 2xl:mt-28 items-center pointer-events-none">
        <Image
          alt="Mockup"
          width={999}
          height={1351}
          src={mockup}
          priority
          placeholder="blur"
          className="w-[35vh] md:w-[48vh] max-w-[35rem] min-w-[20rem] object-cover pb-10"
        />
      </div>
      <div
        className={`${styles.container} h-full w-full absolute left-0 -z-10 dark:invert opacity-25`}
      >
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-b from-transparent to-white dark:to-primary" />
      </div>
    </div>
  );
}
