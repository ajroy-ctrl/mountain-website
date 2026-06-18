import React from 'react';

/**
 * Mountain primary button. Works on light (portal) and dark (marketing) surfaces.
 */
export function Button({
  children,
  variant = 'primary',   // 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline-dark'
  size = 'md',           // 'sm' | 'md' | 'lg'
  pill = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 13, padding: '7px 14px', height: 34, gap: 6 },
    md: { fontSize: 15, padding: '10px 20px', height: 42, gap: 8 },
    lg: { fontSize: 16, padding: '14px 26px', height: 52, gap: 10 },
  };
  const variants = {
    primary: {
      background: 'var(--action-primary)', color: '#fff',
      border: '1px solid transparent', boxShadow: 'var(--shadow-xs)',
    },
    secondary: {
      background: 'var(--white)', color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent', color: 'var(--action-primary)',
      border: '1px solid transparent',
    },
    danger: {
      background: 'var(--action-danger)', color: '#fff',
      border: '1px solid transparent',
    },
    'outline-dark': {
      background: 'transparent', color: '#fff',
      border: '1px solid rgba(255,255,255,0.45)',
    },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, fontFamily: 'var(--font-sans)', fontWeight: 700,
        fontSize: s.fontSize, lineHeight: 1, padding: s.padding,
        borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast)',
        whiteSpace: 'nowrap', ...v, ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'none'; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
