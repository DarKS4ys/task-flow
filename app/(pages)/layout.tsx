import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { prisma } from '@/lib/db/prisma';
import Providers from '../providers';
import { ModeToggle } from '@/components/ui/toggle-mode';
import Nav from '@/components/Nav';

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

  /*   if (user?.onboarding) {
    return (
      <html lang="en">
        <body>
        <Providers>
          <div>Onboarding</div>
          </Providers>
        </body>
      </html>
    )
  } */

  return (
    <Providers>
      <div className="hidden md:flex h-full border-[--border] md:border-r">
        <Sidebar />
      </div>
      <div className="flex flex-col md:pl-64">
        {/* <MobileSidebar /> */}
        {children}
      </div>
    </Providers>
  );
}
