// components/WhatsAppWidget.tsx
'use client'

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/917898552785"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M16.004 2.984a13.02 13.02 0 0 0-11.281 19.594L2.02 29.98l7.594-2.688a13.02 13.02 0 1 0 6.39-24.308zm0 2.062c6.063 0 10.968 4.906 10.968 10.968a10.892 10.892 0 0 1-1.688 5.813l.938 5.375-5.469-1.531a10.915 10.915 0 0 1-4.75 1.094c-6.063 0-10.969-4.906-10.969-10.969s4.906-10.968 10.97-10.968zm-3.5 5.969a.903.903 0 0 0-.875.687c-.125.469-.375 1.469-.438 1.906-.062.438-.344.969-.594 1.313-.094.125-.094.25-.031.438.063.125.313 1.031 1.438 2.125 1.032 1.063 2.125 1.5 2.375 1.594.25.125.375.094.531.062.188-.031.875-.344 1 .031.125.375.719 1.063.875 1.25.156.188.312.188.562.125.219-.062 1.375-.688 1.625-1.344.25-.656.25-1.219.188-1.344-.063-.125-.25-.188-.531-.312-.219-.093-1.313-.625-1.5-.688-.188-.063-.344-.094-.5.094-.156.188-.594.688-.719.813-.125.125-.25.125-.438.063-.187-.063-.75-.281-1.406-.875-.531-.5-.875-1.094-1-1.281-.125-.188-.031-.281.094-.406.094-.094.219-.25.344-.375.094-.125.125-.219.188-.375.062-.156.031-.281 0-.406-.063-.125-.5-1.25-.688-1.719-.188-.469-.375-.406-.531-.406z" />
      </svg>
    </a>
  )
}
