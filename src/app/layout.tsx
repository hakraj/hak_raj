import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hak_raj | Ẃeb Developer',
  description: 'I am a full-stack web developer showcasing my skills, projects, and experience. Explore my portfolio to learn more about my work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
