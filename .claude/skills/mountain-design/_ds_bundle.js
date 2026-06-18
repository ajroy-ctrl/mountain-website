/* @ds-bundle: {"format":3,"namespace":"MountainDesignSystem_859ae4","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"RatingBadge","sourcePath":"components/data-display/RatingBadge.jsx"},{"name":"Stat","sourcePath":"components/data-display/Stat.jsx"},{"name":"StatusPill","sourcePath":"components/data-display/StatusPill.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"48af3c2f7834","components/buttons/IconButton.jsx":"f8dcd65166b6","components/data-display/Avatar.jsx":"dc2d3b879b3e","components/data-display/Badge.jsx":"b70522bec5b6","components/data-display/Card.jsx":"5d707decbf2f","components/data-display/RatingBadge.jsx":"a48ecb95ddac","components/data-display/Stat.jsx":"15c0ee8220c7","components/data-display/StatusPill.jsx":"11e587f812f5","components/forms/Input.jsx":"4425050348e3","components/forms/Select.jsx":"c753eba4a51c","ui_kits/recruiter-portal/CandidateList.jsx":"b959b78134a6","ui_kits/recruiter-portal/PortalHeader.jsx":"b51bb00d18e0","ui_kits/recruiter-portal/PortalLogin.jsx":"731a6d1ffc5a","ui_kits/recruiter-portal/icon-set.jsx":"9cf573d1b1a1","ui_kits/website/Hero.jsx":"5cfe689a9445","ui_kits/website/Sections.jsx":"bc4ff7292da6","ui_kits/website/SiteNav.jsx":"75851a0013e3","ui_kits/website/icon-set.jsx":"9cf573d1b1a1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MountainDesignSystem_859ae4 = window.MountainDesignSystem_859ae4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mountain primary button. Works on light (portal) and dark (marketing) surfaces.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline-dark'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  pill = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 13,
      padding: '7px 14px',
      height: 34,
      gap: 6
    },
    md: {
      fontSize: 15,
      padding: '10px 20px',
      height: 42,
      gap: 8
    },
    lg: {
      fontSize: 16,
      padding: '14px 26px',
      height: 52,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--action-primary)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--action-danger)',
      color: '#fff',
      border: '1px solid transparent'
    },
    'outline-dark': {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.45)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button (portal toolbars, table row actions). */
