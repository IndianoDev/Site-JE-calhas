import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pagina from '@/components/pagina';
import Rodape from '@/components/Rodape';
import WhatsAppButton from '@/components/WhatsAppButton';

const calhas = () => {
  // Configurações do carrossel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true
  };

  // Imagens do produto (substitua pelas suas)
  const imagensProduto = [
    { id: 1, src: '/img/PHOTO-2024-03-31-15-56-41.jpg', alt: 'Calha Tipo K instalada' },
    { id: 2, src: '/img/PHOTO-2024-03-31-15-56-42.jpg', alt: 'Detalhe da calha' },
    { id: 3, src: '/img/PHOTO-2024-03-31-16-05-40 5.jpg', alt: 'Calha em residência' },
    { id: 4, src: '/img/foto de calha 1 (2).jpg', alt: 'Instalação profissional' }
  ];

  // Especificações técnicas
  const especificacoes = [
    { id: 1, titulo: 'Material', valor: 'Alumínio 0,7mm' },
    { id: 2, titulo: 'Cores Disponíveis', valor: 'Branco, Preto, Cinza, Terracota' },
    { id: 3, titulo: 'Garantia', valor: '15 anos contra corrosão' },
    { id: 4, titulo: 'Aplicação', valor: 'Residencial e Comercial' },
    { id: 5, titulo: 'Capacidade', valor: 'Até 200m² de área de captação' },
    { id: 6, titulo: 'Normas', valor: 'ABNT NBR 15575:2013' }
  ];

  // Vantagens do produto
  const vantagens = [
    { id: 1, icone: 'fas fa-shield-alt', titulo: 'Durabilidade', descricao: 'Resistente à corrosão e intempéries' },
    { id: 2, icone: 'fas fa-tint', titulo: 'Eficiência', descricao: 'Escoamento perfeito mesmo em chuvas intensas' },
    { id: 3, icone: 'fas fa-paint-brush', titulo: 'Estética', descricao: 'Design limpo que complementa a arquitetura' },
    { id: 4, icone: 'fas fa-cogs', titulo: 'Instalação', descricao: 'Sistema modular de fácil instalação' }
  ];

  return (
    <Pagina titulo="Calhas">
      <Head>
        <title>Calhas Premium | JE Calhas - Soluções em Coberturas</title>
        <meta name="description" content="Conheça nossa linha premium de calhas com garantia estendida e alta performance em drenagem" />
      </Head>

      {/* Hero Section */}
      <div style={{
        backgroundColor: '#1D3D52',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <Container>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '15px'
          }}>
            Calhas Premium
          </h1>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            Solução completa em drenagem para seu telhado com qualidade e durabilidade incomparáveis
          </p>
        </Container>
      </div>

      {/* Breadcrumb */}
      <Container style={{ margin: '30px auto' }}>
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <ol style={{
                display: 'flex',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                <li style={{ marginRight: '10px' }}>
                  <a href="/" style={{
                    color: '#1D3D52',
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline'
                    }
                  }}>Home</a>
                </li>
                <li style={{ marginRight: '10px', color: '#0095a4' }}>&gt;</li>
                <li style={{ marginRight: '10px' }}>
                  <a href="/produtos" style={{
                    color: '#1D3D52',
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline'
                    }
                  }}>Produtos</a>
                </li>
                <li style={{ marginRight: '10px', color: '#0095a4' }}>&gt;</li>
                <li style={{ color: '#0095a4' }}>Calhas</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>

      {/* Carrossel de Imagens */}
      <Container style={{ marginBottom: '60px' }}>
        <Row>
          <Col lg={8} className="mx-auto">
            <div style={{
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <Slider {...sliderSettings}>
                {imagensProduto.map((imagem) => (
                  <div key={imagem.id}>
                    <div style={{
                      position: 'relative',
                      paddingTop: '56.25%', // Proporção 16:9
                      overflow: 'hidden'
                    }}>
                      <img
                        src={imagem.src}
                        alt={imagem.alt}
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Seção Sobre o Produto */}
      <Container style={{ marginBottom: '80px' }}>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 style={{
              color: '#1D3D52',
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '25px',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Sobre Nossas Calhas
              <span style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '60px',
                height: '3px',
                backgroundColor: '#0095a4'
              }}></span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '20px',
              color: '#333'
            }}>
              Nossas calhas são fabricadas com <strong>alumínio de alta resistência</strong>, garantindo durabilidade e performance excepcionais. Desenvolvidas para o clima brasileiro, oferecem escoamento eficiente mesmo nas chuvas mais intensas.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '20px',
              color: '#333'
            }}>
              O sistema exclusivo de encaixe <strong>evita vazamentos</strong> e a pintura eletrostática proporciona acabamento perfeito que mantém sua aparência por décadas.
            </p>
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              borderLeft: '4px solid #0095a4'
            }}>
              <p style={{
                margin: '0',
                fontStyle: 'italic',
                color: '#1D3D52'
              }}>
                "Desde que instalamos as calhas JE, nunca mais tivemos problemas com infiltração ou transbordamento, mesmo em temporais."
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#0095a4',
                fontSize: '1.5rem',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                Especificações Técnicas
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px'
              }}>
                {especificacoes.map((item) => (
                  <div key={item.id} style={{
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '5px'
                  }}>
                    <p style={{
                      margin: '0 0 5px 0',
                      fontSize: '0.9rem',
                      color: '#0095a4',
                      fontWeight: '600'
                    }}>
                      {item.titulo}
                    </p>
                    <p style={{
                      margin: '0',
                      fontSize: '1rem',
                      color: '#1D3D52',
                      fontWeight: '500'
                    }}>
                      {item.valor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Seção Vantagens */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '80px 0',
        marginBottom: '80px'
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 style={{
                color: '#1D3D52',
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                Por que escolher nossas calhas?
              </h2>
              <p style={{
                color: '#555',
                fontSize: '1.1rem'
              }}>
                Tecnologia e qualidade que fazem a diferença na proteção do seu imóvel
              </p>
            </Col>
          </Row>
          <Row>
            {vantagens.map((vantagem) => (
              <Col key={vantagem.id} md={6} lg={3} className="mb-4">
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  padding: '30px 20px',
                  height: '100%',
                  textAlign: 'center',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    color: '#0095a4',
                    marginBottom: '20px'
                  }}>
                    <i className={vantagem.icone}></i>
                  </div>
                  <h3 style={{
                    color: '#1D3D52',
                    fontSize: '1.3rem',
                    marginBottom: '15px'
                  }}>
                    {vantagem.titulo}
                  </h3>
                  <p style={{
                    color: '#666',
                    fontSize: '0.95rem'
                  }}>
                    {vantagem.descricao}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Galeria de Aplicações */}
      <Container style={{ marginBottom: '80px' }}>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 style={{
              color: '#1D3D52',
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '15px'
            }}>
              Nossas Calhas em Ação
            </h2>
            <p style={{
              color: '#555',
              fontSize: '1.1rem'
            }}>
              Veja como nossas calhas estão protegendo imóveis em todo o país
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {[5, 27, 8, 20].map((item) => (
            <Col key={item} sm={6} md={3}>
              <div style={{
                position: 'relative',
                paddingTop: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <img
                  src={`/img/Renderizadas/${item}.png`}
                  alt={`Aplicação de calhas ${item}`}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  className="hover-zoom"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Final */}
      <div style={{
        background: 'linear-gradient(135deg, #1D3D52, #0095a4)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <Container>
          <h2 style={{
            fontSize: '2.2rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Pronto para proteger seu imóvel?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>
            Solicite um orçamento sem compromisso e receba a visita de um de nossos especialistas
          </p>
          <a
            href="/contato"
            style={{
              display: 'inline-block',
              padding: '15px 35px',
              backgroundColor: 'white',
              color: '#1D3D52',
              border: 'none',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
              ':hover': {
                backgroundColor: '#f0f0f0',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
              }
            }}
          >
            Solicitar Orçamento
          </a>
        </Container>
      </div>

      <Rodape />
      <WhatsAppButton />

      {/* Estilos */}
      <style jsx global>{`
        .hover-zoom:hover {
          transform: scale(1.05);
        }
        .slick-prev:before, .slick-next:before {
          color: #1D3D52 !important;
          font-size: 30px !important;
        }
        .slick-dots li button:before {
          font-size: 12px !important;
          color: white !important;
          opacity: 0.5 !important;
        }
        .slick-dots li.slick-active button:before {
          color: #0095a4 !important;
          opacity: 1 !important;
        }
      `}</style>

      {/* Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
      />
      <WhatsAppButton />
    </Pagina>
  );
};

export default calhas;