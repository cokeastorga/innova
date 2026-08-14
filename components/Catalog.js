'use client';
import { useState, useMemo } from 'react';
import './Catalog.css';
import { products, categories as categoryList } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Catalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Map of category id to full object
  const categoryMap = useMemo(() => {
    const map = { all: { id: 'all', name: 'Todos los Repuestos' } };
    categoryList.forEach(c => {
      map[c.id] = c;
    });
    return map;
  }, []);

  const tabs = useMemo(() => {
    return [
      { id: 'all', name: 'Todos' },
      ...categoryList.map(c => ({ id: c.id, name: c.name }))
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeTab === 'all' || p.category === activeTab;
      const matchesSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.compatibleBrands?.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="productos" className="catalog section">
      <div className="container reveal">
        <div className="catalog__header">
          <span className="section-tag">CATÁLOGO MARKETPLACE</span>
          <h2 className="section-title">Productos & Repuestos</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 24px' }}>
            Explora repuestos premium para tu camioneta. Agrega al carrito de cotización para consultar por WhatsApp o email.
          </p>

          {/* Search bar */}
          <div className="catalog__search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Buscar por repuesto, marca o modelo (ej. Hilux, pastillas, Maxus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="catalog__search-input"
              aria-label="Buscar repuestos"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')} 
                className="catalog__search-clear"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="catalog__filters">
          {tabs.map(tab => {
            const count = tab.id === 'all' 
              ? products.length 
              : products.filter(p => p.category === tab.id).length;

            return (
              <button
                key={tab.id}
                className={`catalog__filter-btn ${activeTab === tab.id ? 'catalog__filter-btn--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                {tab.name}
                <span className="catalog__filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="catalog__grid stagger">
            {filteredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${Math.min(index * 0.05, 0.4)}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="catalog__empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4, marginBottom: '12px' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <p className="catalog__empty-title">No encontramos repuestos con esa búsqueda</p>
            <p className="catalog__empty-sub">
              ¿No encuentras lo que buscas? Consúltanos directamente por WhatsApp y lo conseguimos.
            </p>
            <a 
              href="https://wa.me/56961546709?text=Hola%2C%20estoy%20buscando%20un%20repuesto%20que%20no%20encontr%C3%A9%20en%20la%20web" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ marginTop: '16px' }}
            >
              Consultar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
