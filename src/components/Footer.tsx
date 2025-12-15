import mastercard from '@/assets/mastercard.png';
import visa from '@/assets/visa.png';
import pix from '@/assets/pix.png';
import boleto from '@/assets/boleto.png';
import instagram from '@/assets/instagram.png';
import facebook from '@/assets/facebook-passoia.png';
import youtube from '@/assets/youtube.png';
import twitter from '@/assets/twitter-passoia.png';

const Footer = () => {
  return (
    <footer className="bg-passoia-dark py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Atendimentos */}
          <div className="text-center md:text-left">
            <h4 className="footer-title text-primary-foreground">Atendimentos</h4>
            <ul className="space-y-3">
              <li><span className="footer-link text-primary-foreground/80 hover:text-primary-foreground">Fale Conosco</span></li>
              <li><span className="footer-link text-primary-foreground/80 hover:text-primary-foreground">Perguntas Frequentes</span></li>
              <li><span className="footer-link text-primary-foreground/80 hover:text-primary-foreground">Meus Pedidos</span></li>
              <li><span className="footer-link text-primary-foreground/80 hover:text-primary-foreground">Nossas Lojas</span></li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div className="text-center md:text-left">
            <h4 className="footer-title text-primary-foreground">FORMAS DE PAGAMENTO</h4>
            <div className="flex gap-4 justify-center md:justify-start items-center flex-wrap">
              <img src={mastercard} alt="Mastercard" className="h-8 object-contain" />
              <img src={visa} alt="Visa" className="h-8 object-contain" />
              <img src={pix} alt="Pix" className="h-6 object-contain" />
              <img src={boleto} alt="Boleto" className="h-6 object-contain" />
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-left">
            <h4 className="footer-title text-primary-foreground">SIGA-NOS NAS REDES SOCIAIS</h4>
            <div className="flex gap-4 justify-center md:justify-start items-center">
              <a href="#" className="transition-transform hover:scale-110" aria-label="Instagram">
                <img src={instagram} alt="Instagram" className="h-8 w-8 object-contain" />
              </a>
              <a href="#" className="transition-transform hover:scale-110" aria-label="Facebook">
                <img src={facebook} alt="Facebook" className="h-8 w-8 object-contain" />
              </a>
              <a href="#" className="transition-transform hover:scale-110" aria-label="YouTube">
                <img src={youtube} alt="YouTube" className="h-8 w-8 object-contain" />
              </a>
              <a href="#" className="transition-transform hover:scale-110" aria-label="Twitter">
                <img src={twitter} alt="Twitter" className="h-8 w-8 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm font-body">
            © 2024 Passoia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
