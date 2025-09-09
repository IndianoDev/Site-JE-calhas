import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const SobreNos = () => {
  // Hook para responsividade amigável ao Next.js
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="about-section">
      <div className="container-custom">
        <div className="image-column">
          <div className="image-wrapper">
            <Image 
              src="/img/PHOTO-2024-03-31-16-05-40 2.jpg"
              alt="Equipe JE Calhas em serviço"
              layout="fill"
              objectFit="cover"
              className="about-image"
            />
          </div>
        </div>
        
        <div className="text-column">
          <p className="subtitle">SOBRE NÓS</p>
          <h2 className="title">
            Somos a JE Calhas
            <span className="title-underline"></span>
          </h2>
          <p className="description">
            Especialistas em soluções para coberturas e sistemas de drenagem há mais de 10 anos, combinando expertise técnica com atendimento personalizado para proteger o seu patrimônio.
          </p>
          <Link href="/sobre" passHref legacyBehavior>
            <a className="cta-button">
              Conheça Nossa História
              <span className="button-icon">
                <FaArrowRight />
              </span>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-section {
          background-color: #ffffff;
          padding: ${isMobile ? '60px 20px' : '100px 20px'};
          overflow: hidden; /* Garante que as animações não causem barras de rolagem */
        }
        
        .container-custom {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: ${isMobile ? 'column' : 'row'};
          align-items: center;
          gap: ${isMobile ? '40px' : '60px'};
        }
        
        .image-column, .text-column {
          flex: 1;
          width: 100%;
        }

        .image-column {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .text-column {
          text-align: ${isMobile ? 'center' : 'left'};
          animation: fadeInUp 0.8s ease-out 0.2s forwards; /* Atraso de 0.2s */
          opacity: 0; /* Começa invisível para a animação */
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 75%; /* Proporção 4:3 */
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(29, 61, 82, 0.15);
        }

        :global(.about-image) {
          transition: transform 0.4s ease-out !important;
        }

        .image-wrapper:hover :global(.about-image) {
          transform: scale(1.05);
        }
        
        .subtitle {
          color: #0095a4;
          font-size: ${isMobile ? '0.9rem' : '1rem'};
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        
        .title {
          font-size: ${isMobile ? '2rem' : '2.8rem'};
          font-weight: 700;
          color: #1D3D52;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
          position: relative;
          display: inline-block;
          padding-bottom: 10px;
        }
        
        .title-underline {
          position: absolute;
          bottom: 0;
          left: ${isMobile ? '50%' : '0'};
          transform: ${isMobile ? 'translateX(-50%)' : 'translateX(0)'};
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #0095a4, #00c2d4);
          border-radius: 2px;
        }
        
        .description {
          color: #555;
          font-size: ${isMobile ? '1rem' : '1.1rem'};
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 500px;
          margin-left: ${isMobile ? 'auto' : '0'};
          margin-right: ${isMobile ? 'auto' : '0'};
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background-color: #1D3D52;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(29, 61, 82, 0.2);
        }

        .cta-button:hover {
          background-color: #0095a4;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 149, 164, 0.3);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-icon {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
};

export default SobreNos;