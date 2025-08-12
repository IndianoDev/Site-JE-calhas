import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Rodape2 = () => {
  return (
    <div style={{ overflowX: 'hidden' }}> {/* Adicionado para evitar barra de rolagem horizontal */}
      <footer style={{
        background: 'linear-gradient(135deg, #1D3D52 0%, #2a5475 100%)',
        color: 'white',
        padding: '60px 0 20px',
        marginTop: '60px',
        boxShadow: '0 -4px 10px rgba(0,0,0,0.1)',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <Container style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Restante do conteúdo do footer permanece igual */}
          <Row className="align-items-start">
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div style={{ textAlign: 'center' }}>
                <Image
                  src="/img/logo.png"
                  alt="JE Calhas"
                  width={150}
                  height={150}
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid white',
                    transition: 'transform 0.3s ease',
                    marginBottom: '15px'
                  }}
                />
                <p style={{ marginTop: '15px', fontSize: '0.9rem', opacity: '0.9' }}>
                  Excelência em serviços de calhas, rufos e coifas há mais de 10 anos.
                </p>
              </div>
            </Col>

            {/* Colunas Institucional, Contato e Redes Sociais */}
            {/* ... (mantenha o mesmo conteúdo das outras colunas) ... */}
          </Row>

          <Row>
            <Col className="text-center">
              <hr style={{ 
                margin: '30px 0', 
                borderColor: 'rgba(255,255,255,0.1)' 
              }} />
              <p style={{ 
                margin: 0,
                fontSize: '0.9rem',
                opacity: 0.8
              }}>© {new Date().getFullYear()} JE Calhas. Todos os direitos reservados.</p>
            </Col>
          </Row>
        </Container>

        <style jsx>{`
          /* Estilos permanecem os mesmos */
          .footer-link {
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            display: block;
            padding: 5px 0;
          }
          
          .footer-link:hover {
            color: #4a90e2;
            padding-left: 10px;
          }
          
          .contact-link {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          
          .contact-link:hover {
            color: #4a90e2;
          }
          
          .social-icon {
            color: white;
            font-size: 24px;
            background-color: rgba(255,255,255,0.1);
            border-radius: 50%;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          
          .social-icon:hover {
            transform: translateY(-5px);
            background-color: rgba(255,255,255,0.2);
          }
          
          .instagram {
            color: #E1306C;
          }
          
          .facebook {
            color: #1877F2;
          }
          
          .whatsapp {
            color: #25D366;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Rodape2;