import { Camera } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

const placeholders = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  color: [
    "from-festa-pink/30 to-festa-orange/30",
    "from-festa-lilac/30 to-festa-blue/30",
    "from-festa-yellow/30 to-festa-green/30",
    "from-festa-blue/30 to-festa-lilac/30",
    "from-festa-orange/30 to-festa-pink/30",
    "from-festa-green/30 to-festa-yellow/30",
  ][i],
  label: ["Festa Infantil", "Aniversário Adulto", "Chá de Bebê", "Festa Temática", "Decoração Completa", "Mesa de Doces"][i],
}));

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
          {placeholders.map((item, i) => (
            <AnimatedCard key={item.id} delay={i * 0.08}>
              <div
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                  <Camera size={40} className="opacity-40" />
                  <span className="font-display font-medium text-sm opacity-60">{item.label}</span>
                  <span className="text-xs opacity-40">Foto em breve</span>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
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
