// App shell — direction switcher + tweaks panel + spec ribbon at top of each direction.

const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSelect } = window;

const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "direction": "safe",
  "showSpecRibbon": true,
  "showTickers": true,
  "displayPair": "default"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULS);
  const [dir, setDir] = useState(tweaks.direction || 'safe');

  // keep tweak panel and chrome switcher in sync
  useEffect(() => { if (tweaks.direction !== dir) setTweak('direction', dir); }, [dir]);
  useEffect(() => { if (tweaks.direction && tweaks.direction !== dir) setDir(tweaks.direction); }, [tweaks.direction]);

  const Direction = dir === 'mid' ? DirMid : dir === 'bold' ? DirBold : DirSafe;

  // direction descriptors for the ribbon
  const META = {
    safe: {
      name: 'A · Sunday Matinee',
      blurb: 'Restrained, modern Indian beverage. Editorial Playfair italics, generous whitespace, mango/cream/ink blocks. Closest to the parent\'s restraint — just warmer.',
      type: 'Inter (body) · Playfair Display italic (display)',
      palette: ['#FFF6E2', '#F7B500', '#E8541C', '#1F4D2C', '#1A140C'],
      motion: 'Cinematic. Single ambient float, 700ms grid morph on flavor focus. Springs disabled.',
    },
    mid: {
      name: 'B · Filmi Press',
      blurb: 'Newsprint / zine. Halftones, Khand display headlines, ticker bars, ticket-stub flavor cards in a perforated grid, comic-strip "how it\'s made".',
      type: 'Inter (body) · Khand (display) · Playfair italic (accents)',
      palette: ['#F1E7CE', '#FFB800', '#C9213E', '#143A23', '#150D04'],
      motion: 'Linear ticker, 400ms hover fills, dashed perforation grid stays static.',
    },
    bold: {
      name: 'C · Tapori Technicolor',
      blurb: 'Maximalist. Stacked tickers, halo\'d hero bottle, movie-poster flavor cards, swung-in stamps, full-bleed pink "credits roll" supporting section.',
      type: 'Inter (body) · Bowlby One SC (display) · Bungee (alt) · Playfair italic (one accent)',
      palette: ['#FFC400', '#FF2E63', '#FF5B14', '#0E5C2C', '#0E0A06'],
      motion: 'Springs allowed: hover-tilt cards (cubic-bezier overshoot), pulsing halos, three tickers at three speeds.',
    },
  };

  const m = META[dir];

  return (
    <>
      {/* spec ribbon */}
      {tweaks.showSpecRibbon && (
        <aside style={{
          position: 'fixed',
          left: 16, bottom: 16,
          width: 320,
          background: 'rgba(15,15,14,0.94)',
          color: 'var(--cream)',
          padding: '14px 16px',
          fontFamily: 'DM Mono, monospace',
          fontSize: 11,
          lineHeight: 1.55,
          zIndex: 80,
          border: '1px solid var(--stone-90)',
          backdropFilter: 'blur(6px)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: 'var(--bronze)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>
              {m.name}
            </span>
            <button
              onClick={() => setTweak('showSpecRibbon', false)}
              style={{ background: 'none', border: 0, color: 'var(--stone-40)', cursor: 'pointer', fontSize: 14 }}
              aria-label="Hide notes"
            >×</button>
          </div>
          <p style={{ margin: '0 0 10px', color: 'var(--stone-20)', letterSpacing: 0, fontFamily: 'Inter, sans-serif', fontSize: 12, lineHeight: 1.5 }}>
            {m.blurb}
          </p>
          <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
            {m.palette.map(c => (
              <span key={c} title={c} style={{ flex: 1, height: 18, background: c, border: '1px solid rgba(255,255,255,0.08)' }} />
            ))}
          </div>
          <div style={{ color: 'var(--stone-40)' }}>
            <div><span style={{ color: 'var(--stone-20)' }}>TYPE</span> · {m.type}</div>
            <div style={{ marginTop: 4 }}><span style={{ color: 'var(--stone-20)' }}>MOTION</span> · {m.motion}</div>
          </div>
        </aside>
      )}

      {!tweaks.showSpecRibbon && (
        <button
          onClick={() => setTweak('showSpecRibbon', true)}
          style={{
            position: 'fixed', left: 16, bottom: 16, zIndex: 80,
            background: 'var(--ink)', color: 'var(--cream)',
            border: '1px solid var(--stone-90)',
            padding: '8px 12px',
            fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: 'pointer',
          }}>↑ design notes</button>
      )}

      {/* direction switcher (chrome at top) */}
      <DirSwitcher value={dir} onChange={setDir} />

      {/* the direction itself */}
      <Direction />

      {/* tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Direction">
          <TweakRadio
            value={dir}
            onChange={(v) => { setDir(v); }}
            options={[
              { value: 'safe', label: 'A · Sunday Matinee' },
              { value: 'mid', label: 'B · Filmi Press' },
              { value: 'bold', label: 'C · Tapori Technicolor' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Chrome">
          <TweakToggle
            value={!!tweaks.showSpecRibbon}
            onChange={(v) => setTweak('showSpecRibbon', v)}
            label="Show design notes"
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
