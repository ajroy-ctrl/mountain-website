// Recruiter Portal — Driver Candidates list: toolbar, filter bar, table, add modal.
const MDS = window.MountainDesignSystem_859ae4;
const { Button: CButton, Input: CInput, Select: CSelect, StatusPill, RatingBadge, Avatar: CAvatar } = MDS;
const CIcon = window.Icon;

const SEED = [
  { name: 'Scott Samaniego', status: 'fail', rating: 2, phone: '5038871019', email: 'veriest13@gmail.com', loc: 'Collinsville, IL 62234', exp: 'Best Western & Country…', sent: false },
  { name: 'Kayla Slaughter', status: 'pass', rating: 7, phone: '3148570366', email: 'slaughtermarie0@gmail.com', loc: 'St. Louis, MO 63135', exp: 'Delivery Driver · Wareho…', sent: false },
  { name: 'Wade Woods', status: 'pass', rating: 8, phone: '3149787447', email: 'woodswade11@gmail.com', loc: 'St. Louis, MO 63135', exp: 'Warehouse Worker · For…', sent: false },
  { name: 'Mishael Correia', status: 'fail', rating: 6, phone: '8572343424', email: 'mlcorr000@gmail.com', loc: 'Brockton, MA 02301', exp: 'Construction Laborer · …', sent: false },
  { name: 'Marshall Hubbard', status: 'fail', rating: 4, phone: '7743605776', email: 'trifelife508@gmail.com', loc: 'Brockton, MA 02301', exp: 'Warehouse Worker · Deli…', sent: false },
  { name: 'Jakai Whitfield', status: 'fail', rating: 5, phone: '2138312709', email: 'jakaiwhit13@gmail.com', loc: 'Stoughton, MA 02072', exp: 'Warehouse Worker · Gen…', sent: false },
  { name: 'Nickterry Calvaire', status: 'pass', rating: 7, phone: '8572122586', email: 'nickcalvaire4@gmail.com', loc: 'Brockton, MA 02302', exp: 'Delivery Driver · Wareho…', sent: true },
  { name: 'Guerard Theodore', status: 'pass', rating: 7, phone: '2233068137', email: 'theodoreguerard21@g…', loc: 'Fall River, MA 02720', exp: 'Delivery Driver · Wareho…', sent: false },
  { name: 'Jerry Ulysse', status: 'pass', rating: 8, phone: '8573356460', email: 'jerryulysse89@gmail.com', loc: 'Mattapan, MA', exp: 'Delivery Driver · Wareho…', sent: true },
];

const TH = { fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', padding: '12px 14px', textAlign: 'left', whiteSpace: 'nowrap' };
const TD = { fontSize: 14, color: 'var(--text-body)', padding: '13px 14px', borderBottom: '1px solid var(--grey-100)', whiteSpace: 'nowrap' };

function ToolbarBtn({ icon, children, tone }) {
  const tones = {
    grey: { background: 'var(--grey-500)', color: '#fff', border: 'transparent' },
    blue: { background: 'var(--blue-600)', color: '#fff', border: 'transparent' },
    white: { background: '#fff', color: 'var(--text-body)', border: 'var(--border-strong)' },
  };
  const t = tones[tone] || tones.white;
  return (
    <button style={{
      display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-sans)',
      fontWeight: 700, fontSize: 13.5, cursor: 'pointer', padding: '9px 15px',
      borderRadius: 'var(--radius-sm)', background: t.background, color: t.color,
      border: '1px solid ' + t.border, whiteSpace: 'nowrap',
    }}>
      {icon && <CIcon name={icon} size={15} />}{children}
    </button>
  );
}

function AddCandidateModal({ onClose, onAdd }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [loc, setLoc] = React.useState('');
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(10,12,21,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 440, background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 17, color: 'var(--text-strong)' }}>Add Candidate</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}><CIcon name="x" size={18} /></button>
        </div>
        <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <CInput label="Candidate name" placeholder="Jane Driver" value={name} onChange={(e) => setName(e.target.value)} />
          <CInput label="Phone" placeholder="555-123-4567" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <CInput label="Location" placeholder="City, ST 00000" value={loc} onChange={(e) => setLoc(e.target.value)} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '0 22px 22px' }}>
          <CButton variant="secondary" onClick={onClose}>Cancel</CButton>
          <CButton variant="primary" onClick={() => onAdd({ name: name || 'New Candidate', phone: phone || '—', loc: loc || '—', status: 'warn', rating: 0, email: '—', exp: 'Pending intake', sent: false })}>Add Candidate</CButton>
        </div>
      </div>
    </div>
  );
}

