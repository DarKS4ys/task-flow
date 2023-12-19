import Image from 'next/image'
import { ModeToggle } from './ui/toggle-mode'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import UserMenuButton from './UserMenuButton'
import Logo from '@/public/Logo.svg'
import Link from 'next/link'

export default async function Nav() {
    const session = await getServerSession(authOptions)
return (
<header className='z-50 px-4 md:px-8 py-4 flex items-center justify-center sticky top-0 border-b border-border bg-background/90 backdrop-blur-md transition-all duration-300'>
        <ul className='max-w-6xl justify-between items-center flex w-full'>
            <Link href={'/'} className='relative w-8 h-12'>
                <Image
                    src={Logo}
                    alt="Taskflow Logo"
                    className="invert-0 dark:invert object-cover"
                    fill
                    priority
                />
            </Link>
            <li className='flex gap-3 items-center'>
                <ModeToggle/>
                <UserMenuButton session={session}/>
            </li>
        </ul>
    </header>
  )
}
