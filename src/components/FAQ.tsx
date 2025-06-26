
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const perguntas = [
    {
      pergunta: "Eu nunca tive plantas antes. Vai funcionar pra mim?",
      resposta: "Sim! O método foi criado especialmente para iniciantes. Começamos do básico e você vai aprender passo a passo, sem pressa e sem complicação."
    },
    {
      pergunta: "Tenho pouco tempo. Vou conseguir cuidar das plantas?",
      resposta: "Claro! Ensinamos técnicas simples que levam poucos minutos por semana. Você vai aprender a escolher plantas que se adaptam à sua rotina."
    },
    {
      pergunta: "Minha casa tem pouca luz. Posso ter plantas mesmo assim?",
      resposta: "Existem várias plantas que se adaptam bem à pouca luz! No método, você aprende quais são e como cuidar delas adequadamente."
    },
    {
      pergunta: "Preciso gastar muito dinheiro com equipamentos?",
      resposta: "Não! Mostramos como começar com o básico e gastar pouco. Você pode usar itens que já tem em casa e fazer um investimento gradual."
    },
    {
      pergunta: "E se eu matar as plantas mesmo seguindo o método?",
      resposta: "Faz parte do aprendizado! No método, você aprende a identificar problemas rapidamente e como resolver. A maioria dos 'acidentes' tem solução."
    },
    {
      pergunta: "O conteúdo é realmente adequado para iniciantes?",
      resposta: "Sim, totalmente! Usamos linguagem simples, muitas imagens explicativas e partimos sempre do zero. Nada de termos técnicos complicados."
    }
  ];

  return (
    <section className="py-16 px-4 bg-natural-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-verde-800 mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-xl text-natural-600">
            Respostas para as perguntas mais comuns de quem está começando
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-natural-200 p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {perguntas.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-natural-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-natural-50 rounded-lg">
                  <span className="text-verde-800 font-medium text-lg">
                    {item.pergunta}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-natural-700 leading-relaxed">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="bg-verde-50 border border-verde-200 rounded-2xl p-6">
            <p className="text-natural-700">
              <strong>Ainda tem dúvidas?</strong> Lembre-se: por apenas R$ 9,90, você não tem nada a perder 
              e muito a ganhar! É menos que um lanche no shopping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
