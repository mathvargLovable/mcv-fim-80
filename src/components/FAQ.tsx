
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => {
  const perguntas = [
    {
      pergunta: "Funciona pra quem nunca teve planta?",
      resposta: "Sim! 100% pensado para iniciantes. Começamos do zero absoluto e você aprende passo a passo, sem pressa e sem termos complicados."
    },
    {
      pergunta: "Preciso de equipamentos?",
      resposta: "Não. Você vai usar o que já tem em casa! O método ensina como aproveitar recipientes, ferramentas e materiais que você já possui."
    },
    {
      pergunta: "Minha casa tem pouca luz. Dá certo?",
      resposta: "Sim. O método ensina como escolher as plantas certas para cada tipo de iluminação. Existem plantas lindas que adoram sombra!"
    },
    {
      pergunta: "É seguro comprar?",
      resposta: "Totalmente. Compra protegida, acesso por e-mail e garantia incondicional de 30 dias. Se não gostar, devolvemos seu dinheiro."
    }
  ];

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-natural-50 border-t-4 border-verde-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Suas dúvidas respondidas
          </h2>
          <p className="text-xl text-gray-600">
            As perguntas mais comuns de quem está começando
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-2 border-verde-200 p-8">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {perguntas.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-natural-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-natural-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-terracota-500 text-xl flex-shrink-0">❓</span>
                    <span className="text-gray-800 font-bold text-lg">
                      {item.pergunta}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed text-lg">
                  <div className="ml-8">
                    {item.resposta}
                    
                    {index === perguntas.length - 1 && (
                      <div className="mt-6 text-center">
                        <Button 
                          onClick={scrollToOffer}
                          className="bg-terracota-500 hover:bg-terracota-600 text-white font-bold px-8 py-3 rounded-full"
                        >
                          Quero começar agora
                        </Button>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
