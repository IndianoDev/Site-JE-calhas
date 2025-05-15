import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Rodape2 = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1D3D52 0%, #2a5475 100%)',
      color: 'white',
      padding: '60px 0 20px',
      marginTop: '60px',
      boxShadow: '0 -4px 10px rgba(0,0,0,0.1)'
    }}>
      <Container>
        <Row className="align-items-start">
          {/* Coluna da Logo */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div style={{ textAlign: 'center' }}>
              <img
                src="/img/logo.png"
                alt="JE Calhas"
                style={{
                  width: '150px',
                  height: '150px',
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
              {['Início', 'Empresa', 'Produtos', 'Orçamento'].map((item, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={item === 'Início' ? '/' : `/${item.toLowerCase()}`}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      padding: '5px 0'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#4a90e2';
                      e.currentTarget.style.paddingLeft = '10px';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {item}
                  </a>
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
                <a href="tel:+5561991530796" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}
                   onMouseOver={(e) => e.currentTarget.style.color = '#4a90e2'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                >(61) 99153-0796</a>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <FaPhone style={{ marginRight: '10px', color: '#4a90e2' }} />
                <a href="tel:+556132733582" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}
                   onMouseOver={(e) => e.currentTarget.style.color = '#4a90e2'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                >(61) 3273-3582</a>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <FaEnvelope style={{ marginRight: '10px', color: '#4a90e2' }} />
                <a href="mailto:jecalhas@gmail.com" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}
                   onMouseOver={(e) => e.currentTarget.style.color = '#4a90e2'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                >jecalhas@gmail.com</a>
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
                href="https://www.instagram.com/suaempresa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#E1306C',
                  fontSize: '24px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/suaempresa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1877F2',
                  fontSize: '24px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/5561991530796"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#25D366',
                  fontSize: '24px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
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
      </Container>
    </footer>
  );
};

export default Rodape2;