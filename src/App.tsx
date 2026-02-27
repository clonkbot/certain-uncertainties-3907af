import { useEffect, useState } from 'react';

function PixelFlame() {
  // Generate pixel art flame pattern
  const flamePattern = [
    '    ██    ',
    '   ████   ',
    '  ██████  ',
    ' ████████ ',
    ' ██ ██ ██ ',
    '████  ████',
    '██ ████ ██',
    ' ████████ ',
    '  ██████  ',
    ' ████████ ',
    '██████████',
    ' ████████ ',
    '  ██████  ',
    '   ████   ',
    '    ██    ',
  ];

  return (
    <div className="font-mono text-[6px] md:text-[8px] leading-none tracking-tighter select-none animate-flicker">
      {flamePattern.map((row, i) => (
        <div key={i} className="whitespace-pre" style={{ animationDelay: `${i * 50}ms` }}>
          {row.split('').map((char, j) => (
            <span
              key={j}
              className={char === '█' ? 'text-black' : 'text-transparent'}
              style={{
                opacity: char === '█' ? Math.random() * 0.4 + 0.6 : 0,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function CoordinateMarker({ label, className, style }: { label: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`flex items-start gap-1 ${className}`} style={style}>
      <div className="w-2 h-2 md:w-3 md:h-3 border border-[#4a9e8c] bg-transparent" />
      <span className="font-mono text-[8px] md:text-[10px] text-[#4a9e8c] tracking-wider">{label}</span>
    </div>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f2eb] relative overflow-hidden selection:bg-[#4a9e8c] selection:text-white">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <main className={`relative z-10 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8 md:mb-12">
          {/* Left side - Title */}
          <div className="space-y-2 animate-slideUp" style={{ animationDelay: '100ms' }}>
            <h1 className="font-serif text-xl md:text-2xl lg:text-3xl tracking-wide text-black leading-tight">
              <span className="text-[#666] mr-2">#</span>
              确定的 不确定性<span className="text-[#666]">//</span>
            </h1>
            <h2 className="font-serif text-lg md:text-xl lg:text-2xl tracking-wide text-black">
              第贰阶段实验参数<span className="text-[#666]">|</span>火<sup className="text-xs">³</sup>
            </h2>
            <div className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase mt-4">
              <p>CERTAIN</p>
              <p>UNCERTAINTIES [VOL.2] |<span className="border border-black px-2 py-0.5 ml-1">FLAME<sup>3</sup></span></p>
            </div>
          </div>

          {/* Right side - Config */}
          <div className="font-mono text-[10px] md:text-xs text-right space-y-1 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <p className="text-[#666]">[CONFIG.TEAM] //* 333 LAB */= {'{'}</p>
            <p>艺术家: '吴名' <span className="text-[#666]">// ARTIST: MING WU</span></p>
            <p>总策划: '曹玥' <span className="text-[#666]">// CHIEF PLANNER: YUE CAO</span></p>
            <p>策展人: '曾者' <span className="text-[#666]">// CURATOR: ASH ZENG</span></p>
            <div className="flex justify-end items-center gap-2 mt-2">
              <span className="text-[#666]">PROGRAM</span>
              <span>{'}'}</span>
            </div>
            <p className="text-right">NO.∞</p>
          </div>
        </header>

        {/* Main Visual Section */}
        <section className="relative my-8 md:my-16 flex justify-center">
          {/* TX03 Marker */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#666] animate-slideUp" style={{ animationDelay: '300ms' }}>
            TX03
          </div>

          {/* Flame pixel art */}
          <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 animate-slideUp" style={{ animationDelay: '400ms' }}>
            <CoordinateMarker label="FL33" className="absolute -top-4 -left-8 md:-left-12" />
            <PixelFlame />
          </div>

          {/* OX333 Marker */}
          <CoordinateMarker label="OX33³" className="absolute top-32 md:top-40 left-4 md:left-16 animate-slideUp" style={{ animationDelay: '350ms' }} />

          {/* Main crossed logs image */}
          <div className="relative mt-24 md:mt-32 animate-slideUp" style={{ animationDelay: '500ms' }}>
            {/* PW33 Marker box */}
            <div className="absolute -left-2 md:-left-4 top-8 md:top-12 border border-[#4a9e8c] w-20 md:w-32 h-16 md:h-24 flex items-start p-1">
              <span className="font-mono text-[8px] md:text-[10px] text-[#4a9e8c]">PW33</span>
            </div>

            {/* Crossed logs SVG representation */}
            <div className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
              <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: 'contrast(1.2) grayscale(0.3)' }}>
                {/* Log 1 - diagonal */}
                <rect x="20" y="90" width="160" height="20" rx="3" fill="#333" transform="rotate(-30 100 100)" />
                <rect x="25" y="92" width="150" height="4" rx="1" fill="#555" transform="rotate(-30 100 100)" />
                <rect x="25" y="100" width="150" height="2" rx="1" fill="#444" transform="rotate(-30 100 100)" />

                {/* Log 2 - opposite diagonal */}
                <rect x="20" y="90" width="160" height="20" rx="3" fill="#2a2a2a" transform="rotate(30 100 100)" />
                <rect x="25" y="92" width="150" height="4" rx="1" fill="#4a4a4a" transform="rotate(30 100 100)" />
                <rect x="25" y="100" width="150" height="2" rx="1" fill="#3a3a3a" transform="rotate(30 100 100)" />

                {/* Log 3 - vertical-ish */}
                <rect x="85" y="30" width="22" height="140" rx="3" fill="#252525" transform="rotate(15 100 100)" />
                <rect x="88" y="35" width="4" height="130" rx="1" fill="#454545" transform="rotate(15 100 100)" />

                {/* Texture lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={i}
                    x1={30 + i * 18} y1={85}
                    x2={35 + i * 18} y2={115}
                    stroke="#666"
                    strokeWidth="0.5"
                    transform="rotate(-30 100 100)"
                  />
                ))}

                {/* Small ash particles */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={70 + Math.random() * 60}
                    cy={60 + Math.random() * 40}
                    r={1 + Math.random() * 2}
                    fill="#333"
                    opacity={0.5 + Math.random() * 0.5}
                  />
                ))}
              </svg>
            </div>

            {/* PX333 Marker */}
            <CoordinateMarker label="PX333" className="absolute right-0 top-1/3" />

            {/* WD03 Marker */}
            <CoordinateMarker label="WD03" className="absolute right-8 md:right-12 bottom-8 md:bottom-12" />

            {/* FLO marker */}
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2">
              <div className="w-3 h-3 md:w-4 md:h-4 border border-[#4a9e8c] bg-[#4a9e8c]/20" />
              <span className="font-mono text-[6px] md:text-[8px] text-[#4a9e8c] absolute -bottom-3 left-0">FLO</span>
            </div>
          </div>

          {/* Right side rotated text */}
          <div
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 hidden md:block animate-slideUp"
            style={{
              writingMode: 'vertical-rl',
              animationDelay: '600ms'
            }}
          >
            <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-[#666]">
              Extinguish Flame<sup>3</sup>, illuminate in ∞
            </p>
          </div>
        </section>

        {/* Parameters Section */}
        <section className="mt-8 md:mt-16 space-y-6 animate-slideUp" style={{ animationDelay: '700ms' }}>
          <div className="font-mono text-xs text-[#666]">
            <span>{'{'}</span>
            <p className="ml-4">[核心参数]</p>
          </div>

          {/* Launch Time */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
            <span className="font-serif text-sm md:text-base">开幕时间 =</span>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-3xl md:text-5xl lg:text-6xl tracking-tighter">2025.</span>
              <span className="font-mono text-4xl md:text-6xl lg:text-7xl tracking-tighter">03.</span>
              <span className="font-mono text-4xl md:text-6xl lg:text-7xl tracking-tighter">22</span>
              <span className="font-mono text-xs md:text-sm text-[#666] ml-2 md:ml-4">// LAUNCH TIME</span>
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
            <span className="font-serif text-sm md:text-base">实验周期 =</span>
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="font-mono text-3xl md:text-5xl lg:text-6xl tracking-tighter">2025.</span>
              <span className="font-mono text-4xl md:text-6xl lg:text-7xl tracking-tighter">03.</span>
              <span className="font-mono text-4xl md:text-6xl lg:text-7xl tracking-tighter">22</span>
              <span className="font-mono text-2xl md:text-4xl lg:text-5xl mx-2">→</span>
              <span className="font-mono text-4xl md:text-6xl lg:text-7xl tracking-tighter">06.</span>
              <span className="font-mono text-4xl md:text-6xl lg:text-7xl tracking-tighter">29</span>
              <span className="font-mono text-xs md:text-sm text-[#666] ml-2 md:ml-4">// DURATION</span>
            </div>
          </div>

          {/* Space Protocol */}
          <div className="font-mono text-xs md:text-sm space-y-1 mt-6 md:mt-8">
            <p className="text-[#666]">[空间协议]</p>
            <p>坐标 = A+ STUDIO <span className="text-[#666]">// VENUE</span></p>
            <p>访问时间 = 10:00-18:00 <span className="text-[#666]">// OPEN HOURS</span></p>
            <p>排除条件 = 周一&公共假期<sub className="text-[8px]">(闭馆)</sub> <span className="text-[#666]">// CLOSED ON MONDAY & HOLIDAYS</span></p>
          </div>

          <div className="font-mono text-xs text-[#666]">
            <span>{'}'}</span>
          </div>
        </section>

        {/* Partners Footer */}
        <footer className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-black/10 animate-slideUp" style={{ animationDelay: '800ms' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {/* 333 Lab Logo */}
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8">
                  <circle cx="10" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="22" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="font-mono text-sm md:text-base font-bold tracking-wide">Powered by 333 Lab</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <span className="font-mono text-[10px] md:text-xs text-[#666]">[合作伙伴]</span>
              <span className="font-mono text-xs md:text-sm tracking-wide">A+ STUDIO</span>
              <span className="border border-black px-2 md:px-3 py-1 font-mono text-[10px] md:text-xs tracking-widest">PEACE PIECE</span>
            </div>
          </div>

          {/* Attribution footer */}
          <div className="mt-8 md:mt-12 pt-4 border-t border-black/5 text-center">
            <p className="font-mono text-[10px] md:text-xs text-[#999] tracking-wide">
              Requested by @PauliusX · Built by @clonkbot
            </p>
          </div>
        </footer>
      </main>

      {/* Mobile rotated text - bottom */}
      <div className="md:hidden fixed bottom-4 right-4 z-20">
        <p
          className="font-mono text-[8px] tracking-wider text-[#666]"
          style={{ writingMode: 'vertical-rl' }}
        >
          Extinguish Flame³, illuminate in ∞
        </p>
      </div>
    </div>
  );
}

export default App;
