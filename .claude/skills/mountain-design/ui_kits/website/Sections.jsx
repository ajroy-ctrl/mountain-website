// Mountain Group marketing site — How It Works, Compliance band, CTA, Footer.
const MKS = window.MountainDesignSystem_859ae4;
const { Button: SButton, Badge: SBadge, Card: SCard, Stat: SStat } = MKS;
const SIcon = window.Icon;

const STEPS = [
  { icon: 'users', t: 'We Source', d: 'We run the ads, work the boards, and field inbound applicants so your funnel never runs dry.' },
  { icon: 'clipboard', t: 'We Screen', d: 'Phone screens, ratings, and experience checks. Only qualified drivers reach your desk.' },
  { icon: 'shield', t: 'We Qualify', d: 'FCRA-compliant background checks, MVRs, drug tests, and DOT physicals — fully documented.' },
  { icon: 'truck', t: 'You Operate', d: 'You get road-ready drivers with a clean qualification file. You hire; we handle the rest.' },
];

function Section({ children, style }) {
  return <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 40px', ...style }}>{children}</section>;
}

function HowItWorks() {
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center', marginBottom: 56 }}>
          <SBadge tone="blue" variant="soft">How It Works</SBadge>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>
            One pipeline, fully handled.
          </h2>
          <p style={{ margin: 0, fontSize: 18, color: 'var(--text-muted)', maxWidth: 560, lineHeight: 1.55 }}>
            From first ad to road-ready driver, Mountain Group owns every step of qualification so your team can focus on moving freight.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {STEPS.map((s, i) => (
            <SCard key={i} hoverable padding={28} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--blue-50)', color: 'var(--blue-600)' }}>
                <SIcon name={s.icon} size={24} />
              </span>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Step {i + 1}</div>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: 'var(--text-strong)' }}>{s.t}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)' }}>{s.d}</p>
            </SCard>
          ))}
        </div>
      </Section>
    </div>
  );
}

function ComplianceBand() {
  const points = ['FCRA-compliant background checks', 'DOT physicals & drug screening', 'MVR & employment verification', 'Full audit-ready documentation'];
  return (
    <div style={{ background: 'var(--ink-900)' }}>
      <Section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 56, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <SBadge tone="blue-on-dark" variant="outline" dot>Compliance First</SBadge>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,46px)', letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.05 }}>
            100% compliant,<br />every single hire.
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', maxWidth: 460 }}>
            Every candidate clears the same rigorous, documented process — so an audit is never something you lose sleep over.
          </p>
          <div style={{ marginTop: 6 }}><SButton variant="primary" size="lg">Talk to Compliance</SButton></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {points.map((p) => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, flex: 'none', borderRadius: '50%', background: 'var(--blue-600)', color: '#fff' }}><SIcon name="check" size={16} strokeWidth={2.5} /></span>
              <span style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>{p}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function CTASection() {
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <Section>
        <div style={{ background: 'var(--blue-600)', borderRadius: 'var(--radius-xl)', padding: '64px 48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,4vw,48px)', letterSpacing: '-0.02em', color: '#fff' }}>
            Stop chasing drivers. Start hiring them.
          </h2>
          <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.85)', maxWidth: 540, lineHeight: 1.55 }}>
            Book a free consultation and we'll map your qualification pipeline in 30 minutes.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>
            <SButton size="lg" style={{ background: '#fff', color: 'var(--blue-700)' }}>Book a Free Consultation</SButton>
            <SButton variant="outline-dark" size="lg">See Pricing</SButton>
          </div>
        </div>
      </Section>
    </div>
  );
}

function SiteFooter() {
  const cols = {
    Product: ['How It Works', 'Compliance', 'Pricing', 'Recruiter Portal'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['FCRA Notice', 'Privacy', 'Terms'],
  };
  return (
    <footer style={{ background: 'var(--ink-800)', color: 'rgba(255,255,255,0.7)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 40px 40px', display: 'grid', gridTemplateColumns: '1.6fr repeat(3, 1fr)', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 280 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="../../assets/logos/mountain-mark-white.png" alt="Mountain" style={{ height: 24 }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#fff' }}>Mountain Group</span>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>The driver qualification partner for fleets that would rather operate than recruit.</p>
        </div>
        {Object.entries(cols).map(([h, items]) => (
          <div key={h} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{h}</div>
            {items.map((it) => <a key={it} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.72)', textDecoration: 'none' }}>{it}</a>)}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 40px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>© 2026 Mountain Group. FCRA compliant, every time.</div>
      </div>
    </footer>
  );
}

window.HowItWorks = HowItWorks;
window.ComplianceBand = ComplianceBand;
window.CTASection = CTASection;
window.SiteFooter = SiteFooter;
