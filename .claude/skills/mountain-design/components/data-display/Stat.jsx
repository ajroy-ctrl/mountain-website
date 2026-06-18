import React from 'react';

/** Big-number stat block from the marketing hero ("500+ / CLIENTS SERVED"). */
export function Stat({ value, label, onDark = false, align = 'left', style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: align, ...style }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1,
        letterSpacing: '-0.02em', color: onDark ? 'var(--white)' : 'var(--text-strong)',
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      }}>{label}</span>
    </div>
  );
}
