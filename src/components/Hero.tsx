
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Hero = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center px-4 py-16 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://i.imgur.com/feVQLQd.jpeg)',
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Conteúdo do hero pode ser adicionado aqui */}
      <div className="relative z-10 text-center">
        {/* Placeholder para conteúdo futuro */}
      </div>
    </section>
  );
};
