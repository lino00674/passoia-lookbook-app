import { useState } from 'react';
import aberto from '@/assets/aberto.png';
import fechado from '@/assets/fechado.png';
import batom from '@/assets/batom.png';
import cinzaBoca from '@/assets/cinza-boca.png';
import vermelhoBoca from '@/assets/vermelho-boca.png';
import bordoBoca from '@/assets/bordo-boca.png';
import nudeBoca from '@/assets/nude-boca.png';
import cinzaColor from '@/assets/cinza-color.png';
import vermelhoColor from '@/assets/vermelho-color.png';
import bordoColor from '@/assets/bordo-color.png';
import nudeColor from '@/assets/nude-color.png';
import estrelas from '@/assets/estrelas.png';

const colorOptions = [
  { id: 'cinza', colorImage: cinzaColor, bocaImage: cinzaBoca },
  { id: 'vermelho', colorImage: vermelhoColor, bocaImage: vermelhoBoca },
  { id: 'bordo', colorImage: bordoColor, bocaImage: bordoBoca },
  { id: 'nude', colorImage: nudeColor, bocaImage: nudeBoca },
];

const LancamentosSection = () => {
  const [selectedColor, setSelectedColor] = useState('cinza');
  
  const currentBocaImage = colorOptions.find(c => c.id === selectedColor)?.bocaImage || cinzaBoca;

  return (
    <section id="lancamentos" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title mb-10 md:mb-16">
          APROVEITE OS LANÇAMENTOS
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center">
          {/* 1ª Divisão - Produtos empilhados (esconde em mobile) */}
          <div className="hidden lg:flex flex-col gap-4 items-center">
            <img 
              src={aberto} 
              alt="Batom aberto"
              className="w-32 h-auto object-contain"
            />
            <img 
              src={fechado} 
              alt="Batom fechado"
              className="w-32 h-auto object-contain"
            />
            <img 
              src={batom} 
              alt="Coleção de batons"
              className="w-32 h-auto object-contain"
            />
          </div>

          {/* 2ª Divisão - Imagem principal */}
          <div className="w-full max-w-sm lg:max-w-md">
            <img 
              src={currentBocaImage} 
              alt="Modelo com batom"
              className="w-full h-auto rounded-lg shadow-medium transition-all duration-500"
            />
          </div>

          {/* 3ª Divisão - Descrição e cores */}
          <div className="w-full lg:w-80 flex flex-col items-center lg:items-start">
            <img 
              src={estrelas} 
              alt="5 estrelas"
              className="h-6 mb-4"
            />
            
            <h3 className="font-heading text-2xl font-medium text-foreground mb-2">
              Matte Premium
            </h3>
            
            <p className="font-body text-sm text-muted-foreground mb-4">
              Cores disponíveis
            </p>
            
            <div className="flex gap-3 mb-6">
              {colorOptions.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`color-swatch ${selectedColor === color.id ? 'active' : ''}`}
                  aria-label={`Selecionar cor ${color.id}`}
                >
                  <img 
                    src={color.colorImage} 
                    alt={`Cor ${color.id}`}
                    className="w-full h-full rounded-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            <h4 className="font-heading text-xl font-medium text-foreground mb-3">
              Descrição
            </h4>
            
            <p className="font-body text-sm text-muted-foreground leading-relaxed text-center lg:text-left">
              O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LancamentosSection;
