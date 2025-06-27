
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
      className="min-h-screen w-full flex items-center justify-center px-4 py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F4EFE7 0%, #F4EFE7 60%, #B8C9B0 90%, #D47750 100%)'
      }}
    >
      {/* Elementos decorativos de folhas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 transform rotate-12">
          <Leaf className="w-24 h-24 text-green-400" />
        </div>
        <div className="absolute top-20 right-20 transform -rotate-45">
          <Leaf className="w-16 h-16 text-green-300" />
        </div>
        <div className="absolute bottom-20 left-20 transform rotate-45">
          <Leaf className="w-20 h-20 text-green-500" />
        </div>
        <div className="absolute bottom-10 right-10 transform -rotate-12">
          <Leaf className="w-14 h-14 text-green-400" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Prova Social */}
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200/50 shadow-sm inline-block">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-gray-700 font-medium">Já ajudou +1.500 pessoas a transformar seus lares com plantas vivas</span>
          </div>
        </div>

        {/* Título Principal */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Método Casa Viva
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-verde-700 mb-6">
            Plantas para Todos
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Seu primeiro passo para ter plantas vivas, lindas e sem complicações — 
            <span className="text-verde-600 font-semibold"> mesmo sem tempo ou experiência.</span>
          </p>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-terracota-500 hover:bg-terracota-600 text-white font-bold text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="w-6 h-6 mr-3" />
            Quero minhas plantas vivas
          </Button>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-green-200/50 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔒</span>
                <span className="font-medium">Compra 100% segura</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📩</span>
                <span className="font-medium">Entrega por e-mail</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💚</span>
                <span className="font-medium">Garantia total de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-verde-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-verde-500/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
