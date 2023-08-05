import './globals.css'
import type { Metadata } from 'next'
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Andy Hunter',
  description: 'Articles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png'/>
      </head>
      <body className="relative border-t-8">
        <header className="px-5 py-10 sm:p-10 lg:fixed top-0 lg:mb-10">
          <nav>
            <Link className="block text-2xl font-bold mb-4 hover:no-underline" href="/" rel="logo">Andy Hunter</Link>
            <ul className="text-lg inline-flex sm:flex sm:flex-col space-x-2 sm:space-y-2 sm:space-x-0 opacity-60">
              <li><Link href="/">home</Link></li>
              <li><Link href="/about">about</Link></li>
              <li><Link href="mailto: andyhunter52@gmail.com">contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex p-5 sm:p-10 lg:pt-72 lg:justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
