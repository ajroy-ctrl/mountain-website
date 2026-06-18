import React from 'react';

/** Native select styled to match Input (portal filter dropdowns like "All Status"). */
export function Select({
  label,
  options = [],     // [{value,label}] or string[]
  size = 'md',
  style,
  id,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 34px 8px 12px' : '11px 36px 11px 14px';
  const fieldId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)' }}>
      {label && <label htmlFor={fieldId} style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-strong)' }}>{label}</label>}
      <div style={{ position: 'relative', display: 'inline-flex' }}>
        <select
          id={fieldId}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%', boxSizing: 'border-box',
            fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 13 : 15, fontWeight: 500,
            color: 'var(--text-strong)', padding: pad, cursor: 'pointer',
            background: 'var(--white)', border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-sm)', outline: 'none',
            transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
            ...style,
          }}
          onFocus={(e) => { e.target.style.borderColor = 'var(--focus-ring)'; e.target.style.boxShadow = 'var(--shadow-focus)'; }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--border-strong)'; e.target.style.boxShadow = 'none'; }}
          {...rest}
        >
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: 11 }}>▾</span>
      </div>
    </div>
  );
}
