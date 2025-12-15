import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 300 130" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#B8860B" />
        <stop offset="100%" stopColor="#AA6C39" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="rgba(0,0,0,0.5)"/>
      </filter>
    </defs>
    
    {/* Icon Group - stylized leaves/diamonds */}
    <g transform="translate(150, 45) scale(0.8)">
         <path d="M0 -35 Q15 -35 25 -25 Q35 -15 35 0 Q15 0 5 -10 Q-5 -20 0 -35" fill="url(#goldGradient)" filter="url(#shadow)" />
         <path d="M35 0 Q35 15 25 25 Q15 35 0 35 Q0 15 10 5 Q20 -5 35 0" fill="url(#goldGradient)" filter="url(#shadow)" />
         <path d="M0 35 Q-15 35 -25 25 Q-35 15 -35 0 Q-15 0 -5 10 Q5 20 0 35" fill="url(#goldGradient)" filter="url(#shadow)" />
         <path d="M-35 0 Q-35 -15 -25 -25 Q-15 -35 0 -35 Q0 -15 -10 -5 Q-20 5 -35 0" fill="url(#goldGradient)" filter="url(#shadow)" />
    </g>

    {/* Main Text */}
    <text x="150" y="95" fontSize="48" fontFamily="serif" fontWeight="bold" fill="url(#goldGradient)" textAnchor="middle" filter="url(#shadow)" letterSpacing="1">
      ERATRAVEL
    </text>
    
    {/* Subtitle */}
     <text x="150" y="112" fontSize="9" fontFamily="sans-serif" fill="#ccc" textAnchor="middle" letterSpacing="2" style={{ textTransform: 'uppercase' }}>
      Your reliable DMC & MICE partner
    </text>
     <text x="150" y="125" fontSize="8" fontFamily="sans-serif" fill="#999" textAnchor="middle" letterSpacing="3" style={{ textTransform: 'uppercase' }}>
      AZERBAIJAN / TURKIYE / GEORGIA
    </text>
  </svg>
);