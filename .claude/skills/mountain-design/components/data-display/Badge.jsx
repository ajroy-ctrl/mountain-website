import React from 'react';

/** Small label badge. Pill outline style ("YOUR RECRUITING PARTNER") + solid tones. */
export function Badge({ children, tone = 'blue', variant = 'soft', dot = false, style }) {
  const tones = {
    blue: { fg: 'var(--blue-600)', bg: 'var(--blue-50)', border: 'rgba(29,95,232,0.35)' },
    navy: { fg: 'var(--white)', bg: 'var(--navy-800)', border: 'transparent' },
    grey: { fg: 'var(--text-body)', bg: 'var(--grey-100)', border: 'var(--border-subtle)' },
    lavender: { fg: '#6b46d9', bg: 'var(--lavender-100)', border: 'transparent' },
    'blue-on-dark': { fg: '#9cc0ff', bg: 'rgba(29,95,232,0.14)', border: 'rgba(120,160,255,0.4)' },
  };
  const t = tones[tone] || tones.blue;
  const solid = variant === 'solid';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      color: solid ? '#fff' : t.fg,
      background: solid ? t.fg : t.bg,
      border: variant === 'outline' ? `1px solid ${t.border}` : '1px solid transparent',
      padding: '6px 13px', borderRadius: 'var(--radius-pill)', ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: solid ? '#fff' : t.fg }} />}
      {children}
    </span>
  );
}
