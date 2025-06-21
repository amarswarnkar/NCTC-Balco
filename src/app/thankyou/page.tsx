'use client'

import { useEffect } from 'react'

export default function ThankYouPage() {
  useEffect(() => {
    const redirect = setTimeout(() => {
      const phone = '917898552785' // Replace with your WhatsApp number
      const message = 'Hello! I just submitted an enquiry on your website.'
      const encoded = encodeURIComponent(message)
      window.location.href = `https://wa.me/${phone}?text=${encoded}`
    }, 1000) // 1 second delay

    return () => clearTimeout(redirect)
  }, [])

  return (
    <main className="p-6 flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <div className="backdrop-blur-md bg-glass p-8 rounded-lg shadow-glass max-w-xl">
        <h1 className="text-4xl font-bold mb-4">🎉 Thank You!</h1>
        <p className="text-lg">We received your enquiry. Redirecting you to WhatsApp...</p>
        <p className="text-sm text-white/60">(If it doesn’t happen, <a href="https://wa.me/917898552785" className="underline">click here</a>)</p>
      </div>
    </main>
  )
}
