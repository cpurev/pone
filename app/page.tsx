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
        <section className="h-screen flex flex-col items-center justify-between px-4 py-6">
          <header>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center font-bebas tracking-wide scale-x-300 md:scale-x-450 select-none">
              <PhaseOneText />
            </h1>
            <h2 className="pt-4 text-2xl md:text-3xl font-bold text-foreground/25 text-center font-bebas tracking-wide select-none">
              MOVE WITH PURPOSE
            </h2>
          </header>

          <div className="flex flex-col items-center gap-4 pb-16">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              className="select-none pointer-events-none w-40 h-40 md:w-64 md:h-64 text-foreground drop-shadow-[0_0_40px_var(--color-foreground)] md:drop-shadow-[0_0_60px_var(--color-foreground)]"
            >
              <path
                d="M 200 110 Q 200 200 290 200 Q 200 200 200 290 Q 200 200 110 200 Q 200 200 200 110 Z"
                fill="currentColor"
              />
            </svg>
            <div className="text-center max-w-[606px]">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                Performance Apparel
              </p>
              <p className="pt-2 text-md font-light text-foreground/75 select-none">
                Every rep, every mile, every drop of sweat leads somewhere. 
                Phase One was born from a drive to elevate training beyond limits — to craft gear as
                focused and relentless as the athletes who wear it. Designed for those who rise early, 
                work late, and refuse average, our premium performance wear is built for people who move 
                with purpose. This is only the beginning.
              </p> 
            </div>
          </div>

          <span className="font-bebas text-foreground/20 text-sm tracking-[0.5em] select-none">01</span>
        </section>

        {/* Club Section */}
        <section className="min-h-screen flex flex-col items-center justify-between px-6">
          <div className="pt-50">
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center font-bebas tracking-wide scale-x-250 md:scale-x-350 select-none mb-2">
              <PhaseOneText slim />
            </h2>
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-center font-bebas tracking-wide scale-x-250 md:scale-x-350 select-none mb-8">
              CLUB
            </h2>

            <p className="text-lg font-bebas text-foreground tracking-wide text-center opacity-80 mb-12">
              WE&apos;RE BUILDING A LONG-TERM COMMUNITY.
              <br />
              JOIN PHASE ONE FROM DAY ONE.
            </p>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full max-w-xs px-4 py-3 border border-foreground text-foreground font-bebas text-lg tracking-wide placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>
          <div className="pb-4">
            <span className="font-bebas text-foreground/20 text-sm tracking-[0.5em] select-none">02</span>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-4 py-8 font-bebas text-foreground tracking-wide px-4">
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
        <span className="text-xs text-foreground/50">© 2025 PHASE ONE</span>
      </footer>
    </div>
  );
}
