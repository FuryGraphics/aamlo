// DIRECTION C — "Pressure Drop"
// Almost-uncomfortable restraint, earned by one moment of release.
// Deep oxidized teal ground, a single thin Bronze hairline rule running through the page,
// type that's nearly too small, and a goli that physically drops down the bottle as you scroll past it.

function BoldHero() {
  return (
    <header style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--c-ground)',
      color: 'var(--c-ink)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: '0 0 0 0',
    }}>
      {/* the single hairline that runs through the whole experience — set by absolute position */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1,
        background: 'var(--c-line)', pointerEvents: 'none',
      }} />

      <div style={{ padding: '120px 64px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-end', minHeight: '70vh' }}>
        <div>
          <Eyebrow color="var(--c-bronze)" style={{ marginBottom: 36 }}>SUKUDO CONSUMER · ₹40 · 200ML</Eyebrow>

          <span className="display" style={{
            fontSize: 'clamp(96px, 13vw, 200px)',
            display: 'block',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
          }}>Clumzy.</span>

          <p className="display" style={{
            fontSize: 'clamp(20px, 1.8vw, 26px)',
            fontStyle: 'italic',
            margin: '36px 0 0',
            maxWidth: 360,
            lineHeight: 1.4,
            color: 'var(--c-bronze)',
          }}>
            A pressure, held politely, for as long as the bottle keeps it.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
          <Mono style={{ color: 'var(--c-mute)' }}>FOLIO 01</Mono>
          <Mono style={{ color: 'var(--c-mute)' }}>BOTTLED · GUJARAT</Mono>
          <Mono style={{ color: 'var(--c-mute)' }}>BLUEBERRY · PIÑA COLADA</Mono>
        </div>
      </div>

      {/* below: tight body copy — almost too small */}
      <div style={{
        padding: '40px 64px 64px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
      }}>
        <p style={{
          fontSize: 13, lineHeight: 1.6,
          color: 'var(--c-ink)', opacity: 0.7,
          maxWidth: 380,
        }}>
          A glass goli-soda. Two flavours. The closure is a glass marble held
          against the rim by the carbonation itself. You push the marble down to
          drink. There is nothing else.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 14, alignItems: 'flex-end' }}>
          <button style={{
            background: 'transparent', color: 'var(--c-ink)',
            border: '1px solid var(--c-line)', padding: '12px 18px',
            fontSize: 11, letterSpacing: '0.20em', textTransform: 'uppercase', fontWeight: 500,
          }}>For the trade ↗</button>
          <button style={{
            background: 'var(--c-bronze)', color: 'var(--c-ground-deep)',
            border: 0, padding: '12px 18px',
            fontSize: 11, letterSpacing: '0.20em', textTransform: 'uppercase', fontWeight: 500,
          }}>Distributor enquiry →</button>
        </div>
      </div>

      <div className="hairline" />
      <div style={{
        padding: '14px 64px',
        display: 'flex', justifyContent: 'space-between',
        background: 'var(--c-ground-deep)',
      }}>
        <Mono style={{ color: 'var(--c-mute)' }}>I · THE PRESSURE</Mono>
        <Mono style={{ color: 'var(--c-mute)' }}>II · THE FLAVOURS</Mono>
        <Mono style={{ color: 'var(--c-mute)' }}>III · THE RELEASE</Mono>
      </div>
    </header>
  );
}

/* The Drop — the centerpiece of direction C. As the user scrolls past this section,
   the goli marble physically falls from neck to base. */
