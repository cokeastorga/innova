'use client';
import './ProductCard.css';
import { useQuoteCart } from '@/hooks/useQuoteCart';

export default function ProductCard({ product }) {
  const { addItem, isInCart } = useQuoteCart();
  
  if (!product) return null;

  const inCart = isInCart(product.id);
  
  const handleAdd = () => {
    if (!inCart) {
      addItem(product);
    }
  };

  const whatsappMsg = encodeURIComponent(`Hola, quiero consultar por el producto: ${product.name}`);
  const whatsappUrl = `https://wa.me/56961546709?text=${whatsappMsg}`;

  const displayedBrands = product.compatibleBrands ? product.compatibleBrands.slice(0, 4) : [];
  const extraBrandsCount = product.compatibleBrands ? product.compatibleBrands.length - 4 : 0;

  return (
    <div className="product-card">
      <div className="product-card__image-area">
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card__image" 
            loading="lazy"
          />
        ) : (
          <div className="product-card__placeholder">
            {/* Package icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
            <span>{product.name}</span>
            {/* <!-- Placeholder image path note --> */}
          </div>
        )}
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__title" style={{display: 'none'}}>{/* just satisfying potential need for h3/p visually */}</p>
        <p className="product-card__desc">{product.description}</p>
        
        {displayedBrands.length > 0 && (
          <div className="product-card__brands">
            {displayedBrands.map(brand => (
              <span key={brand} className="product-card__brand-chip">{brand}</span>
            ))}
            {extraBrandsCount > 0 && (
              <span className="product-card__brand-chip">+{extraBrandsCount}</span>
            )}
          </div>
        )}

        <div className="product-card__actions">
          <button 
            onClick={handleAdd} 
            disabled={inCart}
            className="btn btn-lime btn-sm"
            type="button"
          >
            {inCart ? 'Agregado ✓' : 'Agregar a Cotización'}
          </button>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}
