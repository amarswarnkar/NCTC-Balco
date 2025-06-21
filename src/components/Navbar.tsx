import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-start backdrop-blur-md bg-glass rounded-xl px-6 py-4 shadow-md">
       <div className="relative w-12 h-12">
          <Image
            src="/logo.svg" // Put logo.svg in /public
            alt="New Coaching & Tuition Centre Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      <h1 className="text-2xl font-bold items-start">New Coaching & Tuition Centre</h1>
      <div className="space-x-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
