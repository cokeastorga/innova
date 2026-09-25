'use client';
import { useState, useRef, useEffect } from 'react';
import { contactInfo, brands, categories, products } from '@/data/products';
import './Contact.css';

const WhatsAppIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a9.994 9.994 0 0 0 4.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.925-7.062A9.925 9.925 0 0 0 12.012 2zm0 18.257h-.003a8.3 8.3 0 0 1-4.233-1.161l-.304-.18-3.111.736.837-3.047-.197-.314a8.272 8.272 0 0 1-1.269-4.291c.001-4.577 3.725-8.301 8.304-8.301 2.217 0 4.301.865 5.867 2.434a8.27 8.27 0 0 1 2.43 5.871c-.001 4.577-3.725 8.301-8.304 8.301zm4.551-6.208c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.125-1.051-.387-2.001-1.234-.739-.659-1.238-1.474-1.383-1.723-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.436-.062-.125-.56-1.349-.768-1.847-.202-.485-.407-.419-.56-.427-.145-.007-.311-.008-.477-.008s-.436.062-.664.311c-.228.249-.871.851-.871 2.075s.892 2.407 1.016 2.573c.125.166 1.756 2.68 4.253 3.757.594.256 1.058.409 1.42.524.597.19 1.14.163 1.569.099.479-.071 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.291z"/>
  </svg>
);

