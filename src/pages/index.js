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
import Image from 'next/image'; // Adicionado
import Link from 'next/link';   // Adicionado

const Index = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = [
    { id: '1', image: '/img/1.png', title: 'Soluções em Calhas', subtitle: 'Telhado, Calhas, Rufos e Coifa' },
    { id: '2', image: '/img/2.png', title: 'Serralheria em Geral', subtitle: 'Portões, grades etc.' },
    { id: '3', image: '/img/3.png', title: 'Estrutura Metálicas', subtitle: 'Montagem de Telhado, galpão e Mezanino.' },
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
          arrows: false
        }
      }
    ]
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
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id}>
                <div style={{
                  position: 'relative',
                  height: '80vh',
                  maxHeight: '800px'
                }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority={item.id === '1'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                    color: 'white',
                    textAlign: 'center',
                    zIndex: 2
                  }}>
                    <h1 style={{
                      fontSize: '3rem',
                      fontWeight: 700,
                      marginBottom: '10px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}>{item.title}</h1>
                    <p style={{
                      fontSize: '1.5rem',
                      marginBottom: '20px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>{item.subtitle}</p>
                     <Link href="/contato" passHref legacyBehavior>
                       <a style={{
                          textDecoration: 'none',
                          padding: '12px 30px',
                          backgroundColor: '#0095a4',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '1rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
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

     {/* Seção de Serviços em Destaque */}
    <div style={{
      textAlign: 'center',
      margin: '80px 0',
      padding: '0 20px',
      fontFamily: '"Montserrat", sans-serif'
    }}>
      <div style={{
        fontSize: '1rem',
        color: '#0095a4',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '10px'
      }}>
        Conheça nossos
      </div>
      <h2 style={{
        fontSize: '2.5rem',
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
          width: '80px',
          height: '3px',
          backgroundColor: '#0095a4',
        }}></span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '50px',
        maxWidth: '1200px',
        margin: '50px auto 0'
      }}>

        {/* Card 1 - Estruturas Metálicas */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
          transition: 'all 0.4s ease',
        }}>
          <div style={{
            position: 'relative',
            height: '220px',
            overflow: 'hidden'
          }}>
            <Image
              src="/img/PHOTO-2024-03-31-15-56-42 2.jpg"
              alt="Estruturas Metálicas"
              layout="fill"
              objectFit="cover"
            />
            <div style={{
              position: 'absolute', zIndex: 2,
              bottom: '0', left: '0', right: '0',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              padding: '20px', color: 'white', textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Estruturas Metálicas</h3>
            </div>
          </div>
          <div style={{ padding: '25px' }}>
            <p style={{ color: '#666', marginBottom: '25px', fontSize: '1rem', lineHeight: '1.6' }}>
              Soluções robustas e personalizadas para telhados, galpões e mezaninos.
            </p>
            <Link href="/Produtos/EstruturasMetalicas" passHref legacyBehavior>
              <a style={{ textDecoration: 'none',
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: 'transparent',
                color: '#0095a4',
                border: '2px solid #0095a4',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Ver Detalhes
              </a>
            </Link>
          </div>
        </div>

        {/* Card 2 - Calhas */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
          transition: 'all 0.4s ease',
        }}>
          <div style={{
            position: 'relative',
            height: '220px',
            overflow: 'hidden'
          }}>
            <Image
              src="/img/foto de calha 1 (2).jpg"
              alt="Calhas"
              layout="fill"
              objectFit="cover"
            />
            <div style={{
              position: 'absolute', zIndex: 2,
              bottom: '0', left: '0', right: '0',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              padding: '20px', color: 'white', textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Calhas Premium</h3>
            </div>
          </div>
          <div style={{ padding: '25px' }}>
            <p style={{ color: '#666', marginBottom: '25px', fontSize: '1rem', lineHeight: '1.6' }}>
              Sistemas completos de drenagem com alta durabilidade e acabamento impecável.
            </p>
            <Link href="/Produtos/calhas" passHref legacyBehavior>
              <a style={{
                textDecoration: 'none',
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: 'transparent',
                color: '#1D3D52',
                border: '2px solid #1D3D52',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
                }}>
                Ver Detalhes
              </a>
            </Link>
          </div>
        </div>

        {/* Card 3 - Rufos */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
          transition: 'all 0.4s ease',
        }}>
          <div style={{
            position: 'relative',
            height: '220px',
            overflow: 'hidden'
          }}>
            <Image
              src="/img/PHOTO-2024-03-31-21-31-30 2.jpg"
              alt="Rufos"
              layout="fill"
              objectFit="cover"
            />
            <div style={{
              position: 'absolute', zIndex: 2,
              bottom: '0', left: '0', right: '0',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              padding: '20px', color: 'white', textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Rufos Profissionais</h3>
            </div>
          </div>
          <div style={{ padding: '25px' }}>
            <p style={{ color: '#666', marginBottom: '25px', fontSize: '1rem', lineHeight: '1.6' }}>
              Proteção perfeita para as junções do seu telhado com 7 modelos diferentes.
            </p>
            <Link href="/Produtos/rufos" passHref legacyBehavior>
              <a style={{
                textDecoration: 'none',
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: 'transparent',
                color: '#0095a4',
                border: '2px solid #0095a4',
                borderRadius: '50px',
                fontSize: '1rem',
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