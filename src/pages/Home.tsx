import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const base = import.meta.env.BASE_URL;
const photos = [
  { src: `${base}foto-4.png`, alt: "Schoenmakerij De Leeuw" },
  { src: `${base}foto-5.png`, alt: "Schoenmakerij De Leeuw" },
  { src: `${base}foto-2.png`, alt: "Schoenmakerij De Leeuw" },
  { src: `${base}foto-3.png`, alt: "Schoenmakerij De Leeuw" },
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % photos.length);
  }, []);

  const prev = () => {
    setCurrent((i) => (i - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-stone-100 bg-stone-900">
      {/* Images */}
      <div className="relative aspect-[4/3]">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/20 hover:bg-white/35 border border-white/30 text-white rounded-full p-1.5 transition-all"
        aria-label="Vorige foto"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/20 hover:bg-white/35 border border-white/30 text-white rounded-full p-1.5 transition-all"
        aria-label="Volgende foto"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ShoemakersSketch() {
  return (
    <svg
      viewBox="0 0 440 415"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke="#8FB5CE" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 5 322 Q 222 316 438 322" strokeWidth="1.5" opacity="0.35" />
        <g transform="translate(118,88) rotate(-28)">
          <rect x="-58" y="-4" width="88" height="8" rx="3" strokeWidth="1.5" opacity="0.72" />
          <line x1="-46" y1="-4" x2="-46" y2="4" strokeWidth="1" opacity="0.38" />
          <line x1="-34" y1="-4" x2="-34" y2="4" strokeWidth="1" opacity="0.38" />
          <line x1="-22" y1="-4" x2="-22" y2="4" strokeWidth="1" opacity="0.38" />
          <rect x="30" y="-12" width="30" height="24" rx="2" strokeWidth="1.5" opacity="0.78" />
          <line x1="34" y1="-8" x2="34" y2="8" strokeWidth="0.75" opacity="0.28" />
          <path d="M 30 -10 Q 22 -6 22 0 Q 22 6 30 10" strokeWidth="1" opacity="0.45" />
        </g>
        <g transform="translate(148,192) rotate(10)">
          <path d="M -58 2 C -58 -18 -32 -28 0 -28 C 32 -28 56 -16 62 2 C 56 20 32 26 0 24 C -32 22 -58 20 -58 2 Z" strokeWidth="1.5" opacity="0.75" />
          <path d="M 42 -18 C 60 -8 62 6 52 18" strokeWidth="0.75" opacity="0.28" />
          <line x1="-54" y1="2" x2="58" y2="2" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.2" />
          <circle cx="0" cy="2" r="5" strokeWidth="1" opacity="0.35" />
          <path d="M -18 -20 L 18 -20" strokeWidth="0.5" opacity="0.18" />
          <path d="M -30 -14 Q 0 -18 28 -14" strokeWidth="0.5" opacity="0.16" />
          <path d="M -40 8 Q 0 4 38 8" strokeWidth="0.5" opacity="0.16" />
        </g>
        <g transform="translate(305,188) rotate(-22)">
          <path d="M -50 2 C -50 -20 -22 -30 8 -30 C 34 -30 54 -18 56 -2 C 57 10 50 22 32 26 C 12 29 -8 26 -24 20 C -42 14 -52 10 -50 2 Z" strokeWidth="1.5" opacity="0.72" />
          <path d="M -50 2 C -46 -8 -36 -10 -28 -8 C -20 -5 -18 4 -24 10 C -30 16 -42 14 -48 6" strokeWidth="1" opacity="0.45" />
          <path d="M 36 -22 C 54 -12 57 2 52 14" strokeWidth="1" opacity="0.42" />
          <path d="M -46 2 C -46 -16 -20 -25 7 -25 C 30 -25 48 -14 50 -2 C 51 6 44 18 28 22" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.25" />
          <path d="M -50 2 C -45 6 -30 10 -20 8" strokeWidth="1.2" opacity="0.55" />
          <line x1="-44" y1="6" x2="-40" y2="3" strokeWidth="0.75" opacity="0.35" />
          <line x1="-35" y1="9" x2="-31" y2="6" strokeWidth="0.75" opacity="0.35" />
        </g>
        <g transform="translate(372,295) rotate(18)">
          <ellipse cx="0" cy="0" rx="11" ry="15" strokeWidth="1.5" opacity="0.7" />
          <path d="M -8 -6 Q 0 -10 8 -6" strokeWidth="0.5" opacity="0.18" />
          <line x1="-11" y1="13" x2="11" y2="13" strokeWidth="1.5" opacity="0.5" />
          <path d="M -4 15 L -2 22 L 2 22 L 4 15" strokeWidth="1" opacity="0.55" />
          <line x1="-1" y1="22" x2="-1" y2="82" strokeWidth="1.2" opacity="0.65" />
          <line x1="1" y1="22" x2="1" y2="82" strokeWidth="1.2" opacity="0.65" />
          <path d="M -1 82 L 0 88 L 1 82" strokeWidth="1" opacity="0.42" />
        </g>
        <g transform="translate(218,108) rotate(42)">
          <rect x="-7" y="-18" width="14" height="36" rx="4" strokeWidth="1.5" opacity="0.65" />
          <circle cx="0" cy="-10" r="2" strokeWidth="1" opacity="0.35" />
          <circle cx="0" cy="6" r="2" strokeWidth="1" opacity="0.35" />
          <path d="M -4 18 L -5 68 Q -2 76 0 80 Q 2 76 5 68 L 4 18" strokeWidth="1.2" opacity="0.72" />
          <path d="M 4 20 L 5 66 Q 2 74 0 79" strokeWidth="0.75" opacity="0.32" />
        </g>
        <g transform="translate(242,285)">
          <circle cx="0" cy="0" r="21" strokeWidth="1.5" opacity="0.55" />
          <circle cx="0" cy="0" r="13" strokeWidth="1" opacity="0.4" />
          <circle cx="0" cy="0" r="6" strokeWidth="0.75" opacity="0.28" />
          <path d="M 21 0 Q 48 -12 65 -28 Q 78 -40 92 -58" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.32" />
          <path d="M 18 11 Q 30 20 42 18" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.25" />
        </g>
        <path d="M 332 46 Q 372 36 398 54 Q 418 70 408 96 Q 394 118 366 116 Q 338 113 324 90 Q 314 68 332 46 Z" strokeWidth="1.5" opacity="0.55" />
        <path d="M 343 62 Q 372 56 395 70" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.3" />
        <path d="M 340 80 Q 368 75 390 88" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.28" />
        <path d="M 336 50 Q 360 44 384 56" strokeWidth="0.5" opacity="0.2" />
        <g transform="translate(408,155)">
          <circle cx="0" cy="0" r="22" strokeWidth="1.5" opacity="0.58" />
          <circle cx="0" cy="0" r="16" strokeWidth="0.75" opacity="0.32" />
          <line x1="-10" y1="0" x2="10" y2="0" strokeWidth="0.5" opacity="0.2" />
          <line x1="0" y1="-10" x2="0" y2="10" strokeWidth="0.5" opacity="0.2" />
        </g>
        <g transform="translate(46,208) rotate(-10)">
          <rect x="-26" y="-17" width="52" height="34" rx="2" strokeWidth="1.2" opacity="0.48" />
          <path d="M -20 -10 L -14 -17 M -12 -10 L -6 -17 M -4 -10 L 2 -17 M 4 -10 L 10 -17 M 12 -10 L 18 -17" strokeWidth="0.5" opacity="0.2" />
          <path d="M -22 0 L -16 -7 M -10 0 L -4 -7 M 2 0 L 8 -7 M 14 0 L 20 -7" strokeWidth="0.5" opacity="0.18" />
        </g>
        <g transform="translate(252,155) rotate(28)">
          <path d="M -22 -8 Q -6 -18 12 -14 Q 24 -8 23 2 Q 22 12 8 16 Q -8 20 -20 12 Q -28 4 -22 -8 Z" strokeWidth="1.2" opacity="0.52" />
          <path d="M -10 -15 L 14 -10" strokeWidth="1" strokeDasharray="4 3" opacity="0.35" />
        </g>
        <g transform="translate(66,348) rotate(22)">
          <circle cx="0" cy="0" r="8" strokeWidth="1.2" opacity="0.72" />
          <circle cx="0" cy="0" r="4" strokeWidth="0.75" opacity="0.38" />
          <line x1="0" y1="8" x2="0" y2="33" strokeWidth="1.5" opacity="0.68" />
          <line x1="-4" y1="14" x2="4" y2="14" strokeWidth="1" opacity="0.45" />
          <path d="M 0 19 L 5 19 L 5 23" strokeWidth="1" opacity="0.58" />
          <path d="M 0 26 L 4 26 L 4 30" strokeWidth="1" opacity="0.58" />
        </g>
        <g transform="translate(108,362) rotate(-18)">
          <circle cx="0" cy="0" r="7" strokeWidth="1.2" opacity="0.70" />
          <circle cx="0" cy="0" r="3.5" strokeWidth="0.75" opacity="0.35" />
          <line x1="0" y1="7" x2="0" y2="31" strokeWidth="1.5" opacity="0.65" />
          <line x1="-3.5" y1="13" x2="3.5" y2="13" strokeWidth="1" opacity="0.42" />
          <path d="M 0 17 L 4 17 L 4 21" strokeWidth="1" opacity="0.55" />
          <path d="M 0 24 L 5 24 L 5 27" strokeWidth="1" opacity="0.55" />
          <path d="M 0 29 L 3 29 L 3 32" strokeWidth="1" opacity="0.52" />
        </g>
        <g transform="translate(175,250)">
          <circle cx="0" cy="0" r="9" strokeWidth="1.2" opacity="0.5" />
          <circle cx="0" cy="0" r="5" strokeWidth="0.75" opacity="0.28" />
          <circle cx="0" cy="-3" r="1" strokeWidth="0.6" opacity="0.22" />
          <circle cx="3" cy="2" r="1" strokeWidth="0.6" opacity="0.22" />
          <circle cx="-3" cy="2" r="1" strokeWidth="0.6" opacity="0.22" />
        </g>
        <g opacity="0.4" strokeWidth="1">
          <circle cx="192" cy="248" r="2" fill="#8FB5CE" stroke="none" />
          <line x1="192" y1="248" x2="196" y2="242" strokeWidth="0.75" />
          <circle cx="268" cy="132" r="2" fill="#8FB5CE" stroke="none" />
          <line x1="268" y1="132" x2="272" y2="126" strokeWidth="0.75" />
          <circle cx="314" cy="316" r="2" fill="#8FB5CE" stroke="none" />
          <line x1="314" y1="316" x2="318" y2="311" strokeWidth="0.75" />
          <circle cx="422" cy="238" r="2" fill="#8FB5CE" stroke="none" />
          <line x1="422" y1="238" x2="425" y2="232" strokeWidth="0.75" />
          <circle cx="58" cy="296" r="2" fill="#8FB5CE" stroke="none" />
          <line x1="58" y1="296" x2="62" y2="291" strokeWidth="0.75" />
          <circle cx="350" cy="262" r="2" fill="#8FB5CE" stroke="none" />
          <line x1="350" y1="262" x2="354" y2="257" strokeWidth="0.75" />
          <circle cx="136" cy="318" r="2" fill="#8FB5CE" stroke="none" />
          <line x1="136" y1="318" x2="139" y2="313" strokeWidth="0.75" />
          <circle cx="82" cy="170" r="2" fill="#8FB5CE" stroke="none" />
          <line x1="82" y1="170" x2="86" y2="165" strokeWidth="0.75" />
        </g>
        <path d="M 270 260 Q 285 250 300 258 Q 318 268 332 258 Q 348 248 360 260" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.28" />
        <path d="M 160 305 Q 170 292 182 298 Q 192 304 184 314 Q 176 322 166 316 Q 158 310 160 305 Z" strokeWidth="1" opacity="0.38" />
        <path d="M 100 162 L 94 162 L 94 222 L 100 222" strokeWidth="0.6" opacity="0.15" />
        <path d="M 78 192 L 86 192 M 82 188 L 82 196" strokeWidth="0.6" opacity="0.13" />
        <circle cx="205" cy="345" r="1.5" fill="#8FB5CE" stroke="none" opacity="0.2" />
        <circle cx="362" cy="345" r="1.5" fill="#8FB5CE" stroke="none" opacity="0.18" />
        <circle cx="88" cy="136" r="1.5" fill="#8FB5CE" stroke="none" opacity="0.18" />
        <circle cx="280" cy="380" r="1.5" fill="#8FB5CE" stroke="none" opacity="0.18" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-28 w-full">
          <div className="flex items-center gap-8 xl:gap-16">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-brand-600/30">
                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                Amsterdam-Oost · Sinds 1987
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Uw schoenen{" "}
                <span className="text-brand-400">als nieuw</span> terug
              </h1>
              <p className="text-stone-400 text-lg leading-relaxed mb-8 max-w-md">
                Vakkundige schoenreparatie en meer in het hart van Amsterdam-Oost.
                Al meer dan 37 jaar uw vertrouwde buurtwinkel.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-brand-600/25 hover:-translate-y-0.5"
                >
                  Kom langs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/diensten"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl font-medium transition-all border border-white/10"
                >
                  Onze diensten
                </Link>
              </div>
            </div>

            {/* Blueprint sketch illustration */}
            <div className="hidden lg:block flex-shrink-0 w-[400px] xl:w-[440px] opacity-90">
              <ShoemakersSketch />
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 0C1200 40 800 60 720 60C640 60 240 40 0 0L0 60Z" fill="#fafaf9" />
          </svg>
        </div>
      </section>

      {/* Short intro */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-stone-600 text-lg leading-relaxed">
              Bij Schoenmakerij De Leeuw bent u terecht voor allerlei kleine en
              grote reparaties — snel, vakkundig en tegen een eerlijke prijs.
              Wij zijn een échte buurtwinkel: laagdrempelig, persoonlijk en
              al decennialang een vertrouwd gezicht in Amsterdam-Oost.
            </p>
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="py-12 bg-stone-50 border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-4">

            {/* Slideshow */}
            <div className="overflow-hidden rounded-2xl">
              <Slideshow />
            </div>

            {/* Address + phone */}
            <div className="sm:col-span-2 flex flex-col gap-4">
              <a
                href="https://maps.google.com/?q=Eerste+van+Swindenstraat+62+Amsterdam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 bg-white rounded-2xl border border-stone-100 px-5 py-5 hover:border-stone-200 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-stone-900 group-hover:text-brand-600 transition-colors">
                    Eerste van Swindenstraat 62
                  </p>
                  <p className="text-sm text-stone-500">1093 GG Amsterdam-Oost</p>
                </div>
              </a>
              <a
                href="tel:0206941580"
                className="flex items-center gap-3.5 bg-white rounded-2xl border border-stone-100 px-5 py-5 hover:border-stone-200 transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-sm font-medium text-stone-900 group-hover:text-brand-600 transition-colors">
                  020 694 1580
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
