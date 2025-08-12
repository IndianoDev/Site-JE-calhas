import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { TiArrowSortedDown } from 'react-icons/ti';
import Image from 'next/image';
import Link from 'next/link';

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
        { name: 'Calhas', href: '/Produtos/calhas' },
        { name: 'Rufos', href: '/Produtos/rufos' },
        { name: 'Telhado e Estrutura', href: '/Produtos/EstruturasMetalicas' }
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
            <Image
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

                  <Link
                    href={item.href}
                    style={{
                      color: '#1D3D52',
                      fontWeight: '600',
                      fontSize: '1rem',
                      padding: '8px 15px',
                      borderRadius: '6px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      textDecoration: 'none',
                    }}
                    onClick={() => setExpanded(false)}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      {item.name}
                      {item.subItems && <TiArrowSortedDown style={{ fontSize: '1rem' }} />}
                    </span>
                  </Link>

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
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          style={{
                            display: 'block',
                            padding: '8px 20px',
                            color: '#1D3D52',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                          }}
                          onClick={() => setExpanded(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

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

                <Link
                  href="/contato"
                  style={{
                    backgroundColor: '#0095a4',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 25px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 149, 164, 0.3)',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                  onClick={() => setExpanded(false)}
                >
                  Peça seu Orçamento
                </Link>
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