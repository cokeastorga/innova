'use client';
import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const QuoteCartContext = createContext(null);

export function QuoteCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const addItem = useCallback((product) => {
    setItems(prev => {
      /* Don't add duplicates */
      if (prev.some(item => item.id === product.id)) return prev;
      return [...prev, { ...product, addedAt: Date.now() }];
    });
    /* Trigger bounce animation on badge */
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 600);
  }, []);

  const removeItem = useCallback((productId) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const isInCart = useCallback((productId) => {
    return items.some(item => item.id === productId);
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
      lines.push(`🚙 *Vehículo:* ${vehicle.trim()}`);
      lines.push('');
    }

    lines.push('📦 *Repuestos solicitados:*');
    items.forEach((item, i) => {
      let line = `  ${i + 1}. *${item.name}*`;
      if (item.compatibleBrands?.length) {
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
      lines.push(`Vehículo: ${vehicle.trim()}`);
      lines.push('');
    }

    lines.push('Lista de repuestos:');
    items.forEach((item, i) => {
      let line = `  ${i + 1}. ${item.name}`;
      if (item.compatibleBrands?.length) {
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
