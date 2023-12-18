import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }

  return (
    <html lang="en">
      <body>
        <div className="hidden md:flex h-full border-[--border] md:border-r">
          <Sidebar />
        </div>
        <div className="flex flex-col pl-64">
          {/* <MobileSidebar /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
