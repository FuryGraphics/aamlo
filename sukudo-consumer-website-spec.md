// DIRECTION A — "Glass Cabinet"
// Editorial monograph. Ink ground, Instrument Serif at confident sizes, large-format bottle as artifact,
// long-form chapters with marginalia. Closest to parent's restraint, dialed up in scale.

function SafeHero() {
  return (
    <header style={{
      position: 'relative',
      minHeight: '94vh',
      background: 'var(--a-ground)',
      color: 'var(--a-ink)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0,
      overflow: 'hidden',
    }}>
      {/* LEFT — type column */}
      <div style={{
        padding: '120px 56px 56px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        borderRight: '1px solid var(--a-rule)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Eyebrow color="var(--bronze)">A SUKUDO CONSUMER PRODUCT · ₹40</Eyebrow>
          <Mono style={{ color: 'var(--a-mute)' }}>FOLIO 01 · 200ML</Mono>
        </div>

        <div>
          <span className="display" style={{
            fontSize: 'clamp(96px, 14vw, 200px)',
            display: 'block',
            letterSpacing: '-0.02em',
          }}>Clumzy.</span>
          <p className="display" style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            margin: '24px 0 0',
            lineHeight: 1.1,
            maxWidth: 540,
            color: 'var(--a-ink)',
          }}>
            The pop you remember. <em>Reborn for the present.</em>
          </p>
          <p style={{
            fontSize: 16, lineHeight: 1.65,
            color: 'var(--a-mute)',
            maxWidth: 460,
            marginTop: 28,
          }}>
            A glass goli-soda, made slowly. Two flavours, one pressure ritual,
            an obsession with the bottle itself. Clumzy is what happens when a
            humble street drink is treated like a small piece of design.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
            <button style={{
              background: 'var(--bronze)', color: 'var(--a-ground)',
              border: 0, padding: '14px 22px',
              fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
              fontWeight: 500,
            }}>Read the monograph →</button>
            <button style={{
              background: 'transparent', color: 'var(--a-ink)',
              border: '1px solid rgba(255,255,255,0.18)', padding: '14px 22px',
              fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
              fontWeight: 500,
            }}>For the trade</button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24, color: 'var(--a-mute)' }}>
          <Mono>I. THE BOTTLE</Mono>
          <Mono>II. THE FLAVOURS</Mono>
          <Mono>III. THE RITUAL</Mono>
        </div>
      </div>

      {/* RIGHT — bottle plate */}
      <div style={{
        position: 'relative',
        background: 'radial-gradient(circle at 50% 60%, #142028 0%, var(--a-ground) 70%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* key light from top-left */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 30% 10%, rgba(255,255,255,0.08), transparent 50%)',
          pointerEvents: 'none',
        }} />
        <GoliBottle height={620} body="#1E3A5F" cap="#9A6B3F" label="Blueberry" />
        <div style={{ position: 'absolute', left: 32, bottom: 24, color: 'var(--a-mute)' }}>
          <Mono>FIG. 01 · 200 ML · LEAD: BLUEBERRY · PLACEHOLDER</Mono>
        </div>
        <div style={{ position: 'absolute', right: 32, top: 24, color: 'var(--a-mute)' }}>
          <Eyebrow color="var(--a-mute)">PHOTOGRAPHY TBC</Eyebrow>
        </div>
      </div>
    </header>
  );
}

