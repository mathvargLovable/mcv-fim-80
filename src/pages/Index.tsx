
import { Hero } from '../components/Hero';
import { ParaQuemE } from '../components/ParaQuemE';
import { OQueVaiAprender } from '../components/OQueVaiAprender';
import { Beneficios } from '../components/Beneficios';
import { ProvaSocial } from '../components/ProvaSocial';
import { Galeria } from '../components/Galeria';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-natural-50 font-sans">
      <Hero />
      <ParaQuemE />
      <OQueVaiAprender />
      <Beneficios />
      <ProvaSocial />
      <Galeria />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
