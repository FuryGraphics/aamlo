// DIRECTION B — "Filmi Press"
// Newsprint / zine grid, halftones, Khand display headlines, ticket-stub flavor cards.
// Higher density than safe — but composed by an editor, not a kid with stickers.

const MidStyles = {
  hero: {
    position: 'relative',
    background: 'var(--b-paper)',
    color: 'var(--b-ink)',
    padding: '40px 32px 64px',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  masthead: {
    display: 'flex', justifyContent: 'space-between',
    borderTop: '3px solid var(--b-ink)',
    borderBottom: '1px solid var(--b-ink)',
    padding: '10px 0',
    fontFamily: 'DM Mono, monospace',
    fontSize: 11,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.6fr 1fr',
    gap: 32,
    marginTop: 32,
  },
};

function MidHero() {
  return (
    <header style={MidStyles.hero}>
      {/* halftone wash bottom-left */}
      <div className="halftone" style={{
        position: 'absolute', left: -40, bottom: -40,
        width: 420, height: 420, color: 'var(--b-watermelon)',
        pointerEvents: 'none', opacity: 0.35,
      }} />

      <div style={MidStyles.masthead}>
        <span>VOL. 01 · ISSUE 01</span>
        <span>EDITION: PILOT · MUMBAI · BOTTLED THIS WEEK</span>
        <span>₹10 / SOLD AT EVERY GOOD KIRANA</span>
      </div>

      {/* AAMLO MASTHEAD */}
      <div style={{
        textAlign: 'center',
        padding: '36px 0 28px',
        borderBottom: '4px double var(--b-ink)',
      }}>
        <span className="display" style={{
          fontSize: 'clamp(110px, 18vw, 280px)',
          letterSpacing: '0.02em',
          display: 'block',
        }}>AAMLO</span>
        <span style={{
          fontFamily: 'Khand, sans-serif',
          fontWeight: 500,
          fontSize: 16, letterSpacing: '0.36em',
          textTransform: 'uppercase',
          display: 'block',
          marginTop: 4,
        }}>· The ten-rupee daily ·</span>
      </div>

      {/* lead split */}
      <div style={MidStyles.grid}>
        {/* lead story */}
        <div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
            <Eyebrow color="var(--b-watermelon)">THIS WEEK'S LEAD STORY</Eyebrow>
            <span style={{ width: 60, height: 1, background: 'var(--b-ink)', opacity: 0.3 }} />
            <Mono>BY THE BOTTLING DESK</Mono>
          </div>

          <h1 className="display" style={{
            fontSize: 'clamp(48px, 6.4vw, 96px)',
            margin: '0 0 18px',
            lineHeight: 0.92,
          }}>
            Mango fizz, <span style={{ color: 'var(--b-watermelon)' }}>by the bottle.</span><br/>
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', textTransform: 'none', fontWeight: 400 }}>Ekdum chilled.</span>
          </h1>

          {/* drop cap intro */}
          <p style={{
            fontSize: 15,
            lineHeight: 1.7,
            columnCount: 2, columnGap: 32,
            maxWidth: 640,
          }}>
            <span style={{
              float: 'left',
              fontFamily: 'Playfair Display, serif',
              fontSize: 72, lineHeight: 0.85,
              padding: '4px 8px 0 0',
              color: 'var(--b-watermelon)',
            }}>A</span>
            small bottle, a small price, a big idea — that good road-side fizz
            shouldn't taste like a chemistry experiment. AAMLO is mango first,
            sugar second, and salt last. Sold cold from a kirana that knows you.
            Designed in India, bottled in Gujarat, opened wherever life slows
            down for a minute. Loud where it counts; quiet where it doesn't.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
            <button style={{
              background: 'var(--b-ink)', color: 'var(--b-paper)',
              border: 0, padding: '12px 18px',
              fontFamily: 'Khand, sans-serif',
              fontWeight: 600,
              fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Read the menu →</button>
            <button style={{
              background: 'transparent', color: 'var(--b-ink)',
              border: '2px solid var(--b-ink)', padding: '10px 18px',
              fontFamily: 'Khand, sans-serif',
              fontWeight: 600,
              fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Stock our drink</button>
          </div>
        </div>

        {/* sidebar with bottle "advertisement" */}
        <aside style={{
          border: '2px solid var(--b-ink)',
          padding: 18,
          background: 'var(--b-mango)',
          position: 'relative',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Mono>· ADVT. ·</Mono>
            <Mono>FIG. 01</Mono>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '14px 0' }}>
            <BottleSilhouette label="MANGOLO" primary="#A8540C" cap="#143A23" stripe="#FFF6E2" height={340} />
          </div>
          <div style={{ borderTop: '1px solid var(--b-ink)', paddingTop: 12, textAlign: 'center' }}>
            <span className="display" style={{ fontSize: 32, lineHeight: 0.9 }}>MANGOLO</span>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 16, margin: '4px 0 8px' }}>
              "Aam panna meets fizz."
            </p>
            <Mono>250ML · ₹10 · ALPHONSO LEAD</Mono>
          </div>
        </aside>
      </div>

      {/* ticker — three ticker bars stacked, each scrolling differently */}
      <div style={{ marginTop: 40, borderTop: '2px solid var(--b-ink)', borderBottom: '2px solid var(--b-ink)' }}>
        <Ticker direction={1} speed={48} bg="var(--b-ink)" fg="var(--b-mango)"
          items={['DHAMAKEDAAR MANGO', '· ₹10 ·', 'MANGOLO IN STORE NOW', '· LEECHILO Q3 ·', 'ORANGELO Q4', '· JEERALO 2027 ·', 'STOCK US TODAY']} />
      </div>
    </header>
  );
}

/* ticker — pure CSS animation, no JS scroll listener */
function Ticker({ items, direction = 1, speed = 40, bg, fg }) {
  const id = useMemo(() => 'tk' + Math.random().toString(36).slice(2, 7), []);
  return (
    <div style={{ overflow: 'hidden', background: bg, color: fg, padding: '10px 0' }}>
      <style>{`
        @keyframes ${id} {
          from { transform: translateX(${direction > 0 ? '0' : '-50%'}); }
          to   { transform: translateX(${direction > 0 ? '-50%' : '0'}); }
        }
      `}</style>
      <div style={{
        display: 'flex', gap: 40,
        whiteSpace: 'nowrap',
        animation: `${id} ${speed}s linear infinite`,
        width: 'max-content',
      }}>
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="display" style={{ fontSize: 28, letterSpacing: '0.04em' }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ----- flavor showcase: ticket-stub cards in a 2x2 grid, dotted between ----- */
function MidFlavors() {
  return (
    <section className="section" style={{ background: 'var(--b-paper)', color: 'var(--b-ink)', padding: '96px 32px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        borderBottom: '1px solid var(--b-ink)', paddingBottom: 18, marginBottom: 36,
      }}>
        <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', margin: 0 }}>
          The full menu — <span style={{ color: 'var(--b-watermelon)' }}>four numbers.</span>
        </h2>
        <Mono>↓ TEAR ALONG THE PERFORATION</Mono>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 0,
      }}>
        {FLAVORS.map((flv, i) => (
          <TicketCard key={flv.code} flv={flv} index={i} />
        ))}
      </div>
    </section>
  );
}

function TicketCard({ flv, index }) {
  const [hover, setHover] = useState(false);
  const isRight = index % 2 === 1;
  const isBottom = index >= 2;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        padding: 28,
        borderRight: isRight ? 0 : '2px dashed var(--b-ink)',
        borderBottom: isBottom ? 0 : '2px dashed var(--b-ink)',
        background: hover ? flv.color : 'transparent',
        transition: 'background 400ms var(--ease-cinematic)',
        minHeight: 360,
        display: 'grid',
        gridTemplateColumns: '1fr 140px',
        gap: 24,
        cursor: 'pointer',
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Mono>NO. {flv.code}</Mono>
          <span style={{
            border: '1.5px solid var(--b-ink)',
            padding: '2px 8px',
            fontSize: 10, letterSpacing: '0.16em',
            fontFamily: 'DM Mono, monospace',
            textTransform: 'uppercase',
            background: hover ? 'var(--b-paper)' : 'transparent',
          }}>{flv.status}</span>
        </div>
        <h3 className="display" style={{
          fontSize: 'clamp(56px, 7vw, 88px)',
          margin: '8px 0 4px',
          lineHeight: 0.9,
        }}>{flv.name}</h3>
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          fontSize: 22,
          margin: '0 0 14px',
          color: hover ? 'var(--b-ink)' : 'var(--b-watermelon)',
        }}>{flv.tagline}</p>
        <p style={{ fontSize: 14, lineHeight: 1.55, maxWidth: 380, marginBottom: 14 }}>{flv.line}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
          {flv.notes.map((n, j) => (
            <li key={j}><Mono>· {n}</Mono></li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <BottleSilhouette
          label={flv.name}
          primary={flv.deep}
          cap={flv.accent === '#F7B500' ? '#143A23' : flv.accent}
          stripe="#FFF6E2"
          height={260}
        />
      </div>

      {/* perforation circles at corner intersections */}
      {!isRight && !isBottom && (
        <div style={{
          position: 'absolute', right: -7, bottom: -7, width: 14, height: 14,
          borderRadius: '50%', background: 'var(--b-paper)', border: '1.5px solid var(--b-ink)',
        }} />
      )}
    </div>
  );
}

/* ----- supporting section: "How it's made" rendered as a 4-panel comic strip ----- */
function MidMaking() {
  const panels = [
    { n: 'I', t: 'The fruit', d: 'Alphonso. Shahi litchi. Nagpur orange. Picked, not pretended.', tone: '#FFB800' },
    { n: 'II', t: 'The steep', d: 'Cold, slow, salted with kala namak. No essence shortcuts.', tone: '#C9213E' },
    { n: 'III', t: 'The pop', d: 'Hard carbonation. The kind your nose remembers first.', tone: '#143A23' },
    { n: 'IV', t: 'The ride', d: 'Crated, chilled, sent to ten cities. Kirana to kirana.', tone: '#7A1C28' },
  ];
  return (
    <section className="section" style={{ background: 'var(--b-ink)', color: 'var(--b-paper)', padding: '96px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
        <Eyebrow color="var(--b-mango)">FROM THE BOTTLING DESK · COMIC STRIP NO. 04</Eyebrow>
        <Mono style={{ color: 'var(--b-mango)' }}>SCROLL → ← READ →</Mono>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(48px, 6.4vw, 96px)', margin: '0 0 40px', lineHeight: 0.92 }}>
        How a ten-rupee bottle <span style={{ color: 'var(--b-mango)' }}>actually gets made.</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {panels.map((p, i) => (
          <article key={p.n} style={{
            border: '2px solid var(--b-paper)',
            padding: 22,
            minHeight: 320,
            position: 'relative',
            background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span className="display" style={{ fontSize: 36, color: p.tone }}>{p.n}.</span>
              <Mono style={{ color: 'var(--b-paper)', opacity: 0.6 }}>PANEL {String(i+1).padStart(2,'0')}</Mono>
            </div>
            <PH ratio="4/3" label={`MACRO · ${p.t.toUpperCase()}`} bg={p.tone} style={{ marginBottom: 16 }} />
            <h3 className="display" style={{ fontSize: 28, margin: 0 }}>{p.t}</h3>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 14, marginTop: 6, lineHeight: 1.45, opacity: 0.85 }}>{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DirMid() {
  return (
    <div className="dir-root dir-mid">
      <Nav surface="cream" tint="var(--b-ink)" />
      <MidHero />
      <MidFlavors />
      <MidMaking />
    </div>
  );
}

Object.assign(window, { DirMid });
