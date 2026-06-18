// Recruiter Portal — login screen (fake auth, any credentials advance).
const { Button: LoginButton, Input: LoginInput, Avatar: LoginAvatar } = window.MountainDesignSystem_859ae4;

function PortalLogin({ onLogin }) {
  return (
    <div style={{
      minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--ink-900)', padding: 24,
    }}>
      <div style={{
        width: 380, background: '#fff', borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)', padding: 36,
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LoginAvatar name="Mountain Recruiting" square size={42} color="var(--periwinkle-400)" />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text-strong)', lineHeight: 1 }}>Recruiter Portal</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 4 }}>Mountain Group</div>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); onLogin(); }}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <LoginInput label="Work email" type="email" placeholder="you@mountainrecruiting.com" defaultValue="ajroy@mountainrecruiting.com" />
          <LoginInput label="Password" type="password" placeholder="••••••••" defaultValue="password" />
          <LoginButton variant="primary" size="lg" type="submit" style={{ width: '100%', marginTop: 4 }}>Sign in</LoginButton>
        </form>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center' }}>
          FCRA-compliant access · admins only
        </div>
      </div>
    </div>
  );
}
window.PortalLogin = PortalLogin;
