import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { Topbar } from '@/components/Topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tell me everything you want',
  description: '© Build by @Yeisson2183',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Providers>
          <Topbar/>
          <main className="flex min-h-screen flex-row items-start justify-center p-12 max-w-7xl mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
