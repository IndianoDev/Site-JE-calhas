import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { TiArrowSortedDown } from 'react-icons/ti';


const Cabecalho = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Itens da navbar
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    {
      name: 'Produtos ',
      href: '/Produtos/ProdutosPage',
      subItems: [
        'Calhas', 'Rufos', 'Coifas e Componentes',
        'Peças', 'Sob Medida', 'Telhado e Estrutura'
      ]
    }
  ];

  return (
    <>
      <div style={{ height: scrolled ? '15px' : '35px', transition: 'height 0.3s ease' }}></div>

      <Navbar
        expand="lg"
        collapseOnSelect
        fixed="top"
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
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
              alt="Logo"
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
              ':focus': { boxShadow: 'none' }
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
              {navItems.map((item, index) => (
                <div
                  key={index}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Faixa animada */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '0',
                      width: '100%',
                      height: '3px',
                      background: 'linear-gradient(90deg, #0095a4, #1D3D52)',
                      borderRadius: '3px',
                      transform: hoveredItem === index ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left center',
                      transition: 'transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)',
                      opacity: hoveredItem === index ? '1' : '0',
                      boxShadow: '0 2px 10px rgba(0, 149, 164, 0.4)'
                    }}
                  />

                  <Nav.Link
                    href={item.href}
                    style={{
                      color: '#1D3D52',
                      fontWeight: '600',
                      fontSize: '1rem',
                      padding: '8px 15px',
                      borderRadius: '6px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      ':hover': {
                        color: '#0095a4',
                        backgroundColor: 'rgba(0, 149, 164, 0.1)'
                      }
                    }}
                    onClick={() => setExpanded(false)}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      {item.name}
                      {item.subItems && <TiArrowSortedDown style={{ fontSize: '1rem' }} />}
                    </span>
                  </Nav.Link>

                  {/* Dropdown para Produtos */}
                  {item.subItems && hoveredItem === index && (


                    <div

                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                        minWidth: '200px',
                        zIndex: 1000,
                        padding: '15px 0',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        animation: 'fadeIn 0.3s ease-out',
                        marginTop: '10px',
                      }}

                    >
                      {item.subItems.map((subItem, subIndex) => (

                        <a

                          key={subIndex}
                          href={`/Produtos/${subItem.toLowerCase().replace(/ /g, '-')}`}
                          style={{
                            display: 'block',
                            padding: '8px 20px',
                            color: '#1D3D52',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                            ':hover': {
                              color: '#0095a4',
                              paddingLeft: '25px'
                            },
                            ':hover::before': {
                              content: '""',
                              position: 'absolute',
                              left: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '6px',
                              height: '6px',
                              backgroundColor: '#0095a4',
                              borderRadius: '50%'
                            }
                          }}
                          onClick={() => setExpanded(false)}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Botão de Orçamento com faixa animada */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setHoveredItem(navItems.length)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '0',
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #1D3D52, #0095a4)',
                    borderRadius: '3px',
                    transform: hoveredItem === navItems.length ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left center',
                    transition: 'transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)',
                    opacity: hoveredItem === navItems.length ? '1' : '0',
                    boxShadow: '0 2px 10px rgba(29, 61, 82, 0.4)'
                  }}
                />

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
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Cabecalho;