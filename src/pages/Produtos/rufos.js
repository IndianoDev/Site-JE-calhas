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

const Rufos = () => {
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

  // Modelos de rufos (baseado na sua imagem)
  const modelosRufos = [
    { id: 1, nome: 'Rufos de Encosto', descricao: 'Proteção lateral para paredes com acabamento perfeito', imagem: '/img/Renderizadas/1.jpg' },
    { id: 2, nome: 'Encosto com Pingadeira', descricao: 'Combinação de proteção lateral com sistema de escoamento', imagem: '/img/Renderizadas/2.jpg' },
    { id: 3, nome: 'Rufos de Capa', descricao: 'Proteção superior com dupla camada de vedação', imagem: '/img/Renderizadas/3.jpg' },
    { id: 4, nome: 'Contra Rufo', descricao: 'Complemento essencial para instalações profissionais', imagem: '/img/Renderizadas/4.jpg' },
    { id: 5, nome: 'Rufo Encosto com Capa', descricao: 'Solução completa para proteção lateral e superior', imagem: '/img/Renderizadas/5.jpg' },
    { id: 6, nome: 'Rufo com 1 Pingadeira', descricao: 'Sistema de escoamento integrado com proteção', imagem: '/img/Renderizadas/6.jpg' },
    { id: 7, nome: 'Cumeeira', descricao: 'Proteção para o ponto mais alto do telhado', imagem: '/img/Renderizadas/7.jpg' }
  ];

  const imagensProduto = [
    { id: 1, src: '/img/PHOTO-2024-07-03-21-10-31.jpg', alt: 'Calha Tipo K instalada' },
    { id: 2, src: '/img/PHOTO-2024-07-03-21-10-33.jpg', alt: 'Detalhe da calha' },
    { id: 3, src: '/img/PHOTO-2024-03-31-21-31-29 4.jpg', alt: 'Calha em residência' },
    { id: 4, src: '/img/PHOTO-2024-07-03-21-10-31 2.jpg', alt: 'Instalação profissional' }
  ];
  
  // Especificações técnicas
  const especificacoes = [
    { id: 1, titulo: 'Material', valor: 'Alumínio 0,7mm galvanizado' },
    { id: 2, titulo: 'Cores', valor: 'Branco, Preto, Cinza, Terracota' },
    { id: 3, titulo: 'Garantia', valor: '12 anos contra corrosão' },
    { id: 4, titulo: 'Aplicação', valor: 'Todos os tipos de telhado' },
    { id: 5, titulo: 'Dimensões', valor: 'Padrão 3m - Sob medida disponível' },
    { id: 6, titulo: 'Normas', valor: 'ABNT NBR 15575:2013' }
  ];

  // Vantagens dos rufos
  const vantagens = [
    { id: 1, icone: 'fas fa-shield-alt', titulo: 'Proteção Total', descricao: 'Evita infiltrações nas junções do telhado' },
    { id: 2, icone: 'fas fa-tools', titulo: 'Instalação Profissional', descricao: 'Sistema de encaixe facilitado' },
    { id: 3, icone: 'fas fa-palette', titulo: 'Acabamento Perfeito', descricao: 'Linhas limpas que valorizam a arquitetura' },
    { id: 4, icone: 'fas fa-sync-alt', titulo: 'Dilatação Controlada', descricao: 'Sistema que acomoda variações térmicas' }
  ];

  return (
    <Pagina titulo="Rufos">
      <Head>
        <title>Rufos Profissionais | JE Calhas - Soluções em Coberturas</title>
        <meta name="description" content="Linha completa de rufos para proteção e acabamento perfeito do seu telhado. Conheça nossos 7 modelos profissionais." />
        {/* Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
      </Head>

      {/* Hero Section - LARGURA TOTAL */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(29, 61, 82, 0.9), rgba(0, 149, 164, 0.8))',
        color: 'white',
        padding: '60px 0',
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
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '15px'
          }}>
            Rufos Profissionais
          </h1>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            Proteção e acabamento perfeito para todas as junções do seu telhado
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
                <li style={{ marginRight: '10px', color: '#0095a4' }}>&gt;</li>
                <li style={{ color: '#0095a4' }}>Rufos</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>

      {/* Seção Modelos de Rufos */}
      <Container style={{ marginBottom: '80px' }}>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 style={{
              color: '#1D3D52',
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '15px'
            }}>
              Nossos Modelos de Rufos
            </h2>
            <p style={{
              color: '#555',
              fontSize: '1.1rem'
            }}>
              Conheça nossa linha completa desenvolvida para cada necessidade específica
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {modelosRufos.map((modelo) => (
            <Col key={modelo.id} sm={6} md={4} lg={3}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%',
              }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '100%', // Proporção 1:1
                }}>
                  <Image
                    src={modelo.imagem}
                    alt={modelo.nome}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    color: '#1D3D52',
                    fontSize: '1.2rem',
                    marginBottom: '10px',
                    fontWeight: '600'
                  }}>
                    {modelo.nome}
                  </h3>
                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '15px'
                  }}>
                    {modelo.descricao}
                  </p>
                </div>
              </div>
            </Col>
          ))}
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
                      paddingTop: '56.25%', // Proporção 16:9
                    }}>
                      <Image
                        src={imagem.src}
                        alt={imagem.alt}
                        layout="fill"
                        objectFit="cover"
                        priority={imagem.id === 1}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Seção Técnica */}
      <Container style={{ marginBottom: '80px' }}>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              height: '100%'
            }}>
              <h2 style={{
                color: '#1D3D52',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '25px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                Especificações Técnicas
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#0095a4'
                }}></span>
              </h2>
              
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
          <Col lg={6}>
            <h2 style={{
              color: '#1D3D52',
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '25px',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Aplicação Correta
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
              Os rufos são elementos essenciais para <strong>evitar infiltrações</strong> nas junções entre telhado e paredes. Cada modelo tem uma aplicação específica:
            </p>
            <ul style={{
              paddingLeft: '20px',
              marginBottom: '30px',
              color: '#333'
            }}>
              <li style={{ marginBottom: '10px' }}><strong>Rufos de encosto</strong>: Para junções verticais</li>
              <li style={{ marginBottom: '10px' }}><strong>Rufos de capa</strong>: Para proteção superior</li>
              <li style={{ marginBottom: '10px' }}><strong>Cumeeira</strong>: Para o ponto mais alto do telhado</li>
              <li style={{ marginBottom: '10px' }}><strong>Contra-rufo</strong>: Complemento para instalação profissional</li>
            </ul>
           
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
                Vantagens dos Nossos Rufos
              </h2>
              <p style={{
                color: '#555',
                fontSize: '1.1rem'
              }}>
                Tecnologia e qualidade que fazem a diferença na proteção do seu telhado
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
            Precisa de orientação sobre rufos?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>
            Nossos especialistas estão prontos para indicar o modelo ideal para seu projeto
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
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
            }}>
              Falar com Especialista
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

      {/* Estilos */}
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

export default Rufos;