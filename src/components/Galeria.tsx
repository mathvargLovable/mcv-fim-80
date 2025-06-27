
export const Galeria = () => {
  const ambientes = [
    {
      titulo: "Sala aconchegante",
      descricao: "Plantas que trazem vida sem ocupar muito espaço",
      imagem: "https://i.imgur.com/SZKfmho.png"
    },
    {
      titulo: "Quarto relaxante", 
      descricao: "Espécies que purificam o ar enquanto você dorme",
      imagem: "https://i.imgur.com/IJmJ0d1.jpeg"
    },
    {
      titulo: "Cozinha funcional",
      descricao: "Ervas e plantas que resistem ao vapor e calor",
      imagem: "https://i.imgur.com/KuMFZry.jpeg"
    },
    {
      titulo: "Banheiro verde",
      descricao: "Plantas que adoram umidade e pouca luz",
      imagem: "https://i.imgur.com/w7BFDda.jpeg"
    },
    {
      titulo: "Home office produtivo",
      descricao: "Plantas que melhoram a concentração",
      imagem: "https://i.imgur.com/F7BfCoi.jpeg"
    },
    {
      titulo: "Varanda pequena",
      descricao: "Aproveitando cada cantinho com plantas lindas",
      imagem: "https://i.imgur.com/tv1Krbw.jpeg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sua casa toda pode ter plantas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como transformar cada cantinho da sua casa em um espaço mais vivo e acolhedor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambientes.map((ambiente, index) => (
            <div key={index} className="group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-verde-200 group-hover:border-terracota-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={ambiente.imagem} 
                    alt={ambiente.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {ambiente.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {ambiente.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-verde-50 to-terracota-50 border-2 border-verde-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Cada ambiente tem suas plantas ideais
            </h3>
            <p className="text-gray-700 text-lg">
              No <strong className="text-terracota-600">Método Casa Viva</strong>, você aprende exatamente quais plantas 
              escolher para cada cantinho, considerando luz, umidade e espaço disponível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
