'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="space-y-20">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center backdrop-blur-md bg-glass p-10 rounded-xl shadow-glass">
        {/* Left Text Block */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Empowering Students Through<br /> Quality Teaching
          </h1>
          <p className="text-white/80 text-lg">✓ CBSE ✓ State ✓ Competitive</p>
          <Link
            href="/enroll"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white py-3 px-6 rounded-full shadow-md transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* Right Hero Image */}
        <div className="flex justify-center">
          <Image
            src="/hero-girl.png" // replace with your hero image path
            alt="Student with Book"
            width={400}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>
      </section>

      {/* Enroll Panel Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center backdrop-blur-md bg-glass p-10 rounded-xl shadow-glass">
        {/* 3D Illustration */}
        <div className="flex justify-center">
          <Image
            src="/student-desk.png" // replace with your 3D image path
            alt="Student at Desk"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Enroll Form Box (Stylized but inactive) */}
        <div className="space-y-4 text-left">
          <h3 className="text-2xl font-semibold mb-4">Enroll Now</h3>
          <input
            type="text"
            placeholder="Student Name"
            className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder-white"
          />
          <input
            type="text"
            placeholder="Class (e.g., 10, 11 PCM)"
            className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder-white"
          />
          <input
            type="tel"
            placeholder="Parent Phone Number"
            className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder-white"
          />
          <Link
            href="/enroll"
            className="inline-block w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white py-3 rounded-full text-center"
          >
            Submit
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="backdrop-blur-md bg-glass p-10 rounded-xl shadow-glass max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">What Our Students Say</h2>
        <div className="space-y-2">
          <Image
            src="/testimonial-avatar.png"
            alt="Student"
            width={60}
            height={60}
            className="mx-auto rounded-full"
          />
          <p className="italic text-white/80">
          New coaching and tuition Center; Balco has greatly improved my understanding of subjects. The teachers are excellent!
          </p>
          <p className="font-semibold">— Suresh Kumar, Student</p>
        </div>
      </section>
    </main>
  )
}
