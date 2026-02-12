import { Heart, Palette, Sparkles, Users } from "lucide-react";

const features = [
  { icon: Heart, title: "Feito com Amor", description: "Cada detalhe é pensado com carinho para tornar sua festa inesquecível", color: "text-festa-pink" },
  { icon: Palette, title: "Personalização Total", description: "Decorações únicas que refletem a sua personalidade e estilo", color: "text-festa-lilac" },
  { icon: Users, title: "Atendimento Especial", description: "Acompanhamento próximo do início ao dia da festa", color: "text-festa-blue" },
  { icon: Sparkles, title: "Criatividade sem Limites", description: "Tendências e ideias inovadoras para surpreender seus convidados", color: "text-festa-yellow" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre a <span className="text-primary">Mah Festeira</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Somos apaixonados por criar momentos mágicos! Com dedicação e criatividade, 
            transformamos qualquer espaço em um cenário de festa dos sonhos. 🎈
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="group bg-card rounded-2xl p-6 text-center border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-muted mb-4 ${feat.color} group-hover:scale-110 transition-transform`}>
                <feat.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{feat.title}</h3>
              <p className="text-muted-foreground text-sm">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
