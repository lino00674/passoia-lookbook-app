import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    price: string;
    image: string;
  } | null;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full max-w-xs h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-heading text-2xl font-medium text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground mb-4 font-body text-sm leading-relaxed">
            {product.description}
          </p>
          <p className="text-xl font-heading font-semibold text-primary">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
