import { Check, Gem, Crown, Star, Sparkles, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Prata",
    icon: Star,
    color: "border-gray-400",
    iconBg: "bg-gray-200 text-gray-500",
    price: "R$ 980,00",
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
  return (
    <section id="pacotes" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pacotes de <span className="text-primary">Decoração</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o pacote ideal para a sua festa! Todos podem ser personalizados. 🎁
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-3xl border-2 ${pkg.color} p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${pkg.popular ? "ring-2 ring-primary/30" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-display font-bold text-xs px-4 py-1.5 rounded-full whitespace-nowrap">
                  ⭐ Mais Popular
                </div>
              )}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${pkg.iconBg} mb-3`}>
                <pkg.icon size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground mb-1">Pacote {pkg.name}</h3>
              <p className="font-display text-2xl font-bold text-primary mb-4">{pkg.price}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <Check size={16} className="text-festa-green mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full rounded-full font-display font-semibold py-5"
                variant={pkg.popular ? "default" : "outline"}
                onClick={() =>
                  window.open(
                    `https://wa.me/5500000000000?text=${encodeURIComponent(`Olá! Tenho interesse no Pacote ${pkg.name} (${pkg.price}). Gostaria de mais informações!`)}`,
                    "_blank"
                  )
                }
              >
                Quero este pacote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
