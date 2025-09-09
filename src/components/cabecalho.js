import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { TiArrowSortedDown } from 'react-icons/ti';
// Ícones adicionados para o dropdown
import { FaRulerCombined, FaWarehouse, FaGripHorizontal } from 'react-icons/fa';
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

  // Itens da navbar com ícones adicionados aos sub-itens
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    {
      name: 'Produtos ',
      href: '/Produtos/ProdutosPage',
      subItems: [
        { name: 'Calhas', href: '/Produtos/calhas', icon: <FaGripHorizontal /> },
        { name: 'Rufos', href: '/Produtos/rufos', icon: <FaRulerCombined /> },
        { name: 'Telhado e Estrutura', href: '/Produtos/EstruturasMetalicas', icon: <FaWarehouse /> }
      ]
    }
  ];

  return (
    <>
      <div style={{ height: scrolled ? '15px' : '35px', transition: 'height 0.3s ease' }}></div>

      <Navbar
        onToggle={() => setExpanded(!expanded)}
        expanded={expanded}
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
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand style={{ marginRight: '40px' }}>
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
          </Link>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="custom-toggler"
          >
            {/* Mantive sua animação original do Toggler */}
            <span />
            <span />
            <span />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items: center" style={{ gap: '15px' }}>
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

                  <Link href={item.href} legacyBehavior>
                    <a
                      className="nav-link-custom"
                      onClick={() => setExpanded(false)}
                    >
                      {item.name}
                      {item.subItems && <TiArrowSortedDown style={{ fontSize: '1rem', marginLeft: '5px' }} />}
                    </a>
                  </Link>

                  {/* ----- DROPDOWN MELHORADO AQUI ----- */}
                  {item.subItems && hoveredItem === index && (
                    <div className="dropdown-menu-custom">
                      <div className="dropdown-arrow"></div>
                      {item.subItems.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.href} legacyBehavior>
                          <a
                            className="dropdown-item-custom"
                            onClick={() => setExpanded(false)}
                          >
                            <span className="dropdown-icon">{subItem.icon}</span>
                            {subItem.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/contato" legacyBehavior>
                <a className="cta-button" onClick={() => setExpanded(false)}>
                  Peça seu Orçamento
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx global>{`
        /* --- ESTILOS DO DROPDOWN MELHORADO --- */
        .dropdown-menu-custom {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          min-width: 240px;
          z-index: 1000;
          padding: 10px;
          border: 1px solid #f0f0f0;
          margin-top: 15px;
          animation: fadeInDropdown 0.3s ease-out forwards;
        }
        
        /* Seta que aponta para o link "Produtos" */
        .dropdown-menu-custom .dropdown-arrow {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background-color: white;
          border-top: 1px solid #f0f0f0;
          border-left: 1px solid #f0f0f0;
        }

        @keyframes fadeInDropdown {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown-item-custom {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 20px;
          color: #1D3D52;
          text-decoration: none;
          transition: all 0.2s ease;
          border-radius: 8px;
          font-weight: 500;
        }
        .dropdown-item-custom:hover {
          background-color: #f0f8ff; /* Azul bem claro */
          color: #0095a4;
          transform: translateX(5px);
        }
        .dropdown-icon {
          color: #0095a4;
          font-size: 1.1rem;
        }
        /* ------------------------------------------- */

        .cta-button {
          display: inline-block;
          padding: 12px 28px;
          background: linear-gradient(45deg, #0095a4, #00b8c8);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 149, 164, 0.3);
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(0, 149, 164, 0.4);
        }

        .nav-link-custom {
          color: #1D3D52;
          font-weight: 600;
          font-size: 1rem;
          padding: 8px 15px;
          border-radius: 6px;
          transition: all 0.3s ease;
          position: relative;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        
        .custom-toggler {
          border: none !important;
          padding: 0 !important;
          background-color: transparent !important;
        }
        .navbar-toggler-icon { display: none; }

        .custom-toggler span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: #1D3D52;
          margin: 5px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .navbar-toggler[aria-expanded="true"] span:nth-of-type(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar-toggler[aria-expanded="true"] span:nth-of-type(2) {
          opacity: 0;
        }
        .navbar-toggler[aria-expanded="true"] span:nth-of-type(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        
        a {
          text-decoration: none !important;
        }
      `}</style>
    </>
  );
};

export default Cabecalho;