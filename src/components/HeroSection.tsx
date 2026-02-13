import { PartyPopper, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-festa-pink/10 via-festa-yellow/10 to-festa-lilac/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-festa-pink animate-float opacity-30">
          <PartyPopper size={60} />
        </div>
        <div className="absolute top-40 right-20 text-festa-yellow animate-float-delayed opacity-30">
          <Star size={40} fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-festa-blue animate-float-slow opacity-30">
          <Sparkles size={50} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-festa-lilac animate-float opacity-20">
          <Star size={30} fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-10 text-festa-orange animate-float-delayed opacity-25">
          <PartyPopper size={45} />
        </div>
        {/* Confetti dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: [
                'hsl(330 80% 55%)',
                'hsl(45 95% 65%)',
                'hsl(200 80% 55%)',
                'hsl(260 70% 65%)',
                'hsl(25 90% 60%)',
              ][i % 5],
              opacity: 0.15 + Math.random() * 0.15,
              animation: `float ${5 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 mb-6 font-display text-sm font-medium">
          <Sparkles size={16} />
          Decorações que encantam
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-festa-pink via-festa-lilac to-festa-blue bg-clip-text text-transparent leading-tight">
          Mah Festeira
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-body leading-relaxed">
          Transformamos sua festa em um <span className="text-primary font-bold">sonho realizado</span>! 
          Decorações personalizadas com muito carinho e criatividade. ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-festa-green hover:bg-festa-green/90 text-primary-foreground font-display font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() => window.open("https://bit.ly/38Dw4RG", "_blank")}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Fale pelo WhatsApp
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary font-display font-semibold hover:bg-primary/5 transition-all"
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Conheça nossos serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
