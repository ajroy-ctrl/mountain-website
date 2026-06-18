// Recruiter Portal — top navigation bar (navy chrome from the app screenshot).
const { Avatar, Button } = window.MountainDesignSystem_859ae4;

function PortalHeader({ onLogout, active = 'portal' }) {
  const navBtn = (label, key, hasCaret) => {
    const isActive = active === key;
    return (
      <button
        key={key}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13,
          color: '#fff', cursor: 'pointer',
          background: isActive ? 'rgba(255,255,255,0.16)' : 'transparent',
          border: '1px solid ' + (isActive ? 'rgba(255,255,255,0.22)' : 'transparent'),
          padding: '8px 14px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap',
        }}
      >
        {label}{hasCaret && <span style={{ fontSize: 10, opacity: 0.8 }}>▾</span>}
      </button>
    );
  };
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 18,
      background: 'var(--navy-800)', padding: '12px 22px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Avatar name="Mountain Recruiting" square size={38} color="var(--periwinkle-400)" />
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 19, color: '#fff', whiteSpace: 'nowrap' }}>
          Recruiter Portal
        </span>
      </div>
      <div style={{ flex: 1 }} />
      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>
        ajroy@mountainrecruiting.com <span style={{ opacity: 0.7 }}>(admin)</span>
      </span>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {navBtn('CRM Dashboard', 'crm')}
        {navBtn('Recruiter Portal', 'portal')}
        {navBtn('Manage Customers', 'cust', true)}
        {navBtn('Manage Ops', 'ops', true)}
      </nav>
      <Button variant="danger" size="sm" onClick={onLogout}>Logout</Button>
    </header>
  );
}
window.PortalHeader = PortalHeader;
