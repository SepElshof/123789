import { Link } from "react-router-dom";
import { Wrench, Key, ShoppingBag, Package, Shield, Brush, ArrowRight } from "lucide-react";

const serviceGroups = [
  {
    heading: "Schoenreparatie",
    icon: Wrench,
    color: "bg-brand-50 text-brand-600",
    items: [
      { title: "Zolen vervangen", desc: "Complete zoolvervanging voor alle soorten schoenen en laarzen." },
      { title: "Hakken repareren", desc: "Hakken bijplaatsen of volledig vervangen — voor dames en heren." },
      { title: "Ritsen en sluiting", desc: "Kapotte ritsen of gespen worden vakkundig hersteld of vervangen." },
      { title: "Naaien en lijmen", desc: "Loszittende naden, gaten en scheuren worden hersteld." },
      { title: "Strekken & aanpassen", desc: "Te krappe schoenen worden professioneel uitgerekt." },
    ],
  },
  {
    heading: "Schoenonderhoud & Accessoires",
    icon: ShoppingBag,
    color: "bg-amber-50 text-amber-600",
    items: [
      { title: "Schoenpoets (60+ kleuren)", desc: "Een uitgebreide collectie schoenpoets voor elk type leer en kleur." },
      { title: "Leeronderhoud", desc: "Conditioners en crèmes om leer soepel en mooi te houden." },
      { title: "Waterafstotende sprays", desc: "Bescherm uw schoenen tegen regen en vlekken." },
      { title: "Verf en verfbenodigdheden", desc: "Kleur opfrissen of wijzigen met ons verfsortiment." },
      { title: "Inlegzolen, schoenlepels & borstels", desc: "Alles voor comfort en onderhoud van uw schoeisel." },
    ],
  },
  {
    heading: "Sleutels & Sloten",
    icon: Key,
    color: "bg-sky-50 text-sky-600",
    items: [
      { title: "Sleutels bijmaken", desc: "Huissleutels, kantoorsleutels en meer worden snel bijgemaakt." },
      { title: "Autosleutels met transponder", desc: "Ook moderne autosleutels met elektronische transponder." },
      { title: "Sloten", desc: "Verkoop van hangsloten, cilindersloten en andere sloten." },
      { title: "Naamplaatjes", desc: "Gegraveerde of gestempelde naamplaatjes op aanvraag." },
    ],
  },
  {
    heading: "Overige diensten",
    icon: Package,
    color: "bg-green-50 text-green-600",
    items: [
      { title: "Schaatsen slijpen", desc: "IJsschaatsen en skeelerschaatsen professioneel geslepen — seizoensdienst." },
      { title: "DPD Pakketpunt", desc: "Pakketten inleveren en ophalen — ook als u thuis niet was." },
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
            Wat wij bieden
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Onze diensten
          </h1>
          <p className="text-stone-500 text-lg max-w-xl leading-relaxed">
            Van schoenreparatie en onderhoud tot sleutels bijmaken en schaatsen slijpen.
            Wij zijn uw complete buurtwinkel.
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 space-y-14">
          {serviceGroups.map((group) => (
            <div key={group.heading}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${group.color}`}>
                  <group.icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">{group.heading}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-5 border border-stone-100 hover:border-stone-200 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-stone-900 mb-1.5">{item.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield, title: "Vakkundig werk", desc: "Meer dan 37 jaar ervaring in schoenreparatie." },
              { icon: Wrench, title: "Snelle service", desc: "De meeste reparaties dezelfde dag of dag erna gereed." },
              { icon: Brush, title: "Alle merken", desc: "Wij repareren schoenen van elk merk en type." },
            ].map((b) => (
              <div key={b.title} className="p-6">
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">{b.title}</h3>
                <p className="text-stone-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Heeft u een vraag over onze diensten?
          </h2>
          <p className="text-stone-500 mb-6">Neem contact op of kom gerust langs in de winkel.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl font-medium transition-all hover:-translate-y-0.5"
          >
            Contact opnemen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
