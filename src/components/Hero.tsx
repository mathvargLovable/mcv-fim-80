
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
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative" style={{
      backgroundImage: 'url(https://i.imgur.com/feVQLQd.jpeg)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/10"></div>
      
    </section>
  );
};
