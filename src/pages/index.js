import React, { useState, useEffect } from 'react';
import Pagina from '../components/pagina';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rodape from '@/components/Rodape';
import FaixaContato from '@/components/FaixaContato';
import Head from 'next/head';
import SobreNos from '@/components/SobreNos';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import Link from 'next/link';

import { FaArrowRight } from 'react-icons/fa';


const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  const data = [
    { id: '1', image: '/img/1.png', imageMobile: '/img/1-mobile.png', title: 'Soluções em Calhas', subtitle: 'Telhado, Calhas, Rufos e Coifa' },
    { id: '2', image: '/img/2.png', imageMobile: '/img/2-mobile.png', title: 'Serralheria em Geral', subtitle: 'Portões, grades etc.' },
    { id: '3', image: '/img/3.png', imageMobile: '/img/3-mobile.png', title: 'Estrutura Metálicas', subtitle: 'Montagem de Telhado, galpão e Mezanino.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          fade: false
        }
      }
    ]
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Duas imagens com controle via CSS (sem CLS) — classes em cabecalho.css
  const ResponsiveSliderImage = ({ item }) => (
    <>
      <Image
        src={item.image}
        alt={item.title}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="slider-img-desktop"
        priority={item.id === '1'}
      />
      {item.imageMobile && (
        <Image
          src={item.imageMobile}
          alt={item.title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          className="slider-img-mobile"
          priority={item.id === '1'}
        />
      )}
    </>
  );

  return (
    <>
      <Head>
        <title>JE Calhas - Soluções em Coberturas e Calhas</title>
        <meta name="description" content="Especialistas em calhas e coberturas com qualidade superior e instalação profissional" />
      </Head>

      <Pagina />

      {/* ✅ isClient removido — slider renderiza no servidor (elimina CLS) */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        height: isMobile ? '50vh' : '80vh',
        maxHeight: isMobile ? '500px' : '800px'
      }}>
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id}>
                <div style={{
                  position: 'relative',
                  height: isMobile ? '50vh' : '80vh',
                  maxHeight: isMobile ? '500px' : '800px'
                }}>
                  <ResponsiveSliderImage item={item} />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: isMobile ? '30%' : '40%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
                    zIndex: 1
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: isMobile ? '15%' : '20%',
                    left: 0,
                    right: 0,
                    padding: isMobile ? '15px' : '40px',
                    color: 'white',
                    textAlign: 'center',
                    zIndex: 2
                  }}>
                    <h1 style={{
                      fontSize: isMobile ? '1.5rem' : '3rem',
                      fontWeight: 700,
                      marginBottom: isMobile ? '5px' : '10px',
                      textShadow: '2px 2px 6px rgba(0,0,0,0.10)',
                      lineHeight: '1.2'
                    }}>{item.title}</h1>
                    <p style={{
                      fontSize: isMobile ? '0.9rem' : '1.5rem',
                      marginBottom: isMobile ? '15px' : '20px',
                      textShadow: '1px 1px 4px rgba(0,0,0,2.9)',
                      opacity: 0.95
                    }}>{item.subtitle}</p>
                    
                    {/* BOTÃO "FAÇA UM ORÇAMENTO" */}
                    <Link href="/contato" className="hero-button">
                      Faça um Orçamento!
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      {/* Seção de Serviços em Destaque */}
      <div style={{
        textAlign: 'center',
        margin: isMobile ? '40px 0' : '80px 0',
        padding: '0 20px',
        fontFamily: '"Montserrat", sans-serif'
      }}>
        {/* ... (código da seção de serviços que não foi alterado) ... */}
         <div style={{
        fontSize: isMobile ? '0.8rem' : '1rem',
        color: '#0095a4',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '10px'
      }}>
        Conheça nossos
      </div>
      <h2 style={{
        fontSize: isMobile ? '1.8rem' : '2.5rem',
        fontWeight: 'bold',
        color: '#1D3D52',
        margin: '0 0 30px 0',
        position: 'relative',
        display: 'inline-block'
      }}>
        Serviços em Destaque
        <span style={{
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isMobile ? '60px' : '80px',
          height: '3px',
          backgroundColor: '#0095a4',
        }}></span>
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '50px',
        maxWidth: '1200px',
        margin: '50px auto 0'
      }}>
          {/* ... (código dos cards de serviço que não foi alterado) ... */}
           {/* Card 1 - Estruturas Metálicas */}
           <div className="service-card">
            <div style={{ position: 'relative', height: isMobile ? '180px' : '220px', overflow: 'hidden' }}>
              <Image src="/img/PHOTO-2024-03-31-15-56-42 2.jpg" alt="Estruturas Metálicas" fill={true} style={{ objectFit: 'cover' }} />
              <div className="card-overlay">
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>Estruturas Metálicas</h3>
              </div>
            </div>
            <div className="card-content">
              <p>Soluções robustas e personalizadas para telhados, galpões e mezaninos.</p>
              <Link href="/Produtos/EstruturasMetalicas" className="service-button teal">
                Ver Detalhes <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="service-card">
            <div style={{ position: 'relative', height: isMobile ? '180px' : '220px', overflow: 'hidden' }}>
              <Image src="/img/foto de calha 1 (2).jpg" alt="Calhas" fill={true} style={{ objectFit: 'cover' }} />
              <div className="card-overlay">
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>Calhas Premium</h3>
              </div>
            </div>
            <div className="card-content">
              <p>Sistemas completos de drenagem com alta durabilidade e acabamento impecável.</p>
              <Link href="/Produtos/calhas" className="service-button dark-blue">
                Ver Detalhes <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Card 3 - Rufos */}
          <div className="service-card">
            <div style={{ position: 'relative', height: isMobile ? '180px' : '220px', overflow: 'hidden' }}>
              <Image src="/img/PHOTO-2024-03-31-21-31-30 2.jpg" alt="Rufos" fill={true} style={{ objectFit: 'cover' }} />
              <div className="card-overlay">
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>Rufos Profissionais</h3>
              </div>
            </div>
            <div className="card-content">
              <p>Proteção perfeita para as junções do seu telhado com 7 modelos diferentes.</p>
              <Link href="/Produtos/rufos" className="service-button teal">
                Ver Detalhes <FaArrowRight />
              </Link>
            </div>
          </div>
      </div>
      </div>


      <FaixaContato />
      <SobreNos />
      <Rodape />
      <WhatsAppButton />

      {/* ✅ Estilos migrados para src/styles/cabecalho.css */}
      <style jsx>{`
        .service-card {
          background-color: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(29, 61, 82, 0.1);
          transition: all 0.4s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
        }
        .card-overlay {
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
          padding: 20px;
          color: white;
          text-align: left;
        }
        .card-overlay h3 {
          margin: 0;
          font-weight: 600;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
        }
        .card-content {
          padding: 25px;
        }
        .card-content p {
          color: #666;
          margin-bottom: 25px;
          font-size: ${isMobile ? '0.9rem' : '1rem'};
          line-height: 1.6;
        }
        
        .service-button {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: ${isMobile ? '8px 16px' : '12px 30px'};
          background-color: transparent;
          border: 2px solid;
          border-radius: 50px;
          font-size: ${isMobile ? '0.8rem' : '1rem'};
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .service-button.teal {
          color: #0095a4;
          border-color: #0095a4;
        }
        
        .service-button.dark-blue {
          color: #1D3D52;
          border-color: #1D3D52;
        }

        .service-button:hover {
          color: white;
          transform: translateY(-3px);
        }

        .service-button.teal:hover {
          background-color: #0095a4;
          box-shadow: 0 4px 15px rgba(0, 149, 164, 0.3);
        }

        .service-button.dark-blue:hover {
          background-color: #1D3D52;
          box-shadow: 0 4px 15px rgba(29, 61, 82, 0.3);
        }

        /* --- ESTILOS PARA O BOTÃO DO SLIDE --- */
        .hero-button {
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: ${isMobile ? '10px 20px' : '14px 35px'};
            background: linear-gradient(45deg, #0095a4, #00c2d4);
            color: white;
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.3); /* Efeito de brilho */
            border-radius: 50px;
            font-size: ${isMobile ? '0.9rem' : '1.1rem'};
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0, 149, 164, 0.4);
            transition: all 0.3s ease;
        }

        .hero-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 149, 164, 0.5);
            background: linear-gradient(45deg, #00a8b8, #00d4e4);
        }
        
        .hero-button-icon {
            transition: transform 0.3s ease;
        }

        .hero-button:hover .hero-button-icon {
            transform: translateX(5px);
        }
      `}</style>
    </>
  );
};

export default Index;