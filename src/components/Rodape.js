import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
// Ícone da seta para cima foi trocado
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoArrowUp } from 'react-icons/io5'; // Usando um ícone mais compatível
import Image from 'next/image';
import Link from 'next/link';

const Rodape = () => {
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    { nome: 'Home', href: '/' },
    { nome: 'Empresa', href: '/sobre' },
    { nome: 'Produtos', href: '/Produtos/ProdutosPage' },
    { nome: 'Orçamento', href: '/contato' }
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <Row className="align-items-start gy-5">
            {/* Coluna da Logo */}
            <Col lg={3} md={6} className="text-center text-md-start">
              <div className="logo-section">
                <Image
                  src="/img/logo.png"
                  alt="JE Calhas"
                  width={120}
                  height={120}
                  className="footer-logo"
                />
                <h4 className="footer-company-name">JE Calhas</h4>
                <p className="footer-slogan">
                  Protegendo seu patrimônio com qualidade e expertise.
                </p>
              </div>
            </Col>

            {/* Coluna Institucional */}
            <Col lg={3} md={6} xs={12} className="footer-col">
              <h5 className="footer-title">Institucional</h5>
              <ul className="footer-list">
                {links.map((link) => (
                  <li key={link.nome}>
                    <Link href={link.href} legacyBehavior>
                      <a className="footer-link">{link.nome}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Coluna Contato */}
            <Col lg={3} md={6} xs={12} className="footer-col">
              <h5 className="footer-title">Contato</h5>
              <ul className="footer-list contact-list">
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:+5561991530796" className="footer-link">(61) 99153-0796</a>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:+556132733582" className="footer-link">(61) 3273-3582</a>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:jecalhas@gmail.com" className="footer-link">jecalhas@gmail.com</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>SHSN - Ceilândia, DF</span>
                </li>
              </ul>
            </Col>

            {/* Coluna Redes Sociais */}
            <Col lg={3} md={6} xs={12} className="footer-col">
              <h5 className="footer-title">Redes Sociais</h5>
              <p className="footer-social-text">Acompanhe nosso trabalho:</p>
              <div className="social-icons-container">
                <a href="https://www.instagram.com/jecalhasbsb" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61558145102309" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaFacebook />
                </a>
                <a href="https://wa.me/5561991530796" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaWhatsapp />
                </a>
              </div>
            </Col>
          </Row>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} JE Calhas. Todos os direitos reservados.</p>
          </div>
        </div>

        {/* Botão Voltar ao Topo */}
        {isVisible && (
          <button onClick={scrollToTop} className="back-to-top" title="Voltar ao topo">
            <IoArrowUp /> {/* ÍCONE ALTERADO AQUI */}
          </button>
        )}
      </footer>

      <style jsx>{`
        /* ... (todos os seus outros estilos do rodapé continuam aqui) ... */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-container {
          background: #1D3D52;
          color: rgba(255, 255, 255, 0.8);
          padding: 80px 0 20px;
          margin-top: 60px;
          position: relative;
          width: 100%;
          animation: fadeIn 0.8s ease-out;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        .logo-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        :global(.footer-logo) {
          border-radius: 50%;
          border: 3px solid #0095a4;
          box-shadow: 0 0 15px rgba(0, 149, 164, 0.5);
          margin-bottom: 1rem;
        }
        .footer-company-name {
          color: white;
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .footer-slogan {
          font-size: 0.9rem;
          opacity: 0.7;
          max-width: 250px;
        }
        .footer-col {
          padding-left: 2rem;
          position: relative;
        }
        @media (min-width: 992px) {
          .footer-col:not(:first-child)::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10%;
            height: 80%;
            width: 1px;
            background: rgba(255, 255, 255, 0.1);
          }
        }
        .footer-title {
          color: white;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 10px;
        }
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background-color: #0095a4;
          border-radius: 3px;
        }
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-list li {
          margin-bottom: 15px;
        }
        .contact-list li {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .contact-icon {
          color: #0095a4;
          font-size: 1.1rem;
        }
        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #0095a4;
          padding-left: 5px;
        }
        .footer-social-text {
          margin-bottom: 1rem;
        }
        .social-icons-container {
          display: flex;
          gap: 15px;
        }
        .social-icon {
          color: #1D3D52;
          font-size: 1.5rem;
          background-color: white;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          background-color: #0095a4;
          color: white;
          box-shadow: 0 8px 15px rgba(0, 149, 164, 0.3);
        }
        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
          opacity: 0.7;
        }
        .back-to-top {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background-color: #0095a4;
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          transition: all 0.4s ease;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
        }
        .back-to-top:hover {
          background-color: #1D3D52;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Rodape;