
import { Leaf, Heart, Home } from "lucide-react";

export const ImagineTransformacao = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-natural-50 to-verde-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Imagine sua casa transformada...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desperte todos os dias em um ambiente mais vivo, respirando ar mais puro 
            e sentindo a energia positiva das plantas ao seu redor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Texto inspirador */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-verde-100 p-3 rounded-full flex-shrink-0 mt-1">
                <Home className="w-6 h-6 text-verde-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sua casa mais acolhedora
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transforme cada cantinho em um espaço que transmite paz e bem-estar, 
                  onde você e sua família se sentem verdadeiramente em casa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-terracota-100 p-3 rounded-full flex-shrink-0 mt-1">
                <Heart className="w-6 h-6 text-terracota-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Mais conexão com a natureza
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduza o estresse do dia a dia e encontre momentos de tranquilidade 
                  cuidando de suas plantas e observando-as crescer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-natural-200 p-3 rounded-full flex-shrink-0 mt-1">
                <Leaf className="w-6 h-6 text-natural-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Ar mais puro e energia renovada
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Melhore a qualidade do ar da sua casa naturalmente, 
                  enquanto cria um ambiente mais positivo e energizante.
                </p>
              </div>
            </div>
          </div>

          {/* Lado direito - Elemento visual de planta crescendo */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-verde-200 relative overflow-hidden">
              {/* Animação de crescimento da planta */}
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-32 h-32">
                  {/* Vaso */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-terracota-400 rounded-b-full"></div>
                  
                  {/* Planta animada */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-pulse">
                      <Leaf className="w-8 h-8 text-verde-500 transform rotate-12 animate-bounce" style={{ animationDelay: '0s' }} />
                    </div>
                    <div className="animate-pulse mt-2">
                      <Leaf className="w-6 h-6 text-verde-400 transform -rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }} />
                    </div>
                    <div className="animate-pulse mt-1">
                      <Leaf className="w-10 h-10 text-verde-600 transform rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                  
                  {/* Partículas flutuantes */}
                  <div className="absolute -top-4 left-1/4 w-1 h-1 bg-verde-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute -top-2 right-1/4 w-1 h-1 bg-terracota-300 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute top-2 left-1/3 w-1 h-1 bg-natural-400 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-terracota-600 font-bold text-lg">
                    ✨ Sua transformação começa hoje
                  </p>
                  <p className="text-gray-600 text-sm">
                    Assim como uma planta cresce dia após dia, 
                    sua casa vai se transformando gradualmente...
                  </p>
                </div>
              </div>
              
              {/* Elementos decorativos de fundo */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-verde-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-terracota-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
