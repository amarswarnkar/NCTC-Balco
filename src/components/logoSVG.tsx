// components/LogoSVG.tsx
const LogoSVG = ({ className = 'w-24 h-24' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="256" cy="256" r="240" stroke="#004AAD" strokeWidth="32" fill="white" />
      
      {/* Stars */}
      <polygon points="100,256 110,280 135,280 115,295 125,320 100,305 75,320 85,295 65,280 90,280" fill="#004AAD" />
      <polygon points="412,256 422,280 447,280 427,295 437,320 412,305 387,320 397,295 377,280 402,280" fill="#004AAD" />
      
      {/* Human figure with graduation cap */}
      <path
        d="M256 190c25 0 45-20 45-45s-20-45-45-45-45 20-45 45 20 45 45 45zm0 25c-30 0-70 50-90 90 25-10 65-15 90-15s65 5 90 15c-20-40-60-90-90-90z"
        fill="#004AAD"
      />
      
      {/* Graduation cap */}
      <polygon points="230,140 280,140 256,120" fill="#004AAD" />

      {/* Text */}
      <text x="256" y="80" fontSize="30" textAnchor="middle" fontFamily="Arial" fill="#000">
        NEW COACHING
      </text>
      <text x="256" y="440" fontSize="30" textAnchor="middle" fontFamily="Arial" fill="#000">
        & TUITION CENTRE
      </text>
    </svg>
  );
};

export default LogoSVG;
