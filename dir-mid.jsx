// DIRECTION C — "Tapori Technicolor"
// Full saturation maximalism: marquee tickers stacked, flavor "star cards" cut like film posters,
// springs, swung-in headlines, animated stamps. Loud — but with grid discipline so it doesn't
// read as a cheap template.

const BoldStyles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    background: 'var(--c-mango)',
    color: 'var(--c-ink)',
    overflow: 'hidden',
  },
};

function BoldHero() {
  // jiggle on hover for the headline letters
  return (
    <header style={BoldStyles.hero}>
      {/* sun-burst stripes */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: `repeating-conic-gradient(from 0deg at 50% 110%,
          rgba(255,196,0,0.0) 0deg 8deg,
          rgba(255,91,20,0.18) 8deg 16deg)`,
        pointerEvents: 'none',
      }} />

      {/* top ticker */}
      <Ticker direction={1} speed={28} bg="var(--c-ink)" fg="var(--c-mango)"
        items={['DHAMAKEDAAR MANGO', '★', 'EKDUM CHILLED', '★', '₹10 MEIN PURI PARTY', '★', 'AAMLO', '★']} />

      <div style={{ padding: '72px 32px 32px', position: 'relative', zIndex: 1 }}>
        {/* breadcrumb-ish marquee row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
          <span className="stamp" style={{ background: 'var(--c-pink)', color: 'var(--c-cream)', borderColor: 'var(--c-cream)' }}>
            ★ A SUKUDO PRODUCTION ★
          </span>
          <Mono>FILM 01 · ROLE: MANGOLO · GENRE: SODA</Mono>
          <span className="stamp" style={{ borderColor: 'var(--c-ink)' }}>NEW · 2026</span>
        </div>

        {/* the title block */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}>
          <div>
            <span className="display" style={{
              fontSize: 'clamp(120px, 22vw, 360px)',
              lineHeight: 0.82,
              letterSpacing: '-0.02em',
              display: 'block',
              color: 'var(--c-ink)',
              textShadow: '8px 8px 0 var(--c-pink), 16px 16px 0 var(--c-bottle)',
            }}>AAMLO</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 24 }}>
              <span className="display-alt" style={{
                fontSize: 'clamp(28px, 3.4vw, 48px)',
                color: 'var(--c-pink)',
                background: 'var(--c-ink)',
                padding: '6px 16px',
                transform: 'rotate(-2deg)',
                display: 'inline-block',
              }}>STARRING MANGOLO</span>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 2.4vw, 32px)',
              }}>"the ten-rupee blockbuster."</span>
            </div>

            <p style={{
              maxWidth: 480,
              marginTop: 32,
              fontSize: 17,
              lineHeight: 1.55,
              fontWeight: 500,
              color: 'var(--c-ink)',
            }}>
              Chhota bottle. Badi feeling. Real fruit fizz, sold cold, priced at ten,
              made for everyone who ever drank a soda standing on a footpath.
              <span className="display-alt" style={{ display: 'inline-block', background: 'var(--c-ink)', color: 'var(--c-mango)', padding: '0 8px', marginLeft: 8 }}>EKDUM CHILLED.</span>
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
              <button style={{
                background: 'var(--c-ink)',
                color: 'var(--c-mango)',
                border: 0,
                padding: '16px 24px',
                fontFamily: "'Bowlby One SC', sans-serif",
                fontSize: 16, letterSpacing: '0.06em',
              }}>★ BOOK YOUR BOTTLE</button>
              <button style={{
                background: 'var(--c-pink)', color: 'var(--c-cream)',
                border: 0,
                padding: '16px 24px',
                fontFamily: "'Bowlby One SC', sans-serif",
                fontSize: 16, letterSpacing: '0.06em',
              }}>BECOME A DISTRIBUTOR</button>
            </div>
          </div>

          {/* poster-style bottle on a halo */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 540 }}>
            {/* halo */}
            <div style={{
              position: 'absolute', inset: '5%',
              borderRadius: '50%',
              background: `radial-gradient(circle, var(--c-pink) 0%, var(--c-pink) 30%, transparent 60%)`,
              animation: 'pulseHalo 5s ease-in-out infinite',
            }} />
            <style>{`
              @keyframes pulseHalo { 0%,100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.08); opacity: 1; } }
              @keyframes wobble { 0%,100% { transform: rotate(-2deg) translateY(0); } 50% { transform: rotate(2deg) translateY(-8px); } }
            `}</style>
            {/* corner stamps */}
            <span className="stamp" style={{
              position: 'absolute', top: 28, left: 0, background: 'var(--c-cream)', color: 'var(--c-ink)', borderColor: 'var(--c-ink)',
              fontSize: 14, transform: 'rotate(-12deg)', zIndex: 2,
            }}>★ PURE FRUIT ★</span>
            <span className="stamp" style={{
              position: 'absolute', bottom: 60, right: 0, background: 'var(--c-bottle)', color: 'var(--c-mango)', borderColor: 'var(--c-mango)',
              fontSize: 14, transform: 'rotate(8deg)', zIndex: 2,
            }}>FILMI FIZZ</span>
            <div style={{ position: 'relative', zIndex: 1, animation: 'wobble 4s ease-in-out infinite' }}>
              <BottleSilhouette label="MANGOLO" primary="#A8540C" cap="#0E5C2C" stripe="#FFE9A8" height={520} />
            </div>
          </div>
        </div>
      </div>

      {/* second ticker, opposite direction */}
      <Ticker direction={-1} speed={36} bg="var(--c-pink)" fg="var(--c-cream)"
        items={['MANGOLO', '✦', 'LEECHILO Q3', '✦', 'ORANGELO Q4', '✦', 'JEERALO 2027', '✦', 'SUKUDO CONSUMER', '✦']} />
      <Ticker direction={1} speed={20} bg="var(--c-bottle)" fg="var(--c-mango)"
        items={['STOCK US TODAY', '·', '4 FLAVOURS', '·', '1 BOTTLE', '·', '10 RUPEES', '·']} />
    </header>
  );
}

