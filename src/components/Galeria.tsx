
export const Galeria = () => {
  const ambientes = [
    {
      titulo: "Sala de estar acolhedora",
      descricao: "Plantas que trazem vida sem ocupar muito espaço"
    },
    {
      titulo: "Quarto relaxante", 
      descricao: "Espécies que purificam o ar enquanto você dorme"
    },
    {
      titulo: "Cozinha funcional",
      descricao: "Ervas e plantas que resistem ao vapor e calor"
    },
    {
      titulo: "Banheiro verde",
      descricao: "Plantas que adoram umidade e pouca luz"
    },
    {
      titulo: "Home office produtivo",
      descricao: "Plantas que melhoram a concentração"
    },
    {
      titulo: "Varanda pequena",
      descricao: "Aproveitando cada cantinho com plantas lindas"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-verde-800 mb-4">
            Inspirações para sua casa
          </h2>
          <p className="text-xl text-natural-600 max-w-3xl mx-auto">
            Veja como é possível ter plantas lindas em qualquer ambiente da sua casa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambientes.map((ambiente, index) => (
            <div key={index} className="group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-gradient-to-br from-verde-100 to-natural-100 rounded-2xl p-8 h-64 flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-verde-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-verde-300 transition-colors">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-lg font-semibold text-verde-800 mb-2">
                    {ambiente.titulo}
                  </h3>
                  <p className="text-natural-600 text-sm">
                    {ambiente.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-verde-50 border border-verde-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-verde-800 mb-4">
              Cada ambiente tem suas plantas ideais
            </h3>
            <p className="text-natural-700">
              No <strong>Método Casa Viva</strong>, você aprende exatamente quais plantas 
              escolher para cada cantinho da sua casa, considerando luz, umidade e espaço disponível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
