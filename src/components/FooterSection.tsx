import { MapPin, Phone, Mail, Instagram, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Mah Festeira 🎉</h3>
            <p className="text-background/70 leading-relaxed">
              Transformando sonhos em festas inesquecíveis. Cada celebração é única e merece uma decoração especial!
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-festa-green" />
                <span>(11) 94080-9869</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-festa-pink" />
                <span>contato@mahfesteira.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-festa-blue" />
                <span>São Paulo - SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mahfesteira/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart size={14} className="text-festa-pink fill-festa-pink" /> por Mah Festeira © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
