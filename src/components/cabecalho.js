import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

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
    <Navbar
      expand="md"
      collapseOnSelect
      fixed="top"
      style={{
        top: '0',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled 
          ? '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
          : '0 2px 8px rgba(0, 0, 0, 0.05)',
        padding: scrolled ? '8px 0' : '15px 0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: `translateY(${expanded ? '0' : '0'})`,
      }}
    >
      <Container style={{ maxWidth: '1200px', padding: '0 20px' }}>
        <Navbar.Brand href="/" className="mx-auto mx-md-0">
          <img
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Logo JE Calhas"
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: scrolled
                ? '0 4px 12px rgba(0, 0, 0, 0.1)'
                : '0 2px 6px rgba(0, 0, 0, 0.05)',
              transform: `scale(${scrolled ? '0.9' : '1'})`,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = `scale(${scrolled ? '0.95' : '1.05'})`;
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = `scale(${scrolled ? '0.9' : '1'})`;
              e.currentTarget.style.boxShadow = scrolled
                ? '0 4px 12px rgba(0, 0, 0, 0.1)'
                : '0 2px 6px rgba(0, 0, 0, 0.05)';
            }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          style={{
            border: 'none',
            padding: '12px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: 'transparent',
            borderRadius: '8px',
            marginRight: '5px',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = 'rgba(74, 144, 226, 0.1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              href="/"
              style={{
                fontSize: '15px',
                color: '#333',
                fontWeight: '600',
                margin: '0 15px',
                padding: '10px 16px',
                borderRadius: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(74, 144, 226, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.color = '#4a90e2';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.color = '#333';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>

            {['Sobre', 'Contato', 'Peça seu Orçamento'].map((link, index) => (
              <Nav.Link
                key={index}
                href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                style={{
                  fontSize: '15px',
                  color: '#333',
                  fontWeight: 'bold',
                  margin: '0 15px',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => setExpanded(false)}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Cabecalho;