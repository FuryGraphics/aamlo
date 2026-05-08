// DIRECTION A — "Sunday Matinee"
// Restrained, modern Indian beverage brand. Inter body + Playfair Display italic.
// Mango/cream/ink color blocks, single hero bottle, generous whitespace.
// The closest of the three to the parent's restraint — just warmer and more confident.

const SafeStyles = {
  hero: {
    position: 'relative',
    minHeight: '92vh',
    display: 'grid',
    gridTemplateColumns: '1.15fr 1fr',
    gap: 0,
    background: 'var(--a-cream)',
    overflow: 'hidden',
  },
  heroLeft: {
    padding: '120px 64px 56px 64px',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    position: 'relative',
  },
  heroRight: {
    background: 'var(--a-mango)',
    position: 'relative',
    overflow: 'hidden',
  },
  bigName: {
    fontSize: 'clamp(80px, 14vw, 220px)',
    color: 'var(--a-ink)',
    letterSpacing: '-0.02em',
  },
  pitch: {
    maxWidth: 460,
    fontSize: 18,
    lineHeight: 1.55,
    color: '#3A2A14',
    marginTop: 28,
  },
  flavorWheel: {
    background: 'var(--a-ink)',
    color: 'var(--a-cream)',
    padding: '120px 64px',
  },
};

function SafeHero() {
  // tiny ambient float on the bottle silhouette
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf, start = performance.now();
    const tick = (now) => { setT((now - start) / 1000); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const float = Math.sin(t * 0.7) * 6;

  return (
    <header style={SafeStyles.hero}>
      {/* LEFT — editorial composition */}
      <div style={SafeStyles.heroLeft}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Eyebrow color="var(--a-ink)">BRAND ONE · ₹10 · A SUKUDO CONSUMER PRODUCT</Eyebrow>
          <Mono style={{ color: '#7A5C2E' }}>EST. 2026 · INDIA</Mono>
        </div>

        <div>
          <span className="display" style={SafeStyles.bigName}>AAML<em style={{ color: 'var(--a-sunset)' }}>O</em></span>
          <p className="display" style={{
            fontSize: 'clamp(28px, 3.4vw, 44px)',
            color: 'var(--a-ink)',
            marginTop: 28,
            lineHeight: 1.05,
            maxWidth: 540,
          }}>
            Chhota bottle, <em style={{ color: 'var(--a-sunset)' }}>badi feeling.</em>
          </p>
          <p style={SafeStyles.pitch}>
            A ten-rupee carbonated drink, made for the road, the dhaba, the
            kirana counter, the long bus ride. Fizz with character. India's
            flavours, properly bottled.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 36, alignItems: 'center' }}>
            <button style={{
              background: 'var(--a-ink)', color: 'var(--a-cream)',
              border: 0, padding: '14px 22px',
              fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
            }}>Find a stockist →</button>
            <button style={{
              background: 'transparent', color: 'var(--a-ink)',
              border: '1px solid rgba(0,0,0,0.18)', padding: '14px 22px',
              fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500,
            }}>Become a distributor</button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24, color: '#7A5C2E', alignItems: 'center' }}>
          <Mono>4 flavours in production</Mono>
          <span style={{ width: 1, height: 12, background: 'rgba(0,0,0,0.18)' }} />
          <Mono>Bottling: Gujarat & Maharashtra</Mono>
        </div>
      </div>

      {/* RIGHT — single hero "bottle" silhouette on mango */}
      <div style={SafeStyles.heroRight}>
        {/* sun arc */}
        <div style={{
          position: 'absolute', right: '-30%', top: '-30%',
          width: '120%', aspectRatio: '1/1',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 70%, rgba(232,84,28,0.55), transparent 60%)',
        }} />
        {/* hero bottle: SVG silhouette so we don't fake photography */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: `translateY(${float}px)`,
          transition: 'transform 60ms linear',
        }}>
          <BottleSilhouette
            label="MANGOLO"
            primary="#A8540C"
            cap="#1F4D2C"
            stripe="var(--a-cream)"
          />
        </div>
        {/* corner caption */}
        <div style={{ position: 'absolute', left: 32, bottom: 32, color: '#3A2A14' }}>
          <Mono>FIG. 01 · 250ML · MANGOLO LAUNCH SKU</Mono>
        </div>
        <div style={{ position: 'absolute', right: 32, top: 32, color: '#3A2A14' }}>
          <Eyebrow color="#3A2A14">PLACEHOLDER · COMMISSION HERO STILL</Eyebrow>
        </div>
      </div>
    </header>
  );
}

