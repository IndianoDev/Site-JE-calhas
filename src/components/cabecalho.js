import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const Cabecalho = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: scrolled ? '80px' : '100px', transition: 'height 0.3s ease' }}></div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <Container style={{ maxWidth: '1200px' }}>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand>
              <Image
                src="/img/logo.png"
                width={scrolled ? 70 : 80}
                height={scrolled ? 70 : 80}
                alt="Logo"
                className="logo-image"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler">
            <div className="toggler-icon-wrapper"></div>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center" style={{ gap: '0.5rem' }}>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link className="nav-link-custom">Home</Nav.Link>
              </Link>
              <Link href="/sobre" passHref legacyBehavior>
                <Nav.Link className="nav-link-custom">Sobre</Nav.Link>
              </Link>
              
              {/* COMPONENTE DROPDOWN CORRIGIDO E FINAL */}
              <NavDropdown title="Produtos" id="produtos-dropdown" className="nav-link-custom">
               
                <NavDropdown.Divider />
                <Link href="/Produtos/calhas" passHref legacyBehavior>
                  <NavDropdown.Item className="dropdown-item-custom"> Calhas</NavDropdown.Item>
                </Link>
                <Link href="/Produtos/rufos" passHref legacyBehavior>
                  <NavDropdown.Item className="dropdown-item-custom"> Rufos</NavDropdown.Item>
                </Link>
                <Link href="/Produtos/EstruturasMetalicas" passHref legacyBehavior>
                  <NavDropdown.Item className="dropdown-item-custom"> Estruturas</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <Link href="/contato" passHref legacyBehavior>
                <Nav.Link className="cta-button">
                  Peça seu Orçamento
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx global>{`
        /* --- Estilos Gerais da Navbar --- */
        .custom-navbar {
          background-color: rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s ease-in-out !important;
          padding-top: ${scrolled ? '10px' : '15px'} !important;
          padding-bottom: ${scrolled ? '10px' : '15px'} !important;
        }
        .custom-navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        .logo-image {
          border-radius: 50%;
          transition: all 0.3s ease-in-out !important;
        }

        /* --- Estilo dos Links --- */
        .nav-link-custom {
          color: #1D3D52 !important;
          font-weight: 600 !important;
          position: relative;
          padding: 8px 15px !important;
        }
        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background-color: #0095a4;
          transition: width 0.3s ease;
        }
        .nav-link-custom:hover::after {
          width: 50%;
        }

        /* --- Dropdown de Produtos --- */
       
      
        .dropdown-menu {
          border-radius: 12px !important;
          border: 1px solid #f0f0f0 !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          margin-top: !important;
          animation: fadeInDropdown 0.3s ease forwards;
          padding: 10px !important;
        }
        /* Faz o dropdown aparecer no HOVER em telas de DESKTOP */
        @media (min-width: 992px) {
          .nav-item.dropdown:hover .dropdown-menu {
            display: block;
          }
        }
        @keyframes fadeInDropdown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-item-custom {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          padding: 12px 20px !important;
          font-weight: 500 !important;
          color: #333 !important;
          transition: all 0.2s ease;
          border-radius: 8px;
        }
        .main-product-link {
          font-weight: 700 !important;
          color: #1D3D52 !important;
        }
        .dropdown-item-custom:hover {
          background-color: #f0f8ff !important;
          color: #0095a4 !important;
        }
        .dropdown-icon {
          color: #0095a4;
        }

        /* --- Botão de Orçamento (CTA) --- */
        .cta-button {
          background: linear-gradient(45deg, #0095a4, #00b8c8);
          color: white !important;
          border-radius: 50px !important;
          padding: 12px 28px !important;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 149, 164, 0.3);
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 149, 164, 0.4);
        }
        .cta-button::after {
          display: none !important;
        }
        
        /* --- Toggler (Hambúrguer) Customizado --- */
        .custom-toggler {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .navbar-toggler-icon { display: none; }
        .toggler-icon-wrapper {
          width: 25px;
          height: 18px;
          position: relative;
        }
        .toggler-icon-wrapper::before,
        .toggler-icon-wrapper::after {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #1D3D52;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        .toggler-icon-wrapper::before { top: 0; }
        .toggler-icon-wrapper::after { bottom: 0; }
        .navbar-toggler[aria-expanded="true"] .toggler-icon-wrapper::before {
           transform: translateY(7.5px) rotate(45deg);
        }
        .navbar-toggler[aria-expanded="true"] .toggler-icon-wrapper::after {
            transform: translateY(-7.5px) rotate(-45deg);
        }
      `}</style>
    </>
  );
};

export default Cabecalho;