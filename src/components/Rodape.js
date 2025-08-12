import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Rodape = () => {
  const links = [
    { nome: 'Home', href: '/' },
    { nome: 'Empresa', href: '/sobre' },
    { nome: 'Produtos', href: '/Produtos/ProdutosPage' },
    { nome: 'Orçamento', href: '/contato' }
  ];

  return (
    <div style={{ overflowX: 'hidden' }}>
      <footer style={{
        background: 'linear-gradient(135deg, #1D3D52 0%, #2a5475 100%)',
        color: 'white',
        padding: '60px 0 20px',
        marginTop: '60px',
        boxShadow: '0 -4px 10px rgba(0,0,0,0.1)',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <Row className="align-items-start">
            {/* Coluna da Logo */}
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div style={{ textAlign: 'center' }}>
                <Image
                  src="/img/logo.png"
                  alt="JE Calhas"
                  width={150}
                  height={150}
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid white',
                    transition: 'transform 0.3s ease',
                    marginBottom: '15px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <p style={{ marginTop: '15px', fontSize: '0.9rem', opacity: '0.9' }}>
                  Excelência em serviços de calhas, rufos e coifas há mais de 10 anos.
                </p>
              </div>
            </Col>

            {/* Coluna Institucional */}
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                Institucional
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#4a90e2'
                }} />
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <Link
                      href={link.href}
                      className="footer-link"
                    >
                      {link.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Coluna Contato */}
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                Contato
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#4a90e2'
                }} />
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <FaPhone style={{ marginRight: '10px', color: '#4a90e2' }} />
                  <a href="tel:+5561991530796" className="contact-link">
                    (61) 99153-0796
                  </a>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <FaPhone style={{ marginRight: '10px', color: '#4a90e2' }} />
                  <a href="tel:+556132733582" className="contact-link">
                    (61) 3273-3582
                  </a>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <FaEnvelope style={{ marginRight: '10px', color: '#4a90e2' }} />
                  <a href="mailto:jecalhas@gmail.com" className="contact-link">
                    jecalhas@gmail.com
                  </a>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <FaMapMarkerAlt style={{ marginRight: '10px', color: '#4a90e2' }} />
                  <span>SHSN-Ceilandia</span>
                </li>
              </ul>
            </Col>

            {/* Coluna Redes Sociais */}
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                Redes Sociais
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#4a90e2'
                }} />
              </h5>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a
                  href="https://www.instagram.com/jecalhasbsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61558145102309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://wa.me/5561991530796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <hr style={{
                margin: '30px 0',
                borderColor: 'rgba(255,255,255,0.1)'
              }} />
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                opacity: 0.8
              }}>© {new Date().getFullYear()} JE Calhas. Todos os direitos reservados.</p>
            </Col>
          </Row>
        </div>

        <style jsx>{`
          /* Estilo para os links do footer */
          .footer-link {
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            display: block;
            padding: 5px 0;
          }
          
          .footer-link:hover {
            color: #4a90e2;
            padding-left: 10px;
          }
          
          /* Estilo para os links de contato */
          .contact-link {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          
          .contact-link:hover {
            color: #4a90e2;
          }
          
          /* Estilo para os ícones sociais */
          .social-icon {
            color: white;
            font-size: 24px;
            background-color: rgba(255,255,255,0.1);
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
            transform: translateY(-5px);
            background-color: rgba(255,255,255,0.2);
          }
          
          .instagram {
            color: #E1306C;
          }
          
          .facebook {
            color: #1877F2;
          }
          
          .whatsapp {
            color: #25D366;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Rodape;