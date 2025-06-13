import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Pagina from '@/components/pagina';
import Rodape from '@/components/Rodape';
import WhatsAppButton from '@/components/WhatsAppButton';

const ProdutosPage = () => {
  const categorias = [
    {
      id: 1,
      nome: 'Calhas',
      itens: [
        'Calha Tipo K',
        'Calha Tipo Americana',
        'Calha Colonial',
        'Calha Galvanizada',
        'Calha em Alumínio'
      ],
      imagem: '/img/Renderizadas/27.png'
    },
    {
      id: 2,
      nome: 'Rufos',
      itens: [
        'Rufo de Parede',
        'Rufo de Fachada',
        'Rufo Cônico',
        'Rufo para Telhado',
        'Rufo Personalizado'
      ],
      imagem: '/img/Renderizadas/11.png'
    },
    {
      id: 3,
      nome: 'Coifas e Componentes',
      itens: [
        'Coifa Industrial',
        'Coifa Residencial',
        'Dutos de Ventilação',
        'Componentes para Exaustão',
        'Acessórios para Coifa'
      ],
      imagem: '/img/Renderizadas/28.png'
    },
    {
      id: 4,
      nome: 'Peças Sob Medida',
      itens: [
        'Calhas Personalizadas',
        'Rufos Especiais',
        'Componentes Customizados',
        'Soluções para Projetos Únicos',
        'Peças para Reformas'
      ],
      imagem: '/img/Renderizadas/je-png-trans.png'
    }
  ];

  return (
    <Pagina titulo="Produtos">
      <Head>
        <title>Produtos | JE Calhas - Soluções em Coberturas</title>
        <meta name="description" content="Conheça nossa linha completa de calhas, rufos e componentes para sistemas de drenagem e coberturas" />
      </Head>
<div style={{
        background: 'linear-gradient(135deg, rgba(29, 61, 82, 0.9), rgba(0, 149, 164, 0.8))',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <Container>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Nossos Produtos
          </h1>
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Conheça nossa linha completa de soluções em calhas e sistemas de cobertura com a qualidade JE Calhas
          </p>
        </Container>
      </div>
{/* Breadcrumb */}
      <Container style={{ marginBottom: '40px' }}>
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
                <li style={{ color: '#0095a4' }}>Produtos</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '50px',
        padding: '0 20px'
      }}>

        {/* Card 1 - Estruturas Metálicas */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          zIndex: '1',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 35px rgba(29, 61, 82, 0.2)'
          },
          ':before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #1D3D52, #0095a4)',
            zIndex: '2'
          }
        }}>
          <div style={{
            position: 'relative',
            height: '220px',
            overflow: 'hidden'
          }}>
            <img
              src="/img/PHOTO-2024-03-31-15-56-42 2.jpg"
              alt="Estruturas Metálicas"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                ':hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              padding: '20px',
              color: 'white',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                margin: '0',
                fontWeight: '600',
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
              }}>Estruturas Metálicas</h3>
            </div>
          </div>
          <div style={{ padding: '25px' }}>
            <p style={{
              color: '#666',
              marginBottom: '25px',
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Soluções robustas e personalizadas para telhados, galpões e mezaninos.
            </p>
            <a href="/Produtos/EstruturasMetalicas" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 30px',
                backgroundColor: 'transparent',
                color: '#0095a4',
                border: '2px solid #0095a4',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                ':hover': {
                  color: 'white',
                  ':before': {
                    width: '100%'
                  }
                },
                ':before': {
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '0%',
                  height: '100%',
                  backgroundColor: '#0095a4',
                  transition: 'width 0.3s ease',
                  zIndex: '-1'
                }
              }}>
                Ver Detalhes
              </button>
            </a>
          </div>
        </div>

        {/* Card 2 - Calhas */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          zIndex: '1',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 35px rgba(29, 61, 82, 0.2)'
          },
          ':before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #0095a4, #1D3D52)',
            zIndex: '2'
          }
        }}>
          <div style={{
            position: 'relative',
            height: '220px',
            overflow: 'hidden'
          }}>
            <img
              src="/img/foto de calha 1 (2).jpg"
              alt="Calhas"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                ':hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              padding: '20px',
              color: 'white',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                margin: '0',
                fontWeight: '600',
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
              }}>Calhas Premium</h3>
            </div>
          </div>
          <div style={{ padding: '25px' }}>
            <p style={{
              color: '#666',
              marginBottom: '25px',
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Sistemas completos de drenagem com alta durabilidade e acabamento impecável.
            </p>
            <a href="/Produtos/calhas" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 30px',
                backgroundColor: 'transparent',
                color: '#1D3D52',
                border: '2px solid #1D3D52',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                ':hover': {
                  color: 'white',
                  ':before': {
                    width: '100%'
                  }
                },
                ':before': {
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '0%',
                  height: '100%',
                  backgroundColor: '#1D3D52',
                  transition: 'width 0.3s ease',
                  zIndex: '-1'
                }
              }}>
                Ver Detalhes
              </button>
            </a>
          </div>
        </div>

        {/* Card 3 - Rufos */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(29, 61, 82, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          zIndex: '1',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 35px rgba(29, 61, 82, 0.2)'
          },
          ':before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #1D3D52, #0095a4)',
            zIndex: '2'
          }
        }}>
          <div style={{
            position: 'relative',
            height: '220px',
            overflow: 'hidden'
          }}>
            <img
              src="/img/PHOTO-2024-03-31-21-31-30 2.jpg"
              alt="Rufos"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                ':hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              padding: '20px',
              color: 'white',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                margin: '0',
                fontWeight: '600',
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
              }}>Rufos Profissionais</h3>
            </div>
          </div>
          <div style={{ padding: '25px' }}>
            <p style={{
              color: '#666',
              marginBottom: '25px',
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Proteção perfeita para as junções do seu telhado com 7 modelos diferentes.
            </p>
            <a href="/Produtos/rufos" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 30px',
                backgroundColor: 'transparent',
                color: '#0095a4',
                border: '2px solid #0095a4',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                ':hover': {
                  color: 'white',
                  ':before': {
                    width: '100%'
                  }
                },
                ':before': {
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '0%',
                  height: '100%',
                  backgroundColor: '#0095a4',
                  transition: 'width 0.3s ease',
                  zIndex: '-1'
                }
              }}>
                Ver Detalhes
              </button>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      {/* Hero Section */}
      
      
      {/* Categorias de Produtos */}
      <Container style={{ marginBottom: '80px' }}>
        {categorias.map((categoria) => (
          <div key={categoria.id} style={{ marginBottom: '60px' }}>
            <Row className="align-items-center mb-4">
              <Col>
                <h2 style={{
                  color: '#1D3D52',
                  fontSize: '2rem',
                  fontWeight: '700',
                  position: 'relative',
                  display: 'inline-block',
                  paddingBottom: '10px'
                }}>
                  {categoria.nome}
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '60px',
                    height: '3px',
                    backgroundColor: '#0095a4'
                  }}></span>
                </h2>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={5}>
                <div style={{
                  height: '300px',
                  backgroundImage: `url(${categoria.imagem})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                }}></div>
              </Col>
              <Col lg={7}>
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  height: '100%'
                }}>
                  <h3 style={{
                    color: '#0095a4',
                    fontSize: '1.4rem',
                    marginBottom: '20px',
                    fontWeight: '600'
                  }}>
                    Linha Completa
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px'
                  }}>
                    {categoria.itens.map((item, index) => (
                      <li key={index} style={{
                        padding: '10px 15px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '5px'
                      }}>
                        <div style={{
                          color: '#1D3D52',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            display: 'inline-block',
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#0095a4',
                            borderRadius: '50%',
                            marginRight: '10px'
                          }}></span>
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Container>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#1D3D52',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <Container>
          <h2 style={{
            fontSize: '2.2rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Precisa de algo específico?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>
            Nossa equipe está pronta para desenvolver soluções personalizadas para seu projeto.
          </p>
          <a
            href="/contato"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              backgroundColor: '#0095a4',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 149, 164, 0.4)',
              ':hover': {
                backgroundColor: '#007a87',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 20px rgba(0, 149, 164, 0.5)'
              }
            }}
          >
            Solicitar Orçamento
          </a>
        </Container>
      </div>


      <Rodape />
      <WhatsAppButton />

    </Pagina>
  );
};

export default ProdutosPage;