function IconButton({
  children,
  variant = 'secondary',
  // 'secondary' | 'ghost' | 'primary' | 'danger'
  size = 'md',
  // 'sm' | 'md'
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = size === 'sm' ? 32 : 40;
  const variants = {
    secondary: {
      background: 'var(--white)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    },
    primary: {
      background: 'var(--action-primary)',
      color: '#fff',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--status-fail-bg)',
      color: 'var(--action-danger)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'filter var(--dur-fast), background var(--dur-fast)',
      ...(variants[variant] || variants.secondary),
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.95)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
/** Initials/image avatar. Default indigo-periwinkle matches the portal "MR" mark. */
function Avatar({
  name = '',
  src,
  size = 40,
  square = false,
  color = 'var(--periwinkle-400)',
  style
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: `0 0 ${size}px`,
      overflow: 'hidden',
      borderRadius: square ? 'var(--radius-sm)' : '50%',
      background: src ? 'transparent' : color,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.4,
      lineHeight: 1,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/** Small label badge. Pill outline style ("YOUR RECRUITING PARTNER") + solid tones. */
function Badge({
  children,
  tone = 'blue',
  variant = 'soft',
  dot = false,
  style
}) {
  const tones = {
    blue: {
      fg: 'var(--blue-600)',
      bg: 'var(--blue-50)',
      border: 'rgba(29,95,232,0.35)'
    },
    navy: {
      fg: 'var(--white)',
      bg: 'var(--navy-800)',
      border: 'transparent'
    },
    grey: {
      fg: 'var(--text-body)',
      bg: 'var(--grey-100)',
      border: 'var(--border-subtle)'
    },
    lavender: {
      fg: '#6b46d9',
      bg: 'var(--lavender-100)',
      border: 'transparent'
    },
    'blue-on-dark': {
      fg: '#9cc0ff',
      bg: 'rgba(29,95,232,0.14)',
      border: 'rgba(120,160,255,0.4)'
    }
  };
  const t = tones[tone] || tones.blue;
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: solid ? '#fff' : t.fg,
      background: solid ? t.fg : t.bg,
      border: variant === 'outline' ? `1px solid ${t.border}` : '1px solid transparent',
      padding: '6px 13px',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? '#fff' : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. Light card for portal/marketing; navy for dark sections. */
function Card({
  children,
  variant = 'default',
  // 'default' | 'flat' | 'navy' | 'tint'
  padding = 24,
  hoverable = false,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      color: 'var(--text-body)'
    },
    flat: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none',
      color: 'var(--text-body)'
    },
    navy: {
      background: 'var(--surface-navy)',
      border: '1px solid var(--border-dark)',
      boxShadow: 'var(--shadow-md)',
      color: 'var(--text-on-dark)'
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid var(--blue-100)',
      boxShadow: 'none',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...(variants[variant] || variants.default),
      ...style
    },
    onMouseEnter: hoverable ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } : undefined,
    onMouseLeave: hoverable ? e => {
      e.currentTarget.style.boxShadow = (variants[variant] || variants.default).boxShadow;
      e.currentTarget.style.transform = 'translateY(0)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/RatingBadge.jsx
try { (() => {
/** Colored rating ring (1–10) from the portal RATING column: red low, amber mid, green high. */
function RatingBadge({
  value = 0,
  size = 32,
  style
}) {
  const v = Number(value);
  let c = 'var(--green-600)';
  if (v <= 4) c = 'var(--red-600)';else if (v <= 7) c = 'var(--amber-600)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      border: `2px solid ${c}`,
      color: c,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.44,
      lineHeight: 1,
      ...style
    }
  }, value);
}
Object.assign(__ds_scope, { RatingBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/RatingBadge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Stat.jsx
try { (() => {
/** Big-number stat block from the marketing hero ("500+ / CLIENTS SERVED"). */
function Stat({
  value,
  label,
  onDark = false,
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: onDark ? 'var(--white)' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatusPill.jsx
try { (() => {
/** PASS / FAIL / pending status pill from the Recruiter Portal screening column. */
function StatusPill({
  status = 'pass',
  children,
  dot = true,
  style
}) {
  const map = {
    pass: {
      fg: 'var(--status-pass-fg)',
      bg: 'var(--status-pass-bg)',
      label: 'PASS'
    },
    fail: {
      fg: 'var(--status-fail-fg)',
      bg: 'var(--status-fail-bg)',
      label: 'FAIL'
    },
    warn: {
      fg: 'var(--status-warn-fg)',
      bg: 'var(--status-warn-bg)',
      label: 'PENDING'
    },
    sent: {
      fg: 'var(--navy-700)',
      bg: 'var(--grey-100)',
      label: 'SENT'
    }
  };
  const s = map[status] || map.pass;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.02em',
      color: s.fg,
      background: s.bg,
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.fg
    }
  }), children || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input matching the Recruiter Portal search/filter fields. */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  // 'sm' | 'md'
  type = 'text',
  style,
  id,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 12px' : '11px 14px';
  const fieldId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'inline-flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      color: 'var(--text-strong)',
      padding: iconLeft ? `${pad.split(' ')[0]} 14px ${pad.split(' ')[0]} 38px` : pad,
      background: 'var(--white)',
      border: `1px solid ${error ? 'var(--action-danger)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--focus-ring)';
      e.target.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--action-danger)' : 'var(--border-strong)';
      e.target.style.boxShadow = 'none';
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--action-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input (portal filter dropdowns like "All Status"). */
function Select({
  label,
  options = [],
  // [{value,label}] or string[]
  size = 'md',
  style,
  id,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 34px 8px 12px' : '11px 36px 11px 14px';
  const fieldId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      fontWeight: 500,
      color: 'var(--text-strong)',
      padding: pad,
      cursor: 'pointer',
      background: 'var(--white)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--focus-ring)';
      e.target.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-strong)';
      e.target.style.boxShadow = 'none';
    }
  }, rest), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiter-portal/CandidateList.jsx
try { (() => {
// Recruiter Portal — Driver Candidates list: toolbar, filter bar, table, add modal.
const MDS = window.MountainDesignSystem_859ae4;
const {
  Button: CButton,
  Input: CInput,
  Select: CSelect,
  StatusPill,
  RatingBadge,
  Avatar: CAvatar
} = MDS;
const CIcon = window.Icon;
const SEED = [{
  name: 'Scott Samaniego',
  status: 'fail',
  rating: 2,
  phone: '5038871019',
  email: 'veriest13@gmail.com',
  loc: 'Collinsville, IL 62234',
  exp: 'Best Western & Country…',
  sent: false
}, {
  name: 'Kayla Slaughter',
  status: 'pass',
  rating: 7,
  phone: '3148570366',
  email: 'slaughtermarie0@gmail.com',
  loc: 'St. Louis, MO 63135',
  exp: 'Delivery Driver · Wareho…',
  sent: false
}, {
  name: 'Wade Woods',
  status: 'pass',
  rating: 8,
  phone: '3149787447',
  email: 'woodswade11@gmail.com',
  loc: 'St. Louis, MO 63135',
  exp: 'Warehouse Worker · For…',
  sent: false
}, {
  name: 'Mishael Correia',
  status: 'fail',
  rating: 6,
  phone: '8572343424',
  email: 'mlcorr000@gmail.com',
  loc: 'Brockton, MA 02301',
  exp: 'Construction Laborer · …',
  sent: false
}, {
  name: 'Marshall Hubbard',
  status: 'fail',
  rating: 4,
  phone: '7743605776',
  email: 'trifelife508@gmail.com',
  loc: 'Brockton, MA 02301',
  exp: 'Warehouse Worker · Deli…',
  sent: false
}, {
  name: 'Jakai Whitfield',
  status: 'fail',
  rating: 5,
  phone: '2138312709',
  email: 'jakaiwhit13@gmail.com',
  loc: 'Stoughton, MA 02072',
  exp: 'Warehouse Worker · Gen…',
  sent: false
}, {
  name: 'Nickterry Calvaire',
  status: 'pass',
  rating: 7,
  phone: '8572122586',
  email: 'nickcalvaire4@gmail.com',
  loc: 'Brockton, MA 02302',
  exp: 'Delivery Driver · Wareho…',
  sent: true
}, {
  name: 'Guerard Theodore',
  status: 'pass',
  rating: 7,
  phone: '2233068137',
  email: 'theodoreguerard21@g…',
  loc: 'Fall River, MA 02720',
  exp: 'Delivery Driver · Wareho…',
  sent: false
}, {
  name: 'Jerry Ulysse',
  status: 'pass',
  rating: 8,
  phone: '8573356460',
  email: 'jerryulysse89@gmail.com',
  loc: 'Mattapan, MA',
  exp: 'Delivery Driver · Wareho…',
  sent: true
}];
const TH = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.85)',
  padding: '12px 14px',
  textAlign: 'left',
  whiteSpace: 'nowrap'
};
const TD = {
  fontSize: 14,
  color: 'var(--text-body)',
  padding: '13px 14px',
  borderBottom: '1px solid var(--grey-100)',
  whiteSpace: 'nowrap'
};
function ToolbarBtn({
  icon,
  children,
  tone
}) {
  const tones = {
    grey: {
      background: 'var(--grey-500)',
      color: '#fff',
      border: 'transparent'
    },
    blue: {
      background: 'var(--blue-600)',
      color: '#fff',
      border: 'transparent'
    },
    white: {
      background: '#fff',
      color: 'var(--text-body)',
      border: 'var(--border-strong)'
    }
  };
  const t = tones[tone] || tones.white;
  return /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13.5,
      cursor: 'pointer',
      padding: '9px 15px',
      borderRadius: 'var(--radius-sm)',
      background: t.background,
      color: t.color,
      border: '1px solid ' + t.border,
      whiteSpace: 'nowrap'
    }
  }, icon && /*#__PURE__*/React.createElement(CIcon, {
    name: icon,
    size: 15
  }), children);
}
function AddCandidateModal({
  onClose,
  onAdd
}) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [loc, setLoc] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(10,12,21,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 440,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)'
    }
  }, "Add Candidate"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(CInput, {
    label: "Candidate name",
    placeholder: "Jane Driver",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Phone",
    placeholder: "555-123-4567",
    value: phone,
    onChange: e => setPhone(e.target.value)
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Location",
    placeholder: "City, ST 00000",
    value: loc,
    onChange: e => setLoc(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '0 22px 22px'
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "secondary",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(CButton, {
    variant: "primary",
    onClick: () => onAdd({
      name: name || 'New Candidate',
      phone: phone || '—',
      loc: loc || '—',
      status: 'warn',
      rating: 0,
      email: '—',
      exp: 'Pending intake',
      sent: false
    })
  }, "Add Candidate"))));
}
function CandidateList() {
  const [rows, setRows] = React.useState(SEED);
  const [query, setQuery] = React.useState('');
  const [status, setStatus] = React.useState('All Status');
  const [showAdd, setShowAdd] = React.useState(false);
  const filtered = rows.filter(r => {
    const q = query.trim().toLowerCase();
    const matchQ = !q || r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q) || r.phone.includes(q);
    const matchS = status === 'All Status' || r.status === status.toLowerCase();
    return matchQ && matchS;
  });
  const send = i => setRows(rs => rs.map(r => r === filtered[i] ? {
    ...r,
    sent: true
  } : r));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%',
      padding: '26px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--text-strong)'
    }
  }, "Driver Candidates ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 700
    }
  }, "(", filtered.length, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ToolbarBtn, {
    icon: "calendar",
    tone: "grey"
  }, "Date View"), /*#__PURE__*/React.createElement(ToolbarBtn, {
    icon: "plus",
    tone: "blue"
  }, "Add Candidate"), /*#__PURE__*/React.createElement(ToolbarBtn, {
    icon: "plus",
    tone: "blue"
  }, "Bulk Add"), /*#__PURE__*/React.createElement(ToolbarBtn, {
    icon: "archive",
    tone: "white"
  }, "FA Archive"), /*#__PURE__*/React.createElement(ToolbarBtn, {
    icon: "box",
    tone: "white"
  }, "Candidate Archive"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(CInput, {
    placeholder: "2J GROUP INC 0441",
    defaultValue: "2J GROUP INC 0441"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(CSelect, {
    options: ['All Dates', 'Last 7 days', 'This month']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(CSelect, {
    options: ['All Status', 'Pass', 'Fail'],
    value: status,
    onChange: e => setStatus(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(CSelect, {
    options: ['All Ratings', 'High Priority', '8+ only']
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setQuery('');
      setStatus('All Status');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--action-danger)',
      fontWeight: 700,
      fontSize: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "x",
    size: 15
  }), "Clear Filters")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(CInput, {
    iconLeft: /*#__PURE__*/React.createElement(CIcon, {
      name: "search",
      size: 16
    }),
    placeholder: "Search by name, phone, or email\u2026",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--amber-100)',
      border: '1px solid #f3df9a',
      color: 'var(--amber-600)',
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "star",
    size: 15
  }), "1 High Priority")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--navy-800)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Days"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Candidate Name"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Screening Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      textAlign: 'center'
    }
  }, "Rating"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Phone"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Email"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      textAlign: 'center'
    }
  }, "Actions"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      textAlign: 'center'
    }
  }, "Resume"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Location"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Experience"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: '#fff'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--grey-50)',
    onMouseLeave: e => e.currentTarget.style.background = '#fff'
  }, /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 26,
      height: 26,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--grey-100)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, "1")), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, r.name), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: r.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(RatingBadge, {
    value: r.rating
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, r.phone), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      color: 'var(--text-muted)'
    }
  }, r.email), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    size: "sm",
    variant: "secondary"
  }, "Edit"), r.sent ? /*#__PURE__*/React.createElement(CButton, {
    size: "sm",
    variant: "ghost",
    disabled: true
  }, "Sent") : /*#__PURE__*/React.createElement(CButton, {
    size: "sm",
    variant: "ghost",
    onClick: () => send(i),
    style: {
      color: 'var(--green-600)'
    }
  }, "Send to Client"), /*#__PURE__*/React.createElement(CButton, {
    size: "sm",
    variant: "ghost",
    style: {
      color: 'var(--action-danger)'
    }
  }, "Delete"))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "fileText",
    size: 12
  }), "RESUME")), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'center'
    }
  }, r.sent ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      background: 'var(--grey-100)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)'
    }
  }, "SENT") : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-300)'
    }
  }, "\u2014")), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      color: 'var(--text-muted)'
    }
  }, r.loc), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      color: 'var(--text-muted)'
    }
  }, r.exp))), filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 10,
    style: {
      ...TD,
      textAlign: 'center',
      color: 'var(--text-muted)',
      padding: 40
    }
  }, "No candidates match your filters.")))))), showAdd && /*#__PURE__*/React.createElement(AddCandidateModal, {
    onClose: () => setShowAdd(false),
    onAdd: c => {
      setRows(rs => [c, ...rs]);
      setShowAdd(false);
    }
  }), /*#__PURE__*/React.createElement(FloatingAdd, {
    onClick: () => setShowAdd(true)
  }));
}

// invisible binder: makes the two "Add Candidate"/"Bulk Add" toolbar buttons open the modal
function FloatingAdd({
  onClick
}) {
  React.useEffect(() => {
    const btns = Array.from(document.querySelectorAll('button')).filter(b => /Add Candidate|Bulk Add/.test(b.textContent));
    btns.forEach(b => b.addEventListener('click', onClick));
    return () => btns.forEach(b => b.removeEventListener('click', onClick));
  });
  return null;
}
window.CandidateList = CandidateList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiter-portal/CandidateList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiter-portal/PortalHeader.jsx
try { (() => {
// Recruiter Portal — top navigation bar (navy chrome from the app screenshot).
const {
  Avatar,
  Button
} = window.MountainDesignSystem_859ae4;
function PortalHeader({
  onLogout,
  active = 'portal'
}) {
  const navBtn = (label, key, hasCaret) => {
    const isActive = active === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 13,
        color: '#fff',
        cursor: 'pointer',
        background: isActive ? 'rgba(255,255,255,0.16)' : 'transparent',
        border: '1px solid ' + (isActive ? 'rgba(255,255,255,0.22)' : 'transparent'),
        padding: '8px 14px',
        borderRadius: 'var(--radius-sm)',
        whiteSpace: 'nowrap'
      }
    }, label, hasCaret && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: 0.8
      }
    }, "\u25BE"));
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      background: 'var(--navy-800)',
      padding: '12px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mountain Recruiting",
    square: true,
    size: 38,
    color: "var(--periwinkle-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 19,
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, "Recruiter Portal")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.65)',
      whiteSpace: 'nowrap'
    }
  }, "ajroy@mountainrecruiting.com ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, "(admin)")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, navBtn('CRM Dashboard', 'crm'), navBtn('Recruiter Portal', 'portal'), navBtn('Manage Customers', 'cust', true), navBtn('Manage Ops', 'ops', true)), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    size: "sm",
    onClick: onLogout
  }, "Logout"));
}
window.PortalHeader = PortalHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiter-portal/PortalHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiter-portal/PortalLogin.jsx
try { (() => {
// Recruiter Portal — login screen (fake auth, any credentials advance).
const {
  Button: LoginButton,
  Input: LoginInput,
  Avatar: LoginAvatar
} = window.MountainDesignSystem_859ae4;
function PortalLogin({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ink-900)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(LoginAvatar, {
    name: "Mountain Recruiting",
    square: true,
    size: 42,
    color: "var(--periwinkle-400)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, "Recruiter Portal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Mountain Group"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(LoginInput, {
    label: "Work email",
    type: "email",
    placeholder: "you@mountainrecruiting.com",
    defaultValue: "ajroy@mountainrecruiting.com"
  }), /*#__PURE__*/React.createElement(LoginInput, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "password"
  }), /*#__PURE__*/React.createElement(LoginButton, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      width: '100%',
      marginTop: 4
    }
  }, "Sign in")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "FCRA-compliant access \xB7 admins only")));
}
window.PortalLogin = PortalLogin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiter-portal/PortalLogin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiter-portal/icon-set.jsx
try { (() => {
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
  menu: '<path d="M4 12h16M4 6h16M4 18h16"/>'
};
function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  style
}) {
  const path = MOUNTAIN_ICONS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      flex: 'none',
      verticalAlign: 'middle',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: path
    }
  });
}
window.Icon = Icon;
window.MOUNTAIN_ICONS = MOUNTAIN_ICONS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiter-portal/icon-set.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Mountain Group marketing site — hero (split: copy left, highway photo right).
const MK = window.MountainDesignSystem_859ae4;
const {
  Button: HButton,
  Badge: HBadge,
  Stat: HStat
} = MK;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      left: '50%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-highway.jpg",
    alt: "Freight truck on a highway at dusk",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, var(--ink-900) 0%, rgba(10,12,21,0.4) 22%, rgba(10,12,21,0) 55%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1280,
      margin: '0 auto',
      padding: '92px 40px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "blue-on-dark",
    variant: "outline",
    dot: true
  }, "Your Recruiting Partner"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(48px, 6vw, 86px)',
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, "We Recruit.", /*#__PURE__*/React.createElement("br", null), "You Operate."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.72)',
      maxWidth: 520
    }
  }, "Mountain Group runs your complete driver qualification pipeline \u2014 sourcing, screening, background checks, drug tests, and physicals. You hire; we handle everything else."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "primary",
    size: "lg"
  }, "Book a Free Consultation"), /*#__PURE__*/React.createElement(HButton, {
    variant: "outline-dark",
    size: "lg"
  }, "See How It Works")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.12)',
      margin: '22px 0 6px',
      maxWidth: 520
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HStat, {
    value: "500+",
    label: "Clients Served",
    onDark: true
  }), /*#__PURE__*/React.createElement(HStat, {
    value: "100k+",
    label: "Candidates Processed",
    onDark: true
  }), /*#__PURE__*/React.createElement(HStat, {
    value: "2,000+",
    label: "Jobs Filled",
    onDark: true
  }), /*#__PURE__*/React.createElement(HStat, {
    value: "100%",
    label: "FCRA Compliant, Every Time",
    onDark: true
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// Mountain Group marketing site — How It Works, Compliance band, CTA, Footer.
const MKS = window.MountainDesignSystem_859ae4;
const {
  Button: SButton,
  Badge: SBadge,
  Card: SCard,
  Stat: SStat
} = MKS;
const SIcon = window.Icon;
const STEPS = [{
  icon: 'users',
  t: 'We Source',
  d: 'We run the ads, work the boards, and field inbound applicants so your funnel never runs dry.'
}, {
  icon: 'clipboard',
  t: 'We Screen',
  d: 'Phone screens, ratings, and experience checks. Only qualified drivers reach your desk.'
}, {
  icon: 'shield',
  t: 'We Qualify',
  d: 'FCRA-compliant background checks, MVRs, drug tests, and DOT physicals — fully documented.'
}, {
  icon: 'truck',
  t: 'You Operate',
  d: 'You get road-ready drivers with a clean qualification file. You hire; we handle the rest.'
}];
function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '96px 40px',
      ...style
    }
  }, children);
}
function HowItWorks() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(SBadge, {
    tone: "blue",
    variant: "soft"
  }, "How It Works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(32px,4vw,52px)',
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "One pipeline, fully handled."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      color: 'var(--text-muted)',
      maxWidth: 560,
      lineHeight: 1.55
    }
  }, "From first ad to road-ready driver, Mountain Group owns every step of qualification so your team can focus on moving freight.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 20
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(SCard, {
    key: i,
    hoverable: true,
    padding: 28,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-50)',
      color: 'var(--blue-600)'
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: s.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Step ", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, s.d))))));
}
function ComplianceBand() {
  const points = ['FCRA-compliant background checks', 'DOT physicals & drug screening', 'MVR & employment verification', 'Full audit-ready documentation'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SBadge, {
    tone: "blue-on-dark",
    variant: "outline",
    dot: true
  }, "Compliance First"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(30px,3.6vw,46px)',
      letterSpacing: '-0.02em',
      color: '#fff',
      lineHeight: 1.05
    }
  }, "100% compliant,", /*#__PURE__*/React.createElement("br", null), "every single hire."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.7)',
      maxWidth: 460
    }
  }, "Every candidate clears the same rigorous, documented process \u2014 so an audit is never something you lose sleep over."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(SButton, {
    variant: "primary",
    size: "lg"
  }, "Talk to Compliance"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '18px 20px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--blue-600)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: "check",
    size: 16,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: '#fff'
    }
  }, p))))));
}
function CTASection() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue-600)',
      borderRadius: 'var(--radius-xl)',
      padding: '64px 48px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(30px,4vw,48px)',
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, "Stop chasing drivers. Start hiring them."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      color: 'rgba(255,255,255,0.85)',
      maxWidth: 540,
      lineHeight: 1.55
    }
  }, "Book a free consultation and we'll map your qualification pipeline in 30 minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(SButton, {
    size: "lg",
    style: {
      background: '#fff',
      color: 'var(--blue-700)'
    }
  }, "Book a Free Consultation"), /*#__PURE__*/React.createElement(SButton, {
    variant: "outline-dark",
    size: "lg"
  }, "See Pricing")))));
}
function SiteFooter() {
  const cols = {
    Product: ['How It Works', 'Compliance', 'Pricing', 'Recruiter Portal'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['FCRA Notice', 'Privacy', 'Terms']
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-800)',
      color: 'rgba(255,255,255,0.7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '64px 40px 40px',
      display: 'grid',
      gridTemplateColumns: '1.6fr repeat(3, 1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/mountain-mark-white.png",
    alt: "Mountain",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: '#fff'
    }
  }, "Mountain Group")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "The driver qualification partner for fleets that would rather operate than recruit.")), Object.entries(cols).map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)'
    }
  }, h), items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14.5,
      color: 'rgba(255,255,255,0.72)',
      textDecoration: 'none'
    }
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '20px 40px',
      fontSize: 13,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\xA9 2026 Mountain Group. FCRA compliant, every time.")));
}
window.HowItWorks = HowItWorks;
window.ComplianceBand = ComplianceBand;
window.CTASection = CTASection;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteNav.jsx
try { (() => {
// Mountain Group marketing site — top navigation (dark, over hero).
const {
  Button: NavButton
} = window.MountainDesignSystem_859ae4;
function SiteNav() {
  const links = ['Home', 'How It Works', 'Compliance', 'Pricing', 'About', 'Contact', 'Blog'];
  const [active, setActive] = React.useState('Home');
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '18px 40px',
      background: 'rgba(10,12,21,0.82)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/mountain-mark-white.png",
    alt: "Mountain",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: '#fff'
    }
  }, "Mountain Group")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setActive(l);
    },
    style: {
      fontSize: 14.5,
      fontWeight: active === l ? 700 : 500,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: active === l ? '#fff' : 'rgba(255,255,255,0.7)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 14,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.85)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "Weekly Tips ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2192")), /*#__PURE__*/React.createElement(NavButton, {
    variant: "primary",
    size: "md"
  }, "Get Started"));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icon-set.jsx
try { (() => {
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
  menu: '<path d="M4 12h16M4 6h16M4 18h16"/>'
};
function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  style
}) {
  const path = MOUNTAIN_ICONS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      flex: 'none',
      verticalAlign: 'middle',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: path
    }
  });
}
window.Icon = Icon;
window.MOUNTAIN_ICONS = MOUNTAIN_ICONS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icon-set.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.RatingBadge = __ds_scope.RatingBadge;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
