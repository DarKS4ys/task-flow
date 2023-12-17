import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Flow',
  description: 'Task flow site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Providers>
          <Nav/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
