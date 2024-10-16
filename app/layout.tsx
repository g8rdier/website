import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

// If loading a variable font, you don't need to specify the font weight
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Purpose',
  description: 'Stop searching, start discovering a fulfilling career.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