const currentYear = new Date().getFullYear();
const availableYears = Array.from({ length: 27 }, (_, i) => currentYear - i);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    customBrand: '',
    model: '',
    customModel: '',
    year: '',
    customYear: '',
    product: '',
    customProduct: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBrandChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      brand: val,
      customBrand: val === 'otra' ? prev.customBrand : '',
      model: '',
      customModel: ''
    }));
  };

  const handleModelChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      model: val,
      customModel: val === 'otro' ? prev.customModel : ''
    }));
  };

  const handleYearChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      year: val,
      customYear: val === 'otro' ? prev.customYear : ''
    }));
  };

  const handleProductChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      product: val,
      customProduct: val === 'otro' ? prev.customProduct : ''
    }));
  };

  const selectedBrandObj = brands.find(b => b.name === formData.brand);
  const brandModels = selectedBrandObj ? selectedBrandObj.models : [];
  const selectedModelObj = brandModels.find(m => m.name === formData.model);

  const getMessageContent = () => {
    const finalBrand = formData.brand === 'otra' ? (formData.customBrand.trim() || 'Otra marca') : formData.brand;
    const finalModel = (formData.brand === 'otra' || formData.model === 'otro') ? (formData.customModel.trim() || 'Otro modelo') : formData.model;
    const finalYear = formData.year === 'otro' ? formData.customYear.trim() : formData.year;
    const finalProduct = formData.product === 'otro' ? (formData.customProduct.trim() || 'Otro repuesto') : formData.product;

    const vehicleParts = [];
    if (finalBrand) vehicleParts.push(finalBrand);
    if (finalModel) vehicleParts.push(finalModel);
    if (finalYear) vehicleParts.push(`(Año ${finalYear})`);
    const vehicleText = vehicleParts.length > 0 ? vehicleParts.join(' ') : 'No especificado';

    return `¡Hola Innova Camionetas! Quisiera cotizar repuestos para mi vehículo:

👤 *Cliente:* ${formData.name.trim() || 'No indicado'}
📱 *Teléfono:* ${formData.phone.trim() || 'No indicado'}
🚗 *Vehículo:* ${vehicleText}
⚙️ *Repuesto:* ${finalProduct || 'Consulta general / Varios'}
${formData.message.trim() ? `📝 *Detalle:* ${formData.message.trim()}` : ''}`;
  };

  const getEmailContent = () => {
    const finalBrand = formData.brand === 'otra' ? (formData.customBrand.trim() || 'Otra marca') : formData.brand;
    const finalModel = (formData.brand === 'otra' || formData.model === 'otro') ? (formData.customModel.trim() || 'Otro modelo') : formData.model;
    const finalYear = formData.year === 'otro' ? formData.customYear.trim() : formData.year;
    const finalProduct = formData.product === 'otro' ? (formData.customProduct.trim() || 'Otro repuesto / Consulta general') : formData.product;

    const vehicleParts = [];
    if (finalBrand) vehicleParts.push(finalBrand);
    if (finalModel) vehicleParts.push(finalModel);
    if (finalYear) vehicleParts.push(`(Año: ${finalYear})`);
    const vehicleText = vehicleParts.length > 0 ? vehicleParts.join(' ') : 'No especificado';

    return `Estimado equipo de Innova Camionetas,

Junto con saludar, solicito la cotización del siguiente requerimiento:

========================================
DATOS DEL CLIENTE
========================================
• Nombre: ${formData.name.trim() || 'No indicado'}
• Teléfono / WhatsApp: ${formData.phone.trim() || 'No indicado'}

========================================
VEHÍCULO Y REPUESTO SOLICITADO
========================================
• Vehículo: ${vehicleText}
• Repuesto: ${finalProduct || 'Consulta general / Varios repuestos'}
${formData.message.trim() ? `• Detalles / N° Chasis (VIN): ${formData.message.trim()}\n` : ''}========================================

Agradezco de antemano su pronta respuesta con disponibilidad y precios.

Saludos cordiales,
${formData.name.trim()}`;
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert('Por favor, ingresa tu nombre.');
      return false;
    }
    if (!formData.phone.trim()) {
      alert('Por favor, ingresa tu número de teléfono.');
      return false;
    }
    return true;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const text = getMessageContent();
    window.open(`https://wa.me/${contactInfo.whatsapp1.number}?text=${encodeURIComponent(text)}`, '_blank');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const text = getEmailContent();
    const finalBrand = formData.brand === 'otra' ? formData.customBrand.trim() : formData.brand;
    const finalModel = (formData.brand === 'otra' || formData.model === 'otro') ? formData.customModel.trim() : formData.model;
    const finalProduct = formData.product === 'otro' ? (formData.customProduct.trim() || 'Repuestos') : formData.product;
    
    const vehicleLabel = [finalBrand, finalModel].filter(Boolean).join(' ') || 'Camioneta';
    const subject = `Cotización: ${finalProduct || 'Repuestos'} - ${vehicleLabel} (${formData.name.trim()})`;
    
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contacto" className="contact" ref={sectionRef}>
      <div className="container contact__container">
        <div className="contact__header">
          <span className="contact__tag">COTIZACIÓN RÁPIDA</span>
          <h2 className="contact__title">Cotiza tu Repuesto o Contáctanos</h2>
        </div>

        <div className="contact__grid">
          {/* Form Column */}
          <div className="contact__form-col">
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="contact__form-title">Formulario de Cotización Inmediata</h3>

              {/* Nombre & Teléfono */}
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-name" className="contact__label">Nombre completo *</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    className="contact__input" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Ej: Juan Pérez" 
                    required 
                  />
                </div>
                
                <div className="contact__form-group">
                  <label htmlFor="contact-phone" className="contact__label">Teléfono / WhatsApp *</label>
                  <input 
                    type="tel" 
                    id="contact-phone" 
                    name="phone" 
                    className="contact__input" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="+56 9 1234 5678" 
                    required 
                  />
                </div>
              </div>

              {/* Marca & Modelo */}
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-brand" className="contact__label">Marca de Camioneta</label>
                  <select 
                    id="contact-brand" 
                    name="brand" 
                    className="contact__select" 
                    value={formData.brand} 
                    onChange={handleBrandChange}
                  >
                    <option value="">Selecciona una marca...</option>
                    {brands.map(brand => (
                      <option key={brand.id} value={brand.name}>{brand.name}</option>
                    ))}
                    <option value="otra">✏️ Otra marca (no listada)...</option>
                  </select>

                  {formData.brand === 'otra' && (
                    <div className="contact__subinput-wrap">
                      <input 
                        type="text" 
                        name="customBrand" 
                        className="contact__input contact__subinput" 
                        value={formData.customBrand} 
                        onChange={handleChange} 
                        placeholder="Escribe la marca (ej: Ford, Chevrolet, Mazda)..." 
                        autoFocus
                      />
                    </div>
                  )}
                </div>
                
                <div className="contact__form-group">
                  <label htmlFor="contact-model" className="contact__label">
                    Modelo
                    {selectedModelObj && (
                      <span className="contact__label-badge">{selectedModelObj.years}</span>
                    )}
                  </label>

                  {formData.brand && formData.brand !== 'otra' ? (
                    <select 
                      id="contact-model" 
                      name="model" 
                      className="contact__select" 
                      value={formData.model} 
                      onChange={handleModelChange}
                    >
                      <option value="">Selecciona el modelo...</option>
                      {brandModels.map(m => (
                        <option key={m.name} value={m.name}>
                          {m.name} ({m.years}) — {m.type}
                        </option>
                      ))}
                      <option value="otro">✏️ Otro modelo de {formData.brand}...</option>
                    </select>
                  ) : (
                    <input 
                      type="text" 
                      id="contact-model" 
                      name="customModel" 
                      className="contact__input" 
                      value={formData.customModel} 
                      onChange={handleChange} 
                      placeholder={formData.brand === 'otra' ? "Escribe el modelo (ej: Ranger, D-Max)..." : "Selecciona una marca primero o escribe aquí"} 
                    />
                  )}

                  {formData.brand !== 'otra' && formData.model === 'otro' && (
                    <div className="contact__subinput-wrap">
                      <input 
                        type="text" 
                        name="customModel" 
                        className="contact__input contact__subinput" 
                        value={formData.customModel} 
                        onChange={handleChange} 
                        placeholder="Escribe el modelo específico..." 
                        autoFocus
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Año & Repuesto */}
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-year" className="contact__label">Año del Vehículo</label>
                  <select 
                    id="contact-year" 
                    name="year" 
                    className="contact__select" 
                    value={formData.year} 
                    onChange={handleYearChange}
                  >
                    <option value="">Selecciona el año...</option>
                    {availableYears.map(yr => (
                      <option key={yr} value={yr}>{yr}</option>
                    ))}
                    <option value="otro">✏️ Otro año (anterior a 2000)...</option>
                  </select>

                  {formData.year === 'otro' && (
                    <div className="contact__subinput-wrap">
                      <input 
                        type="text" 
                        name="customYear" 
                        className="contact__input contact__subinput" 
                        value={formData.customYear} 
                        onChange={handleChange} 
                        placeholder="Escribe el año (ej: 1998)..." 
                        autoFocus
                      />
                    </div>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="contact-product" className="contact__label">Repuesto o Pieza</label>
                  <select 
                    id="contact-product" 
                    name="product" 
                    className="contact__select" 
                    value={formData.product} 
                    onChange={handleProductChange}
                  >
                    <option value="">Selecciona repuesto del catálogo...</option>
                    {categories.map(cat => {
                      const catProducts = products.filter(p => p.category === cat.id);
                      return (
                        <optgroup key={cat.id} label={cat.name}>
                          {catProducts.map(p => (
                            <option key={p.id} value={p.name}>{p.name}</option>
                          ))}
                        </optgroup>
                      );
                    })}
                    <option value="otro">✏️ Otro repuesto / Varias piezas...</option>
                  </select>

                  {formData.product === 'otro' && (
                    <div className="contact__subinput-wrap">
                      <input 
                        type="text" 
                        name="customProduct" 
                        className="contact__input contact__subinput" 
                        value={formData.customProduct} 
                        onChange={handleChange} 
                        placeholder="Escribe el repuesto que buscas (ej: Turbo, Sensor)..." 
                        autoFocus
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Mensaje / Detalle adicional */}
              <div className="contact__form-group">
                <label htmlFor="contact-message" className="contact__label">
                  Detalles adicionales / N° de Chasis (VIN) <span className="contact__label-optional">(Opcional)</span>
                </label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  className="contact__textarea" 
                  rows="3" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Ej: Motor 2.8 turbo diésel, versión 4x4, cotizar con envío a región o cualquier detalle adicional..."
                ></textarea>
              </div>

              {isSuccess && (
                <div className="contact__alert contact__alert--success">
                  ✅ Datos listos. Redirigiendo a la aplicación seleccionada...
                </div>
              )}

              <div className="contact__actions">
                <button 
                  type="button" 
                  className="btn btn--primary contact__btn contact__btn--whatsapp" 
                  onClick={handleWhatsApp}
                >
                  <WhatsAppIcon size={20} />
                  <span>Cotizar por WhatsApp</span>
                </button>
                <button 
                  type="button" 
                  className="btn btn--outline contact__btn" 
                  onClick={handleEmail}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>Enviar por Email</span>
                </button>
              </div>
            </form>
          </div>

          {/* Info Column */}
          <div className="contact__info-col">
            <div className="contact__info-cards">
              <a href={`https://wa.me/${contactInfo.whatsapp1.number}`} target="_blank" rel="noopener noreferrer" className="contact__card">
                <span className="contact__card-icon">📱</span>
                <div className="contact__card-content">
                  <h4 className="contact__card-title">1° Contacto • Brahyan Padilla</h4>
                  <p className="contact__card-text">{contactInfo.whatsapp1.display}</p>
                </div>
              </a>

              <a href={`https://wa.me/${contactInfo.whatsapp2.number}`} target="_blank" rel="noopener noreferrer" className="contact__card">
                <span className="contact__card-icon">📱</span>
                <div className="contact__card-content">
                  <h4 className="contact__card-title">2° Contacto • Cristian Yáñez</h4>
                  <p className="contact__card-text">{contactInfo.whatsapp2.display}</p>
                </div>
              </a>

              <a href={`mailto:${contactInfo.email}`} className="contact__card">
                <span className="contact__card-icon">✉️</span>
                <div className="contact__card-content">
                  <h4 className="contact__card-title">Email</h4>
                  <p className="contact__card-text">{contactInfo.email}</p>
                </div>
              </a>

              <div className="contact__card">
                <span className="contact__card-icon">📍</span>
                <div className="contact__card-content">
                  <h4 className="contact__card-title">Ubicación</h4>
                  <p className="contact__card-text">Valdivia, Chile</p>
                </div>
              </div>
            </div>

            <div className="contact__bank-card">
              <h4 className="contact__bank-title">Datos de Transferencia</h4>
              <ul className="contact__bank-list">
                <li><span>Banco:</span> {contactInfo.bankTransfer.banco}</li>
                <li><span>Tipo Cuenta:</span> {contactInfo.bankTransfer.tipo}</li>
                <li><span>Número:</span> {contactInfo.bankTransfer.numero}</li>
                <li><span>RUT:</span> {contactInfo.bankTransfer.rut}</li>
                <li><span>Titular:</span> {contactInfo.bankTransfer.titular}</li>
                <li><span>Email:</span> {contactInfo.bankTransfer.email}</li>
              </ul>
            </div>

            <div className="contact__team">
              <h4 className="contact__team-title">Nuestro Equipo</h4>
              <div className="contact__team-grid">
                {contactInfo.team?.map((member, idx) => (
                  <div key={idx} className="contact__team-member">
                    <div className="contact__team-avatar">
                      <span>{member.initials}</span>
                    </div>
                    <span className="contact__team-tag">{member.role}</span>
                    <h5 className="contact__team-name">{member.name}</h5>
                    <a 
                      href={`https://wa.me/${member.number}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact__team-phone"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>{member.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
