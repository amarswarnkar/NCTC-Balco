'use client'

import React, { useState } from 'react';

export default function EnrollPage() {
  const [form, setForm] = useState({
    Name: '',
    Class: '',
    Subjects: '',
    Phone: '',
    Message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.Name.trim()) newErrors.Name = 'Name is required';
    if (!form.Class.trim()) newErrors.Class = 'Class is required';
    if (!form.Phone.trim()) newErrors.Phone = 'Phone is required';
    else if (!/^\d{10}$/.test(form.Phone)) newErrors.Phone = 'Enter a valid 10-digit phone number';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault();
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <main className="p-6 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Enroll Now</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Fill out the form below to enroll your child or request a callback from our team.
        </p>
      </section>

      <form
        action="https://formsubmit.co/amarswarnkarmq@gmail.com"
        method="POST"
        className="max-w-xl mx-auto backdrop-blur-md bg-glass p-6 rounded-lg shadow-glass space-y-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://nctc-balco-4el1.vercel.app/thankyou" />

        <div>
          <input
            type="text"
            name="Name"
            placeholder="Student Name"
            required
            value={form.Name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white"
          />
          {errors.Name && <p className="text-red-400 text-sm">{errors.Name}</p>}
        </div>
        <div>
          <input
            type="text"
            name="Class"
            placeholder="Class (e.g. 9, 11 PCM)"
            required
            value={form.Class}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white"
          />
          {errors.Class && <p className="text-red-400 text-sm">{errors.Class}</p>}
        </div>
        <div>
          <input
            type="text"
            name="Subjects"
            placeholder="Subjects"
            value={form.Subjects}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white"
          />
        </div>
        <div>
          <input
            type="tel"
            name="Phone"
            placeholder="Parent Phone Number"
            required
            value={form.Phone}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white"
          />
          {errors.Phone && <p className="text-red-400 text-sm">{errors.Phone}</p>}
        </div>
        <div>
          <textarea
            name="Message"
            placeholder="Additional Comments (optional)"
            value={form.Message}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Submit Enquiry
        </button>
        {submitted && Object.keys(errors).length === 0 && (
          <p className="text-green-400 text-center">Submitting...</p>
        )}
      </form>
    </main>
  );
}
