'use client';
import { useState, useRef, useEffect } from 'react';
import { contactInfo, brands } from '@/data/products';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    model: '',
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getMessageContent = () => {
    return `Hola Innova Camionetas. Mi nombre es ${formData.name}.
Teléfono: ${formData.phone}
Vehículo: ${formData.brand} ${formData.model}
Mensaje:
${formData.message}`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = getMessageContent();
    window.open(`https://wa.me/${contactInfo.whatsapp1.number}?text=${encodeURIComponent(text)}`, '_blank');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const text = getMessageContent();
    const subject = `Consulta web de ${formData.name} - ${formData.brand} ${formData.model}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contacto" className="contact" ref={sectionRef}>
      <div className="container contact__container">
        <div className="contact__header">
          <span className="contact__tag">CONTACTO</span>
          <h2 className="contact__title">Contacto & Empresa</h2>
        </div>

        <div className="contact__grid">
          {/* Form Column */}
          <div className="contact__form-col">
            <form className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="contact-name" className="contact__label">Nombre</label>
                <input type="text" id="contact-name" name="name" className="contact__input" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required />
              </div>
              
              <div className="contact__form-group">
                <label htmlFor="contact-phone" className="contact__label">Teléfono</label>
                <input type="tel" id="contact-phone" name="phone" className="contact__input" value={formData.phone} onChange={handleChange} placeholder="+56 9 1234 5678" required />
              </div>

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-brand" className="contact__label">Marca de Camioneta</label>
                  <select id="contact-brand" name="brand" className="contact__select" value={formData.brand} onChange={handleChange}>
                    <option value="">Selecciona una marca</option>
                    {brands.map(brand => (
                      <option key={brand.id} value={brand.name}>{brand.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="contact__form-group">
                  <label htmlFor="contact-model" className="contact__label">Modelo / Año</label>
                  <input type="text" id="contact-model" name="model" className="contact__input" value={formData.model} onChange={handleChange} placeholder="Ej: Hilux 2021" />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-message" className="contact__label">Mensaje / Repuestos que buscas</label>
                <textarea id="contact-message" name="message" className="contact__textarea" rows="4" value={formData.message} onChange={handleChange} placeholder="Detalla los repuestos o accesorios que necesitas..." required></textarea>
              </div>

              {isSuccess && (
                <div className="contact__alert contact__alert--success">
                  Mensaje preparado con éxito. Se abrirá la aplicación correspondiente.
                </div>
              )}

              <div className="contact__actions">
                <button className="btn btn--primary contact__btn" onClick={handleWhatsApp}>
                  Enviar por WhatsApp
                </button>
                <button className="btn btn--outline contact__btn" onClick={handleEmail}>
                  Enviar por Email
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
