import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Cabecalho = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      fixed="top"
      style={{
        top: '0',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container>
        <Navbar.Brand href="/" className="mx-auto mx-md-0">
          <img
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Logo"
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          style={{ border: 'none' }}
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Link Home adicionado aqui */}
            <Nav.Link
              href="/"
              style={{
                fontSize: '15px',
                color: '#333',
                fontWeight: 'bold',
                margin: '0 10px',
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
                  margin: '0 10px',
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