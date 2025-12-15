import novidades from '@/assets/novidades.png';

const NovidadesSection = () => {
  return (
    <section id="novidades" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title mb-10 md:mb-16">
          NOVIDADES PARA VOCÊ
        </h2>
        
        <div className="w-full">
          <img 
            src={novidades} 
            alt="Novidades em maquiagem"
            className="w-full h-[30vh] object-cover rounded-lg shadow-soft"
          />
        </div>
      </div>
    </section>
  );
};

export default NovidadesSection;
