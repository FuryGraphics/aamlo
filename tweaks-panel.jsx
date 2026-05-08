<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>AAMLO — Brand Visual System (Working)</title>

<!-- Fonts: Inter (body, parent system) + 3 display experiments, one per direction -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Khand:wght@400;500;600;700&family=Bowlby+One+SC&family=Bungee&family=Bungee+Shade&family=Archivo:wght@400;600;800;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

<style>
  /* ---------- root tokens (Sukudo parent — never overridden by directions) ---------- */
  :root{
    --ink:#0F0F0E;
    --cream:#F5F1EA;
    --bronze:#9A6B3F;
    --stone-90:#2A2A26;
    --stone-80:#444441;
    --stone-60:#5F5E5A;
    --stone-40:#888780;
    --stone-20:#B4B2A9;
    --stone-10:#D3D1C7;
    --stone-05:#EAE7DF;
    --ease-cinematic: cubic-bezier(0.65,0,0.35,1);
    --ease-soft: cubic-bezier(0.4,0,0.2,1);
    --ease-emphatic: cubic-bezier(0.83,0,0.17,1);

    /* AAMLO core palette — all three directions sample from this */
    --mango:    #F7B500;   /* primary mango */
    --sunset:   #E8541C;   /* sunset orange */
    --watermelon:#D4274A;  /* watermelon red */
    --bottle:   #1F4D2C;   /* deep bottle-green accent */
    --litchi:   #F4A6B4;   /* leechilo soft pink */
    --orange-fl:#F58220;   /* orangelo */
    --jeera:    #7A5C2E;   /* jeeralo earthy */
    --cream-warm:#FFF6E2;
    --char:     #1A140C;   /* warm near-black for AAMLO's ink */
  }

  *,*::before,*::after{ box-sizing:border-box; }
  html,body{ margin:0; padding:0; }
  body{
    font-family:'Inter', system-ui, sans-serif;
    background:var(--cream);
    color:var(--ink);
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }
  img{ max-width:100%; display:block; }
  button{ font-family:inherit; cursor:pointer; }
  a{ color:inherit; text-decoration:none; }

  /* shared: reset and a couple of utilities the JSX uses */
  .eyebrow{
    font-family:'Inter', sans-serif;
    font-size:11px; font-weight:500;
    letter-spacing:0.30em;
    text-transform:uppercase;
  }
  .caption{
    font-family:'Inter', sans-serif;
    font-size:12px; font-weight:500;
    letter-spacing:0.08em;
    text-transform:uppercase;
  }
  .mono{ font-family:'DM Mono', ui-monospace, monospace; }

  /* directions wrapper — each direction gets its own ".dir-*" class on the root */
  .dir-root{ position:relative; }

  /* ============== DIRECTION A: SUNDAY MATINEE (safe) ==============
     restrained, modern Indian beverage brand. Inter + Playfair Display italic.
     Big mango blocks, single hero bottle, generous whitespace. */
  .dir-safe{
    --a-ink:#1A140C;
    --a-cream:#FFF6E2;
    --a-mango:#F7B500;
    --a-sunset:#E8541C;
    --a-watermelon:#D4274A;
    --a-bottle:#1F4D2C;
    --a-display:'Playfair Display', 'Instrument Serif', serif;
    background:var(--a-cream);
    color:var(--a-ink);
  }
  .dir-safe .display{
    font-family:var(--a-display);
    font-weight:500;
    line-height:0.96;
    letter-spacing:-0.015em;
  }
  .dir-safe .display em{ font-style:italic; font-weight:400; }

  /* ============== DIRECTION B: FILMI PRESS (mid) ==============
     newsprint / zine grid, halftones, Khand display, ticket-stub flavor cards. */
  .dir-mid{
    --b-paper:#F1E7CE;     /* warm pulp */
    --b-ink:#150D04;
    --b-mango:#FFB800;
    --b-watermelon:#C9213E;
    --b-bottle:#143A23;
    --b-stamp:#7A1C28;
    --b-display:'Khand', 'Archivo', sans-serif;
    background:var(--b-paper);
    color:var(--b-ink);
  }
  .dir-mid .display{
    font-family:var(--b-display);
    font-weight:700;
    line-height:0.92;
    letter-spacing:-0.01em;
    text-transform:uppercase;
  }
  /* halftone via radial-gradient dots — small enough to read as texture */
  .halftone{
    background-image: radial-gradient(currentColor 1px, transparent 1.4px);
    background-size: 6px 6px;
    color: var(--b-ink);
    opacity:0.18;
  }

  /* ============== DIRECTION C: TAPORI TECHNICOLOR (bold) ==============
     full saturation, Bowlby/Bungee display, ticker stacks, springs. */
  .dir-bold{
    --c-ink:#0E0A06;
    --c-mango:#FFC400;
    --c-sunset:#FF5B14;
    --c-pink:#FF2E63;
    --c-bottle:#0E5C2C;
    --c-cream:#FFE9A8;
    --c-display:'Bowlby One SC', 'Archivo', sans-serif;
    --c-display-alt:'Bungee', sans-serif;
    background:var(--c-mango);
    color:var(--c-ink);
  }
  .dir-bold .display{
    font-family:var(--c-display);
    font-weight:400;
    line-height:0.86;
    letter-spacing:-0.005em;
    text-transform:uppercase;
  }
  .dir-bold .display-alt{
    font-family:var(--c-display-alt);
    text-transform:uppercase;
    line-height:1;
  }

  /* ---------- direction switcher chrome ---------- */
  .dir-switcher{
    position:fixed;
    left:50%; top:18px;
    transform:translateX(-50%);
    z-index:90;
    display:flex; gap:0;
    background:var(--ink);
    border:1px solid var(--stone-90);
    padding:4px;
  }
  .dir-switcher button{
    background:transparent; border:0;
    color:var(--stone-40);
    font-size:11px; letter-spacing:0.20em;
    text-transform:uppercase;
    padding:8px 14px;
    transition:all 200ms var(--ease-soft);
  }
  .dir-switcher button.active{
    background:var(--bronze);
    color:var(--cream);
  }
  .dir-switcher button:hover:not(.active){ color:var(--cream); }

  /* ---------- meta header (designer notes / context strip at top) ---------- */
  .session-strip{
    background:var(--ink);
    color:var(--stone-40);
    padding:10px 24px;
    font-family:'DM Mono', monospace;
    font-size:11px;
    letter-spacing:0.04em;
    display:flex; justify-content:space-between;
    border-bottom:1px solid var(--stone-90);
  }
  .session-strip strong{ color:var(--cream); font-weight:500; }

  /* ---------- nav (Sukudo parent shell, brand-tinted) ---------- */
  .nav{
    position:sticky; top:0; z-index:50;
    height:64px;
    display:flex; align-items:center; justify-content:space-between;
    padding:0 32px;
    backdrop-filter:blur(14px) saturate(140%);
    -webkit-backdrop-filter:blur(14px) saturate(140%);
    border-bottom:1px solid currentColor;
    transition:all 400ms var(--ease-soft);
  }
  .nav .left{ display:flex; align-items:center; gap:14px; }
  .nav .mark{ width:28px; height:28px; }
  .nav .word{
    font-size:10px; letter-spacing:0.20em;
    text-transform:uppercase;
    font-weight:500;
  }
  .nav .links{ display:flex; gap:28px; }
  .nav .links a{
    font-size:11px; letter-spacing:0.08em;
    text-transform:uppercase;
  }

  /* utility: ensure tweaks panel sits above session strip */
  [data-tweaks-panel]{ z-index:120 !important; }

  /* shared section padding */
  .section{ padding:120px 48px; }
  @media (max-width:780px){ .section{ padding:72px 24px; } }

  /* ----- Sukudo monogram SVG mask helper (we draw the four-petal mark inline) ----- */
  .sukudo-mark{
    width:100%; height:100%;
  }

  /* prevent FOUC on font-swap inside the prototype */
  .display, .display-alt{ font-display:swap; }

  /* loud direction extra: drop-shadow stamp util */
  .stamp{
    display:inline-block;
    border:2px solid currentColor;
    padding:6px 12px;
    transform:rotate(-3deg);
    text-transform:uppercase;
    font-weight:700;
    letter-spacing:0.06em;
  }

  /* placeholder image stripes (used wherever real photography would go) */
  .ph{
    position:relative;
    background:
      repeating-linear-gradient(135deg,
        rgba(0,0,0,0.06) 0 2px,
        transparent 2px 14px),
      var(--ph-bg, var(--stone-05));
    color:var(--stone-60);
    overflow:hidden;
  }
  .ph .ph-label{
    position:absolute;
    inset:auto 12px 12px 12px;
    font-family:'DM Mono', monospace;
    font-size:10px;
    letter-spacing:0.06em;
    text-transform:uppercase;
    opacity:0.7;
  }
</style>
</head>
<body>

<!-- session strip -->
<div class="session-strip">
  <span><strong>AAMLO · brand visual system</strong> &nbsp;·&nbsp; section 4.2 working session</span>
  <span>3 directions · safe → mid → bold</span>
</div>

<div id="root"></div>

<!-- React + Babel pinned -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

<!-- shared primitives -->
<script type="text/babel" src="aamlo/primitives.jsx"></script>
<!-- direction A: safe -->
<script type="text/babel" src="aamlo/dir-safe.jsx"></script>
<!-- direction B: mid -->
<script type="text/babel" src="aamlo/dir-mid.jsx"></script>
<!-- direction C: bold -->
<script type="text/babel" src="aamlo/dir-bold.jsx"></script>
<!-- tweaks shell -->
<script type="text/babel" src="tweaks-panel.jsx"></script>
<!-- app -->
<script type="text/babel" src="aamlo/app.jsx"></script>

</body>
</html>
