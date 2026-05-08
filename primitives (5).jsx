// DIRECTION B — "Slow Dissolve"
// Chapter-driven cinema. Ink + ocean-blue alternating chapters, full-bleed atmospheric "slides"
// that scroll-cross-dissolve. The goli mechanism as a recurring motif. Big Instrument Serif italics.

function MidHero() {
  // Slow ambient sway on the bottle
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf, start = performance.now();
    const tick = (now) => { setT((now - start) / 1000); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const sway = Math.sin(t * 0.4) * 4;

  return (
    <header style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 65%, var(--b-ocean) 0%, var(--b-ink) 75%)',
      color: 'var(--b-cream)',
      overflow: 'hidden',
    }}>
      {/* atmospheric grain */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 100%, rgba(154,107,63,0.10), transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* center stack — type and bottle layered like a film title card */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 32px 80px',
      }}>
        <Eyebrow color="var(--bronze)" style={{ marginBottom: 32 }}>A SUKUDO CONSUMER PRODUCT · ₹40</Eyebrow>

        <span className="display" style={{
          fontSize: 'clamp(120px, 18vw, 280px)',
          letterSpacing: '-0.025em',
          margin: 0,
          lineHeight: 0.92,
        }}>Clumzy</span>

        <p className="display" style={{
          fontSize: 'clamp(28px, 3.4vw, 48px)',
          fontStyle: 'italic',
          color: 'var(--bronze)',
          margin: '20px 0 56px',
          maxWidth: 720,
          lineHeight: 1.15,
        }}>
          The pop you remember. Reborn for the present.
        </p>

        {/* the bottle — sits behind the type like a film prop */}
        <div style={{
          marginTop: -40,
          transform: `translateY(${sway}px)`,
          transition: 'transform 100ms linear',
          filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.6))',
        }}>
          <GoliBottle height={460} body="#0E2330" cap="#9A6B3F" label="Blueberry"
            glassHi="rgba(255,255,255,0.22)" />
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 56 }}>
          <button style={{
            background: 'var(--bronze)', color: 'var(--b-ink)',
            border: 0, padding: '16px 26px',
            fontSize: 12, letterSpacing: '0.20em', textTransform: 'uppercase', fontWeight: 500,
          }}>Watch the film →</button>
          <button style={{
            background: 'transparent', color: 'var(--b-cream)',
            border: '1px solid rgba(237,229,210,0.25)', padding: '16px 26px',
            fontSize: 12, letterSpacing: '0.20em', textTransform: 'uppercase', fontWeight: 500,
          }}>Distributor enquiry</button>
        </div>
      </div>

      {/* chapter rail */}
      <div style={{
        position: 'absolute', left: 32, top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        {['I · Bottle', 'II · Flavours', 'III · Ritual'].map((c, i) => (
          <Mono key={c} style={{ color: i === 0 ? 'var(--bronze)' : 'var(--b-mute)' }}>· {c}</Mono>
        ))}
      </div>
      <div style={{ position: 'absolute', right: 32, bottom: 32, color: 'var(--b-mute)' }}>
        <Mono>SCROLL — DISSOLVES IN ↓</Mono>
      </div>
    </header>
  );
}

