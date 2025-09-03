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

const Index = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const data = [
    {
      id: '1',
      image: '/img/1.png',
      imageMobile: '/img/1-mobile.png',
      title: 'Soluções em Calhas',
      subtitle: 'Telhado, Calhas, Rufos e Coifa'
    },
    {
      id: '2',
      image: '/img/2.png',
      imageMobile: '/img/2-mobile.png',
      title: 'Serralheria em Geral',
      subtitle: 'Portões, grades etc.'
    },
    {
      id: '3',
      image: '/img/3.png',
      imageMobile: '/img/3-mobile.png',
      title: 'Estrutura Metálicas',
      subtitle: 'Montagem de Telhado, galpão e Mezanino.'
    },
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
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Componente de imagem responsiva ATUALIZADO
  const ResponsiveSliderImage = ({ item }) => {
    const imageSrc = isMobile ? item.imageMobile : item.image;

    return (
      <Image
        src={imageSrc}
        alt={item.title}
        fill={true}
        style={{
          objectFit: 'cover',
          objectPosition: isMobile ? "center top" : "center"
        }}
        priority={item.id === '1'}
        loading={item.id === '1' ? 'eager' : 'lazy'}
      />
    );
  };

  return (
    <>
      <Head>
        <title>JE Calhas - Soluções em Coberturas e Calhas</title>
        <meta name="description" content="Especialistas em calhas e coberturas com qualidade superior e instalação profissional" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Pagina />

      {isClient && (
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

                  {/* Gradiente fixo na base do slide */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: isMobile ? '30%' : '40%', // controla o tamanho da sombra
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
                    zIndex: 1
                  }} />

                  {/* Texto e botão sobre a sombra */}
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
                      textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
                      lineHeight: '1.2'
                    }}>{item.title}</h1>

                    <p style={{
                      fontSize: isMobile ? '0.9rem' : '1.5rem',
                      marginBottom: isMobile ? '15px' : '20px',
                      textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
                      opacity: 0.95
                    }}>{item.subtitle}</p>

                    <Link href="/contato" passHref legacyBehavior>
                      <a style={{
                        textDecoration: 'none',
                        padding: isMobile ? '8px 16px' : '12px 30px',
                        backgroundColor: '#0095a4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: isMobile ? '0.8rem' : '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        minWidth: isMobile ? '140px' : 'auto'
                      }}>
                        Faça um Orçamento
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Seção de Serviços em Destaque - IMAGENS CORRIGIDAS */}
      <div style={{
        textAlign: 'center',
        margin: isMobile ? '40px 0' : '80px 0',
        padding: '0 20px',
        fontFamily: '"Montserrat", sans-serif'
      }}>
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
          {/* Card 1 - Estruturas Metálicas (IMAGEM CORRIGIDA) */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
            transition: 'all 0.4s ease',
          }}>
            <div style={{
              position: 'relative',
              height: isMobile ? '180px' : '220px',
              overflow: 'hidden'
            }}>
              <Image
                src="/img/PHOTO-2024-03-31-15-56-42 2.jpg"
                alt="Estruturas Metálicas"
                fill={true}
                style={{
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute', zIndex: 2,
                bottom: '0', left: '0', right: '0',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                padding: '20px', color: 'white', textAlign: 'left'
              }}>
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', margin: '0', fontWeight: '600', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Estruturas Metálicas</h3>
              </div>
            </div>
            <div style={{ padding: '25px' }}>
              <p style={{ color: '#666', marginBottom: '25px', fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.6' }}>
                Soluções robustas e personalizadas para telhados, galpões e mezaninos.
              </p>
              <Link href="/Produtos/EstruturasMetalicas" passHref legacyBehavior>
                <a style={{
                  textDecoration: 'none',
                  display: 'inline-block',
                  padding: isMobile ? '8px 16px' : '12px 30px',
                  backgroundColor: 'transparent',
                  color: '#0095a4',
                  border: '2px solid #0095a4',
                  borderRadius: '50px',
                  fontSize: isMobile ? '0.8rem' : '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Ver Detalhes
                </a>
              </Link>
            </div>
          </div>

          {/* Card 2 - Calhas (IMAGEM CORRIGIDA) */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
            transition: 'all 0.4s ease',
          }}>
            <div style={{
              position: 'relative',
              height: isMobile ? '180px' : '220px',
              overflow: 'hidden'
            }}>
              <Image
                src="/img/foto de calha 1 (2).jpg"
                alt="Calhas"
                fill={true}
                style={{
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute', zIndex: 2,
                bottom: '0', left: '0', right: '0',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                padding: '20px', color: 'white', textAlign: 'left'
              }}>
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', margin: '0', fontWeight: '600', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Calhas Premium</h3>
              </div>
            </div>
            <div style={{ padding: '25px' }}>
              <p style={{ color: '#666', marginBottom: '25px', fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.6' }}>
                Sistemas completos de drenagem com alta durabilidade e acabamento impecável.
              </p>
              <Link href="/Produtos/calhas" passHref legacyBehavior>
                <a style={{
                  textDecoration: 'none',
                  display: 'inline-block',
                  padding: isMobile ? '8px 16px' : '12px 30px',
                  backgroundColor: 'transparent',
                  color: '#1D3D52',
                  border: '2px solid #1D3D52',
                  borderRadius: '50px',
                  fontSize: isMobile ? '0.8rem' : '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Ver Detalhes
                </a>
              </Link>
            </div>
          </div>

          {/* Card 3 - Rufos (IMAGEM CORRIGIDA) */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
            transition: 'all 0.4s ease',
          }}>
            <div style={{
              position: 'relative',
              height: isMobile ? '180px' : '220px',
              overflow: 'hidden'
            }}>
              <Image
                src="/img/PHOTO-2024-03-31-21-31-30 2.jpg"
                alt="Rufos"
                fill={true}
                style={{
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute', zIndex: 2,
                bottom: '0', left: '0', right: '0',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                padding: '20px', color: 'white', textAlign: 'left'
              }}>
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', margin: '0', fontWeight: '600', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Rufos Profissionais</h3>
              </div>
            </div>
            <div style={{ padding: '25px' }}>
              <p style={{ color: '#666', marginBottom: '25px', fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.6' }}>
                Proteção perfeita para as junções do seu telhado com 7 modelos diferentes.
              </p>
              <Link href="/Produtos/rufos" passHref legacyBehavior>
                <a style={{
                  textDecoration: 'none',
                  display: 'inline-block',
                  padding: isMobile ? '8px 16px' : '12px 30px',
                  backgroundColor: 'transparent',
                  color: '#0095a4',
                  border: '2px solid #0095a4',
                  borderRadius: '50px',
                  fontSize: isMobile ? '0.8rem' : '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Ver Detalhes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaixaContato />
      <SobreNos />
      <Rodape />
      <WhatsAppButton />
    </>
  );
};

export default Index;