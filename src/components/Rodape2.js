import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'; // Importando ícones

const Rodape2 = () => {
    return (
        <footer style={{ 
          backgroundColor: 'white', 
          color: 'black', 
          padding: '40px 0 20px',
          marginTop: '40px'
        }}>
          <Container>
            <Row className="align-items-center">
              {/* Coluna da Logo */}
              <Col md={3} className="text-center text-md-start mb-4 mb-md-0">
                <img
                  src="/img/logo.png" // Caminho da sua logo
                  alt="JE Calhas"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  
                  }}
                />
              </Col>
    
              {/* Coluna Institucional */}
              <Col md={3}>
                <h5>Institucional</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><a href="/" style={{ color: 'black', textDecoration: 'none' }}>Início</a></li>
                  <li><a href="/sobre" style={{ color: 'black', textDecoration: 'none' }}>Empresa</a></li>
                  <li><a href="/produtos" style={{ color: 'black', textDecoration: 'none' }}>Produtos</a></li>
                  <li><a href="/orcamento" style={{ color: 'black', textDecoration: 'none' }}>Orçamento</a></li>
                </ul>
              </Col>
    
              {/* Coluna de Contato */}
              <Col md={3}>
                <h5>Contato</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>(61) 99153-0796</li>
                  <li>(61) 3273-3582</li>
                  <li>jecalhas@gmail.com</li>
                  <li>SHSN-Ceilandia</li>
                </ul>
              </Col>
    
              {/* Coluna Redes Sociais */}
              <Col md={3}>
                <h5>Redes Sociais</h5>
                <div style={{ fontSize: '40px' }}>
                  <a href="https://www.instagram.com/suaempresa" target="_blank" rel="noopener noreferrer" style={{ color: 'pink', marginRight: '15px' }}>
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com/suaempresa" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', marginRight: '15px' }}>
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/5561991530796" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
                    <FaWhatsapp />
                  </a>
                </div>
              </Col>
            </Row>
    
            <Row>
              <Col className="text-center mt-4">
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} JE Calhas. Todos os direitos reservados.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      );
    };
    

export default Rodape2;