import React from 'react';
import BannerSobre from '../components/BannerSobre';
import Pagina from '@/components/pagina';
import Head from 'next/head';
import Rodape from '@/components/Rodape';
import WhatsAppButton from '@/components/WhatsAppButton';

const Sobre = () => {
  return (
    <Pagina>
      <Head>
        <title>Je Calhas - Sobre Nós</title>
        <meta name="description" content="Conheça a JE Calhas - especialistas em soluções de calhas e sistemas de drenagem com qualidade e compromisso" />
      </Head>

      {/* Banner Hero */}
      <div className="full-width-container">
        <BannerSobre 
          title="JE Calhas - Protegendo Seu Patrimônio"
          subtitle="Soluções completas em calhas e sistemas de drenagem"
        />
      </div>

      {/* Seção Nossa História */}
      <div className="content-container">
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Nossa História</h2>
              <p className="highlight-text">
                A <strong>JE Calhas</strong> nasceu da necessidade de oferecer soluções de qualidade em sistemas de calhas e drenagem, combinando expertise técnica com atendimento personalizado.
              </p>
              <p>
                Desde nossa fundação, nos dedicamos a proteger o patrimônio de nossos clientes com produtos duráveis e instalações impecáveis. Nossa equipe é formada por profissionais altamente qualificados, com anos de experiência no mercado, que entendem as particularidades de cada projeto.
              </p>
              <p>
                Na JE Calhas, não vendemos apenas calhas - oferecemos <strong>proteção, tranquilidade e satisfação</strong> para nossos clientes. Atuamos em todo o território nacional, levando nossa expertise e compromisso com a excelência para cada obra.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="/img/D485BBC2-80EB-4216-B9B1-7BB6F5B4C78C.png"
                alt="Equipe Je Calhas" 
                className="responsive-image"
              />
            </div>
          </div>
        </section>

        {/* Seção Nossos Valores */}
        <section className="values-section">
          <h2 className="section-title">Nossos Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-medal"></i>
              </div>
              <h3>Qualidade Garantida</h3>
              <p>Utilizamos materiais premium e técnicas de instalação comprovadas para garantir a máxima durabilidade e eficiência.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Compromisso Total</h3>
              <p>Honramos prazos e mantemos transparência em todas as etapas do projeto, com a satisfação do cliente como prioridade.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Inovação Constante</h3>
              <p>Adotamos as melhores técnicas e tecnologias do setor para oferecer soluções modernas e eficientes.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Seção de Diferenciais */}
      <div className="full-width-container bg-primary">
        <div className="content-container">
          <section className="differentials-section">
            <h2 className="section-title light-text">Por que escolher a JE Calhas?</h2>
            <ul className="differentials-list">
              <li>
                <i className="fas fa-check-circle" style={{color: 'green'}}></i>
                <span>Equipe técnica especializada e certificada</span>
              </li>
              <li>
                <i className="fas fa-check-circle " style={{color: 'green'}}></i>
                <span>Materiais de alta resistência e durabilidade</span>
              </li>
              <li>
                <i className="fas fa-check-circle " style={{color: 'green'}}></i>
                <span>Garantia em todos os produtos e serviços</span>
              </li>
              <li>
                <i className="fas fa-check-circle" style={{color: 'green'}}></i>
                <span>Atendimento personalizado em todo o território nacional</span>
              </li>
              <li>
                <i className="fas fa-check-circle" style={{color: 'green'}}></i>
                <span>Soluções customizadas para cada necessidade</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
<br>
</br>
      {/* Seção de Contato */}
      <div className="contact-banner">
        <img 
          src='/img/call us.jpg' 
          alt='Ligue para a Je Calhas' 
          className="contact-image"
        />
        <div className="contact-overlay">
          <div className="contact-content">
            <h2>Pronto para proteger seu imóvel?</h2>
            <p>Nossa equipe está pronta para oferecer a melhor solução em calhas e sistemas de drenagem para sua residência ou empresa.</p>
            <button
              className="cta-button"
              onClick={() => window.location.href = '/contato'}
            >
              Solicite um Orçamento
            </button>
          </div>
        </div>
      </div>
      <WhatsAppButton />

      <Rodape />

      <style jsx>{`
        /* Estilos globais */
        .full-width-container {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .bg-primary {
          background-color: #1D3D52;
          color: white;
        }
        
        /* Seção Sobre */
        .about-section {
          padding: 60px 0;
        }
        
        .about-content {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          align-items: center;
        }
        
        .about-text {
          flex: 1;
          min-width: 300px;
        }
        
        .about-image {
          flex: 1;
          min-width: 300px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .responsive-image {
          width: 100%;
          height: auto;
          display: block;
        }
        
        /* Títulos */
        .section-title {
          font-size: 2rem;
          color: #1D3D52;
          margin-bottom: 30px;
          position: relative;
          padding-bottom: 10px;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: #0095A4;
        }
        
        .light-text {
          color: white;
        }
        
        .light-text::after {
          background-color: white;
        }
        
        /* Valores */
        .values-section {
          padding: 40px 0 60px;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .value-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
        }
        
        .value-card h3 {
          color: #1D3D52;
          margin: 15px 0;
          font-size: 1.3rem;
        }
        
        .value-icon {
          font-size: 2rem;
          color: #0095A4;
        }
        
        /* Diferenciais */
        .differentials-section {
          padding: 60px 0;
        }
        
        .differentials-list {
          list-style: none;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .differentials-list li {
          margin-bottom: 15px;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
        }
        
        .differentials-list i {
          color: #0095A4;
          margin-right: 15px;
          font-size: 1.3rem;
        }
        
        /* Contato */
        .contact-banner {
          position: relative;
          width: 100%;
          height: 400px;
        }
        
        .contact-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .contact-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        
        .contact-content {
          max-width: 600px;
          padding: 20px;
        }
        
        .contact-content h2 {
          color: white;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        
        .contact-content p {
          color: #eee;
          font-size: 1.1rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .cta-button {
          padding: 12px 30px;
          background-color: #0095A4;
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background-color: #007a87;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Texto */
        .highlight-text {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 20px;
          color: #333;
        }
        
        p {
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        /* Responsivo */
        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
          }
          
          .section-title {
            font-size: 1.7rem;
          }
          
          .contact-banner {
            height: 300px;
          }
        }
      `}</style>
      
      {/* Adicionando ícones do Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
      />
   
    </Pagina>
  );
};

export default Sobre;