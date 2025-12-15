import banner from '@/assets/Banner.png';

const Hero = () => {
  return (
    <section className="w-full h-[60vh] relative mt-16 md:mt-20">
      <img 
        src={banner} 
        alt="Passoia - Novo Revitalift Sérum Preenchedor" 
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default Hero;
