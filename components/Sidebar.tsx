import {
  Briefcase,
  CalendarCheck,
  LayoutDashboard,
  ListTodo,
  SquareDashedBottomCode,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Logo from '@/public/Logo.svg';
import SidebarOption from './SidebarOption';
import Link from 'next/link';

export default function Sidebar() {
  const options = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard />,
      href: '/dashboard',
    },
    {
      name: 'Projects',
      icon: <Briefcase />,
      href: '/projects',
    },
    {
      name: "To-do's",
      icon: <ListTodo />,
      href: '/todos',
    },
    {
      name: 'Schedule',
      icon: <CalendarCheck />,
      href: '/schedule',
    },
    {
        name: 'Nexus',
        icon: <SquareDashedBottomCode/>,
        href: '/nexus'
    }
  ];
  return (
    <div className="w-64 bg-[#e7ecf1] dark:bg-[#131c24] h-full fixed flex flex-col">
      <ul className="flex flex-col gap-2 h-full">
        <Link href={'/dashboard'} className="flex gap-2 text-2xl font-semibold items-center px-8 my-8 mb-4">
          <span className="relative h-14 w-10 flex">
            <Image fill alt="Logo" className='dark:invert' src={Logo} />
          </span>
          <h1>Task Flow</h1>
        </Link>
        <SidebarOption options={options} />
      </ul>
    </div>
  );
}
