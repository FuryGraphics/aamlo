// CLUMZY app shell — direction switcher + tweaks + design notes ribbon.

const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle } = window;

const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "direction": "mid",
  "showSpecRibbon": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULS);
  const [dir, setDir] = useState(tweaks.direction || 'mid');

  useEffect(() => { if (tweaks.direction !== dir) setTweak('direction', dir); }, [dir]);
  useEffect(() => { if (tweaks.direction && tweaks.direction !== dir) setDir(tweaks.direction); }, [tweaks.direction]);

  const Direction = dir === 'safe' ? DirSafe : dir === 'bold' ? DirBold : DirMid;

  const META = {
    safe: {
      name: 'A · Glass Cabinet',
      blurb: 'Editorial monograph. Two-column layout, large-format bottle as artifact, numbered chapter prose with marginalia. Closest to the parent\'s restraint, dialed up in scale.',
      type: 'Inter (body) · Instrument Serif (display) · DM Mono (metadata)',
      palette: ['#0B1418', '#142028', '#9A6B3F', '#FAF6EC', '#7C8A92'],
      motion: 'Mostly static. 400ms tab focus shifts. No springs, no scroll-jacking.',
    },
    mid: {
      name: 'B · Slow Dissolve',
      blurb: 'Chapter-driven cinema. Title-card hero, full-bleed atmospheric slides that cross-dissolve, ground-color shifts between flavours, big italic Instrument Serif pull-quotes.',
      type: 'Inter (body) · Instrument Serif (display, larger sizes) · DM Mono',
      palette: ['#050A0E', '#0E2330', '#173B36', '#9A6B3F', '#EDE5D2'],
      motion: 'Cinematic. 1100ms ground cross-dissolve on flavour change. 4s ambient bottle sway. No springs.',
    },
    bold: {
      name: 'C · Pressure Drop',
      blurb: 'Almost-uncomfortable restraint, earned by one moment of release: the goli physically falls down the bottle as you scroll past the centre section. A single bronze hairline runs through the page.',
      type: 'Inter (body, weight 400) · Instrument Serif (display, smaller than B) · DM Mono',
      palette: ['#03100F', '#08191B', '#1B3033', '#B07A47', '#E8DDC4'],
      motion: 'Scroll-bound: marble Y-position interpolates 0→1 across the centre section. 700ms cross-fades on annotation states. Halo flares only during the release window.',
    },
  };

  const m = META[dir];

  return (
    <>
      {tweaks.showSpecRibbon && (
        <aside style={{
          position: 'fixed', left: 16, bottom: 16, width: 320,
          background: 'rgba(0,0,0,0.94)', color: 'var(--cream)',
          padding: '14px 16px',
          fontFamily: 'DM Mono, monospace', fontSize: 11, lineHeight: 1.55,
          zIndex: 80,
          border: '1px solid #1A1A18', backdropFilter: 'blur(6px)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: 'var(--bronze)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>{m.name}</span>
            <button onClick={() => setTweak('showSpecRibbon', false)}
              style={{ background: 'none', border: 0, color: '#888780', cursor: 'pointer', fontSize: 14 }}>×</button>
          </div>
          <p style={{ margin: '0 0 10px', color: '#B4B2A9', letterSpacing: 0, fontFamily: 'Inter, sans-serif', fontSize: 12, lineHeight: 1.5 }}>{m.blurb}</p>
          <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
            {m.palette.map(c => (
              <span key={c} title={c} style={{ flex: 1, height: 18, background: c, border: '1px solid rgba(255,255,255,0.08)' }} />
            ))}
          </div>
          <div style={{ color: '#888780' }}>
            <div><span style={{ color: '#B4B2A9' }}>TYPE</span> · {m.type}</div>
            <div style={{ marginTop: 4 }}><span style={{ color: '#B4B2A9' }}>MOTION</span> · {m.motion}</div>
          </div>
        </aside>
      )}
      {!tweaks.showSpecRibbon && (
        <button onClick={() => setTweak('showSpecRibbon', true)}
          style={{
            position: 'fixed', left: 16, bottom: 16, zIndex: 80,
            background: '#000', color: 'var(--cream)',
            border: '1px solid #1A1A18', padding: '8px 12px',
            fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: 'pointer',
          }}>↑ design notes</button>
      )}

      <DirSwitcher value={dir} onChange={setDir} />

      <Direction />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Direction">
          <TweakRadio
            value={dir}
            onChange={(v) => setDir(v)}
            options={[
              { value: 'safe', label: 'A · Glass Cabinet' },
              { value: 'mid', label: 'B · Slow Dissolve' },
              { value: 'bold', label: 'C · Pressure Drop' },
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
