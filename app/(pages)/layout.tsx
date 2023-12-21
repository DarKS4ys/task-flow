import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { prisma } from '@/lib/db/prisma';
import Providers from '../providers';
import { ModeToggle } from '@/components/ui/toggle-mode';
import OnboardingBg from '@/public/placeholderB.jpg'
import Onboarding from '@/components/Onboarding';
import Image from 'next/image';

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (user?.onboarding) {
    return (
      <body>
        <Providers>
          <Image src={OnboardingBg} placeholder='blur' alt='Cover' className='object-cover' fill/>
          <div className='h-screen flex items-center justify-center'>
          <Onboarding/>
          </div>
        </Providers>
      </body>
    );
  }

  return (
    <body>
      <Providers>
        <div className="hidden md:flex h-full border-[--border] md:border-r">
          <Sidebar />
        </div>
        <div className="flex flex-col md:pl-64">
          {/* <MobileSidebar /> */}
          {children}
        </div>
      </Providers>
    </body>
  );
}
