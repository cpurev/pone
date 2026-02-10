function CustomP({ className = "", slim = false }: { className?: string; slim?: boolean }) {
  const scaleX = slim ? 0.4 : 0.45;
  const marginLeft = slim ? '-0.65em' : '-0.55em';
  
  return (
    <svg
      viewBox="0 0 70 62"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      style={{ height: '1.15em', width: 'auto', verticalAlign: 'baseline', marginBottom: '-0.18em', transform: `scaleX(${scaleX})`, transformOrigin: 'right center', marginLeft }}
      fill="currentColor"
    >
      <path d="M66,25 C67,33 65,38 57,40 C51,41 44,41 37,42 C37,38 37,36 37,33 C41,33 44,33 47,32 C49,32 50,30 51,29 C50,28 49,25 47,25 C42,25 37,25 32,25 C27,25 22,25 16,25 C16,23 16,22 16,20 C16,16 17,15 21,15 C32,16 42,16 53,16 C58,17 64,18 66,25 z" />
      <path d="M16,49 C16,43 16,37 16,32 C21,32 24,32 29,32 C29,39 29,45 29,52 C25,52 22,52 18,52 C17,52 17,50 16,49 z" />
    </svg>
  );
}

// PHASE ONE text with custom P
function PhaseOneText({ slim = false }: { slim?: boolean }) {
  return (
    <>
      <CustomP slim={slim} />HASE ONE
    </>
  );
}

export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden">
      <main>
        {/* First Page */}
        <section
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(to bottom, #000000, #0A0A0A, #000000)' }}
        >
          {/* Centered pulsing glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[600px] h-[600px] bg-white/5 rounded-full opacity-50 animate-pulse"
              style={{ filter: 'blur(120px)', animationDuration: '4s' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 py-24 sm:py-32 lg:py-40 text-center">
            {/* Phase One Logo */}
            <div className="mb-12 sm:mb-16">
              <img
                src="/img/1.png"
                alt="Phase One"
                className="h-8 sm:h-10 lg:h-12 mx-auto select-none pointer-events-none invert opacity-50"
              />
            </div>

            {/* Tagline */}
            <div className="w-full flex items-center justify-center mb-6 sm:mb-8">
              <h2
                className="uppercase tracking-[0.2em] text-white/5 hover:text-white/10 transition-colors text-lg sm:text-3xl lg:text-4xl max-w-[90vw] text-center select-none"
                style={{ fontWeight: 800 }}
              >
                SOMETHING NEW IS NEAR
              </h2>
            </div>

            {/* Email form */}
            <form className="w-full max-w-xl mx-auto mb-8">
              <div className="flex flex-row gap-2 sm:gap-3 items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="h-10 sm:h-11 bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-2 focus:ring-white/25 rounded-lg px-3 sm:px-3 outline-none transition-all hover:bg-white/10 hover:border-white/30 basis-2/3 sm:flex-1 text-sm sm:text-base"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="h-10 sm:h-11 px-3 sm:px-4 bg-black text-white hover:bg-black/90 font-medium rounded-lg cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] basis-1/3 text-sm sm:text-base"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Club Section */}
        <section className="min-h-screen flex flex-col items-center justify-end px-6">
          <div className="max-w-3xl">
            <div className="w-full flex items-center justify-center mb-6 sm:mb-8">
                  <p
                    className="uppercase tracking-[0.2em] text-white/5 hover:text-white/10 transition-colors text-md max-w-[90vw] text-center select-none"
                    style={{ fontWeight: 800 }}
                  >
                    MOVE WITH PURPOSE
                  </p>
                </div>

            <p className="text-sm text-foreground font-light tracking-wide text-center opacity-80 mb-12">
            Every rep, every mile, every drop of sweat leads somewhere. Phase One was born from a drive to elevate training beyond limits — to craft gear as focused and relentless as the athletes who wear it. Designed for those who rise early, work late, and refuse average, our premium performance wear is built for people who move with purpose. This is only the beginning.
            </p>

          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-4 py-8 font-bebas text-foreground tracking-wide px-4 opacity-50">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            INSTAGRAM
          </a>
          <a
            href="mailto:contact@phaseone.com"
            className="hover:opacity-60 transition-opacity"
          >
            EMAIL
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            WHATSAPP
          </a>
        </div>
        <span className="text-xs text-foreground/50">© 2026 PHASE ONE</span>
      </footer>
    </div>
  );
}
