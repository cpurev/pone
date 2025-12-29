import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <header className="py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-black text-center font-bebas tracking-wide scale-x-300 md:scale-x-450 select-none">
          PHASE ONE
        </h1>
      </header>

      <main>
        {/* First Page */}
        <section className="min-h-screen flex flex-col items-center justify-start gap-8 px-4">
          <Image
            src="/star.svg"
            alt="Star"
            width={320}
            height={320}
            draggable={false}
            className="select-none pointer-events-none w-48 h-48 md:w-80 md:h-80"
          />
          <div className="text-center">
           
            <p className="text-xs uppercase tracking-[0.25em] text-black/50 mt-3">
              Performance Apparel
            </p>
            {/* <p className="text-xl font-bebas text-black tracking-[0.4em] select-none">
              DISCIPLINE · RELENTLESS · PURPOSE
            </p> */}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black/25 text-center font-bebas tracking-wide select-none mb-16">
            MOVE WITH PURPOSE
          </h2>
          <span className="font-bebas text-black/20 text-sm tracking-[0.5em] select-none">01</span>
          
        </section>

        {/* Club Section */}
        <section className="min-h-screen flex flex-col items-center justify-between px-6">
          <div className="pt-50">
            <h2 className="text-2xl md:text-3xl font-black text-black text-center font-bebas tracking-wide scale-x-250 md:scale-x-350 select-none mb-2">
              PHASE ONE
            </h2>
            <h2 className="text-2xl md:text-3xl font-black text-black text-center font-bebas tracking-wide scale-x-250 md:scale-x-350 select-none mb-8">
              CLUB
            </h2>

            <p className="text-lg font-bebas text-black tracking-wide text-center opacity-80 mb-12">
              WE&apos;RE BUILDING A LONG-TERM COMMUNITY.
              <br />
              JOIN PHASE ONE FROM DAY ONE.
            </p>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full max-w-xs px-4 py-3 border border-black text-black font-bebas text-lg tracking-wide placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="pb-4">
            <span className="font-bebas text-black/20 text-sm tracking-[0.5em] select-none">02</span>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-4 py-8 font-bebas text-black tracking-wide px-4">
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
        <span className="text-xs text-black/50">© 2025 PHASE ONE</span>
      </footer>
    </div>
  );
}