function BoldDrop() {
  const ref = useRef(null);
  const p = useScrollProgress(ref);
  // map scroll progress: 0.35 = goli still trapped at neck. 0.65 = released. 1.0 = at the floor.
  const goliP = Math.max(0, Math.min(1, (p - 0.35) / 0.30));

  return (
    <section ref={ref} style={{
      background: 'var(--c-ground-deep)',
      color: 'var(--c-ink)',
      minHeight: '180vh',
      position: 'relative',
      borderTop: '1px solid var(--c-line)',
    }}>
      <div style={{
        position: 'sticky', top: 80,
        height: '100vh',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
      }}>
        {/* LEFT — annotations that fade with progress */}
        <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Eyebrow color="var(--c-bronze)">CHAPTER I · THE PRESSURE</Eyebrow>
            <h2 className="display" style={{
              fontSize: 'clamp(48px, 6.5vw, 96px)',
              margin: '24px 0 0',
              lineHeight: 0.95,
              maxWidth: 540,
            }}>
              <span style={{ opacity: goliP < 0.5 ? 1 : 0.25, transition: 'opacity 700ms var(--ease-cinematic)' }}>The marble holds.</span><br/>
              <em style={{ opacity: goliP > 0.4 ? 1 : 0.25, transition: 'opacity 700ms var(--ease-cinematic)' }}>Until it doesn't.</em>
            </h2>
          </div>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { t: 'Carbonation: 4.2 atm', active: goliP < 0.4 },
              { t: 'Marble: glass, 14mm', active: goliP < 0.5 },
              { t: 'Pinch: opposing, soft', active: goliP > 0.4 },
              { t: 'Release: with the thumb', active: goliP > 0.6 },
            ].map((r, i) => (
              <li key={i} style={{
                display: 'grid', gridTemplateColumns: '14px 1fr', gap: 16, alignItems: 'baseline',
                color: r.active ? 'var(--c-ink)' : 'var(--c-mute)',
                transition: 'color 600ms var(--ease-cinematic)',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: r.active ? 'var(--c-bronze)' : 'transparent',
                  border: '1px solid var(--c-bronze)',
                  marginTop: 8,
                }} />
                <Mono>{r.t.toUpperCase()}</Mono>
              </li>
            ))}
          </ol>
        </div>

        {/* RIGHT — the bottle, with a goli that drops with scroll */}
        <div style={{
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderLeft: '1px solid var(--c-line)',
        }}>
          {/* the moment of release: a soft halo flares as the goli passes 0.5 */}
          <div style={{
            position: 'absolute', inset: '20% 15%', borderRadius: '50%',
            background: `radial-gradient(circle, var(--c-bronze), transparent 60%)`,
            opacity: goliP > 0.45 && goliP < 0.7 ? 0.18 : 0,
            transition: 'opacity 700ms var(--ease-cinematic)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <GoliBottle height={620} body="#0A2520" cap="var(--c-bronze)" label="Blueberry"
              glassHi="rgba(255,255,255,0.14)" goliPos={goliP} />
            <div style={{
              position: 'absolute', right: -120, top: 60,
              color: 'var(--c-mute)',
              opacity: goliP < 0.4 ? 1 : 0,
              transition: 'opacity 600ms var(--ease-cinematic)',
            }}>
              <Mono>← MARBLE AT REST</Mono>
            </div>
            <div style={{
              position: 'absolute', right: -130, bottom: 60,
              color: 'var(--c-bronze)',
              opacity: goliP > 0.65 ? 1 : 0,
              transition: 'opacity 600ms var(--ease-cinematic)',
            }}>
              <Mono>← RELEASED</Mono>
            </div>
          </div>

          <div style={{
            position: 'absolute', left: 24, bottom: 24,
            color: 'var(--c-mute)',
          }}>
            <Mono>SCROLL → THE DROP · {(goliP * 100).toFixed(0)}%</Mono>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Chapter II — flavours, restrained: two columns, a thin line, no halos */
function BoldFlavors() {
  return (
    <section style={{
      background: 'var(--c-ground)',
      color: 'var(--c-ink)',
      padding: '140px 64px',
      borderTop: '1px solid var(--c-line)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 80 }}>
        <Eyebrow color="var(--c-bronze)">CHAPTER II · THE FLAVOURS</Eyebrow>
        <Mono style={{ color: 'var(--c-mute)' }}>02 / 03</Mono>
      </div>

      <h2 className="display" style={{
        fontSize: 'clamp(56px, 8vw, 128px)',
        margin: '0 0 80px',
        lineHeight: 0.95,
        maxWidth: 1100,
      }}>
        Two flavours. <em>Both quiet.</em>
      </h2>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1px 1fr',
        alignItems: 'flex-start',
      }}>
        {FLAVORS.map((flv, i) => (
          <React.Fragment key={flv.code}>
            <article style={{ padding: i === 0 ? '0 56px 0 0' : '0 0 0 56px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <Mono style={{ color: 'var(--c-bronze)' }}>NO. {flv.code}</Mono>
                <Mono style={{ color: 'var(--c-mute)' }}>200ML · ₹40</Mono>
              </div>

              <span className="display" style={{
                fontSize: 'clamp(48px, 6vw, 88px)',
                display: 'block',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
              }}>{flv.label.split(' ').map((w, j) => (
                <span key={j} style={j === 1 ? { fontStyle: 'italic', color: 'var(--c-bronze)' } : {}}>{w}<br/></span>
              ))}</span>

              <p className="display" style={{
                fontSize: 22, fontStyle: 'italic',
                margin: '24px 0 14px',
                maxWidth: 380,
              }}>"{flv.line}"</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--c-mute)', maxWidth: 380 }}>{flv.note}</p>

              <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center' }}>
                <GoliBottle height={420} body={flv.body} cap="var(--c-bronze)" label={flv.label}
                  glassHi="rgba(255,255,255,0.14)" />
              </div>
            </article>
            {i === 0 && <div style={{ background: 'var(--c-line)' }} />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function DirBold() {
  return (
    <div className="dir-root dir-bold">
      <Nav tint="var(--c-ink)" />
      <BoldHero />
      <BoldDrop />
      <BoldFlavors />
    </div>
  );
}

Object.assign(window, { DirBold });
