
import { Card } from "@/components/ui/card";
import { Clock, AlertTriangle, HelpCircle, Home } from "lucide-react";

export const ParaQuemE = () => {
  const dores = [
    {
      icon: Clock,
      titulo: "Falta de tempo",
      descricao: "Você tem uma rotina corrida e precisa de soluções práticas para cuidar das plantas"
    },
    {
      icon: AlertTriangle,
      titulo: "Medo de matar plantas",
      descricao: "Já tentou ter plantas antes mas elas morreram, e agora você tem receio de tentar novamente"
    },
    {
      icon: HelpCircle,
      titulo: "Não sabe por onde começar",
      descricao: "Quer ter plantas em casa mas se sente perdido(a) com tantas opções e informações"
    },
    {
      icon: Home,
      titulo: "Casa sem vida",
      descricao: "Sente que sua casa está sem graça e quer um ambiente mais acolhedor e bonito"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-verde-800 mb-4">
            Este método é para você que...
          </h2>
          <p className="text-xl text-natural-600 max-w-3xl mx-auto">
            Reconhece alguma dessas situações? Você não está sozinho(a)!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dores.map((dor, index) => (
            <Card key={index} className="p-6 border-natural-200 hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-4">
                <div className="bg-verde-100 p-3 rounded-full flex-shrink-0">
                  <dor.icon className="w-6 h-6 text-verde-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-verde-800 mb-2">
                    {dor.titulo}
                  </h3>
                  <p className="text-natural-600 leading-relaxed">
                    {dor.descricao}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-verde-50 border border-verde-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-verde-800 mb-4">
              Se você se identificou com pelo menos uma dessas situações...
            </h3>
            <p className="text-natural-700 text-lg">
              O <strong>Método Casa Viva</strong> foi criado especialmente para pessoas como você, 
              que querem ter plantas lindas em casa sem complicação!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
