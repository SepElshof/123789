import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Star, TrendingUp } from "lucide-react";

const milestones = [
  { year: "1987", title: "Oprichting", desc: "De schoenmakerij opent haar deuren op de Eerste van Swindenstraat in Amsterdam-Oost." },
  { year: "~2000", title: "Uitbreiding diensten", desc: "Naast schoenreparatie worden sleutels bijmaken, sloten en accessoires toegevoegd." },
  { year: "Heden", title: "Onder leiding van Stanley de Leeuw", desc: "De zaak groeit uit tot een complete buurtwinkel voor reparatie en service." },
];

const values = [
  { icon: Star, title: "Vakmanschap", desc: "Elk paar schoenen behandelen wij met dezelfde zorg en aandacht, of het nu gaat om een simpele hakreparatie of een volledig nieuwe zool." },
  { icon: Users, title: "Buurtverbondenheid", desc: "Wij zijn meer dan een winkel — wij zijn een vertrouwd gezicht in Amsterdam-Oost. Klanten komen al generaties lang bij ons terug." },
  { icon: TrendingUp, title: "Meegegroeid met de tijd", desc: "Van klassieke schoenmakerij tot DPD-pakketpunt en autosleutels met transponder. Wij blijven ons aanpassen aan de behoeften van onze klanten." },
];

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
            Ons verhaal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Over Schoenmakerij De Leeuw
          </h1>
          <p className="text-stone-500 text-lg max-w-xl leading-relaxed">
            Een familiebedrijf met meer dan 37 jaar ervaring, geworteld in Amsterdam-Oost.
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p className="text-lg text-stone-700">
                Sinds 1987 staat Schoenmakerij De Leeuw op de Eerste van Swindenstraat in Amsterdam-Oost.
                Wat begon als een kleine schoenmakerij, groeide uit tot een veelzijdige en vertrouwde buurtwinkel.
              </p>
              <p>
                Onder de leiding van Stanley de Leeuw werd het assortiment aan diensten flink uitgebreid.
                Naast schoenreparatie kunt u bij ons terecht voor schoenonderhoud, accessoires, sleutels bijmaken
                — inclusief autosleutels met transponder — sloten, naamplaatjes, schaatsen slijpen en zelfs het
                inleveren en ophalen van DPD-pakketten.
              </p>
              <p>
                Wij zijn er trots op dat klanten uit de buurt ons al decennialang weten te vinden.
                Niet alleen voor reparaties, maar ook gewoon voor een praatje of goed advies over hoe zij
                het beste voor hun schoenen kunnen zorgen.
              </p>
              <p>
                Ons motto is eenvoudig: vakkundig werk, eerlijke prijs, en een persoonlijke aanpak.
                Of het nu gaat om een snel haakje aan een laars of een volledige zoolvervanging —
                ieder paar schoenen verdient de best mogelijke zorg.
              </p>
            </div>

            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-stone-100">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                      <v.icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{v.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-10 text-center">Onze geschiedenis</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-6 pl-16">
                  <div className="absolute left-4 w-4 h-4 bg-brand-600 rounded-full border-2 border-white shadow-sm top-1" />
                  <div>
                    <span className="text-brand-600 text-xs font-bold uppercase tracking-wider">{m.year}</span>
                    <h3 className="font-semibold text-stone-900 mt-0.5 mb-1">{m.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-stone-100 p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-brand-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-stone-900 text-lg mb-1">Bezoek ons</h3>
              <p className="text-stone-500 text-sm mb-4">Eerste van Swindenstraat 62, 1093 GG Amsterdam-Oost</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-brand-600 font-medium text-sm hover:text-brand-500 transition-colors group"
              >
                Route & openingstijden
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
