
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Hero = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-natural-50 to-verde-50">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-verde-800 mb-6 leading-tight">
            Método Casa Viva
            <span className="block text-verde-600 text-3xl md:text-5xl font-medium mt-2">
              Plantas para Todos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-natural-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Seu primeiro passo para ter plantas vivas, lindas e sem complicações — 
            <strong className="text-verde-700"> mesmo sem tempo ou experiência</strong>
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-natural-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-verde-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Método 100% visual</span>
            </div>
            <div className="flex items-center gap-2 text-verde-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Ideal para iniciantes</span>
            </div>
            <div className="flex items-center gap-2 text-verde-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Linguagem simples</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-natural-600 text-lg mb-2">Por apenas</div>
            <div className="text-4xl md:text-5xl font-bold text-terracota-600 mb-4">
              R$ 9,90
            </div>
            <div className="text-natural-600">
              Cabe no tempo e bolso da maioria
            </div>
          </div>

          <Button 
            onClick={scrollToOffer}
            className="bg-terracota-500 hover:bg-terracota-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            size="lg"
          >
            Quero começar agora
          </Button>
        </div>

        <div className="text-natural-600 text-sm">
          🌱 Transforme sua casa em um ambiente mais bonito, leve e cheio de vida
        </div>
      </div>
    </section>
  );
};
