
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Mostra o botão depois de rolar 50% da tela
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Button 
        onClick={scrollToOffer}
        className="w-full bg-terracota-500 hover:bg-terracota-600 text-white font-bold py-4 rounded-full shadow-2xl animate-pulse"
        size="lg"
      >
        🌿 Quero minhas plantas vivas - R$ 9,90
      </Button>
    </div>
  );
};
