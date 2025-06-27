import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Star } from "lucide-react";
import { safeExternalRedirect, logSecurityEvent } from "@/utils/security";

export const CTA = () => {
  const diferenciais = [
    "Método 100% visual e prático",
    "Ideal para quem nunca teve plantas",
    "Funciona mesmo com pouco tempo",
    "Resultados em até 30 dias"
  ];

  const CHECKOUT_URL = 'https://www.ggcheckout.com/checkout/v2/Cz1YbICfOE3Wi8XjsraU';

  const handleCheckout = () => {
    logSecurityEvent('Checkout button clicked', { url: CHECKOUT_URL });
    safeExternalRedirect(CHECKOUT_URL);
  };

  return (
    <section id="oferta" className="py-16 px-4 bg-gradient-to-b from-verde-50 to-terracota-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="bg-terracota-500 text-white px-6 py-3 rounded-full inline-block mb-6">
            <span className="font-bold text-lg">⏰ Válido para os primeiros 200 alunos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Transforme sua casa hoje mesmo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sua casa mais viva, linda e acolhedora está a apenas um clique de distância
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-white border-4 border-verde-300 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Método Casa Viva - Plantas para Todos
            </h3>
            
            <div className="bg-terracota-50 border-4 border-terracota-200 rounded-2xl p-8 mb-8">
              <div className="text-gray-600 text-lg mb-2 flex items-center justify-center gap-2">
                <span>De</span>
                <span className="text-2xl font-bold text-gray-500 line-through">R$ 47,00</span>
                <span>por apenas:</span>
              </div>
              <div className="text-6xl md:text-7xl font-bold text-terracota-600 mb-4">
                R$ 9,90
              </div>
              <div className="text-gray-600 text-lg">
                Menos que um lanche no shopping!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-center gap-3 text-left bg-verde-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-verde-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{diferencial}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <Button 
                onClick={handleCheckout}
                className="bg-terracota-500 hover:bg-terracota-600 text-white px-12 py-6 text-2xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 w-full"
                size="lg"
              >
                Quero transformar minha casa agora
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8 text-sm">
              <div className="flex items-center gap-2 text-verde-700">
                <span className="text-lg">🔒</span>
                <span className="font-medium">Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-2 text-verde-700">
                <span className="text-lg">📩</span>
                <span className="font-medium">Acesso por e-mail</span>
              </div>
              <div className="flex items-center gap-2 text-verde-700">
                <span className="text-lg">💚</span>
                <span className="font-medium">Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-natural-200 pt-8">
            <div className="bg-gradient-to-r from-terracota-50 to-verde-50 rounded-xl p-6 text-center border-2 border-terracota-200">
              <h4 className="font-bold text-gray-800 mb-2 text-lg">
                ⚠️ ATENÇÃO: Depois de 200 alunos, o valor será reajustado para R$ 47,00
              </h4>
              <p className="text-gray-600">
                <strong>Não perca esta chance única!</strong> Sua transformação começa agora.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
