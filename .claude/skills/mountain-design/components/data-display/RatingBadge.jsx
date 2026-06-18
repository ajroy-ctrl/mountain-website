import React from 'react';

/** Colored rating ring (1–10) from the portal RATING column: red low, amber mid, green high. */
export function RatingBadge({ value = 0, size = 32, style }) {
  const v = Number(value);
  let c = 'var(--green-600)';
  if (v <= 4) c = 'var(--red-600)';
  else if (v <= 7) c = 'var(--amber-600)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: '50%',
      border: `2px solid ${c}`, color: c,
      fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: size * 0.44,
      lineHeight: 1, ...style,
    }}>
      {value}
    </span>
  );
}
