
import { Card } from "@/components/ui/card";
import { CheckCircle, Leaf, Search, AlertCircle, Palette } from "lucide-react";

export const OQueVaiAprender = () => {
  const topicos = [
    {
      icon: Search,
      titulo: "Escolher a planta certa",
      descricao: "Como identificar qual planta é ideal para sua casa, seu tempo disponível e seu nível de experiência"
    },
    {
      icon: Leaf,
      titulo: "Cuidar sem erro",
      descricao: "Técnicas simples de rega, iluminação e posicionamento que realmente funcionam"
    },
    {
      icon: AlertCircle,
      titulo: "Identificar problemas",
      descricao: "Sinais que sua planta dá quando algo não está bem e como resolver rapidamente"
    },
    {
      icon: Palette,
      titulo: "Montar seu cantinho verde",
      descricao: "Dicas de decoração e organização para criar um espaço lindo gastando pouco"
    }
  ];

  return (
    <section className="py-16 px-4 bg-verde-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-verde-800 mb-4">
            O que você vai aprender
          </h2>
          <p className="text-xl text-natural-600 max-w-3xl mx-auto">
            Um método step-by-step, visual e prático para ter sucesso com suas plantas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {topicos.map((topico, index) => (
            <Card key={index} className="p-8 bg-white border-verde-200 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="flex items-start gap-4">
                <div className="bg-verde-100 p-4 rounded-full flex-shrink-0">
                  <topico.icon className="w-8 h-8 text-verde-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-verde-800 mb-3">
                    {topico.titulo}
                  </h3>
                  <p className="text-natural-600 leading-relaxed text-lg">
                    {topico.descricao}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-verde-200 shadow-lg">
          <h3 className="text-2xl font-bold text-verde-800 mb-6 text-center">
            Tudo isso de forma:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-verde-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-verde-600" />
              </div>
              <h4 className="font-semibold text-verde-800 mb-2">Visual</h4>
              <p className="text-natural-600">Com imagens e diagramas claros</p>
            </div>
            <div className="text-center">
              <div className="bg-verde-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-verde-600" />
              </div>
              <h4 className="font-semibold text-verde-800 mb-2">Simples</h4>
              <p className="text-natural-600">Linguagem fácil de entender</p>
            </div>
            <div className="text-center">
              <div className="bg-verde-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-verde-600" />
              </div>
              <h4 className="font-semibold text-verde-800 mb-2">Prática</h4>
              <p className="text-natural-600">Para aplicar imediatamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
