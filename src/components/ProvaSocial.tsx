
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const ProvaSocial = () => {
  const depoimentos = [
    {
      nome: "Marina Silva",
      idade: "32 anos",
      cidade: "São Paulo",
      profissao: "Professora",
      depoimento: "Finalmente consegui! Eram 4 anos tentando ter plantas e matando todas. Em 15 dias já estava com 3 plantinhas lindas na sala.",
      nota: 5,
      foto: "/placeholder.svg"
    },
    {
      nome: "Carlos Mendes",
      idade: "45 anos", 
      cidade: "Rio de Janeiro",
      profissao: "Contador",
      depoimento: "Minha esposa não acreditou quando viu meu cantinho verde no home office. Agora sou eu quem cuida das plantas da casa!",
      nota: 5,
      foto: "/placeholder.svg"
    },
    {
      nome: "Ana Beatriz",
      idade: "28 anos",
      cidade: "Belo Horizonte",
      profissao: "Designer",
      depoimento: "Apartamento pequeno não é desculpa! Tenho 6 plantas lindas e gastei menos de R$ 100. Minha casa virou outra coisa.",
      nota: 5,
      foto: "/placeholder.svg"
    },
    {
      nome: "Roberto Santos",
      idade: "38 anos",
      cidade: "Porto Alegre",
      profissao: "Engenheiro",
      depoimento: "Sempre achei que era difícil demais. O método é tão simples que meu filho de 8 anos me ajuda a cuidar das plantas!",
      nota: 5,
      foto: "/placeholder.svg"
    },
    {
      nome: "Juliana Costa",
      idade: "29 anos",
      cidade: "Brasília",
      profissao: "Advogada",
      depoimento: "Trabalho 12h por dia e consegui manter minhas plantas lindas. O segredo está nas técnicas práticas que funcionam mesmo com pouco tempo.",
      nota: 5,
      foto: "/placeholder.svg"
    },
    {
      nome: "Pedro Oliveira",
      idade: "35 anos",
      cidade: "Salvador",
      profissao: "Médico",
      depoimento: "Como médico, posso confirmar: ter plantas em casa realmente melhora a qualidade do ar e reduz o estresse. E agora sei como cuidar delas!",
      nota: 5,
      foto: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pessoas reais, resultados reais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja quem já transformou sua casa com o Método Casa Viva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} className="p-6 bg-white border-2 border-verde-200 hover:shadow-xl transition-all duration-300 animate-fade-in hover:border-terracota-300" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="mb-4">
                <Quote className="w-8 h-8 text-terracota-400 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-4 italic text-lg font-medium">
                  "{depoimento.depoimento}"
                </p>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(depoimento.nota)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="border-t border-natural-200 pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={depoimento.foto} alt={depoimento.nome} />
                    <AvatarFallback className="bg-verde-100 text-verde-700 font-bold">
                      {depoimento.nome.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{depoimento.nome}</h4>
                    <p className="text-sm text-gray-600">{depoimento.idade} • {depoimento.cidade}</p>
                  </div>
                </div>
                <p className="text-sm text-terracota-600 font-medium">{depoimento.profissao}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-verde-50 to-terracota-50 rounded-2xl p-8 border-2 border-verde-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              + de 1.500 pessoas já transformaram suas casas
            </h3>
            <p className="text-gray-700 text-lg">
              <strong>Sua vez chegou!</strong> Junte-se a quem já descobriu como ter plantas lindas e saudáveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
