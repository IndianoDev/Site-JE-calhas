import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
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

      {/* Hero Section */}
      <div className="hero-gradient">
        <Container>
          <h1 className="hero-title">Nossos Produtos</h1>
          <p className="hero-subtitle">
            Conheça nossa linha completa de soluções em calhas e sistemas de cobertura com a qualidade JE Calhas
          </p>
        </Container>
      </div>

      {/* Breadcrumb */}
      <Container className="breadcrumb-container">
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <Link href="/" legacyBehavior>
                    <a className="breadcrumb-link">Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-separator">&gt;</li>
                <li className="breadcrumb-active">Produtos</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>

      {/* Product Cards */}
      <div className="product-grid">
        {/* Card 1 - Estruturas Metálicas */}
        <div className="product-card">
          <div className="product-image-container">
            <Image
              src="/img/PHOTO-2024-03-31-15-56-42 2.jpg"
              alt="Estruturas Metálicas"
              width={400}
              height={300}
              className="product-image"
              priority
            />
            <div className="product-image-overlay">
              <h3>Estruturas Metálicas</h3>
            </div>
          </div>
          <div className="product-content">
            <p className="product-description">
              Soluções robustas e personalizadas para telhados, galpões e mezaninos.
            </p>
            <Link href="/Produtos/EstruturasMetalicas" legacyBehavior>
              <a className="product-link">
                <button className="product-button">
                  Ver Detalhes
                </button>
              </a>
            </Link>
          </div>
        </div>

        {/* Card 2 - Calhas */}
        <div className="product-card">
          <div className="product-image-container">
            <Image
              src="/img/foto de calha 1 (2).jpg"
              alt="Calhas"
              width={400}
              height={300}
              className="product-image"
              priority
            />
            <div className="product-image-overlay">
              <h3>Calhas Premium</h3>
            </div>
          </div>
          <div className="product-content">
            <p className="product-description">
              Sistemas completos de drenagem com alta durabilidade e acabamento impecável.
            </p>
            <Link href="/Produtos/calhas" legacyBehavior>
              <a className="product-link">
                <button className="product-button">
                  Ver Detalhes
                </button>
              </a>
            </Link>
          </div>
        </div>

        {/* Card 3 - Rufos */}
        <div className="product-card">
          <div className="product-image-container">
            <Image
              src="/img/PHOTO-2024-03-31-21-31-30 2.jpg"
              alt="Rufos"
              width={400}
              height={300}
              className="product-image"
              priority
            />
            <div className="product-image-overlay">
              <h3>Rufos Profissionais</h3>
            </div>
          </div>
          <div className="product-content">
            <p className="product-description">
              Proteção perfeita para as junções do seu telhado com 7 modelos diferentes.
            </p>
            <Link href="/Produtos/rufos" legacyBehavior>
              <a className="product-link">
                <button className="product-button">
                  Ver Detalhes
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <Container className="categories-container">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="category-section">
            <Row className="align-items-center mb-4">
              <Col>
                <h2 className="category-title">
                  {categoria.nome}
                  <span className="title-underline"></span>
                </h2>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={5}>
                <div className="category-image-wrapper">
                  <Image
                    src={categoria.imagem}
                    alt={categoria.nome}
                    width={500}
                    height={300}
                    className="category-image"
                    style={{
                      objectFit: 'cover',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </Col>
              <Col lg={7}>
                <div className="category-content">
                  <h3 className="content-subtitle">Linha Completa</h3>
                  <ul className="features-grid">
                    {categoria.itens.map((item, index) => (
                      <li key={index} className="feature-item">
                        <div className="feature-content">
                          <span className="feature-bullet"></span>
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
      <div className="cta-section">
        <Container>
          <h2 className="cta-title">Precisa de algo específico?</h2>
          <p className="cta-text">
            Nossa equipe está pronta para desenvolver soluções personalizadas para seu projeto.
          </p>
          <Link href="/contato" legacyBehavior>
            <a className="cta-button">
              Solicitar Orçamento
            </a>
          </Link>
        </Container>
      </div>

      <Rodape />
      <WhatsAppButton />

      <style jsx>{`
        /* Hero Section */
        .hero-gradient {
          background: linear-gradient(135deg, rgba(29, 61, 82, 0.9), rgba(0, 149, 164, 0.8));
          color: white;
          padding: 80px 0;
          text-align: center;
          margin-bottom: 50px;
        }
        
        .hero-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        /* Breadcrumb */
        .breadcrumb-container {
          margin-bottom: 40px;
        }
        
        .breadcrumb-list {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .breadcrumb-item {
          margin-right: 10px;
        }
        
        .breadcrumb-separator {
          margin-right: 10px;
          color: #0095a4;
        }
        
        .breadcrumb-active {
          color: #0095a4;
        }
        
        .breadcrumb-link {
          color: #1D3D52;
          text-decoration: none;
          transition: text-decoration 0.3s ease;
        }
        
        .breadcrumb-link:hover {
          text-decoration: underline;
        }
        
        /* Product Grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
          padding: 0 20px;
        }
        
        .product-card {
          background-color: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(29, 61, 82, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative;
          z-index: 1;
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(29, 61, 82, 0.2);
        }
        
        .product-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1D3D52, #0095a4);
          z-index: 2;
        }
        
        .product-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image {
          transform: scale(1.1);
        }
        
        .product-image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
          padding: 20px;
          color: white;
          text-align: left;
        }
        
        .product-image-overlay h3 {
          font-size: 1.5rem;
          margin: 0;
          font-weight: 600;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
        }
        
        .product-content {
          padding: 25px;
        }
        
        .product-description {
          color: #666;
          margin-bottom: 25px;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        .product-link {
          text-decoration: none;
        }
        
        .product-button {
          padding: 12px 30px;
          background-color: transparent;
          color: #0095a4;
          border: 2px solid #0095a4;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .product-button:hover {
          color: white;
        }
        
        .product-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: #0095a4;
          transition: width 0.3s ease;
          z-index: -1;
        }
        
        .product-button:hover::before {
          width: 100%;
        }
        
        /* Categories Section */
        .categories-container {
          margin-bottom: 80px;
        }
        
        .category-section {
          margin-bottom: 60px;
        }
        
        .category-title {
          color: #1D3D52;
          font-size: 2rem;
          font-weight: 700;
          position: relative;
          display: inline-block;
          padding-bottom: 10px;
        }
        
        .title-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: #0095a4;
        }
        
        .category-image-wrapper {
          position: relative;
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .category-content {
          background-color: #fff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          height: 100%;
        }
        
        .content-subtitle {
          color: #0095a4;
          font-size: 1.4rem;
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        .features-grid {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }
        
        .feature-item {
          padding: 10px 15px;
          background-color: #f8f9fa;
          border-radius: 5px;
        }
        
        .feature-content {
          color: #1D3D52;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        
        .feature-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #0095a4;
          border-radius: 50%;
          margin-right: 10px;
        }
        
        /* CTA Section */
        .cta-section {
          background-color: #1D3D52;
          color: white;
          padding: 60px 0;
          text-align: center;
        }
        
        .cta-title {
          font-size: 2.2rem;
          margin-bottom: 20px;
          font-weight: 700;
        }
        
        .cta-text {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        
        .cta-button {
          display: inline-block;
          padding: 12px 30px;
          background-color: #0095a4;
          color: white;
          border: none;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 149, 164, 0.4);
        }
        
        .cta-button:hover {
          background-color: #007a87;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 149, 164, 0.5);
        }
      `}</style>
    </Pagina>
  );
};

export default ProdutosPage;