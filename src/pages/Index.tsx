
import { Hero } from '../components/Hero';
import { ParaQuemE } from '../components/ParaQuemE';
import { Beneficios } from '../components/Beneficios';
import { OQueVaiAprender } from '../components/OQueVaiAprender';
import { ImagineTransformacao } from '../components/ImagineTransformacao';
import { ProvaSocial } from '../components/ProvaSocial';
import { Galeria } from '../components/Galeria';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <ParaQuemE />
      <Beneficios />
      <OQueVaiAprender />
      <ImagineTransformacao />
      <ProvaSocial />
      <Galeria />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
