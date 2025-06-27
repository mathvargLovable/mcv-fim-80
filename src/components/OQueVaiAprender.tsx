
import { Card } from "@/components/ui/card";
import { CheckCircle, Leaf, Search, AlertCircle, Palette } from "lucide-react";

export const OQueVaiAprender = () => {
  const topicos = [
    {
      icon: Search,
      titulo: "Escolher as plantas ideais para cada cômodo",
      descricao: "Descubra quais plantas funcionam na sala, quarto, banheiro e cozinha, considerando luz e umidade"
    },
    {
      icon: Leaf,
      titulo: "Regar sem exageros ou esquecimentos",
      descricao: "Aprenda a técnica simples que evita tanto o excesso quanto a falta de água"
    },
    {
      icon: AlertCircle,
      titulo: "Identificar sinais de alerta e salvar sua planta",
      descricao: "Reconheça rapidamente quando algo está errado e saiba exatamente como resolver"
    },
    {
      icon: Palette,
      titulo: "Criar um espaço verde e decorativo com simplicidade",
      descricao: "Transforme qualquer cantinho da sua casa num ambiente lindo gastando pouco"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F4EFE7' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que você vai aprender
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo explicado de forma simples, visual e prática
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {topicos.map((topico, index) => (
            <Card key={index} className="p-8 bg-white border-2 border-verde-200 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="flex items-start gap-4">
                <div className="bg-terracota-100 p-4 rounded-full flex-shrink-0">
                  <topico.icon className="w-8 h-8 text-terracota-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {topico.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {topico.descricao}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-verde-200 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Tudo isso de forma:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-verde-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-verde-600" />
              </div>
              <h4 className="font-bold text-terracota-600 mb-2 text-lg">Visual</h4>
              <p className="text-gray-600">Com imagens e diagramas claros</p>
            </div>
            <div className="text-center">
              <div className="bg-verde-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-verde-600" />
              </div>
              <h4 className="font-bold text-terracota-600 mb-2 text-lg">Simples</h4>
              <p className="text-gray-600">Linguagem fácil de entender</p>
            </div>
            <div className="text-center">
              <div className="bg-verde-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-verde-600" />
              </div>
              <h4 className="font-bold text-terracota-600 mb-2 text-lg">Prática</h4>
              <p className="text-gray-600">Para aplicar imediatamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
