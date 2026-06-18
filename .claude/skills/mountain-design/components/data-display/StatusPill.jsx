import React from 'react';

/** PASS / FAIL / pending status pill from the Recruiter Portal screening column. */
export function StatusPill({ status = 'pass', children, dot = true, style }) {
  const map = {
    pass: { fg: 'var(--status-pass-fg)', bg: 'var(--status-pass-bg)', label: 'PASS' },
    fail: { fg: 'var(--status-fail-fg)', bg: 'var(--status-fail-bg)', label: 'FAIL' },
    warn: { fg: 'var(--status-warn-fg)', bg: 'var(--status-warn-bg)', label: 'PENDING' },
    sent: { fg: 'var(--navy-700)', bg: 'var(--grey-100)', label: 'SENT' },
  };
  const s = map[status] || map.pass;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '0.02em',
      color: s.fg, background: s.bg, padding: '5px 11px',
      borderRadius: 'var(--radius-pill)', textTransform: 'uppercase', whiteSpace: 'nowrap', ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.fg }} />}
      {children || s.label}
    </span>
  );
}
