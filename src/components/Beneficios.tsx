
import { Card } from "@/components/ui/card";
import { CheckCircle, Heart, Home, Star, Clock } from "lucide-react";

export const Beneficios = () => {
  const beneficios = [
    {
      icon: Heart,
      titulo: "Ambiente mais acolhedor",
      descricao: "Sua casa vai ficar mais bonita, aconchegante e cheia de vida"
    },
    {
      icon: Star,
      titulo: "Confiança para cuidar",
      descricao: "Você vai saber exatamente o que fazer em cada situação"
    },
    {
      icon: Clock,
      titulo: "Economia de tempo",
      descricao: "Sem tentativa e erro - direto ao que funciona"
    },
    {
      icon: Home,
      titulo: "Decoração natural",
      descricao: "Plantas como elemento decorativo gastando pouco"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-verde-800 mb-4">
            Os benefícios que você vai ter
          </h2>
          <p className="text-xl text-natural-600 max-w-3xl mx-auto">
            Mais que plantas, você vai transformar sua casa e sua relação com a natureza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {beneficios.map((beneficio, index) => (
            <Card key={index} className="p-6 border-natural-200 hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-terracota-100 p-3 rounded-full">
                  <beneficio.icon className="w-6 h-6 text-terracota-600" />
                </div>
                <h3 className="text-xl font-semibold text-verde-800">
                  {beneficio.titulo}
                </h3>
              </div>
              <p className="text-natural-600 leading-relaxed">
                {beneficio.descricao}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-verde-50 to-natural-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-verde-800 mb-4">
            Imagine sua casa transformada...
          </h3>
          <p className="text-lg text-natural-700 mb-6 max-w-2xl mx-auto">
            Plantas lindas e saudáveis em cada cantinho, um ambiente mais leve, 
            acolhedor e cheio de vida. E você, confiante e orgulhosa do que conquistou.
          </p>
          <div className="flex items-center justify-center gap-2 text-verde-700">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Isso é possível em poucos dias!</span>
          </div>
        </div>
      </div>
    </section>
  );
};
