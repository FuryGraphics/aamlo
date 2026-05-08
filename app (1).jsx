// Shared primitives across all 3 AAMLO directions.
// Exported on window so other Babel scripts can use them.

const { useState, useEffect, useRef, useMemo, useLayoutEffect } = React;

/* ----- Sukudo monogram (geometric reading of the spec — interlocking S forms,
   four-petal negative space). Used in nav. Strokes match a single grid unit. ----- */
function SukudoMark({ size = 28, color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Sukudo">
      <g fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round">
        {/* outer rounded square */}
        <rect x="4" y="4" width="56" height="56" rx="14" ry="14" />
        {/* upper S */}
        <path d="M44 18 Q32 18 32 26 Q32 32 38 32 Q44 32 44 38 Q44 46 32 46" />
        {/* lower S — rotated 180 to interlock */}
        <path d="M20 46 Q32 46 32 38 Q32 32 26 32 Q20 32 20 26 Q20 18 32 18" opacity="0.0" />
      </g>
    </svg>
  );
}

/* AAMLO wordmark — direction-agnostic skeleton; each direction overrides via .display class.
   We expose a slot so each direction can wrap or restyle. */
function AamloWord({ className = '', style = {} }) {
  return (
    <span className={`display ${className}`} style={style}>AAMLO</span>
  );
}

/* Eyebrow with optional separator dot */
function Eyebrow({ children, color, style = {} }) {
  return (
    <span className="eyebrow" style={{ color, ...style }}>{children}</span>
  );
}

/* Small mono caption */
function Mono({ children, style = {} }) {
  return <span className="mono" style={{ fontSize: 11, letterSpacing: '0.06em', ...style }}>{children}</span>;
}

/* Placeholder image with optional ratio + label. Used wherever real photography goes. */
function PH({ ratio = '1 / 1', label, bg, tint, children, style = {} }) {
  return (
    <div className="ph" style={{ aspectRatio: ratio, '--ph-bg': bg, ...(tint ? { background: tint } : null), ...style }}>
      {children}
      {label && <span className="ph-label">{label}</span>}
    </div>
  );
}

/* Nav — adapts to direction tokens via inherit/currentColor.
   The spec calls for it to "tint subtly" inside brand pages. */
function Nav({ surface = 'cream', tint }) {
  const onCream = surface === 'cream';
  return (
    <nav className="nav" style={{
      color: tint || (onCream ? 'var(--ink)' : 'var(--cream)'),
      background: onCream ? 'rgba(245,241,234,0.72)' : 'rgba(15,15,14,0.72)',
      borderBottomColor: onCream ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
    }}>
      <div className="left">
        <div className="mark"><SukudoMark size={28} /></div>
        <span className="word">SUKUDO CONSUMER</span>
      </div>
      <div className="links">
        <a>Brands</a>
        <a>About</a>
        <a>Partner</a>
        <a>Contact</a>
      </div>
    </nav>
  );
}

/* Flavor data — single source of truth for all 3 directions. */
const FLAVORS = [
  {
    code: 'M-01',
    name: 'MANGOLO',
    sub: 'Mango',
    pitch: 'Dhamakedaar mango. The original.',
    line: 'Aam panna meets fizz. The first AAMLO.',
    status: 'In market',
    color: '#F7B500',
    deep: '#A8540C',
    accent: '#1F4D2C',
    tagline: 'Ekdum chilled.',
    notes: ['Alphonso lead', 'Black salt', 'Carbonation: hard'],
  },
  {
    code: 'L-02',
    name: 'LEECHILO',
    sub: 'Litchi',
    pitch: 'Soft, sweet, summer-flushed.',
    line: 'Litchi from the bagh, bottled before noon.',
    status: 'Coming Q3',
    color: '#F4A6B4',
    deep: '#9B2241',
    accent: '#5C0E2B',
    tagline: 'Pyaar ka pop.',
    notes: ['Shahi litchi', 'Rose hint', 'Carbonation: soft'],
  },
  {
    code: 'O-03',
    name: 'ORANGELO',
    sub: 'Orange',
    pitch: 'Sun in a small bottle.',
    line: 'Nagpur orange, the way grandparents remember it.',
    status: 'Coming Q4',
    color: '#F58220',
    deep: '#7A2A0A',
    accent: '#1F4D2C',
    tagline: 'Sunday peeyo.',
    notes: ['Nagpur orange', 'Rind-pressed', 'Carbonation: medium'],
  },
  {
    code: 'J-04',
    name: 'JEERALO',
    sub: 'Jeera',
    pitch: 'Salty, smoky, monsoon-friendly.',
    line: 'Roasted jeera, kala namak, and a long pour.',
    status: 'Coming 2027',
    color: '#7A5C2E',
    deep: '#3A2A14',
    accent: '#F7B500',
    tagline: 'Pet-bhar pop.',
    notes: ['Roasted jeera', 'Kala namak', 'Carbonation: hard'],
  },
];

/* Spec quote helper — used in margins to show which spec line each piece is honouring */
function SpecMargin({ children, style = {} }) {
  return (
    <div className="mono" style={{
      fontSize: 10,
      letterSpacing: '0.04em',
      color: 'var(--stone-60)',
      borderLeft: '1px solid var(--stone-20)',
      paddingLeft: 10,
      lineHeight: 1.5,
      maxWidth: 220,
      ...style,
    }}>{children}</div>
  );
}

/* Direction switcher — lives in the host (app.jsx) — declared here so it can be styled together */
function DirSwitcher({ value, onChange }) {
  const opts = [
    { id: 'safe', label: 'A · Sunday Matinee' },
    { id: 'mid', label: 'B · Filmi Press' },
    { id: 'bold', label: 'C · Tapori Tech.' },
  ];
  return (
    <div className="dir-switcher" role="tablist" aria-label="Direction">
      {opts.map(o => (
        <button
          key={o.id}
          role="tab"
          aria-selected={value === o.id}
          className={value === o.id ? 'active' : ''}
          onClick={() => onChange(o.id)}
        >{o.label}</button>
      ))}
    </div>
  );
}

Object.assign(window, {
  SukudoMark, AamloWord, Eyebrow, Mono, PH, Nav, FLAVORS, SpecMargin, DirSwitcher,
});
