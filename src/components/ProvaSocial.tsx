
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export const ProvaSocial = () => {
  const depoimentos = [
    {
      nome: "Marina Silva",
      idade: "32 anos",
      profissao: "Professora",
      depoimento: "Eu sempre matava todas as plantas que comprava! Com o Método Casa Viva, aprendi que estava errando na rega. Agora tenho 8 plantas lindas em casa!",
      nota: 5
    },
    {
      nome: "Carlos Mendes",
      idade: "45 anos", 
      profissao: "Contador",
      depoimento: "Achei que cuidar de plantas era coisa de mulher, mas minha esposa me convenceu a tentar. Hoje sou eu quem cuida do nosso jardim interno!",
      nota: 5
    },
    {
      nome: "Ana Beatriz",
      idade: "28 anos",
      profissao: "Designer",
      depoimento: "Moro em apartamento pequeno e achava que não dava pra ter plantas. O método me ensinou quais plantas são perfeitas para espaços pequenos!",
      nota: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-verde-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-verde-800 mb-4">
            Quem já transformou sua casa
          </h2>
          <p className="text-xl text-natural-600 max-w-3xl mx-auto">
            Pessoas reais que saíram do zero e hoje têm casas cheias de plantas vivas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} className="p-6 bg-white border-verde-200 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="mb-4">
                <Quote className="w-8 h-8 text-verde-300 mb-4" />
                <p className="text-natural-700 leading-relaxed mb-4 italic">
                  "{depoimento.depoimento}"
                </p>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(depoimento.nota)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-terracota-400 text-terracota-400" />
                ))}
              </div>

              <div className="border-t border-natural-200 pt-4">
                <h4 className="font-semibold text-verde-800">{depoimento.nome}</h4>
                <p className="text-sm text-natural-600">{depoimento.idade} • {depoimento.profissao}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 border-2 border-verde-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-verde-800 mb-4">
              Mais de 1.500 pessoas já transformaram suas casas
            </h3>
            <p className="text-natural-700">
              Junte-se a quem já descobriu como ter plantas lindas e saudáveis, 
              mesmo começando do zero!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
