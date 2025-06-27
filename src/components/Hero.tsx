
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
      className="min-h-screen w-full flex items-center justify-center px-4 py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 25%, #f5f8f0 50%, #ede8f0 75%, #f0f5f0 100%)'
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
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 rotate-90">
          <Leaf className="w-12 h-12 text-green-300" />
        </div>
        <div className="absolute top-1/3 right-1/3 transform rotate-180">
          <Leaf className="w-18 h-18 text-green-400" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Conteúdo Principal */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-green-700 font-medium text-lg">Casa Viva</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Método Casa Viva
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700 mb-6">
              Plantas para Todos
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Seu primeiro passo para ter plantas vivas, lindas e sem complicações – 
              <span className="text-green-600 font-medium"> mesmo sem tempo ou experiência.</span>
            </p>
          </div>

          {/* Benefícios Rápidos */}
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-lg">Método visual e prático</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-lg">Para iniciantes completos</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-lg">Plantas lindas sem complicação</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Quero começar agora
            </Button>
            
            <p className="text-gray-500 text-center lg:text-left">
              ✨ Transforme sua casa em poucos dias
            </p>
          </div>
        </div>

        {/* Área para destacar o visual natural */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 border border-green-200/50 shadow-lg">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
              <Leaf className="w-10 h-10 text-green-600" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">Método Simples</h3>
              <p className="text-gray-600 text-lg">
                Aprenda o essencial para ter plantas lindas e saudáveis
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <p className="text-gray-700 font-medium text-lg">
                "Finalmente consegui manter minhas plantas vivas!"
              </p>
              <p className="text-green-600 text-sm mt-2">- Maria, 34 anos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-500/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
