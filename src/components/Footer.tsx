import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Schoenmakerij De Leeuw"
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Vakkundige schoenreparatie en meer in Amsterdam-Oost. Al meer dan
              37 jaar uw vertrouwde schoenmaker.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span>
                  Eerste van Swindenstraat 62
                  <br />
                  1093 GG Amsterdam
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href="tel:0206941580"
                  className="hover:text-white transition-colors"
                >
                  020 694 1580
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Openingstijden
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between gap-4">
                <span>Maandag</span>
                <span className="text-stone-600">Gesloten</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Di – Vr</span>
                <span className="text-white">09:00 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Zaterdag</span>
                <span className="text-white">09:00 – 17:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Zondag</span>
                <span className="text-stone-600">Gesloten</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Schoenmakerij De Leeuw. Alle rechten voorbehouden.</p>
          <nav className="flex gap-4">
            <Link to="/" className="hover:text-stone-400 transition-colors">Home</Link>
            <Link to="/diensten" className="hover:text-stone-400 transition-colors">Diensten</Link>
            <Link to="/contact" className="hover:text-stone-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