/* ----- flavor showcase: 4 movie-poster cards in a grid, big halos, hover springs ----- */
function BoldFlavors() {
  return (
    <section className="section" style={{
      background: 'var(--c-ink)', color: 'var(--c-cream)', padding: '120px 32px',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow color="var(--c-pink)">★ THE STAR CAST ★</Eyebrow>
        <h2 className="display" style={{
          fontSize: 'clamp(56px, 8vw, 120px)',
          margin: '12px 0 0',
          lineHeight: 0.9,
        }}>
          FOUR FLAVOURS.<br/>
          <span style={{ color: 'var(--c-mango)' }}>ONE</span> <span style={{ color: 'var(--c-pink)' }}>SMALL</span> <span style={{ color: 'var(--c-cream)' }}>BOTTLE.</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {FLAVORS.map((flv, i) => <PosterCard key={flv.code} flv={flv} index={i} />)}
      </div>
    </section>
  );
}

function PosterCard({ flv, index }) {
  const [hover, setHover] = useState(false);
  const tilt = [-2, 1.5, -1, 2][index];
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: flv.color,
        color: '#1A140C',
        padding: 18,
        position: 'relative',
        transform: `rotate(${hover ? 0 : tilt}deg) translateY(${hover ? -10 : 0}px)`,
        transition: 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 500ms ease',
        boxShadow: hover
          ? `12px 12px 0 var(--c-ink)`
          : `6px 6px 0 var(--c-ink)`,
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <Mono>★ NO. {flv.code} ★</Mono>
        <Mono>{flv.status.toUpperCase()}</Mono>
      </div>

      {/* halo + bottle */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 280, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: '10%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${flv.deep} 0%, transparent 65%)`,
          opacity: 0.35,
        }} />
        <BottleSilhouette
          label={flv.name}
          primary={flv.deep}
          cap={flv.accent === '#F7B500' ? '#0E5C2C' : flv.accent}
          stripe="#FFE9A8"
          height={260}
        />
      </div>

      <h3 className="display" style={{
        fontSize: 'clamp(36px, 3.6vw, 56px)',
        textAlign: 'center',
        margin: '12px 0 4px',
        lineHeight: 0.9,
      }}>{flv.name}</h3>

      <p className="display-alt" style={{
        textAlign: 'center',
        fontSize: 14,
        background: '#1A140C',
        color: flv.color,
        padding: '4px 8px',
        display: 'inline-block',
        margin: '0 auto',
        width: '100%',
      }}>{flv.tagline}</p>

      <p style={{ fontSize: 13, lineHeight: 1.45, marginTop: 12, fontWeight: 500 }}>{flv.line}</p>
    </article>
  );
}

