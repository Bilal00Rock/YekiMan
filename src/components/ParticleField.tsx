import React, { useMemo } from 'react';
import '../styles/ParticleField.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  driftX: number;
}

interface ParticleFieldProps {
  count?: number;
  colors?: string[];
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 22,
  colors = [
    'rgba(239,146,187,0.7)',
    'rgba(239,146,187,0.4)',
    'rgba(100,207,252,0.4)',
    'rgba(255,255,255,0.5)',
    'rgba(236,69,56,0.3)',
  ],
}) => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 20 + Math.random() * 80,
      size: 1.5 + Math.random() * 3.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 4 + Math.random() * 8,
      delay: Math.random() * 6,
      driftX: (Math.random() - 0.5) * 60,
    }));
  }, [count]);

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--drift-x': `${p.driftX}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ParticleField;