
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Star } from "lucide-react";

export const CTA = () => {
  const diferenciais = [
    "Método 100% visual e prático",
    "Ideal para quem nunca teve plantas",
    "Funciona mesmo com pouco tempo",
    "Resultados em até 30 dias"
  ];

  const CHECKOUT_URL = 'https://www.ggcheckout.com/checkout/v2/Cz1YbICfOE3Wi8XjsraU';

  const handleCheckout = () => {
    console.log('Checkout button clicked', { url: CHECKOUT_URL });
    window.location.href = CHECKOUT_URL;
  };

  return (
    <section id="oferta" className="py-8 sm:py-16 px-2 sm:px-4 bg-gradient-to-b from-verde-50 to-terracota-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="bg-terracota-500 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full inline-block mb-4 sm:mb-6">
            <span className="font-bold text-sm sm:text-lg">⏰ Válido para os primeiros 200 alunos</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            Transforme sua casa hoje mesmo
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Sua casa mais viva, linda e acolhedora está a apenas um clique de distância
          </p>
        </div>

        <Card className="p-4 sm:p-8 md:p-12 bg-white border-4 border-verde-300 shadow-2xl mx-2 sm:mx-0">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
              Método Casa Viva - Plantas para Todos
            </h3>
            
            <div className="bg-terracota-50 border-4 border-terracota-200 rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8">
              <div className="text-gray-600 text-base sm:text-lg mb-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                <span>De</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-500 line-through">R$ 47,00</span>
                <span>por apenas:</span>
              </div>
              <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-terracota-600 mb-3 sm:mb-4">
                R$ 9,90
              </div>
              <div className="text-gray-600 text-base sm:text-lg mb-3">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span>Menos que um lanche no shopping</span>
                  <span className="text-xl">🍔</span>
                  <span>– invista no bem-estar da sua casa.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-center gap-3 text-left bg-verde-50 p-3 rounded-lg">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-verde-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{diferencial}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 sm:mb-8">
              <Button 
                onClick={handleCheckout}
                className="bg-terracota-500 hover:bg-terracota-600 text-white px-4 sm:px-8 py-3 sm:py-5 text-base sm:text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 w-full"
                size="lg"
              >
                <span className="leading-tight text-center break-words">Quero transformar minha casa agora</span>
              </Button>
            </div>

            {/* Selos de Confiança */}
            <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center mb-6 sm:mb-8 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center justify-center">
                <div className="flex items-center gap-2 text-verde-700">
                  <span className="text-base sm:text-lg">🔒</span>
                  <span className="font-medium">Compra segura</span>
                </div>
                <div className="flex items-center gap-2 text-verde-700">
                  <span className="text-base sm:text-lg">📧</span>
                  <span className="font-medium">Acesso por e-mail</span>
                </div>
                <div className="flex items-center gap-2 text-verde-700">
                  <span className="text-base sm:text-lg">💚</span>
                  <span className="font-medium">Suporte por WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Garantia Reforçada */}
            <div className="bg-gradient-to-r from-verde-50 to-terracota-50 rounded-xl p-4 sm:p-6 mb-6 border-2 border-verde-200">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-verde-600" />
                <h4 className="font-bold text-gray-800 text-lg sm:text-xl">
                  ✅ Garantia incondicional de 30 dias
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                <strong>ou seu dinheiro de volta.</strong> Experimente sem riscos!
              </p>
            </div>
          </div>

          <div className="border-t-2 border-natural-200 pt-6 sm:pt-8">
            <div className="bg-gradient-to-r from-terracota-50 to-verde-50 rounded-xl p-4 sm:p-6 text-center border-2 border-terracota-200 mb-6">
              <h4 className="font-bold text-gray-800 mb-2 text-base sm:text-lg">
                ⚠️ ATENÇÃO: Depois de 200 alunos, o valor será reajustado para R$ 47,00
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                <strong>Não perca esta chance única!</strong> Sua transformação começa agora.
              </p>
            </div>

            {/* Gatilho de Urgência */}
            <div className="text-center bg-white rounded-xl p-4 sm:p-6 border-2 border-terracota-300 shadow-lg">
              <p className="text-terracota-600 font-bold text-lg sm:text-xl mb-2">
                ⏰ Oferta disponível por tempo limitado
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                – garante seu acesso com valor simbólico hoje mesmo!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
