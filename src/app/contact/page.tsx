export default function ContactPage() {
  return (
    <main className="p-6 space-y-12">
      {/* Section Heading */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-xl mx-auto">
          We would love to hear from you! Reach out for admission inquiries, doubt sessions, or parent-teacher meetings.
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid sm:grid-cols-2 gap-6">
        {/* Contact Details */}
        <div className="backdrop-blur-md bg-glass p-6 rounded-lg shadow-glass space-y-4">
          <h2 className="text-xl font-semibold">Contact Details</h2>
          <p><strong>📞 Phone:</strong> <a href="tel:+91789852785" className="underline">+91 78985 52785</a></p>
          <p><strong>📍 Address:</strong> Near Arvind Jewellers, Bhadrapara Road, BALCO, Korba (C.G.), Pin - 495684</p>
          <p><strong>📧 Email:</strong> <a href="mailto:lochan.ad28.bareth@gmail.com" className="underline">lochan.ad28.bareth@gmail.com</a></p>
          <p>
            <strong>💬 WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/917898527785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 underline"
            >
              Chat with us
            </a>
          </p>
        </div>

        {/* Google Map with Label */}
        <div className="space-y-2 text-center rounded-lg overflow-hidden shadow-glass">
          <h2 className="text-xl font-semibold">Visit Our Center</h2>
          <p>
            <strong>New Coaching and Tuition Center</strong><br />
            Near Arvind Jewellers, Bhadrapara Road,<br />
            BALCO, Korba (C.G.) – 495684
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.4540055720993!2d82.75606951112474!3d22.398091505573618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2786380724c0f7%3A0x6e68a8c0d44f1c63!2s9QX4%2B3F3%2C%20Road%2C%20Sada%20Colony%2C%20Bhadrapara%2C%20Balco%20Nagar%2C%20Korba%2C%20Chhattisgarh%20495684!5e0!3m2!1sen!2sin!4v1750504586072!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
