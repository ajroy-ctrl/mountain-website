// Mountain Group marketing site — top navigation (dark, over hero).
const { Button: NavButton } = window.MountainDesignSystem_859ae4;

function SiteNav() {
  const links = ['Home', 'How It Works', 'Compliance', 'Pricing', 'About', 'Contact', 'Blog'];
  const [active, setActive] = React.useState('Home');
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 20,
      display: 'flex', alignItems: 'center', gap: 28,
      padding: '18px 40px', background: 'rgba(10,12,21,0.82)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <img src="../../assets/logos/mountain-mark-white.png" alt="Mountain" style={{ height: 26 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: '#fff' }}>Mountain Group</span>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
        {links.map((l) => (
          <a key={l} href="#" onClick={(e) => { e.preventDefault(); setActive(l); }}
            style={{ fontSize: 14.5, fontWeight: active === l ? 700 : 500, textDecoration: 'none', whiteSpace: 'nowrap',
              color: active === l ? '#fff' : 'rgba(255,255,255,0.7)' }}>{l}</a>
        ))}
      </div>
      <div style={{ flex: 1 }} />
      <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
        Weekly Tips <span aria-hidden>→</span>
      </a>
      <NavButton variant="primary" size="md">Get Started</NavButton>
    </nav>
  );
}
window.SiteNav = SiteNav;