/* Supporting section: Chapter I — The bottle, presented as full-bleed cinematic slides */
function MidBottleStudy() {
  return (
    <section style={{ background: 'var(--b-ink)', color: 'var(--b-cream)' }}>
      {/* chapter title slide */}
      <div style={{
        minHeight: '90vh',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '120px 64px',
        gap: 80,
        background: 'linear-gradient(180deg, var(--b-ink) 0%, var(--b-ocean) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ flex: 1 }}>
          <Eyebrow color="var(--bronze)">CHAPTER I</Eyebrow>
          <h2 className="display" style={{
            fontSize: 'clamp(64px, 9vw, 144px)',
            margin: '20px 0',
            lineHeight: 0.94,
            letterSpacing: '-0.02em',
          }}>
            The bottle <em>holds</em> the pressure.<br/>
            The pressure <em>holds</em> the marble.<br/>
            The marble <em>holds</em> the drink.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 520, color: 'var(--b-mute)' }}>
            A Codd-neck bottle, made carefully. A glass marble pressed against
            the rim by the carbonation itself. Push the marble down — the pop
            you remember from your grandfather's shop, exactly the same.
          </p>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <PH ratio="3/4" label="MACRO · GOLI AT REST · KEY-LIT" bg="#0E2330" style={{ width: '90%', maxWidth: 520 }} />
        </div>
      </div>

      {/* slide 2 — three small panels with mid-shot photography placeholders */}
      <div style={{
        minHeight: '70vh',
        padding: '120px 64px',
        background: 'var(--b-ocean)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        alignContent: 'center',
      }}>
        {[
          { n: '01', t: 'The blow', d: 'Hand-blown glass. Variations are the point.', tone: '#173B36' },
          { n: '02', t: 'The marble', d: 'Held by 4.2 atmospheres of pressure.', tone: '#1E4156' },
          { n: '03', t: 'The pop', d: 'Captured in slow motion, drunk in a moment.', tone: '#0E2330' },
        ].map(p => (
          <article key={p.n}>
            <PH ratio="4/5" label={`MACRO · ${p.t.toUpperCase()}`} bg={p.tone} style={{ marginBottom: 18 }} />
            <Mono style={{ color: 'var(--bronze)' }}>{p.n}</Mono>
            <h3 className="display" style={{ fontSize: 32, margin: '8px 0 6px' }}>{p.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--b-mute)' }}>{p.d}</p>
          </article>
        ))}
      </div>

      {/* pull-quote slide */}
      <div style={{
        minHeight: '60vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '160px 64px',
        background: 'linear-gradient(180deg, var(--b-ocean) 0%, var(--b-glass) 100%)',
      }}>
        <p className="display" style={{
          fontSize: 'clamp(40px, 5.5vw, 80px)',
          fontStyle: 'italic',
          textAlign: 'center',
          maxWidth: 1100,
          lineHeight: 1.15,
          color: 'var(--b-cream)',
        }}>
          "We didn't reinvent the goli soda. We refused to let it disappear quietly."
          <span style={{ display: 'block', marginTop: 24, fontStyle: 'normal', fontSize: 14, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--bronze)' }}>
            — From the Clumzy notes
          </span>
        </p>
      </div>
    </section>
  );
}

/* Chapter II — flavours, presented one at a time as full-screen acts */
function MidFlavors() {
  const [active, setActive] = useState(0);
  const f = FLAVORS[active];
  const grounds = [
    { ground: 'linear-gradient(180deg, #0A1A2A 0%, #1E3A5F 100%)', tone: '#1E3A5F' },
    { ground: 'linear-gradient(180deg, #0A1F1B 0%, #1A4A40 100%)', tone: '#1A4A40' },
  ];
  return (
    <section style={{
      background: grounds[active].ground,
      transition: 'background 1100ms var(--ease-cinematic)',
      color: 'var(--b-cream)',
      padding: '140px 64px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 56 }}>
        <Eyebrow color="var(--bronze)">CHAPTER II · THE FLAVOURS</Eyebrow>
        <div style={{ display: 'flex', gap: 14 }}>
          {FLAVORS.map((flv, i) => (
            <button key={flv.code}
              onClick={() => setActive(i)}
              style={{
                all: 'unset', cursor: 'pointer',
                fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: i === active ? 'var(--bronze)' : 'var(--b-mute)',
                paddingBottom: 4,
                borderBottom: i === active ? '1px solid var(--bronze)' : '1px solid transparent',
              }}>{flv.code} · {flv.label}</button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
        alignItems: 'center',
      }}>
        <div>
          <span className="display" style={{
            fontSize: 'clamp(72px, 11vw, 200px)',
            lineHeight: 0.86,
            display: 'block',
            letterSpacing: '-0.02em',
          }}>{f.label.split(' ').map((w, i) => (
            <span key={i} style={i === 1 ? { fontStyle: 'italic', color: 'var(--bronze)' } : {}}>{w}<br/></span>
          ))}</span>

          <p className="display" style={{
            fontSize: 'clamp(24px, 2.4vw, 36px)',
            fontStyle: 'italic',
            margin: '32px 0 18px',
            maxWidth: 520,
          }}>
            "{f.line}"
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--b-cream)', opacity: 0.75, maxWidth: 460 }}>
            {f.note}
          </p>

          <div style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <div>
              <Mono style={{ color: 'var(--b-mute)' }}>FORMAT</Mono>
              <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22 }}>200ml glass</div>
            </div>
            <div>
              <Mono style={{ color: 'var(--b-mute)' }}>FOR</Mono>
              <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22 }}>Cafés, modern grocery</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: '5%', borderRadius: '50%',
            background: `radial-gradient(circle, ${f.accent}, transparent 60%)`,
            opacity: 0.35,
            transition: 'all 1100ms var(--ease-cinematic)',
          }} />
          <GoliBottle key={f.code} height={580} body={f.body} cap="#9A6B3F" label={f.label} />
        </div>
      </div>
    </section>
  );
}

function DirMid() {
  return (
    <div className="dir-root dir-mid">
      <Nav tint="var(--b-cream)" />
      <MidHero />
      <MidBottleStudy />
      <MidFlavors />
    </div>
  );
}

Object.assign(window, { DirMid });
