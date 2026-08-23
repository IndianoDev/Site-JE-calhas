import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

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
      <div className="header-wrapper fixed-top">
        {/* Faixa Superior (Top Bar) */}
        <div className={`top-bar-container ${scrolled ? 'top-bar-hidden' : ''}`}>
          <Container style={{ maxWidth: '1200px' }} className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="top-bar-left d-flex align-items-center gap-3">
              <span className="top-bar-item">
                <FaClock className="top-bar-icon" /> Segunda a Sábado: 08:00 às 18:00
              </span>
              <span className="top-bar-item d-none d-md-inline">
                <FaMapMarkerAlt className="top-bar-icon" /> SHSN - Ceilândia, DF
              </span>
            </div>
            <div className="top-bar-right d-flex align-items-center gap-3">
              <a href="tel:+5561991530796" className="top-bar-link d-none d-sm-inline">
                <FaPhone className="top-bar-icon" /> (61) 99153-0796
              </a>
              <a
                href="https://wa.me/5561991530796"
                target="_blank"
                rel="noopener noreferrer"
                className="top-bar-link top-bar-whatsapp"
              >
                <FaWhatsapp className="top-bar-icon" /> Atendimento via WhatsApp
              </a>
            </div>
          </Container>
        </div>

        {/* Navbar Principal */}
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
        >
          <Container style={{ maxWidth: '1200px' }}>
            <Navbar.Brand as={Link} href="/">
              <Image
                src="/img/logo.png"
                width={scrolled ? 60 : 75}
                height={scrolled ? 60 : 75}
                alt="Logo JE Calhas"
                className="logo-image"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler">
              <div className="toggler-icon-wrapper"></div>
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto align-items-lg-center" style={{ gap: '0.5rem' }}>
                <Nav.Link as={Link} href="/" className="nav-link-custom">Home</Nav.Link>
                <Nav.Link as={Link} href="/sobre" className="nav-link-custom">Sobre</Nav.Link>

                <NavDropdown title="Produtos" id="produtos-dropdown" className="nav-link-custom-dropdown">
                  <NavDropdown.Item as={Link} href="/Produtos/calhas" className="dropdown-item-custom">
                    Calhas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/Produtos/rufos" className="dropdown-item-custom">
                    Rufos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/Produtos/EstruturasMetalicas" className="dropdown-item-custom">
                    Estruturas Metálicas
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} href="/contato" className="cta-button">
                  Peça seu Orçamento
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* Spacer para evitar que o conteúdo fique escondido sob a navbar fixa */}
      <div className={`header-spacer ${scrolled ? 'compact' : ''}`}></div>
    </>
  );
};

export default Cabecalho;