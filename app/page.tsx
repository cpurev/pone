export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden">
      <main>
        {/* First Page */}
        <section className="h-screen flex flex-col items-center justify-between px-4 py-6">
          <header>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center font-bebas tracking-wide scale-x-300 md:scale-x-450 select-none">
              PHASE ONE
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
              PHASE ONE
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
