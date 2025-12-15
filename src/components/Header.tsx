import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/passoia.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Passoia - Skincare & Make Up" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('looks')}
              className="nav-link text-foreground"
            >
              Look
            </button>
            <button 
              onClick={() => scrollToSection('lancamentos')}
              className="nav-link text-foreground"
            >
              Lançamentos
            </button>
            <button 
              onClick={() => scrollToSection('novidades')}
              className="nav-link text-foreground"
            >
              Novidades
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('looks')}
              className="nav-link text-foreground text-left py-2"
            >
              Look
            </button>
            <button 
              onClick={() => scrollToSection('lancamentos')}
              className="nav-link text-foreground text-left py-2"
            >
              Lançamentos
            </button>
            <button 
              onClick={() => scrollToSection('novidades')}
              className="nav-link text-foreground text-left py-2"
            >
              Novidades
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
