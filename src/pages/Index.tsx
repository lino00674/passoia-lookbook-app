import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LooksSection from '@/components/LooksSection';
import LancamentosSection from '@/components/LancamentosSection';
import NovidadesSection from '@/components/NovidadesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LooksSection />
        <LancamentosSection />
        <NovidadesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
