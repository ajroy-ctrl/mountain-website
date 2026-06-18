import React from 'react';

/** Initials/image avatar. Default indigo-periwinkle matches the portal "MR" mark. */
export function Avatar({ name = '', src, size = 40, square = false, color = 'var(--periwinkle-400)', style }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join('');
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, flex: `0 0 ${size}px`, overflow: 'hidden',
      borderRadius: square ? 'var(--radius-sm)' : '50%',
      background: src ? 'transparent' : color, color: '#fff',
      fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: size * 0.4, lineHeight: 1, ...style,
    }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (initials || '?')}
    </span>
  );
}