/* SVG bottle — generic 250ml plastic. Used as a placeholder for real photography. */
function BottleSilhouette({ label, primary, cap, stripe, height = 540 }) {
  const w = height * 0.36;
  return (
    <svg viewBox="0 0 100 280" style={{ height, width: w }}>
      {/* cap */}
      <rect x="38" y="2" width="24" height="22" rx="3" fill={cap} />
      <rect x="36" y="22" width="28" height="6" fill={cap} opacity="0.85" />
      {/* neck */}
      <path d="M40 28 L40 50 Q40 56 36 60 L36 78 L64 78 L64 60 Q60 56 60 50 L60 28 Z" fill={primary} />
      {/* body */}
      <path d="M28 78 Q22 96 22 130 L22 250 Q22 266 36 268 L64 268 Q78 266 78 250 L78 130 Q78 96 72 78 Z" fill={primary} />
      {/* label */}
      <rect x="22" y="130" width="56" height="86" fill={stripe} />
      <rect x="22" y="138" width="56" height="2" fill={primary} opacity="0.5" />
      <rect x="22" y="208" width="56" height="2" fill={primary} opacity="0.5" />
      <text x="50" y="178" textAnchor="middle"
        fontFamily="Playfair Display, serif" fontStyle="italic"
        fontSize="14" fill={primary} fontWeight="700">{label}</text>
      <text x="50" y="194" textAnchor="middle"
        fontFamily="Inter, sans-serif" fontSize="5" letterSpacing="2" fill={primary}>250 ML · ₹10</text>
      {/* highlight */}
      <rect x="30" y="100" width="3" height="140" rx="2" fill="white" opacity="0.35" />
    </svg>
  );
}

