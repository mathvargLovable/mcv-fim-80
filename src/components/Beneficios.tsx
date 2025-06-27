
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const Beneficios = () => {
  const beneficios = [
    {
      emoji: "🌿",
      titulo: "Até 5 plantas saudáveis em 30 dias",
      descricao: "Veja suas plantas crescerem fortes e bonitas, criando o ambiente dos seus sonhos"
    },
    {
      emoji: "💧",
      titulo: "Aprenda a cuidar com menos de 10 min por semana",
      descricao: "Técnicas práticas que cabem na sua rotina corrida, sem estresse ou complicação"
    },
    {
      emoji: "🪴",
      titulo: "Monte seu cantinho verde com o que já tem em casa",
      descricao: "Não precisa gastar rios de dinheiro. Use o que você já possui de forma inteligente"
    },
    {
      emoji: "💰",
      titulo: "Economize evitando compras erradas",
      descricao: "Pare de jogar dinheiro fora comprando plantas que não se adaptam à sua casa"
    },
    {
      emoji: "✨",
      titulo: "Sua casa mais viva, leve e inspiradora",
      descricao: "Sinta a diferença no ambiente e no seu bem-estar todos os dias"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que você vai conquistar:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais que você vai ver e sentir na sua casa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {beneficios.map((beneficio, index) => (
            <Card key={index} className="p-6 bg-white border-2 border-verde-200 hover:shadow-xl transition-all duration-300 animate-scale-in hover:border-terracota-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">
                  {beneficio.emoji}
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {beneficio.descricao}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-verde-100 to-terracota-50 rounded-2xl p-8 text-center border-2 border-verde-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Imagine sua casa transformada...
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Você chegando em casa e se sentindo abraçada por um ambiente vivo, 
            acolhedor e cheio de energia positiva. E orgulhosa de ter conseguido isso sozinha!
          </p>
          <div className="flex items-center justify-center gap-2 text-verde-700">
            <CheckCircle className="w-6 h-6" />
            <span className="font-bold text-xl">Isso é possível em 30 dias!</span>
          </div>
        </div>
      </div>
    </section>
  );
};
