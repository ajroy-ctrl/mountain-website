import React from 'react';

/** Surface container. Light card for portal/marketing; navy for dark sections. */
export function Card({
  children,
  variant = 'default', // 'default' | 'flat' | 'navy' | 'tint'
  padding = 24,
  hoverable = false,
  style,
  ...rest
}) {
  const variants = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', color: 'var(--text-body)' },
    flat: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'none', color: 'var(--text-body)' },
    navy: { background: 'var(--surface-navy)', border: '1px solid var(--border-dark)', boxShadow: 'var(--shadow-md)', color: 'var(--text-on-dark)' },
    tint: { background: 'var(--surface-tint)', border: '1px solid var(--blue-100)', boxShadow: 'none', color: 'var(--text-body)' },
  };
  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)', padding,
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        ...(variants[variant] || variants.default), ...style,
      }}
      onMouseEnter={hoverable ? (e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-2px)'; } : undefined}
      onMouseLeave={hoverable ? (e) => { e.currentTarget.style.boxShadow = (variants[variant] || variants.default).boxShadow; e.currentTarget.style.transform = 'translateY(0)'; } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
