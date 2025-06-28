
import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Heart, Star } from "lucide-react";

export const Hero = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center px-2 sm:px-4 py-8 sm:py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F4EFE7 0%, #F4EFE7 60%, #B8C9B0 90%, #D47750 100%)'
      }}
    >
      {/* Elementos decorativos de folhas - ajustados para mobile */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 sm:top-10 left-2 sm:left-10 transform rotate-12">
          <Leaf className="w-12 sm:w-24 h-12 sm:h-24 text-green-400" />
        </div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-20 transform -rotate-45">
          <Leaf className="w-8 sm:w-16 h-8 sm:h-16 text-green-300" />
        </div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 transform rotate-45">
          <Leaf className="w-10 sm:w-20 h-10 sm:h-20 text-green-500" />
        </div>
        <div className="absolute bottom-5 sm:bottom-10 right-2 sm:right-10 transform -rotate-12">
          <Leaf className="w-7 sm:w-14 h-7 sm:h-14 text-green-400" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-8 w-full">
        {/* Prova Social */}
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-green-200/50 shadow-sm inline-block max-w-full">
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
            <span className="text-gray-700 font-medium text-center leading-tight">
              Já ajudou +1.500 pessoas a transformar seus lares com plantas vivas
            </span>
          </div>
        </div>

        {/* Título Principal */}
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight px-2">
            Método Casa Viva
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-verde-700 mb-4 sm:mb-6 px-2">
            Plantas para Todos
          </h2>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Seu primeiro passo para ter plantas vivas, lindas e sem complicações — 
            <span className="text-verde-600 font-semibold"> mesmo sem tempo ou experiência.</span>
          </p>
        </div>

        {/* Call to Action */}
        <div className="space-y-4 sm:space-y-6 px-4">
          <div className="space-y-3">
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-terracota-500 hover:bg-terracota-600 text-white font-bold text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <Heart className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="leading-tight">Comece agora por apenas R$ 9,90</span>
            </Button>
            
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Acesso imediato. Sem complicação.
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-green-200/50 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">🔒</span>
                <span className="font-medium">Compra 100% segura</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">📩</span>
                <span className="font-medium">Entrega por e-mail</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">💚</span>
                <span className="font-medium">Garantia total de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 sm:w-6 h-6 sm:h-10 border-2 border-verde-400/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-verde-500/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
