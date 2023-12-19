'use client';

import clsx from 'clsx';
import { Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ModeToggle } from './ui/toggle-mode';

interface Option {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export default function SidebarOption({ options }: { options: Option[] }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2 h-full mt-8">
      {options.map((option, i) => {
        const isActive = pathname.includes(option.href);

        return (
          <Link
            className={clsx(
              'p-3 hover:bg-border/50 transition duration-200',
              isActive
                ? 'bg-gradient-to-r from-[#a4c9d6] to-transparent font-semibold'
                : 'hover:opacity-100 opacity-80 bg-transparent font-medium'
            )}
            key={i}
            href={option.href}
          >
            <div className="px-8 flex gap-2 text-lg items-center">
              <span>{option.icon}</span>
              <h2>{option.name}</h2>
            </div>
          </Link>
        );
      })}

      <Link
        className={clsx(
          'p-3 hover:bg-border/50 transition duration-200 mt-auto mb-8',
          pathname.includes('/settings')
            ? 'bg-gradient-to-r from-[#a4c9d6] to-transparent font-semibold'
            : 'hover:opacity-100 opacity-80 bg-transparent font-medium'
        )}
        href="/settings"
      >
        <div className="px-8 flex gap-2 text-lg items-center">
          <span>
            <Settings />
          </span>
          <h2>Settings</h2>
        </div>
      </Link>

      <ModeToggle/>
    </div>
  );
}
