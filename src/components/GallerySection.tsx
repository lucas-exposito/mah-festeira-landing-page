import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

import galeriaFestaInfantil from "@/assets/galeria-festa-infantil.jpg";
import galeriaAniversarioAdulto from "@/assets/galeria-aniversario-adulto.jpg";
import galeriaChaBebe from "@/assets/galeria-cha-bebe.jpg";
import galeriaFestaTematica from "@/assets/galeria-festa-tematica.jpg";
import galeriaDecoracaoCompleta from "@/assets/galeria-decoracao-completa.jpg";
import galeriaMesaDoces from "@/assets/galeria-mesa-doces.jpg";

const galleryItems = [
  { id: 1, image: galeriaFestaInfantil, label: "Festa Infantil" },
  { id: 2, image: galeriaAniversarioAdulto, label: "Aniversário Adulto" },
  { id: 3, image: galeriaChaBebe, label: "Chá de Bebê" },
  { id: 4, image: galeriaFestaTematica, label: "Festa Temática" },
  { id: 5, image: galeriaDecoracaoCompleta, label: "Decoração Completa" },
  { id: 6, image: galeriaMesaDoces, label: "Mesa de Doces" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossa <span className="text-primary">Galeria</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos realizados com muito carinho! 📸
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <AnimatedCard key={item.id} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-display text-sm font-semibold text-primary-foreground bg-primary/80 rounded-full px-3 py-1">
                    {item.label}
                  </span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
