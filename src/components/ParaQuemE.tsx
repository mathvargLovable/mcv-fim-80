
import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Home, Heart } from "lucide-react";

export const ParaQuemE = () => {
  const dores = [
    {
      icon: AlertTriangle,
      titulo: "Já tentou e matou todas?",
      descricao: "Você compra plantas lindas, mas elas morrem em poucas semanas. O ciclo se repete e você se sente frustrado(a)."
    },
    {
      icon: Clock,
      titulo: "Acha que não tem tempo?",
      descricao: "Sua rotina é corrida e você acredita que plantas dão muito trabalho. Quer algo prático e que funcione."
    },
    {
      icon: Home,
      titulo: "Sente sua casa sem vida?",
      descricao: "Olha ao redor e vê um ambiente sem graça, sem personalidade. Quer transformar isso gastando pouco."
    },
    {
      icon: Heart,
      titulo: "Sonha com um lar acolhedor?",
      descricao: "Quer aquela sensação de casa que abraça, cheia de vida e energia positiva, mas não sabe por onde começar."
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F4EFE7' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se você respondeu SIM para pelo menos uma delas, continue lendo...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dores.map((dor, index) => (
            <Card key={index} className="p-6 bg-white border-natural-200 hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-4">
                <div className="bg-terracota-100 p-3 rounded-full flex-shrink-0">
                  <dor.icon className="w-6 h-6 text-terracota-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {dor.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dor.descricao}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white border-2 border-verde-300 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Essas dores têm solução!
            </h3>
            <p className="text-gray-700 text-lg">
              O <strong className="text-verde-700">Método Casa Viva</strong> foi criado especialmente para pessoas como você, 
              que querem ter plantas lindas em casa <strong>sem complicação e gastando pouco!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
