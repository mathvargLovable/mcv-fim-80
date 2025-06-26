
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Star } from "lucide-react";

export const CTA = () => {
  const diferenciais = [
    "Método 100% visual e prático",
    "Ideal para quem está começando",
    "Linguagem leve e acessível",
    "Cabe no tempo e bolso da maioria"
  ];

  return (
    <section id="oferta" className="py-16 px-4 bg-gradient-to-b from-verde-50 to-terracota-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-verde-800 mb-4">
            Transforme sua casa hoje mesmo
          </h2>
          <p className="text-xl text-natural-600 max-w-2xl mx-auto">
            Não espere mais para ter a casa dos seus sonhos, cheia de plantas vivas e lindas
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-white border-2 border-verde-200 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-verde-800 mb-4">
              Método Casa Viva - Plantas para Todos
            </h3>
            
            <div className="bg-terracota-50 border border-terracota-200 rounded-2xl p-6 mb-8">
              <div className="text-natural-600 text-lg mb-2">Investimento simbólico:</div>
              <div className="text-5xl md:text-6xl font-bold text-terracota-600 mb-4">
                R$ 9,90
              </div>
              <div className="text-natural-600">
                Menos que um lanche no shopping!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-verde-600 flex-shrink-0" />
                  <span className="text-natural-700">{diferencial}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
              <div className="flex items-center gap-2 text-verde-700">
                <Clock className="w-5 h-5" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2 text-verde-700">
                <Shield className="w-5 h-5" />
                <span>Compra 100% segura</span>
              </div>
              <div className="flex items-center gap-2 text-verde-700">
                <Star className="w-5 h-5" />
                <span>Satisfação garantida</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                className="bg-terracota-500 hover:bg-terracota-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
                size="lg"
              >
                Quero minhas plantas vivas
              </Button>
              
              <Button 
                variant="outline"
                className="border-verde-300 text-verde-700 hover:bg-verde-50 px-12 py-6 text-xl font-semibold rounded-full w-full md:w-auto"
                size="lg"
              >
                Começar agora
              </Button>
            </div>
          </div>

          <div className="border-t border-natural-200 pt-8">
            <div className="bg-natural-50 rounded-xl p-6 text-center">
              <h4 className="font-semibold text-verde-800 mb-2">
                ⏰ Oferta por tempo limitado
              </h4>
              <p className="text-natural-600 text-sm">
                Milhares de pessoas já transformaram suas casas. 
                <br />
                <strong>Sua vez chegou!</strong>
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-natural-600 text-sm">
            🔒 Pagamento 100% seguro • 📱 Acesso imediato • 🌱 Transformação garantida
          </p>
        </div>
      </div>
    </section>
  );
};
