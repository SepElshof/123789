import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from "lucide-react";

const hours = [
  { day: "Maandag", time: "Gesloten", closed: true },
  { day: "Dinsdag", time: "09:00 – 18:00", closed: false },
  { day: "Woensdag", time: "09:00 – 18:00", closed: false },
  { day: "Donderdag", time: "09:00 – 18:00", closed: false },
  { day: "Vrijdag", time: "09:00 – 18:00", closed: false },
  { day: "Zaterdag", time: "09:00 – 17:00", closed: false },
  { day: "Zondag", time: "Gesloten", closed: true },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-3 block">
            Neem contact op
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Contact
          </h1>
          <p className="text-stone-500 text-lg max-w-xl leading-relaxed">
            Vragen over een reparatie of wilt u langs komen? Wij helpen u graag.
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-stone-100 p-6 space-y-5">
                <h2 className="font-semibold text-stone-900 text-lg">Contactgegevens</h2>

                <a
                  href="https://maps.google.com/?q=Eerste+van+Swindenstraat+62+Amsterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 group"
                >
                  <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-0.5">Adres</p>
                    <p className="text-stone-700 text-sm group-hover:text-brand-600 transition-colors">
                      Eerste van Swindenstraat 62<br />1093 GG Amsterdam
                    </p>
                  </div>
                </a>

                <a href="tel:0206941580" className="flex items-center gap-3.5 group">
                  <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-0.5">Telefoon</p>
                    <p className="text-stone-700 text-sm group-hover:text-brand-600 transition-colors">020 694 1580</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-0.5">E-mail</p>
                    <p className="text-stone-500 text-sm italic">Niet beschikbaar — bel ons gerust</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-stone-100 flex items-center gap-2 bg-stone-900">
                  <Clock className="w-4 h-4 text-white" />
                  <h2 className="font-semibold text-white">Openingstijden</h2>
                </div>
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center px-6 py-3.5 ${
                      i < hours.length - 1 ? "border-b border-stone-50" : ""
                    } ${h.closed ? "opacity-50" : ""}`}
                  >
                    <span className="text-stone-600 text-sm">{h.day}</span>
                    <span className={`text-sm font-medium ${h.closed ? "text-stone-400" : "text-stone-900"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-stone-100 h-64">
                <iframe
                  title="Schoenmakerij De Leeuw locatie"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.2!2d4.9296!3d52.3619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60960d48ec3cd%3A0x1a5!2sEerste+van+Swindenstraat+62%2C+1093+GG+Amsterdam!5e0!3m2!1snl!2snl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-white rounded-2xl border border-stone-100 p-6">
                <h2 className="font-semibold text-stone-900 text-lg mb-5">Stuur een bericht</h2>
                {sent ? (
                  <div className="flex flex-col items-center gap-3 py-8 text-center">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="font-medium text-stone-900">Bericht verzonden!</p>
                    <p className="text-stone-500 text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1.5">
                        Naam
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1.5">
                        E-mailadres
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        placeholder="u@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1.5">
                        Bericht
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                        placeholder="Uw vraag of opmerking..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl font-medium transition-all hover:-translate-y-0.5"
                    >
                      Verzenden
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
