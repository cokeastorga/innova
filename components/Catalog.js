'use client';

import { useState, useMemo, useEffect } from 'react';
import './Catalog.css';
import { products, brands, categories as categoryList } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Catalog() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedModel, setSelectedModel] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get models for currently selected brand
  const availableModels = useMemo(() => {
    if (selectedBrand === 'all') return [];
    const brandObj = brands.find(b => b.name.toLowerCase() === selectedBrand.toLowerCase() || b.id === selectedBrand.toLowerCase());
    return brandObj?.models || [];
  }, [selectedBrand]);

  // Reset model if brand changes
  const handleBrandChange = (brandName) => {
    setSelectedBrand(brandName);
    setSelectedModel('all');
  };

  // Filter products based on Brand, Model, Category, and Search Query
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // 1. Brand match
      if (selectedBrand !== 'all') {
        const hasBrand = p.compatibleBrands?.some(b => b.toLowerCase() === selectedBrand.toLowerCase()) ||
          Boolean(p.compatibleModels && p.compatibleModels[selectedBrand]);
        if (!hasBrand) return false;
      }

      // 2. Model match
      if (selectedModel !== 'all' && selectedBrand !== 'all') {
        const brandModels = p.compatibleModels?.[selectedBrand];
        if (!brandModels || !brandModels.some(m => m.toLowerCase() === selectedModel.toLowerCase())) {
          return false;
        }
      }

      // 3. Category match
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }

      // 4. Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.description?.toLowerCase().includes(q);
        const matchesBrand = p.compatibleBrands?.some(b => b.toLowerCase().includes(q));
        const matchesModel = p.compatibleModels && Object.values(p.compatibleModels).flat().some(m => m.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesBrand && !matchesModel) {
          return false;
        }
      }

      return true;
    });
  }, [selectedBrand, selectedModel, activeCategory, searchQuery]);

  // Dynamic category counts based on current Brand & Model filter
  const categoryCounts = useMemo(() => {
    const counts = { all: 0 };
    categoryList.forEach(c => { counts[c.id] = 0; });

    products.forEach(p => {
      // Check if product matches current vehicle & search filter
      let matchesVehicle = true;
      if (selectedBrand !== 'all') {
        const hasBrand = p.compatibleBrands?.some(b => b.toLowerCase() === selectedBrand.toLowerCase()) ||
          Boolean(p.compatibleModels && p.compatibleModels[selectedBrand]);
        if (!hasBrand) matchesVehicle = false;
      }
      if (matchesVehicle && selectedModel !== 'all' && selectedBrand !== 'all') {
        const brandModels = p.compatibleModels?.[selectedBrand];
        if (!brandModels || !brandModels.some(m => m.toLowerCase() === selectedModel.toLowerCase())) {
          matchesVehicle = false;
        }
      }
      if (matchesVehicle && searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.description?.toLowerCase().includes(q);
        const matchesBrand = p.compatibleBrands?.some(b => b.toLowerCase().includes(q));
        const matchesModel = p.compatibleModels && Object.values(p.compatibleModels).flat().some(m => m.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesBrand && !matchesModel) {
          matchesVehicle = false;
        }
      }

      if (matchesVehicle) {
        counts.all = (counts.all || 0) + 1;
        if (p.category) {
          counts[p.category] = (counts[p.category] || 0) + 1;
        }
      }
    });

    return counts;
  }, [selectedBrand, selectedModel, searchQuery]);

  const hasActiveFilters = selectedBrand !== 'all' || selectedModel !== 'all' || activeCategory !== 'all' || searchQuery.trim() !== '';

  const clearAllFilters = () => {
    setSelectedBrand('all');
    setSelectedModel('all');
    setActiveCategory('all');
    setSearchQuery('');
  };

  // WhatsApp helper for specific vehicle consultation
  const getVehicleConsultUrl = () => {
    let msg = 'Hola, estoy buscando repuestos';
    if (selectedBrand !== 'all') msg += ` para ${selectedBrand}`;
    if (selectedModel !== 'all') msg += ` modelo ${selectedModel}`;
    if (activeCategory !== 'all') {
      const catObj = categoryList.find(c => c.id === activeCategory);
      if (catObj) msg += ` en el rubro ${catObj.name}`;
    }
    if (searchQuery) msg += ` (Búsqueda: "${searchQuery}")`;
    return `https://wa.me/56961546709?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="productos" className="catalog section">
      <div className="container reveal">
        <div className="catalog__header">
          <span className="section-tag">CATÁLOGO &amp; REPUESTOS</span>
          <h2 className="section-title">Encuentra el Repuesto Exacto para tu Camioneta</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Filtra por <strong>Marca</strong>, <strong>Modelo</strong> y <strong>Categoría</strong> o busca directamente por nombre de pieza.
          </p>

          {/* Vehicle Selector + Search Console */}
          <div className="catalog__vehicle-filter-bar">
            {/* Step 1: Select Brand */}
            <div className="catalog__filter-control">
              <label htmlFor="catalog-brand-select" className="catalog__control-label">
                <span className="catalog__control-step">1</span> Marca
              </label>
              <div className="catalog__select-wrapper">
                <select
                  id="catalog-brand-select"
                  value={selectedBrand}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="catalog__select"
                >
                  <option value="all">Todas las Marcas</option>
                  {brands.map(b => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
                <svg className="catalog__select-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {/* Step 2: Select Model */}
            <div className="catalog__filter-control">
              <label htmlFor="catalog-model-select" className="catalog__control-label">
                <span className="catalog__control-step">2</span> Modelo
              </label>
              <div className="catalog__select-wrapper">
                <select
                  id="catalog-model-select"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={selectedBrand === 'all' || availableModels.length === 0}
                  className={`catalog__select ${selectedBrand === 'all' ? 'catalog__select--disabled' : ''}`}
                >
                  <option value="all">
                    {selectedBrand === 'all' ? 'Selecciona una marca primero' : `Todos los modelos ${selectedBrand}`}
                  </option>
                  {availableModels.map((m, idx) => (
                    <option key={idx} value={m.name}>
                      {m.name} ({m.years})
                    </option>
                  ))}
                </select>
                <svg className="catalog__select-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {/* Step 3: Search by text */}
            <div className="catalog__filter-control catalog__filter-control--search">
              <label htmlFor="catalog-search-input" className="catalog__control-label">
                <span className="catalog__control-step">3</span> Buscar Repuesto
              </label>
              <div className="catalog__search-input-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="catalog__search-icon">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  id="catalog-search-input"
                  type="text"
                  placeholder="Ej: pastillas, kit distribución, filtro..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="catalog__search-input-field"
                  aria-label="Buscar repuesto"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="catalog__search-clear-btn"
                    aria-label="Limpiar texto"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Active Filter Chips & Summary */}
          {hasActiveFilters && (
            <div className="catalog__active-filters-bar">
              <span className="catalog__active-label">Filtros activos:</span>
              <div className="catalog__chips-container">
                {selectedBrand !== 'all' && (
                  <span className="catalog__chip">
                    Marca: <strong>{selectedBrand}</strong>
                    <button onClick={() => handleBrandChange('all')} aria-label="Quitar marca">✕</button>
                  </span>
                )}
                {selectedModel !== 'all' && (
                  <span className="catalog__chip">
                    Modelo: <strong>{selectedModel}</strong>
                    <button onClick={() => setSelectedModel('all')} aria-label="Quitar modelo">✕</button>
                  </span>
                )}
                {activeCategory !== 'all' && (
                  <span className="catalog__chip">
                    Categoría: <strong>{categoryList.find(c => c.id === activeCategory)?.name || activeCategory}</strong>
                    <button onClick={() => setActiveCategory('all')} aria-label="Quitar categoría">✕</button>
                  </span>
                )}
                {searchQuery && (
                  <span className="catalog__chip">
                    Texto: <strong>&ldquo;{searchQuery}&rdquo;</strong>
                    <button onClick={() => setSearchQuery('')} aria-label="Quitar texto">✕</button>
                  </span>
                )}
                <button onClick={clearAllFilters} className="catalog__clear-all-btn">
                  Limpiar todos los filtros
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Step 4: Category Tabs with live item counts */}
        <div className="catalog__category-tabs-container">
          <div className="catalog__category-tabs">
            <button
              className={`catalog__cat-tab ${activeCategory === 'all' ? 'catalog__cat-tab--active' : ''}`}
              onClick={() => setActiveCategory('all')}
              type="button"
            >
              <span>Todos los Repuestos</span>
              <span className="catalog__cat-count">{categoryCounts.all || 0}</span>
            </button>
            {categoryList.map(category => (
              <button
                key={category.id}
                className={`catalog__cat-tab ${activeCategory === category.id ? 'catalog__cat-tab--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                type="button"
              >
                <span>{category.name}</span>
                <span className="catalog__cat-count">{categoryCounts[category.id] || 0}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Results Header */}
        <div className="catalog__results-meta">
          <span className="catalog__results-count">
            Mostrando <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'repuesto' : 'repuestos'}
            {selectedBrand !== 'all' && ` para ${selectedBrand}`}
            {selectedModel !== 'all' && ` ${selectedModel}`}
          </span>
          {selectedBrand !== 'all' && (
            <a
              href={getVehicleConsultUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="catalog__direct-quote-link"
            >
              ¿Buscas otra pieza para tu {selectedBrand} {selectedModel !== 'all' ? selectedModel : ''}? Consulta directa por WhatsApp →
            </a>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="catalog__grid stagger">
            {filteredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${Math.min(index * 0.04, 0.35)}s` }}>
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
            <h3 className="catalog__empty-title">
              No encontramos repuestos en esta selección
            </h3>
            <p className="catalog__empty-sub">
              {selectedBrand !== 'all' || selectedModel !== 'all'
                ? `¿Necesitas un repuesto específico para ${selectedBrand !== 'all' ? selectedBrand : ''} ${selectedModel !== 'all' ? selectedModel : ''}? Escríbenos y lo cotizamos de inmediato.`
                : '¿No encuentras la pieza que buscas? Consúltanos directamente por WhatsApp.'}
            </p>
            <div className="catalog__empty-actions">
              <a
                href={getVehicleConsultUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Consultar por WhatsApp
              </a>
              <button
                onClick={clearAllFilters}
                className="btn btn-outline"
              >
                Ver todos los repuestos
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