function CandidateList() {
  const [rows, setRows] = React.useState(SEED);
  const [query, setQuery] = React.useState('');
  const [status, setStatus] = React.useState('All Status');
  const [showAdd, setShowAdd] = React.useState(false);

  const filtered = rows.filter((r) => {
    const q = query.trim().toLowerCase();
    const matchQ = !q || r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q) || r.phone.includes(q);
    const matchS = status === 'All Status' || r.status === status.toLowerCase();
    return matchQ && matchS;
  });

  const send = (i) => setRows((rs) => rs.map((r) => (r === filtered[i] ? { ...r, sent: true } : r)));

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%', padding: '26px 28px' }}>
      {/* Title + toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 28, color: 'var(--text-strong)' }}>
          Driver Candidates <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>({filtered.length})</span>
        </h1>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <ToolbarBtn icon="calendar" tone="grey">Date View</ToolbarBtn>
          <ToolbarBtn icon="plus" tone="blue" >Add Candidate</ToolbarBtn>
          <ToolbarBtn icon="plus" tone="blue">Bulk Add</ToolbarBtn>
          <ToolbarBtn icon="archive" tone="white">FA Archive</ToolbarBtn>
          <ToolbarBtn icon="box" tone="white">Candidate Archive</ToolbarBtn>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ width: 240 }}><CInput placeholder="2J GROUP INC 0441" defaultValue="2J GROUP INC 0441" /></div>
        <div style={{ width: 150 }}><CSelect options={['All Dates', 'Last 7 days', 'This month']} /></div>
        <div style={{ width: 150 }}><CSelect options={['All Status', 'Pass', 'Fail']} value={status} onChange={(e) => setStatus(e.target.value)} /></div>
        <div style={{ width: 150 }}><CSelect options={['All Ratings', 'High Priority', '8+ only']} /></div>
        <button onClick={() => { setQuery(''); setStatus('All Status'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--action-danger)', fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-sans)' }}>
          <CIcon name="x" size={15} />Clear Filters
        </button>
      </div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        <div style={{ flex: 1 }}><CInput iconLeft={<CIcon name="search" size={16} />} placeholder="Search by name, phone, or email…" value={query} onChange={(e) => setQuery(e.target.value)} /></div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '0 16px', borderRadius: 'var(--radius-sm)', background: 'var(--amber-100)', border: '1px solid #f3df9a', color: 'var(--amber-600)', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>
          <CIcon name="star" size={15} />1 High Priority
        </span>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)' }}>
            <thead>
              <tr style={{ background: 'var(--navy-800)' }}>
                <th style={TH}>Days</th><th style={TH}>Candidate Name</th><th style={TH}>Screening Status</th>
                <th style={{ ...TH, textAlign: 'center' }}>Rating</th><th style={TH}>Phone</th><th style={TH}>Email</th>
                <th style={{ ...TH, textAlign: 'center' }}>Actions</th><th style={{ ...TH, textAlign: 'center' }}>Resume</th>
                <th style={TH}>Location</th><th style={TH}>Experience</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={i} style={{ background: '#fff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--grey-50)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}>
                  <td style={TD}><span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 26, height: 26, borderRadius: 'var(--radius-xs)', background: 'var(--grey-100)', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>1</span></td>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--text-strong)' }}>{r.name}</td>
                  <td style={TD}><StatusPill status={r.status} /></td>
                  <td style={{ ...TD, textAlign: 'center' }}><RatingBadge value={r.rating} /></td>
                  <td style={{ ...TD, fontFamily: 'var(--font-mono)', fontSize: 13 }}>{r.phone}</td>
                  <td style={{ ...TD, color: 'var(--text-muted)' }}>{r.email}</td>
                  <td style={TD}>
                    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
                      <CButton size="sm" variant="secondary">Edit</CButton>
                      {r.sent
                        ? <CButton size="sm" variant="ghost" disabled>Sent</CButton>
                        : <CButton size="sm" variant="ghost" onClick={() => send(i)} style={{ color: 'var(--green-600)' }}>Send to Client</CButton>}
                      <CButton size="sm" variant="ghost" style={{ color: 'var(--action-danger)' }}>Delete</CButton>
                    </div>
                  </td>
                  <td style={{ ...TD, textAlign: 'center' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 'var(--radius-sm)', background: 'var(--blue-100)', color: 'var(--blue-700)', fontWeight: 700, fontSize: 11, letterSpacing: '0.04em' }}><CIcon name="fileText" size={12} />RESUME</span></td>
                  <td style={{ ...TD, textAlign: 'center' }}>{r.sent ? <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-muted)', background: 'var(--grey-100)', padding: '5px 10px', borderRadius: 'var(--radius-sm)' }}>SENT</span> : <span style={{ color: 'var(--grey-300)' }}>—</span>}</td>
                  <td style={{ ...TD, color: 'var(--text-muted)' }}>{r.loc}</td>
                  <td style={{ ...TD, color: 'var(--text-muted)' }}>{r.exp}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={10} style={{ ...TD, textAlign: 'center', color: 'var(--text-muted)', padding: 40 }}>No candidates match your filters.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showAdd && <AddCandidateModal onClose={() => setShowAdd(false)} onAdd={(c) => { setRows((rs) => [c, ...rs]); setShowAdd(false); }} />}
      {/* expose modal trigger via toolbar (Add Candidate buttons) */}
      <FloatingAdd onClick={() => setShowAdd(true)} />
    </div>
  );
}

// invisible binder: makes the two "Add Candidate"/"Bulk Add" toolbar buttons open the modal
function FloatingAdd({ onClick }) {
  React.useEffect(() => {
    const btns = Array.from(document.querySelectorAll('button')).filter((b) => /Add Candidate|Bulk Add/.test(b.textContent));
    btns.forEach((b) => b.addEventListener('click', onClick));
    return () => btns.forEach((b) => b.removeEventListener('click', onClick));
  });
  return null;
}

window.CandidateList = CandidateList;
