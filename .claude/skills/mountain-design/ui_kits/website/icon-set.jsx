// Mountain icon set — Lucide (MIT) line icons, inlined so kits/cards stay self-contained.
// stroke 2, 24x24, currentColor. Usage: <Icon name="search" size={16} />
const MOUNTAIN_ICONS = {
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/>',
  archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/>',
  box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  star: '<path d="M11.5 2.8a.6.6 0 0 1 1 0l2.5 5.1 5.6.8a.6.6 0 0 1 .3 1l-4 3.9 1 5.6a.6.6 0 0 1-.9.6L12 17.8l-5 2.6a.6.6 0 0 1-.9-.6l1-5.6-4-3.9a.6.6 0 0 1 .3-1l5.6-.8Z"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5M9 13h6M9 17h4"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 18.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  phone: '<path d="M13.83 19.5A16 16 0 0 1 4.5 10.17 6 6 0 0 1 4 8.81C4 6 6 4 8.81 4a6 6 0 0 1 1.36.16l1.5 5L9.5 11a13 13 0 0 0 3.5 3.5l1.84-2.17 5 1.5A6 6 0 0 1 20 15.19 3.81 3.81 0 0 1 16.19 19a6 6 0 0 1-2.36-.5Z"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  menu: '<path d="M4 12h16M4 6h16M4 18h16"/>',
};

function Icon({ name, size = 16, strokeWidth = 2, style }) {
  const path = MOUNTAIN_ICONS[name] || '';
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'inline-block', flex: 'none', verticalAlign: 'middle', ...style }}
      dangerouslySetInnerHTML={{ __html: path }}
    />
  );
}
window.Icon = Icon;
window.MOUNTAIN_ICONS = MOUNTAIN_ICONS;
