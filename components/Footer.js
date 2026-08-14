import { contactInfo } from '@/data/products';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__logo">INNOVA CAMIONETAS</h3>
          </div>
          
          <nav className="footer__nav">
            <a href="#inicio" className="footer__link">Inicio</a>
            <a href="#nosotros" className="footer__link">Nosotros</a>
            <a href="#marcas" className="footer__link">Marcas</a>
            <a href="#productos" className="footer__link">Productos</a>
            <a href="#contacto" className="footer__link">Contacto</a>
          </nav>
          
          <div className="footer__social">
            <a href={`https://wa.me/${contactInfo.whatsapp1.number}`} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <hr className="footer__divider" />
        
        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Innova Camionetas SpA. Todos los derechos reservados.</p>
          <div className="footer__credits">
            <span className="footer__credit-text">Diseño &amp; Desarrollo por</span>{' '}
            <a 
              href="https://ccsolution.cl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__credit-link"
            >
              CCSolution.cl
            </a>
          </div>
          <p className="footer__location">Valdivia, Chile</p>
        </div>
      </div>
    </footer>
  );
}
