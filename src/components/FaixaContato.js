import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FaixaContato = () => {
  return (
    <div className="contact-banner-container">
      {/* Background image container */}
      <div className="background-image-container">
        {/* Background image - Ajustada para mostrar mais área */}
        <img 
          src='/img/call us.jpg' 
          alt='Ligue para nós' 
          className="background-image"
        />
        
        {/* Dark overlay */}
        <div className="dark-overlay"></div>
        
        {/* Contact card - Reduzido em mobile */}
        <div className="contact-card">
          {/* Barra superior decorativa */}
          <div className="decorative-bar" />
          
          <h2 className="contact-title">
            Entre em contato
          </h2>
          
          <p className="contact-description">
            Oferecemos os melhores serviços em nosso campo. Sempre mantemos sua satisfação como principal prioridade.
          </p>
          
          {/* Container dos botões (modificado) */}
          <div className="contact-buttons">
            <button
              className="contact-button email-button"
              onClick={() => window.location.href = '/contato'}
            >
              <FaEnvelope className="button-icon" /> Fale Conosco
            </button>
            
            <button
              className="contact-button phone-button"
              onClick={() => window.location.href = 'tel:+5511999999999'}
            >
              <FaPhoneAlt className="button-icon" /> Ligar Agora
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-banner-container {
          position: relative;
          width: 100%;
          margin: 4rem 0;
          padding: 0;
          overflow: hidden;
        }
        
        .background-image-container {
          position: relative;
          width: 100%;
          height: clamp(300px, 60vh, 700px);
          overflow: hidden;
        }
        
        .background-image {
          position: absolute;
          width: 100%;
          height: 110%;
          object-fit: cover;
          object-position: center 30%;
          filter: brightness(0.7);
          transition: transform 0.5s ease, filter 0.5s ease;
        }
        
        .background-image-container:hover .background-image {
          transform: scale(1.03);
          filter: brightness(0.6);
        }
        
        .dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(29, 61, 82, 0.6), rgba(0, 149, 164, 0.4));
        }
        
        .contact-card {
          position: absolute;
          top: 41%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 650px;
          padding: 2.5rem 2rem;
          background: rgba(29, 61, 82, 0.95);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          text-align: center;
          color: white;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.4s ease;
          margin: 2rem 0;
        }
        
        .contact-card:hover {
          transform: translate(-50%, -50%) scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }
        
        .decorative-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #0095a4, #1D3D52);
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }
        
        .contact-title {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          margin-bottom: 1.2rem;
          font-weight: 700;
          color: white;
          line-height: 1.3;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .contact-description {
          font-size: clamp(1rem, 3vw, 1.2rem);
          line-height: 1.6;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          padding: 0 1rem;
        }
        
        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .contact-button {
          padding: 0.8rem 1.8rem;
          font-size: 1rem;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .email-button {
          background: #0095a4;
        }
        
        .phone-button {
          background: #1D3D52;
        }
        
        .contact-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .email-button:hover {
          background: #007a87;
        }
        
        .phone-button:hover {
          background: #152b3a;
        }
        
        .button-icon {
          font-size: 0.9em;
        }
        
        /* ========== RESPONSIVIDADE ========== */
        @media (max-width: 768px) {
          .contact-card {
            padding: 2rem 1.5rem;
            max-width: 85%;
          }
          
          .contact-title {
            font-size: 1.7rem;
            margin-bottom: 1rem;
          }
          
          .contact-description {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .contact-card {
            padding: 1.5rem 1.2rem;
            max-width: 90%;
            width: 85%;
          }
          
          .contact-title {
            font-size: 1.5rem;
            margin-bottom: 0.8rem;
          }
          
          .contact-description {
            font-size: 0.9rem;
            margin-bottom: 1.2rem;
          }
          
          .contact-button {
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 360px) {
          .contact-card {
            padding: 1.2rem 1rem;
            width: 90%;
          }
          
          .contact-title {
            font-size: 1.3rem;
          }
          
          .contact-description {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FaixaContato;