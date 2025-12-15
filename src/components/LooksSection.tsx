import { useState } from 'react';
import ProductModal from './ProductModal';
import labios from '@/assets/labios.png';
import olhos from '@/assets/olhos.png';
import rosto from '@/assets/rosto.png';
import tendencia from '@/assets/tendencia.png';

const products = [
  {
    id: 1,
    name: 'Lábios',
    description: 'Descubra nossa linha completa de batons, glosses e tratamentos labiais para lábios perfeitos e hidratados.',
    price: 'A partir de R$ 49,90',
    image: labios,
  },
  {
    id: 2,
    name: 'Olhos',
    description: 'Paletas de sombras, delineadores e máscaras para um olhar marcante e irresistível.',
    price: 'A partir de R$ 79,90',
    image: olhos,
  },
  {
    id: 3,
    name: 'Rosto',
    description: 'Bases, corretivos, blushes e iluminadores para uma pele impecável e radiante.',
    price: 'A partir de R$ 89,90',
    image: rosto,
  },
  {
    id: 4,
    name: 'Tendência',
    description: 'As últimas tendências em maquiagem para você arrasar em qualquer ocasião.',
    price: 'A partir de R$ 59,90',
    image: tendencia,
  },
];

const LooksSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="looks" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title mb-10 md:mb-16">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="look-card rounded-lg overflow-hidden"
              onClick={() => handleProductClick(product)}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};

export default LooksSection;
