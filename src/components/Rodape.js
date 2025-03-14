import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'; // Importando ícones

const Rodape = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1D3D52', 
      color: 'white', 
      padding: '20px 0', 
      marginTop: '40px' 
    }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Institucional</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Início</a></li>
              <li><a href="/empresa" style={{ color: 'white', textDecoration: 'none' }}>Empresa</a></li>
              <li><a href="/produtos" style={{ color: 'white', textDecoration: 'none' }}>Produtos</a></li>
              <li><a href="/orcamento" style={{ color: 'white', textDecoration: 'none' }}>Orçamento</a></li>
              <li><a href="/mapa-do-site" style={{ color: 'white', textDecoration: 'none' }}>Mapa do Site</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Produtos</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/calhas" style={{ color: 'white', textDecoration: 'none' }}>Calhas</a></li>
              <li><a href="/rufos" style={{ color: 'white', textDecoration: 'none' }}>Rufos</a></li>
              <li><a href="/cofias" style={{ color: 'white', textDecoration: 'none' }}>Cofias e Componentes</a></li>
              <li><a href="/pecas-sob-medida" style={{ color: 'white', textDecoration: 'none' }}>Peças Sob Medida</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>(61) 99153-0796</li>
              <li>(61) 3273-3582</li>
              <li>jecalhas@gmail.com</li>
              <li>SHSN-Ceilandia</li>
            </ul>
            <div style={{ marginTop: '10px' }}>
              <a href="https://www.instagram.com/jecalhas" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61558145102309" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
                <FaFacebook size={24} />
              </a>
              <a href="https://wa.me/5561991530796" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <FaWhatsapp size={24} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{ marginTop: '20px' }}>
            <p style={{ margin: 0 }}>© 2023 JE Calhas. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Rodape;