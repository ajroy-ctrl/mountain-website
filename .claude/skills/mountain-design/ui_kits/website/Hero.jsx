// Mountain Group marketing site — hero (split: copy left, highway photo right).
const MK = window.MountainDesignSystem_859ae4;
const { Button: HButton, Badge: HBadge, Stat: HStat } = MK;

function Hero() {
  return (
    <section style={{ position: 'relative', background: 'var(--ink-900)', overflow: 'hidden' }}>
      {/* Photo, right half */}
      <div style={{ position: 'absolute', inset: 0, left: '50%' }}>
        <img src="../../assets/images/hero-highway.jpg" alt="Freight truck on a highway at dusk"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--ink-900) 0%, rgba(10,12,21,0.4) 22%, rgba(10,12,21,0) 55%)' }} />
      </div>
      {/* Copy */}
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '92px 40px 64px' }}>
        <div style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 26 }}>
          <HBadge tone="blue-on-dark" variant="outline" dot>Your Recruiting Partner</HBadge>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(48px, 6vw, 86px)', lineHeight: 0.98, letterSpacing: '-0.02em', color: '#fff' }}>
            We Recruit.<br />You Operate.
          </h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.72)', maxWidth: 520 }}>
            Mountain Group runs your complete driver qualification pipeline — sourcing, screening, background checks, drug tests, and physicals. You hire; we handle everything else.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 4 }}>
            <HButton variant="primary" size="lg">Book a Free Consultation</HButton>
            <HButton variant="outline-dark" size="lg">See How It Works</HButton>
          </div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '22px 0 6px', maxWidth: 520 }} />
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <HStat value="500+" label="Clients Served" onDark />
            <HStat value="100k+" label="Candidates Processed" onDark />
            <HStat value="2,000+" label="Jobs Filled" onDark />
            <HStat value="100%" label="FCRA Compliant, Every Time" onDark />
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
