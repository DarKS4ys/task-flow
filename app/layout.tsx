import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Footer from '@/components/Footer'

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
      <body className={inter.className}>
        <Providers>
          <Nav/>
          {children}
          {/* <Footer/> */}
        </Providers>
        </body>
    </html>
  )
}
