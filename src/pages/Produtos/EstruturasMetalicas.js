import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pagina from '@/components/pagina';
import Rodape from '@/components/Rodape';
import WhatsAppButton from '@/components/WhatsAppButton';

const EstruturasMetalicas = () => {
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

  // Imagens do produto
  const imagensProduto = [
    { id: 1, src: '/img/PHOTO-2022-07-13-14-06-52 2.jpg', alt: 'Galpão industrial com estrutura metálica' },
    { id: 2, src: '/img/PHOTO-2022-08-03-16-33-57.jpg', alt: 'Detalhe da montagem estrutural' },
    { id: 3, src: '/img/PHOTO-2024-03-31-15-56-40.jpg', alt: 'Estrutura para telhado residencial' },
    { id: 4, src: '/img/PHOTO-2024-03-31-15-56-42 2.jpg', alt: 'Mezanino em estrutura metálica' }
  ];

  // Tipos de estruturas
  const tiposEstruturas = [
    { id: 1, src: "/img/Renderizadas/25.png", nome: 'Telhados Industriais', descricao: 'Estruturas robustas para galpões e indústrias' },
    { id: 2, src: "",nome: 'Coberturas Residenciais', descricao: 'Soluções elegantes para residências' },
    { id: 3, src: "",nome: 'Mezaninos', descricao: 'Aproveitamento inteligente de espaços verticais' },
    { id: 4, src: "",nome: 'Estruturas Customizadas', descricao: 'Projetos sob medida para necessidades específicas' }
  ];

  // Especificações técnicas
  const especificacoes = [
    { id: 1, titulo: 'Material', valor: 'Aço galvanizado G-90' },
    { id: 2, titulo: 'Espessura', valor: 'De 0,95mm a 3,00mm' },
    { id: 3, titulo: 'Garantia', valor: '10 anos contra corrosão' },
    { id: 4, titulo: 'Normas', valor: 'ABNT NBR 6355 e NBR 14762' },
    { id: 5, titulo: 'Cobertura', valor: 'Até 30m de vão livre' },
    { id: 6, titulo: 'Pintura', valor: 'Eletrostática ou galvanização' }
  ];

  // Vantagens do produto
  const vantagens = [
    { id: 1, icone: 'fas fa-clock', titulo: 'Rapidez', descricao: 'Montagem até 70% mais rápida que alvenaria' },
    { id: 2, icone: 'fas fa-ruler-combined', titulo: 'Precisão', descricao: 'Componentes fabricados com tolerância milimétrica' },
    { id: 3, icone: 'fas fa-leaf', titulo: 'Sustentabilidade', descricao: 'Material 100% reciclável e menor desperdício' },
    { id: 4, icone: 'fas fa-expand', titulo: 'Vãos Livres', descricao: 'Possibilidade de grandes espaços sem pilares' }
  ];

  return (
    <Pagina titulo="Estruturas Metálicas">
      <Head>
        <title>Estruturas Metálicas | JE Calhas - Soluções em Coberturas</title>
        <meta name="description" content="Soluções em estruturas metálicas para telhados, galpões e mezaninos com qualidade e durabilidade incomparáveis" />
        {/* Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0-2.0-beta3/css/all.min.css" 
        />
      </Head>

      {/* Hero Section - LARGURA TOTAL */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(29, 61, 82, 0.9), rgba(0, 149, 164, 0.8))',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <Container>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            marginBottom: '15px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Estruturas Metálicas
          </h1>
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Soluções robustas e versáteis para telhados, galpões e mezaninos
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
                  <Link href="/" passHref legacyBehavior>
                    <a style={{
                      color: '#1D3D52',
                      textDecoration: 'none',
                    }}>Home</a>
                  </Link>
                </li>
                <li style={{ marginRight: '10px', color: '#0095a4' }}>&gt;</li>
                <li style={{ marginRight: '10px' }}>
                  <Link href="/produtos" passHref legacyBehavior>
                    <a style={{
                      color: '#1D3D52',
                      textDecoration: 'none',
                    }}>Produtos</a>
                  </Link>
                </li>
                <li style={{ marginRight: '10px', color: '##0095a4' }}>&gt;</li>
                <li style={{ color: '#0095a4' }}>Estruturas Metálicas</li>
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
                      width: '100%',
                      paddingTop: '56.25%', // Mantém a proporção 16:9
                    }}>
                      <Image
                        src={imagem.src}
                        alt={imagem.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={imagem.id === 1} // Otimiza a primeira imagem
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Seção Tipos de Estruturas */}
      <Container style={{ marginBottom: '80px' }}>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 style={{
              color: '#1D3D52',
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '15px',
              position: 'relative',
              display: 'inline-block'
            }}>
              Nossas Soluções em Estruturas
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
          </Col>
        </Row>
        
        <Row className="g-4">
          {tiposEstruturas.map((tipo) => (
            <Col key={tipo.id} md={6} lg={3}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '30px',
                height: '100%',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                borderTop: '4px solid #0095a4',
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  color: '#0095a4',
                  marginBottom: '20px'
                }}>
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3 style={{
                  color: '#1D3D52',
                  fontSize: '1.3rem',
                  marginBottom: '15px',
                  fontWeight: '600'
                }}>
                  {tipo.nome}
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem'
                }}>
                  {tipo.descricao}
                </p>
              </div>
            </Col>
          ))}
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
              Sobre Nossas Estruturas
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
              Nossas estruturas metálicas são projetadas com <strong>aço galvanizado de alta resistência</strong>, garantindo durabilidade e segurança. Utilizamos perfis treliçados e vigas &quot;I&quot; que proporcionam a melhor relação resistência/peso do mercado.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '20px',
              color: '#333'
            }}>
              Todos os componentes são <strong>pré-fabricados com precisão milimétrica</strong>, permitindo montagem rápida e com mínimo desperdício de material no local da obra.
            </p>
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

      {/* Seção Vantagens - LARGURA TOTAL */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '80px 0',
        marginBottom: '80px',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
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
                Vantagens das Estruturas Metálicas
              </h2>
              <p style={{
                color: '#555',
                fontSize: '1.1rem'
              }}>
                Por que escolher estruturas metálicas para sua obra?
              </p>
            </Col>
          </Row>
          <Row>
            {vantagens.map((vantagem) => (
              <Col key={vantagem.id} md={6} lg={3} className="mb-4">
                <div style={{
                  backgroundColor: '##fff',
                  borderRadius: '8px',
                  padding: '30px 20px',
                  height: '100%',
                  textAlign: 'center',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease',
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

      {/* Galeria de Projetos - ATUALIZADA */}
      <Container style={{ marginBottom: '80px' }}>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 style={{
              color: '#1D3D52',
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '15px'
            }}>
              Nossos Projetos Realizados
            </h2>
            <p style={{
              color: '#555',
              fontSize: '1.1rem'
            }}>
              Veja algumas de nossas estruturas metálicas em obras reais
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {[26, 2, 25, 24].map((item) => (
            <Col key={item} sm={6} md={3}>
              <div style={{
                position: 'relative',
                paddingTop: '66.66%', // Proporção 3:2 (853/1280 = 0.666)
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <Image
                  src={`/img/Renderizadas/${item}.png`}
                  alt={`Projeto de estrutura metálica ${item}`}
                  fill
                  style={{ 
                    objectFit: 'cover'
                  }}
                  sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Final - LARGURA TOTAL */}
      <div style={{
        background: 'linear-gradient(135deg, #1D3D52, #0095a4)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <Container>
          <h2 style={{
            fontSize: '2.2rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Pronto para transformar seu projeto?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>
            Estaremos prontos para desenvolver a solução perfeita para sua necessidade
          </p>
          <Link href="/contato" passHref legacyBehavior>
            <a style={{
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
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)'
            }}>
              Solicitar Projeto
            </a>
          </Link>
        </Container>
      </div>

      {/* Rodapé com largura total */}
      <div style={{ 
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflowX: 'hidden'
      }}>
        <Rodape />
      </div>

      <WhatsAppButton />

      {/* Estilos Globais para o Slick Carousel */}
      <style jsx global>{`
        .slick-prev:before, .slick-next:before {
          color: #1D3D52 !important;
          font-size: 30px !important;
        }
        .slick-dots li button:before {
          font-size: 12px !important;
          color: #1D3D52 !important; 
          opacity: 0.5 !important;
        }
        .slick-dots li.slick-active button:before {
          color: #0095a4 !important;
          opacity: 1 !important;
        }
      `}</style>

    </Pagina>
  );
};

export default EstruturasMetalicas;