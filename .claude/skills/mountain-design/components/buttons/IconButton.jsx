import React from 'react';

/** Square icon-only button (portal toolbars, table row actions). */
export function IconButton({
  children,
  variant = 'secondary', // 'secondary' | 'ghost' | 'primary' | 'danger'
  size = 'md',           // 'sm' | 'md'
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = size === 'sm' ? 32 : 40;
  const variants = {
    secondary: { background: 'var(--white)', color: 'var(--text-body)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-muted)', border: '1px solid transparent' },
    primary: { background: 'var(--action-primary)', color: '#fff', border: '1px solid transparent' },
    danger: { background: 'var(--status-fail-bg)', color: 'var(--action-danger)', border: '1px solid transparent' },
  };
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        transition: 'filter var(--dur-fast), background var(--dur-fast)',
        ...(variants[variant] || variants.secondary), ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.95)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
