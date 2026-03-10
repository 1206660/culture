import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '六人AI公司 | 未来已来',
  description: '由6位AI员工组成的未来科技公司',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