function SafeFlavors() {
  const [active, setActive] = useState(0);
  const f = FLAVORS[active];
  return (
    <section style={{
      background: 'var(--a-ground)',
      color: 'var(--a-ink)',
      padding: '140px 56px',
      borderTop: '1px solid var(--a-rule)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 64 }}>
        <Eyebrow color="var(--a-mute)">CHAPTER II · THE FLAVOURS</Eyebrow>
        <Mono style={{ color: 'var(--a-mute)' }}>0{active + 1} / 0{FLAVORS.length}</Mono>
      </div>

      <h2 className="display" style={{
        fontSize: 'clamp(56px, 8vw, 128px)',
        margin: '0 0 56px',
        lineHeight: 0.96,
        maxWidth: 1100,
      }}>
        Two flavours. <em>Built like one bottle.</em>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          {/* tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--a-rule)', marginBottom: 32 }}>
            {FLAVORS.map((flv, i) => (
              <button key={flv.code}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                style={{
                  all: 'unset',
                  padding: '14px 0',
                  marginRight: 32,
                  cursor: 'pointer',
                  color: i === active ? 'var(--a-ink)' : 'var(--a-mute)',
                  borderBottom: i === active ? '1px solid var(--bronze)' : '1px solid transparent',
                  marginBottom: -1,
                  transition: 'all 400ms var(--ease-soft)',
                }}>
                <Mono>NO. {flv.code}</Mono>
                <span style={{ marginLeft: 12, fontFamily: 'Instrument Serif, serif', fontSize: 22 }}>{flv.label}</span>
              </button>
            ))}
          </div>

          <span className="display" style={{
            fontSize: 'clamp(64px, 9vw, 120px)',
            lineHeight: 0.95,
            display: 'block',
          }}>{f.label.split(' ').map((w, i) => (
            <span key={i} style={i === 1 ? { fontStyle: 'italic', color: 'var(--bronze)' } : {}}>{w} </span>
          ))}</span>

          <p className="display" style={{
            fontSize: 28, fontStyle: 'italic',
            margin: '20px 0 12px', maxWidth: 480, color: 'var(--a-ink)',
          }}>"{f.line}"</p>

          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--a-mute)', maxWidth: 460 }}>{f.note}</p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 40,
            marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--a-rule)',
          }}>
            {[
              { k: 'Format', v: 'Glass · 200ml' },
              { k: 'Closure', v: 'Goli, glass' },
              { k: 'Sweetness', v: 'Cane only' },
            ].map(s => (
              <div key={s.k}>
                <Mono style={{ color: 'var(--a-mute)' }}>{s.k.toUpperCase()}</Mono>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 20, marginTop: 4 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GoliBottle height={520} body={f.body} cap="#9A6B3F" label={f.label} />
        </div>
      </div>
    </section>
  );
}

/* Supporting section — Chapter I: The bottle, treated like a museum plate */
function SafeBottleStudy() {
  return (
    <section style={{
      background: '#070D11', color: 'var(--a-ink)',
      padding: '160px 56px',
      borderTop: '1px solid var(--a-rule)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 56 }}>
        <Eyebrow color="var(--a-mute)">CHAPTER I · THE BOTTLE</Eyebrow>
        <Mono style={{ color: 'var(--a-mute)' }}>STUDY OF THE GOLI MECHANISM</Mono>
      </div>

      <h2 className="display" style={{
        fontSize: 'clamp(48px, 6.4vw, 96px)',
        margin: '0 0 56px',
        lineHeight: 1,
        maxWidth: 980,
      }}>
        The marble holds the pressure.<br/><em>Pressure makes the pop.</em>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'flex-start' }}>
        <div style={{ position: 'sticky', top: 100 }}>
          <PH ratio="3/4" label="MACRO · GOLI AT NECK · KEY-LIT" bg="#0F1F2A" />
          <Mono style={{ display: 'block', marginTop: 12, color: 'var(--a-mute)' }}>FIG. 02 · CROSS-SECTION OF THE NECK</Mono>
        </div>

        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 40 }}>
          {[
            {
              n: '01',
              t: 'A Codd-neck, made carefully.',
              d: 'The Codd bottle is a Victorian invention; we keep its mechanism and lose its fragility. Every Clumzy bottle is glass-blown to a tolerance the original never had.'
            },
            {
              n: '02',
              t: 'A glass marble — the goli.',
              d: 'Held in place by carbonation pressure. The user pushes it down to release. There is no plastic, no foil, no hidden trick.'
            },
            {
              n: '03',
              t: 'A pinched neck.',
              d: 'Two opposing inward pinches catch the marble after release. The bottle keeps a soft rattle through the drink — the ritual continues until the last sip.'
            },
            {
              n: '04',
              t: 'Refilled, returned.',
              d: 'Designed to be returned and refilled. This is not a sustainability claim. This is what goli soda has always been.'
            },
          ].map(s => (
            <li key={s.n} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24, alignItems: 'baseline' }}>
              <Mono style={{ color: 'var(--bronze)' }}>{s.n}</Mono>
              <div>
                <h3 className="display" style={{ fontSize: 36, margin: '0 0 8px', lineHeight: 1.05 }}>{s.t}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--a-mute)', maxWidth: 540 }}>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DirSafe() {
  return (
    <div className="dir-root dir-safe">
      <Nav tint="var(--a-ink)" />
      <SafeHero />
      <SafeBottleStudy />
      <SafeFlavors />
    </div>
  );
}

Object.assign(window, { DirSafe });
