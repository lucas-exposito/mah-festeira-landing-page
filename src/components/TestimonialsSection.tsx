import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const testimonials = [
  { name: "Ana Paula", event: "Aniversário Infantil", text: "A Mah é incrível! Fez a festa do meu filho e ficou tudo perfeito. Superou todas as expectativas! 🎈", stars: 5 },
  { name: "Carla Souza", event: "Chá de Bebê", text: "Profissional demais! Cada detalhe foi pensado com carinho. Recebi elogios de todos os convidados! 💕", stars: 5 },
  { name: "Mariana Lima", event: "Aniversário Adulto", text: "Minha festa de 30 anos ficou dos sonhos! A decoração estava impecável. Super recomendo! ✨", stars: 5 },
  { name: "Fernanda Costa", event: "Festa Infantil", text: "Já é a segunda festa que a Mah faz pra gente. Sempre capricha em tudo! Minha filha amou! 🌟", stars: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Festas que encantam e clientes que recomendam! 💖
          </p>
        </div>

        <Carousel opts={{ loop: true }} className="mx-auto">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <div className="bg-card rounded-3xl border border-border p-8 mx-2 h-full flex flex-col">
                  <Quote size={32} className="text-primary/30 mb-4" />
                  <p className="text-card-foreground mb-6 flex-1 italic leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={16} className="text-festa-yellow fill-festa-yellow" />
                    ))}
                  </div>
                  <p className="font-display font-bold text-card-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.event}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
