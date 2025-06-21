export default function AboutPage() {
  return (
    <main className="p-6 space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to <strong>New Coaching and Tuition Center, Balco</strong> – your child’s trusted academic partner. We are committed to delivering high-quality education, personalized support, and result-driven learning for students from Class 8 to Class 12.
        </p>
      </section>

      {/* Mission + Methodology */}
      <section className="grid sm:grid-cols-2 gap-6">
        <div className="backdrop-blur-md bg-glass p-6 rounded-lg shadow-glass space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            To empower every student with the knowledge, confidence, and skills to succeed academically and beyond. We focus on developing strong concepts, logical thinking, and exam readiness.
          </p>
        </div>

        <div className="backdrop-blur-md bg-glass p-6 rounded-lg shadow-glass space-y-4">
          <h2 className="text-2xl font-semibold">Our Teaching Methodology</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Concept clarity through regular classes</li>
            <li>Doubt-solving and one-on-one support</li>
            <li>Weekly tests & performance feedback</li>
            <li>Parental communication & progress tracking</li>
          </ul>
        </div>
      </section>

      {/* Facilities */}
      <section className="backdrop-blur-md bg-glass p-6 rounded-lg shadow-glass">
        <h2 className="text-2xl font-semibold mb-3">Our Facilities</h2>
        <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-5">
          <li>Classrooms with whiteboards</li>
          <li>Dedicated doubt sessions</li>
          <li>Clean and safe learning environment</li>
          <li>Flexible batch timings</li>
        </ul>
      </section>

      {/* Founder Message */}
      <section className="backdrop-blur-md bg-glass p-6 rounded-lg shadow-glass text-center space-y-4">
        <h2 className="text-2xl font-semibold">From the Founder’s Desk</h2>
        <p className="max-w-3xl mx-auto">
          “At New Coaching and Tuition Center, we believe that every student is unique. Our aim is to provide a nurturing space where learning is joyful, challenging, and tailored to every child&rsquo;s pace and style. Let&rsquo;s build a brighter future together.”
        </p>
        <p className="italic text-lg">— [Lochan Prasad Bareth], Founder</p>
      </section>
    </main>
  )
}
