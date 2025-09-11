import React from 'react';
import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Pagina from '@/components/pagina';
import Rodape from '@/components/Rodape';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FaArrowRight } from 'react-icons/fa';

const ProdutosPage = () => {
  const categorias = [
    { id: 1, nome: 'Calhas', itens: ['Calha Tipo K', 'Calha Tipo Americana', 'Calha Colonial', 'Calha Galvanizada', 'Calha em Alumínio'], imagem: '/img/Renderizadas/27.png' },
    { id: 2, nome: 'Rufos', itens: ['Rufo de Parede', 'Rufo de Fachada', 'Rufo Cônico', 'Rufo para Telhado', 'Rufo Personalizado'], imagem: '/img/Renderizadas/11.png' },
    { id: 3, nome: 'Coifas e Componentes', itens: ['Coifa Industrial', 'Coifa Residencial', 'Dutos de Ventilação', 'Componentes para Exaustão', 'Acessórios para Coifa'], imagem: '/img/Renderizadas/28.png' },
    { id: 4, nome: 'Peças Sob Medida', itens: ['Calhas Personalizadas', 'Rufos Especiais', 'Componentes Customizados', 'Soluções para Projetos Únicos', 'Peças para Reformas'], imagem: '/img/Renderizadas/je-png-trans.png' }
  ];

  return (
    <Pagina titulo="Produtos">
      <Head>
        <title>Produtos | JE Calhas - Soluções em Coberturas</title>
        <meta name="description" content="Conheça nossa linha completa de calhas, rufos e componentes para sistemas de drenagem e coberturas" />
      </Head>

      <div className="hero-section">
          <h1 className="hero-title">Nossos Produtos</h1>
          <p className="hero-subtitle">
            Soluções completas com a qualidade e a durabilidade que você confia.
          </p>
      </div>

      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link href="/" legacyBehavior><a className="breadcrumb-link">Home</a></Link>
          </li>
          <li className="breadcrumb-separator">&gt;</li>
          <li className="breadcrumb-active">Produtos</li>
        </ol>
      </nav>

      <div className="product-grid-wrapper">
        <Row className="product-grid g-4">
          {/* Card 1 - Estruturas Metálicas */}
          <Col md={6} lg={4}>
            <div className="product-card">
              <Link href="/Produtos/EstruturasMetalicas" passHref legacyBehavior>
                <a className="product-card-link">
                  <div className="product-image-container">
                    <Image src="/img/PHOTO-2024-03-31-15-56-42 2.jpg" alt="Estruturas Metálicas" layout="fill" objectFit="cover" className="product-image" priority/>
                    <div className="product-image-overlay"><h3>Estruturas Metálicas</h3></div>
                  </div>
                  <div className="product-content">
                    <p className="product-description">Soluções robustas e personalizadas para telhados, galpões e mezaninos.</p>
                    <div className="service-button teal">Ver Detalhes <FaArrowRight /></div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>

          {/* Card 2 - Calhas */}
          <Col md={6} lg={4}>
            <div className="product-card">
              <Link href="/Produtos/calhas" passHref legacyBehavior>
                <a className="product-card-link">
                  <div className="product-image-container">
                    <Image src="/img/foto de calha 1 (2).jpg" alt="Calhas" layout="fill" objectFit="cover" className="product-image" priority/>
                    <div className="product-image-overlay"><h3>Calhas Premium</h3></div>
                  </div>
                  <div className="product-content">
                    <p className="product-description">Sistemas de drenagem com alta durabilidade e acabamento impecável.</p>
                    <div className="service-button dark-blue">Ver Detalhes <FaArrowRight /></div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
          
          {/* Card 3 - Rufos */}
          <Col md={12} lg={4}>
            <div className="product-card">
              <Link href="/Produtos/rufos" passHref legacyBehavior>
                <a className="product-card-link">
                  <div className="product-image-container">
                    <Image src="/img/PHOTO-2024-03-31-21-31-30 2.jpg" alt="Rufos" layout="fill" objectFit="cover" className="product-image" priority/>
                    <div className="product-image-overlay"><h3>Rufos Profissionais</h3></div>
                  </div>
                  <div className="product-content">
                    <p className="product-description">Proteção perfeita para as junções do seu telhado com 7 modelos diferentes.</p>
                    <div className="service-button teal">Ver Detalhes <FaArrowRight /></div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      
      <div className="categories-background">
        {categorias.map((categoria, index) => (
          <div key={categoria.id} className="category-section">
            <Row className={`g-5 align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <Col lg={6}>
                <div className="category-image-wrapper">
                  <Image src={categoria.imagem} alt={categoria.nome} layout="fill" objectFit="cover" className="category-image" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="category-content">
                  <h2 className="category-title">{categoria.nome}</h2>
                  <p className="content-subtitle">Linha completa de produtos e variações:</p>
                  <ul className="features-grid">
                    {categoria.itens.map((item, itemIndex) => (
                      <li key={itemIndex} className="feature-item">
                        <span className="feature-bullet"></span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Precisa de algo específico?</h2>
        <p className="cta-text">
          Nossa equipe está pronta para desenvolver soluções personalizadas para seu projeto.
        </p>
        <Link href="/contato" legacyBehavior>
          <a className="cta-button">
            Solicitar Orçamento
          </a>
        </Link>
      </div>

      <Rodape />
      <WhatsAppButton />

      <style jsx>{`
        /* --- Ajustes principais para largura total --- */
        .breadcrumb-container,
        .product-grid,
        .product-grid-wrapper,
        .category-section {
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* --- Animações --- */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- Estilos Gerais e Hero Section --- */
        .hero-section {
          width: 100%;
          background: linear-gradient(135deg, #1D3D52, #0095a4);
          color: white;
          padding: 80px 20px;
          text-align: center;
          margin-bottom: 40px;
        }
        .hero-title {
          font-size: clamp(2.2rem, 5vw, 3rem);
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 0.6s ease-out;
        }
        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.3rem);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.9;
          animation: fadeInUp 0.8s ease-out;
        }

        /* --- Breadcrumb --- */
        .breadcrumb-list { display: flex; list-style: none; padding: 0 20px; margin: 0; font-size: 0.9rem; }
        .breadcrumb-item { margin-right: 10px; }
        .breadcrumb-separator { margin-right: 10px; color: #0095a4; }
        .breadcrumb-active { color: #0095a4; font-weight: 600; }
        .breadcrumb-link { color: #1D3D52; text-decoration: none; transition: color 0.3s ease; }
        .breadcrumb-link:hover { color: #0095a4; text-decoration: underline; }

        /* --- Product Card Grid --- */
        .product-card {
          background-color: #fff; border-radius: 16px; overflow: hidden;
          box-shadow: 0 10px 30px rgba(29, 61, 82, 0.1);
          transition: all 0.4s ease;
          border: 1px solid #eee;
          display: flex; flex-direction: column; height: 100%;
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .product-card:nth-child(2) { animation-delay: 0.1s; }
        .product-card:nth-child(3) { animation-delay: 0.2s; }
        .product-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(29, 61, 82, 0.15); }
        .product-card-link { text-decoration: none; display: flex; flex-direction: column; height: 100%; }
        .product-image-container { position: relative; height: 220px; overflow: hidden; }
        :global(.product-image) { transition: transform 0.5s ease !important; }
        .product-card:hover :global(.product-image) { transform: scale(1.05); }
        .product-image-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          padding: 20px; color: white; text-align: left;
        }
        .product-image-overlay h3 { font-size: 1.5rem; margin: 0; font-weight: 600; text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }
        .product-content { padding: 25px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .product-description { color: #666; font-size: 1rem; line-height: 1.6; margin-bottom: 25px; }

        /* Estilos dos botões "Ver Detalhes" */
        .service-button {
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 30px; background-color: transparent; border: 2px solid;
          border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; align-self: flex-start;
        }
        .service-button.teal { color: #0095a4; border-color: #0095a4; }
        .service-button.dark-blue { color: #1D3D52; border-color: #1D3D52; }
        .service-button:hover { color: white; transform: translateY(-3px); }
        .service-button.teal:hover { background-color: #0095a4; box-shadow: 0 4px 15px rgba(0, 149, 164, 0.3); }
        .service-button.dark-blue:hover { background-color: #1D3D52; box-shadow: 0 4px 15px rgba(29, 61, 82, 0.3); }

        /* --- Categories Section --- */
        .categories-background { background-color: #f8f9fa; padding: 80px 0; overflow: hidden; }
        .category-section { 
          margin-bottom: 80px; 
          animation: fadeInUp 0.6s ease-out;
        }
        .category-section:last-child { margin-bottom: 0; }
        .category-image-wrapper {
          position: relative; padding-top: 60%; border-radius: 16px;
          overflow: hidden; box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        :global(.category-image) { transition: transform 0.4s ease; }
        .category-image-wrapper:hover :global(.category-image) { transform: scale(1.05); }
        .category-content { padding: 20px; text-align: left; }
        .category-title {
          color: #1D3D52; font-size: 2.2rem; font-weight: 700;
          position: relative; display: inline-block; padding-bottom: 15px; margin-bottom: 20px;
        }
        .category-title::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 60px; height: 4px; background-color: #0095a4; border-radius: 2px;
        }
        .content-subtitle { color: #555; font-size: 1.1rem; margin-bottom: 25px; font-weight: 500; }
        .features-grid { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .feature-item { padding: 10px; background-color: #fff; border-radius: 8px; color: #1D3D52; display: flex; align-items: center; border: 1px solid #eee; }
        .feature-bullet { display: inline-block; width: 10px; height: 10px; background-color: #0095a4; border-radius: 50%; margin-right: 12px; flex-shrink: 0;}

        /* --- CTA Section --- */
        .cta-section { 
          width: 100%;
          background-color: #1D3D52; 
          color: white; 
          padding: 80px 20px; 
          text-align: center; 
        }
        .cta-title { font-size: 2.2rem; margin-bottom: 20px; font-weight: 700; }
        .cta-text { font-size: 1.2rem; max-width: 700px; margin: 0 auto 30px; line-height: 1.6; opacity: 0.9; }
        .cta-button {
          display: inline-block; padding: 14px 35px; background: linear-gradient(45deg, #0095a4, #00c2d4); color: white;
          border: none; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 1.1rem;
          transition: all 0.3s ease; box-shadow: 0 5px 20px rgba(0, 149, 164, 0.4);
        }
        .cta-button:hover { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(0, 149, 164, 0.5); }
      `}</style>
    </Pagina>
  );
};

export default ProdutosPage;
