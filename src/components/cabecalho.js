import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Cabecalho = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <Navbar
      style={{
        position: 'fixed', // Fixa a navbar
        top: '33px', // Posiciona 20px abaixo do topo
        left: 0, // Alinha à esquerda
        width: '100%', // Ocupa toda a largura da tela
        height: '80px', // Altura da navbar
        zIndex: 1000, // Garante que a navbar fique acima de outros elementos
        backgroundColor: 'white', // Cor de fundo da navbar
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra para destacar a navbar
      }}
    >
      <Container>
        <Navbar.Brand className="mx-auto" href="/">
          <img
            src="/img/logo.png"
            width={isLogoHovered ? 90 : 80}
            height={isLogoHovered ? 90 : 80}
            className="d-inline-block align-top"
            alt="Logo"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            style={{
              transition: 'width 0.3s ease, height 0.3s ease',
            }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {['Sobre', 'Contato', 'Peça seu Orçamento'].map((link, index) => (
            <Nav.Link
              key={index}
              href={`/${link.toLowerCase().replace(/ /g, '-')}`}
              style={{
                fontSize: '15px',
                marginRight: '20px',
                color: '#333',
                fontWeight: 'bold',
                transform: hoveredLink === index ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#0095a4',
                  transition: 'opacity 0.3s ease',
                  opacity: hoveredLink === index ? 1 : 0,
                }}
              ></div>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Cabecalho;