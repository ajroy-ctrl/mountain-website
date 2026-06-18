import React from 'react';

/** Text input matching the Recruiter Portal search/filter fields. */
export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',     // 'sm' | 'md'
  type = 'text',
  style,
  id,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 12px' : '11px 14px';
  const fieldId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-strong)' }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && (
          <span style={{ position: 'absolute', left: 12, display: 'inline-flex', color: 'var(--text-muted)', pointerEvents: 'none' }}>{iconLeft}</span>
        )}
        <input
          id={fieldId} type={type}
          style={{
            width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)',
            fontSize: size === 'sm' ? 13 : 15, color: 'var(--text-strong)',
            padding: iconLeft ? `${pad.split(' ')[0]} 14px ${pad.split(' ')[0]} 38px` : pad,
            background: 'var(--white)',
            border: `1px solid ${error ? 'var(--action-danger)' : 'var(--border-strong)'}`,
            borderRadius: 'var(--radius-sm)', outline: 'none',
            transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
            ...style,
          }}
          onFocus={(e) => { e.target.style.borderColor = 'var(--focus-ring)'; e.target.style.boxShadow = 'var(--shadow-focus)'; }}
          onBlur={(e) => { e.target.style.borderColor = error ? 'var(--action-danger)' : 'var(--border-strong)'; e.target.style.boxShadow = 'none'; }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 12, color: error ? 'var(--action-danger)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
