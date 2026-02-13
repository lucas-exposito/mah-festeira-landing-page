import { Baby, Cake, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Aniversários Infantis",
    description: "Temas encantadores, personagens favoritos e muita diversão para os pequenos!",
    color: "from-festa-pink to-festa-orange",
    bgColor: "bg-festa-pink/10",
  },
  {
    icon: Cake,
    title: "Aniversários Adultos",
    description: "Elegância e sofisticação para celebrar cada nova fase da vida com estilo.",
    color: "from-festa-lilac to-festa-blue",
    bgColor: "bg-festa-lilac/10",
  },
  {
    icon: PartyPopper,
    title: "Outros Eventos",
    description: "Chá de bebê, revelação, noivados, formaturas e muito mais!",
    color: "from-festa-yellow to-festa-green",
    bgColor: "bg-festa-yellow/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos decorações completas para todos os tipos de celebração! 🎉
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-3xl overflow-hidden ${service.bgColor} border border-border p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${service.color} text-primary-foreground mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <service.icon size={36} />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <button
                onClick={() => window.open("https://wa.me/5511940809869?text=Olá! Gostaria de saber mais sobre " + service.title, "_blank")}
                className="text-primary font-display font-semibold hover:underline"
              >
                Saiba mais →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