/* ----- supporting section: "Behind the scenes" — film-credits style ----- */
function BoldMaking() {
  const credits = [
    { role: 'Lead fruit', name: 'Alphonso of Ratnagiri' },
    { role: 'Supporting', name: 'Shahi Litchi · Nagpur Orange · Roasted Jeera' },
    { role: 'Carbonation', name: 'Hard. Always hard.' },
    { role: 'Salt', name: 'Kala namak, hand-pinch' },
    { role: 'Bottling', name: 'Gujarat & Maharashtra units' },
    { role: 'Cold-chain', name: 'Kirana network · 6 cities' },
    { role: 'Sweetness', name: 'Cane only · no high-fructose' },
    { role: 'Caffeine', name: 'Zero. We don\'t do that.' },
  ];
  return (
    <section className="section" style={{
      background: 'var(--c-pink)', color: 'var(--c-cream)', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 18px)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start', position: 'relative' }}>
        <div>
          <Eyebrow color="var(--c-mango)">★ BEHIND THE SCENES ★</Eyebrow>
          <h2 className="display" style={{
            fontSize: 'clamp(56px, 7.5vw, 110px)',
            margin: '12px 0 24px',
            lineHeight: 0.88,
          }}>
            HOW WE MAKE A <span style={{ color: 'var(--c-mango)' }}>₹10 BOTTLE</span> THAT DOESN'T TASTE LIKE A ₹10 BOTTLE.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, fontWeight: 500, maxWidth: 460 }}>
            Real fruit. Real salt. Real bottling units in Gujarat and Maharashtra.
            We saved money on the marketing, not on the mango.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <span className="stamp" style={{ background: 'var(--c-mango)', color: 'var(--c-ink)', borderColor: 'var(--c-ink)' }}>FSSAI CERTIFIED</span>
            <span className="stamp" style={{ background: 'var(--c-bottle)', color: 'var(--c-mango)', borderColor: 'var(--c-mango)', transform: 'rotate(2deg)' }}>NO CAFFEINE</span>
            <span className="stamp" style={{ background: 'var(--c-cream)', color: 'var(--c-ink)', borderColor: 'var(--c-ink)', transform: 'rotate(-1deg)' }}>CANE SUGAR</span>
          </div>
        </div>

        <div style={{
          background: 'var(--c-ink)',
          padding: 32,
          color: 'var(--c-mango)',
          border: '3px solid var(--c-mango)',
        }}>
          <div style={{ textAlign: 'center', borderBottom: '1px solid var(--c-mango)', paddingBottom: 12, marginBottom: 18 }}>
            <span className="display-alt" style={{ fontSize: 22 }}>· FULL CREDITS ·</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {credits.map((c, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 14, alignItems: 'baseline' }}>
                <Mono style={{ color: 'var(--c-pink)' }}>{c.role.toUpperCase()}</Mono>
                <span className="display" style={{ fontSize: 22, lineHeight: 1, color: 'var(--c-cream)' }}>{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DirBold() {
  return (
    <div className="dir-root dir-bold">
      <Nav surface="ink" tint="var(--c-ink)" />
      <BoldHero />
      <BoldFlavors />
      <BoldMaking />
    </div>
  );
}

Object.assign(window, { DirBold });
