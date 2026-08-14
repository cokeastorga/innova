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

  /* Format cart as WhatsApp message */
  const getWhatsAppMessage = useCallback((notes = '') => {
    let msg = 'Hola, quiero cotizar los siguientes repuestos:%0A%0A';
    items.forEach((item, i) => {
      msg += `${i + 1}. ${item.name}`;
      if (item.compatibleBrands?.length) {
        msg += ` (${item.compatibleBrands.slice(0, 3).join(', ')})`;
      }
      msg += '%0A';
    });
    if (notes) {
      msg += `%0ANotas adicionales: ${encodeURIComponent(notes)}`;
    }
    msg += '%0A%0AGracias!';
    return msg;
  }, [items]);

  /* Format cart as email body */
  const getEmailData = useCallback((notes = '') => {
    const subject = encodeURIComponent(`Cotización de Repuestos - Innova Camionetas (${items.length} productos)`);
    let body = 'Hola, quiero cotizar los siguientes repuestos:%0A%0A';
    items.forEach((item, i) => {
      body += `${i + 1}. ${item.name}`;
      if (item.compatibleBrands?.length) {
        body += ` (${item.compatibleBrands.slice(0, 3).join(', ')})`;
      }
      body += '%0A';
    });
    if (notes) {
      body += `%0ANotas adicionales: ${encodeURIComponent(notes)}`;
    }
    return { subject, body };
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
