import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { NavBar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Banner } from '@/components/layout/banner'
import { ChatBot } from '@/components/chat/chat-bot'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UpSkillZone - Online Learning Platform',
  description: 'Modern education platform for students and instructors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Suspense fallback={null}>
              <Banner />
              <NavBar />
            </Suspense>
            <main className="flex-grow">
              <Suspense fallback={null}>
                {children}
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
          <ChatBot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}