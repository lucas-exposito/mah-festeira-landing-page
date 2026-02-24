import { useState } from "react";
import { Check, Gem, Crown, Star, Sparkles, Diamond, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

import pacotePrata from "@/assets/pacote-prata.jpg";
import pacoteOuro from "@/assets/pacote-ouro.jpg";
import pacoteDiamante from "@/assets/pacote-diamante.jpg";
import pacoteRubi from "@/assets/pacote-rubi.jpg";
import pacoteCristal from "@/assets/pacote-cristal.jpg";

const packages = [
  {
    name: "Prata",
    icon: Star,
    color: "border-gray-400",
    iconBg: "bg-gray-200 text-gray-500",
    price: "R$ 980,00",
    image: pacotePrata,
    description: "Ideal para festas íntimas e comemorações pequenas com decoração elegante e delicada.",
    highlight: "Perfeito para festas pequenas",
    items: [
      "1 mesa pequena ou Jogo de Cilindros",
      "1 Painel de tecido sublimado redondo de 1,50",
      "1 boleira e 8 porta doces nas cores do tema",
      "2 vasos para flores pequenos",
      "2 arranjos de flores ou folhagens naturais pequenos",
      "Personagens e demais adereços do tema",
      "1 balão bubble personalizado",
    ],
  },
  {
    name: "Ouro",
    icon: Crown,
    color: "border-festa-yellow",
    iconBg: "bg-festa-yellow/10 text-festa-orange",
    price: "R$ 1.550,00",
    image: pacoteOuro,
    description: "Um pacote completo com arco de balões e arranjos florais para uma festa marcante.",
    highlight: "Melhor custo-benefício",
    items: [
      "1 Mesa + Jogo de Cilindros sublimados",
      "1 Painel de tecido sublimado redondo de 1,50",
      "1 boleira e 10 porta doces nas cores do tema",
      "2 vasos para flores médios",
      "2 vasos para flores pequenos",
      "2 arranjos de flores naturais médios",
      "2 arranjos de flores pequenos",
      "Personagens e demais adereços do tema",
      "1 arco de balões desconstruído",
    ],
  },
  {
    name: "Diamante",
    icon: Diamond,
    color: "border-festa-blue",
    iconBg: "bg-festa-blue/10 text-festa-blue",
    popular: true,
    price: "R$ 1.980,00",
    image: pacoteDiamante,
    description: "Decoração premium com painéis desconstruídos e acrílicos para uma festa inesquecível.",
    highlight: "⭐ Mais Popular",
    items: [
      "1 Jogo de Mesa + Jogo de Cilindros sublimados ou acrílicos",
      "2 Painéis desconstruídos de tecido sublimado (2 a 3 metros)",
      "1 boleira e 15 porta doces nas cores do tema",
      "2 vasos para flores médios",
      "2 vasos para flores pequenos",
      "2 arranjos de flores naturais médios",
      "2 arranjos de flores pequenos",
      "Personagens e demais adereços do tema",
      "1 arco de balões desconstruído",
    ],
  },
  {
    name: "Rubi",
    icon: Gem,
    color: "border-festa-pink",
    iconBg: "bg-festa-pink/10 text-festa-pink",
    price: "R$ 2.750,00",
    image: pacoteRubi,
    description: "Luxo e sofisticação com painel de até 4 metros e arranjos florais exuberantes.",
    highlight: "Alto padrão",
    items: [
      "1 Mesa e jogo de Cilindros",
      "1 Painel de tecido sublimado de 3 a 4 metros (desconstruído ou inteiro)",
      "1 boleira e 12 porta doces nas cores do tema",
      "2 vasos para flores médios",
      "2 vasos para flores pequenos",
      "2 arranjos de flores naturais médios",
      "2 arranjos de flores pequenos",
      "Personagens e demais adereços do tema",
      "1 arco de balões desconstruído",
    ],
  },
  {
    name: "Cristal",
    icon: Sparkles,
    color: "border-primary",
    iconBg: "bg-primary/10 text-primary",
    price: "R$ 3.390,00",
    image: pacoteCristal,
    description: "O pacote mais completo com letreiro LED, tapete de lona e decoração de luxo total.",
    highlight: "Experiência completa",
    items: [
      "1 ou 2 mesas e jogo de Cilindros (até 6)",
      "1 Painel de tecido sublimado de 4 a 6 metros (desconstruído ou inteiro)",
      "1 boleira e 18 porta doces nas cores do tema",
      "2 vasos para flores médios",
      "2 vasos para flores pequenos",
      "2 arranjos de flores naturais médios",
      "2 arranjos de flores pequenos",
      "Personagens de luxo e demais adereços do tema",
      "1 arco de balões desconstruído",
      "1 tapete de lona",
      "1 letreiro de led com a idade da criança",
      "Adereço de chão (se tiver de acordo com o tema)",
    ],
  },
];

const PackagesSection = () => {
  const [selectedPkg, setSelectedPkg] = useState<typeof packages[0] | null>(null);

  return (
    <section id="pacotes" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pacotes de <span className="text-primary">Decoração</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Escolha o pacote ideal para a sua festa! Clique para ver todos os detalhes. 🎁
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((pkg, i) => (
            <AnimatedCard key={pkg.name} delay={i * 0.1}>
              <div
                onClick={() => setSelectedPkg(pkg)}
                className={`relative bg-card rounded-3xl border-2 ${pkg.color} p-5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer group ${pkg.popular ? "ring-2 ring-primary/30" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-display font-bold text-xs px-4 py-1.5 rounded-full whitespace-nowrap">
                    ⭐ Mais Popular
                  </div>
                )}

                {/* Image preview */}
                <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={pkg.image}
                    alt={`Pacote ${pkg.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${pkg.iconBg} mb-2`}>
                  <pkg.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-card-foreground">Pacote {pkg.name}</h3>
                <p className="font-display text-2xl font-bold text-primary mb-3">{pkg.price}</p>

                <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                  <span className="font-display font-medium">Ver detalhes</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      <Dialog open={!!selectedPkg} onOpenChange={(open) => !open && setSelectedPkg(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-0">
          {selectedPkg && (
            <>
              <div className="relative">
                <img
                  src={selectedPkg.image}
                  alt={`Pacote ${selectedPkg.name}`}
                  className="w-full aspect-video object-cover rounded-t-3xl"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent h-24" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${selectedPkg.iconBg}`}>
                    <selectedPkg.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">Pacote {selectedPkg.name}</h3>
                    <span className="text-xs font-display font-medium text-muted-foreground">{selectedPkg.highlight}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <p className="font-display text-3xl font-bold text-primary mb-2">{selectedPkg.price}</p>
                <p className="text-muted-foreground mb-6">{selectedPkg.description}</p>

                <h4 className="font-display font-bold text-foreground mb-3">O que está incluso:</h4>
                <ul className="space-y-2.5 mb-6">
                  {selectedPkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                      <Check size={18} className="text-festa-green mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full rounded-full font-display font-semibold py-6 text-base"
                  onClick={() => window.open("https://bit.ly/38Dw4RG", "_blank")}
                >
                  Quero o Pacote {selectedPkg.name}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PackagesSection;
