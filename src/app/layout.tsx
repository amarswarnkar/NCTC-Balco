import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget' // ✅ Import it

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'New Coaching & Tuition Center | Balco',
  description: 'Top-notch coaching for school & competitive exams in Balco.',
    icons: {
    icon: '/Favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gradient-to-br from-indigo-500 to-blue-400 min-h-screen text-white`}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Navbar />
          {children}
          <Footer />
        </div>

        {/* ✅ WhatsApp Floating Button */}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
