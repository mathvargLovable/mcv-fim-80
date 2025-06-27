
import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Heart } from "lucide-react";

export const Hero = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center px-4 py-16 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://i.imgur.com/feVQLQd.jpeg)',
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Conteúdo Principal */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Leaf className="w-8 h-8 text-verde-400" />
              <span className="text-verde-100 font-medium text-lg">Casa Viva</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Método Casa Viva
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-verde-200 mb-6">
              Plantas para Todos
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Seu primeiro passo para ter plantas vivas, lindas e sem complicações – 
              <span className="text-verde-200 font-medium"> mesmo sem tempo ou experiência.</span>
            </p>
          </div>

          {/* Benefícios Rápidos */}
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90">
              <CheckCircle className="w-5 h-5 text-verde-300 flex-shrink-0" />
              <span className="text-lg">Método visual e prático</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90">
              <CheckCircle className="w-5 h-5 text-verde-300 flex-shrink-0" />
              <span className="text-lg">Para iniciantes completos</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90">
              <CheckCircle className="w-5 h-5 text-verde-300 flex-shrink-0" />
              <span className="text-lg">Plantas lindas sem complicação</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-terracota-500 hover:bg-terracota-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Quero começar agora
            </Button>
            
            <p className="text-white/80 text-center lg:text-left">
              ✨ Transforme sua casa em poucos dias
            </p>
          </div>
        </div>

        {/* Área para destacar o visual natural */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 border border-white/20">
            <div className="bg-verde-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
              <Leaf className="w-10 h-10 text-verde-200" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Método Simples</h3>
              <p className="text-white/90 text-lg">
                Aprenda o essencial para ter plantas lindas e saudáveis
              </p>
            </div>
            
            <div className="bg-terracota-500/20 rounded-xl p-4">
              <p className="text-white font-medium text-lg">
                "Finalmente consegui manter minhas plantas vivas!"
              </p>
              <p className="text-verde-200 text-sm mt-2">- Maria, 34 anos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