/* ----- flavor showcase: editorial 4-card row that expands the active one ----- */
function SafeFlavors() {
  const [active, setActive] = useState(0);
  const f = FLAVORS[active];
  return (
    <section style={SafeStyles.flavorWheel}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
        <div>
          <Eyebrow color="var(--a-mango)">FLAVOUR ROADMAP · 04</Eyebrow>
          <h2 className="display" style={{
            fontSize: 'clamp(40px, 5vw, 72px)',
            margin: '14px 0 0',
            maxWidth: 720,
          }}>
            Four flavours. <em style={{ color: 'var(--a-mango)' }}>One small bottle.</em>
          </h2>
        </div>
        <Mono style={{ color: 'var(--stone-40)' }}>
          ↓ Hover or tap a flavour to focus it.
        </Mono>
      </div>

      {/* the row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: FLAVORS.map((_, i) => i === active ? '2.4fr' : '1fr').join(' '),
        gap: 0,
        transition: 'grid-template-columns 700ms var(--ease-cinematic)',
        border: '1px solid rgba(245,241,234,0.12)',
      }}>
        {FLAVORS.map((flv, i) => (
          <button
            key={flv.code}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            style={{
              all: 'unset',
              cursor: 'pointer',
              display: 'block',
              padding: '40px 32px',
              minHeight: 460,
              position: 'relative',
              background: i === active ? flv.color : 'transparent',
              color: i === active ? '#1A140C' : 'var(--a-cream)',
              transition: 'all 700ms var(--ease-cinematic)',
              borderLeft: i === 0 ? 0 : '1px solid rgba(245,241,234,0.12)',
              overflow: 'hidden',
            }}
          >
            {/* code */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Mono>{flv.code}</Mono>
              <Mono style={{ opacity: 0.6 }}>{flv.status}</Mono>
            </div>

            {/* vertical name when collapsed */}
            {i !== active ? (
              <div style={{
                position: 'absolute', left: 32, top: 100,
                writingMode: 'vertical-rl', transform: 'rotate(180deg)',
                fontFamily: 'Playfair Display, serif',
                fontSize: 56, lineHeight: 1, letterSpacing: '-0.02em',
              }}>{flv.name}</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32, marginTop: 24, alignItems: 'end', height: 'calc(100% - 40px)' }}>
                <div>
                  <span className="display" style={{ fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 0.95 }}>{flv.name}</span>
                  <p className="display" style={{ fontSize: 24, marginTop: 12, fontStyle: 'italic' }}>{flv.tagline}</p>
                  <p style={{ fontSize: 16, lineHeight: 1.55, marginTop: 16, maxWidth: 360 }}>{flv.line}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {flv.notes.map((n, j) => (
                      <li key={j} style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.04em' }}>· {n}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <BottleSilhouette
                    label={flv.name}
                    primary={flv.deep}
                    cap={flv.accent}
                    stripe="#FFF6E2"
                    height={360}
                  />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

/* ----- supporting section: "How it's made" — editorial ----- */
function SafeMaking() {
  return (
    <section className="section" style={{ background: 'var(--a-cream)', color: 'var(--a-ink)', padding: '140px 64px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <Eyebrow color="#7A5C2E">HOW IT'S MADE · A QUICK ONE</Eyebrow>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1, margin: '16px 0 28px', maxWidth: 760 }}>
            Real fruit. <em style={{ color: 'var(--a-sunset)' }}>Hard fizz.</em> Ten rupees.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#3A2A14', maxWidth: 540 }}>
            We start where your dadi started — actual fruit, properly steeped.
            We carbonate hard, salt softly, and bottle small so the price stays
            where it belongs. No essences pretending to be fruit. No sweet syrupy
            shortcuts. Just AAMLO, the way a road-side soda <em>should</em> taste.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 64 }}>
            {[
              { n: '01', t: 'Source', d: 'Alphonso, shahi litchi, Nagpur orange — picked at peak.' },
              { n: '02', t: 'Steep', d: 'Slow cold-steep. No fruit-essence shortcuts.' },
              { n: '03', t: 'Pop', d: 'Hard carbonation, kala namak finish, sealed at 250ml.' },
            ].map(s => (
              <div key={s.n}>
                <Mono style={{ color: 'var(--a-sunset)' }}>{s.n}</Mono>
                <h3 className="display" style={{ fontSize: 28, margin: '6px 0 10px' }}>{s.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: '#3A2A14' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* macro placeholder strip — ties back to parent's "macro craft" direction */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <PH ratio="3/4" label="MACRO · MANGO STEEP" bg="#E8541C" style={{ gridRow: 'span 2' }}>
            <div style={{ position: 'absolute', inset: 0, background:
              'radial-gradient(circle at 30% 30%, rgba(255,196,0,0.4), transparent 60%)' }} />
          </PH>
          <PH ratio="1/1" label="MACRO · BOTTLE NECK" bg="#1F4D2C" />
          <PH ratio="1/1" label="MACRO · POP / FIZZ" bg="#A8540C" />
        </div>
      </div>
    </section>
  );
}

function DirSafe() {
  return (
    <div className="dir-root dir-safe">
      <Nav surface="cream" tint="#1A140C" />
      <SafeHero />
      <SafeFlavors />
      <SafeMaking />
    </div>
  );
}

Object.assign(window, { DirSafe, BottleSilhouette });
