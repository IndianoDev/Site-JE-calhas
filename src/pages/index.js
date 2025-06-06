import React, { useState, useEffect } from 'react';
import Pagina from '../components/pagina';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rodape from '@/components/Rodape';
import FaixaContato from '@/components/FaixaContato';
import Head from 'next/head';

const Index = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = [
    { id: '1', image: '/img/carrosel imagem 1 (1).png', title: 'Soluções em Calhas', subtitle: 'Qualidade e Durabilidade' },
    { id: '2', image: '/img/carrosel imagem 1 (2) (1).png', title: 'Instalação Profissional', subtitle: 'Precisão e Excelência' },
    { id: '3', image: '/img/carrosel imagem 1 (3) (1).png', title: 'Variedade de Produtos', subtitle: 'Para Todas as Necessidades' },
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
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                    color: 'white',
                    textAlign: 'center'
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
                    <button style={{
                      padding: '12px 30px',
                      backgroundColor: '#0095a4',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      ':hover': {
                        backgroundColor: '#007a87',
                        transform: 'translateY(-2px)'
                      }
                    }}>
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

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
            backgroundColor: '#0095a4'
          }}></span>
        </h2>
        
        {/* Aqui você pode adicionar seus produtos em destaque */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '50px',
          padding: '0 20px'
        }}>
          {/* Exemplo de card de produto */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <img 
              src="/img/PHOTO-2024-03-31-15-56-42.jpg" 
              alt="Calha Tipo X" 
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#1D3D52',
                marginBottom: '10px'
              }}>Calha Tipo K</h3>
              <p style={{
                color: '#666',
                marginBottom: '20px'
              }}>Ideal para telhados com grande área de captação de água.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#1D3D52',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                ':hover': {
                  backgroundColor: '#0095a4'
                }
              }}>
                Detalhes
              </button>
            </div>
          </div>
          
          {/* Adicione mais cards de produtos aqui */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <img 
              src="/img/PHOTO-2024-03-31-15-56-42.jpg" 
              alt="Calha Tipo X" 
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#1D3D52',
                marginBottom: '10px'
              }}>Calha Tipo K</h3>
              <p style={{
                color: '#666',
                marginBottom: '20px'
              }}>Ideal para telhados com grande área de captação de água.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#1D3D52',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                ':hover': {
                  backgroundColor: '#0095a4'
                }
              }}>
                Detalhes
              </button>
            </div>
          </div>
          
          {/* adicione mais um card abaixo */}
        </div>
      </div>

      <FaixaContato />
      <Rodape />
    </>
  );
};

export default Index;