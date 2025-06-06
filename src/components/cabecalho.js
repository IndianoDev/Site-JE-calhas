import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Cabecalho = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Espaço reservado para a navbar fixa */}
      <div style={{ height: scrolled ? '15px' : '35px', transition: 'height 0.3s ease' }}></div>
      
      <Navbar
        expand="lg"
        collapseOnSelect
        fixed="top"
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled 
            ? '0 4px 20px rgba(0, 0, 0, 0.1)'
            : '0 2px 10px rgba(0, 0, 0, 0.05)',
          padding: '10px 0',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1030
        }}
      >
        <Container style={{ maxWidth: '1200px' }}>
          <Navbar.Brand href="/" style={{ marginRight: '40px' }}>
            <img
              src="/img/logo.png"
              width={scrolled ? 70 : 80}
              height={scrolled ? 70 : 80}
              alt="Logo JE Calhas"
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transform: scrolled ? 'scale(0.95)' : 'scale(1)',
                ':hover': {
                  transform: scrolled ? 'scale(1)' : 'scale(1.05)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)'
                }
              }}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            style={{
              border: 'none',
              padding: '10px 15px',
              backgroundColor: 'transparent',
              ':focus': {
                boxShadow: 'none'
              }
            }}
          >
            <span style={{
              display: 'block',
              width: '25px',
              height: '3px',
              backgroundColor: '#1D3D52',
              margin: '5px 0',
              transition: 'all 0.3s ease',
              transform: expanded ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}></span>
            <span style={{
              display: 'block',
              width: '25px',
              height: '3px',
              backgroundColor: '#1D3D52',
              margin: '5px 0',
              opacity: expanded ? '0' : '1',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '25px',
              height: '3px',
              backgroundColor: '#1D3D52',
              margin: '5px 0',
              transition: 'all 0.3s ease',
              transform: expanded ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }}></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center" style={{ gap: '15px' }}>
              {/* Link Home corrigido para apontar para a raiz */}
              <Nav.Link
                href="/"  // Alterado para apontar diretamente para a raiz
                style={{
                  color: '#1D3D52',
                  fontWeight: '600',
                  fontSize: '1rem',
                  padding: '8px 15px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    color: '#0095a4',
                    backgroundColor: 'rgba(0, 149, 164, 0.1)'
                  }
                }}
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>

              {/* Outros links */}
              {['Sobre', 'Produtos'].map((item) => (
                <Nav.Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  style={{
                    color: '#1D3D52',
                    fontWeight: '600',
                    fontSize: '1rem',
                    padding: '8px 15px',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      color: '#0095a4',
                      backgroundColor: 'rgba(0, 149, 164, 0.1)'
                    }
                  }}
                  onClick={() => setExpanded(false)}
                >
                  {item}
                </Nav.Link>
              ))}
              
              {/* Botão de orçamento destacado */}
              <Button
                href="/contato"
                variant="primary"
                style={{
                  backgroundColor: '#0095a4',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 25px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 149, 164, 0.3)',
                  ':hover': {
                    backgroundColor: '#007a87',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 149, 164, 0.4)'
                  }
                }}
                onClick={() => setExpanded(false)}
              >
                Peça seu Orçamento
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;