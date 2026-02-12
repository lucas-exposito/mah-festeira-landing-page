import { Check, Crown, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Básico",
    icon: Star,
    color: "border-festa-blue",
    iconBg: "bg-festa-blue/10 text-festa-blue",
    items: [
      "Painel decorativo temático",
      "Mesa principal decorada",
      "Balões tradicionais",
      "Toalha de mesa",
    ],
    cta: "Consultar preço",
  },
  {
    name: "Completo",
    icon: Sparkles,
    color: "border-primary",
    iconBg: "bg-primary/10 text-primary",
    popular: true,
    items: [
      "Tudo do Básico +",
      "Arco de balões desconstruído",
      "Peças personalizadas",
      "Mesa de doces completa",
      "Letras decorativas",
    ],
    cta: "Consultar preço",
  },
  {
    name: "Premium",
    icon: Crown,
    color: "border-festa-yellow",
    iconBg: "bg-festa-yellow/10 text-festa-orange",
    items: [
      "Tudo do Completo +",
      "Cenário instagramável",
      "Iluminação especial",
      "Flores naturais/artificiais",
      "Montagem e desmontagem",
      "Consultoria de tema",
    ],
    cta: "Consultar preço",
  },
];

const PackagesSection = () => {
  return (
    <section id="pacotes" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Pacotes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o pacote ideal para a sua festa! Todos podem ser personalizados. 🎁
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-3xl border-2 ${pkg.color} p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${pkg.popular ? "scale-[1.02] md:scale-105" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-display font-bold text-xs px-4 py-1.5 rounded-full">
                  ⭐ Mais Popular
                </div>
              )}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${pkg.iconBg} mb-4`}>
                <pkg.icon size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-6">{pkg.name}</h3>
              <ul className="space-y-3 mb-8">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <Check size={18} className="text-festa-green mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full font-display font-semibold py-5 ${pkg.popular ? "" : "bg-foreground/10 text-foreground hover:bg-foreground/20"}`}
                variant={pkg.popular ? "default" : "ghost"}
                onClick={() => window.open("https://wa.me/5500000000000?text=Olá! Tenho interesse no pacote " + pkg.name, "_blank")}
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
