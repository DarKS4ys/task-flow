import { authOptions } from '@/lib/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import Welcome from './Welcome';
import Unauthorized from '@/components/Unauthorized';

export const metadata: Metadata = {
  title: 'Dashboard - Task Flow',
  description: 'Dashboard page of Task Flow',
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!session) {
    redirect('/');
  }

  return (
    <div className="py-10 px-4 md:px-8 flex flex-col gap-4 max-w-6xl mx-auto">
      {user && user.name ? (
        <Welcome userName={user.name}/>
      ) : (
        <Unauthorized/>
      )
      }
    </div>
  );
}
