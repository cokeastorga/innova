'use client';
import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const QuoteCartContext = createContext(null);

export function QuoteCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const addItem = useCallback((product, vehicleContext = null) => {
    const brand = vehicleContext?.brand?.trim() || null;
    const model = vehicleContext?.model?.trim() || null;
    const years = vehicleContext?.years?.trim() || null;
    const brandKey = brand ? brand.toLowerCase() : '';
    const modelKey = model ? model.toLowerCase() : '';
    const cartItemId = `${product.id}__${brandKey || 'gen'}__${modelKey || 'gen'}`;

    setItems(prev => {
      /* Don't add duplicates for exact same product + vehicle */
      if (prev.some(item => (item.cartItemId === cartItemId) || (!brandKey && !modelKey && item.id === product.id))) {
        return prev;
      }
      return [
        ...prev,
        {
          ...product,
          cartItemId,
          selectedBrand: brand,
          selectedModel: model,
          selectedYears: years,
          addedAt: Date.now()
        }
      ];
    });
    /* Trigger bounce animation on badge */
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 600);
  }, []);

  const removeItem = useCallback((identifier) => {
    setItems(prev => prev.filter(item => item.cartItemId !== identifier && item.id !== identifier));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const isInCart = useCallback((productId, brand = null, model = null) => {
    return items.some(item => {
      if (item.id !== productId) return false;
      if (brand && item.selectedBrand && item.selectedBrand.toLowerCase() !== brand.toLowerCase()) {
        return false;
      }
      if (model && item.selectedModel && item.selectedModel.toLowerCase() !== model.toLowerCase()) {
        return false;
      }
      return true;
    });
  }, [items]);

  const toggleCart = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  /* Format cart as WhatsApp message (clean text with \n, encoded by caller) */
  const getWhatsAppMessage = useCallback((notes = '', vehicle = '') => {
    const lines = [
      '👋 *¡Hola Innova Camionetas!*',
      'Quisiera consultar disponibilidad y cotizar los siguientes repuestos:',
      ''
    ];

    if (vehicle && vehicle.trim()) {
      lines.push(`🚙 *Vehículo Principal:* ${vehicle.trim()}`);
      lines.push('');
    }

    lines.push('📦 *Repuestos solicitados:*');
    items.forEach((item, i) => {
      let line = `  ${i + 1}. *${item.name}*`;
      if (item.selectedBrand || item.selectedModel) {
        const vehicleParts = [];
        if (item.selectedBrand) vehicleParts.push(item.selectedBrand);
        if (item.selectedModel) vehicleParts.push(item.selectedModel);
        if (item.selectedYears) vehicleParts.push(`(${item.selectedYears})`);
        line += `\n     └ 🚙 *Vehículo:* ${vehicleParts.join(' ')}`;
      } else if (item.compatibleBrands?.length) {
        line += ` _[${item.compatibleBrands.slice(0, 3).join(', ')}]_`;
      }
      lines.push(line);
    });

    if (notes && notes.trim()) {
      lines.push('');
      lines.push('📝 *Consulta / Notas adicionales:*');
      lines.push(`"${notes.trim()}"`);
    }

    lines.push('');
    lines.push('¿Me podrían indicar disponibilidad y valor con despacho? ¡Muchas gracias!');

    return lines.join('\n');
  }, [items]);

  /* Format cart as email body (plain text, encoded by caller) */
  const getEmailData = useCallback((notes = '', vehicle = '') => {
    const count = items.length;
    const subject = `Cotización de Repuestos (${count} ${count === 1 ? 'producto' : 'productos'}) - Innova Camionetas`;
    
    const lines = [
      'Estimado equipo de Innova Camionetas,',
      '',
      'Deseo cotizar los siguientes repuestos para mi vehículo:',
      ''
    ];

    if (vehicle && vehicle.trim()) {
      lines.push(`Vehículo Principal: ${vehicle.trim()}`);
      lines.push('');
    }

    lines.push('Lista de repuestos:');
    items.forEach((item, i) => {
      let line = `  ${i + 1}. ${item.name}`;
      if (item.selectedBrand || item.selectedModel) {
        const vehicleParts = [];
        if (item.selectedBrand) vehicleParts.push(item.selectedBrand);
        if (item.selectedModel) vehicleParts.push(item.selectedModel);
        if (item.selectedYears) vehicleParts.push(`(${item.selectedYears})`);
        line += ` — Vehículo: ${vehicleParts.join(' ')}`;
      } else if (item.compatibleBrands?.length) {
        line += ` (Compatible con: ${item.compatibleBrands.slice(0, 3).join(', ')})`;
      }
      lines.push(line);
    });

    if (notes && notes.trim()) {
      lines.push('');
      lines.push(`Notas adicionales: ${notes.trim()}`);
    }

    lines.push('');
    lines.push('Agradeceré me puedan indicar disponibilidad, formas de pago y valor de envío.');
    lines.push('');
    lines.push('Saludos cordiales.');

    return { subject, body: lines.join('\n') };
  }, [items]);

  const value = useMemo(() => ({
    items,
    cart: items,
    isOpen,
    justAdded,
    itemCount: items.length,
    addItem,
    removeItem,
    clearCart,
    isInCart,
    toggleCart,
    openCart,
    closeCart,
    getWhatsAppMessage,
    getEmailData,
  }), [items, isOpen, justAdded, addItem, removeItem, clearCart, isInCart, toggleCart, openCart, closeCart, getWhatsAppMessage, getEmailData]);

  return (
    <QuoteCartContext.Provider value={value}>
      {children}
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const context = useContext(QuoteCartContext);
  if (!context) {
    throw new Error('useQuoteCart must be used within a QuoteCartProvider');
  }
  return context;
}
