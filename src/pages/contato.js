import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pagina from '@/components/pagina';
import SobreNos from '@/components/SobreNos';
import Rodape from '@/components/Rodape';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contato = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    imageContainer: {
      display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'
    },
    image: {
      maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);
    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso!' });
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao enviar a mensagem');
      }
    } catch (error) {
      setFeedback({ type: 'error', message: 'Ocorreu um erro. Tente novamente mais tarde.' });
      console.error('Erro no envio:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Pagina titulo="Contato">
      {/* Seções originais mantidas */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(29, 61, 82, 0.9), rgba(0, 149, 164, 0.8))',
        color: 'white', padding: '60px 0', textAlign: 'center',
        width: '100vw', position: 'relative', left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw', marginBottom: '50px'
      }}>
        <Container>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>
            Entre em Contato
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: '0.9' }}>
            Estamos prontos para atender suas necessidades em estruturas metálicas e sistemas de cobertura
          </p>
        </Container>
      </div>

      <Container className="contact-container my-5">
        <Row className="align-items-center g-5">
          <Col lg={isMobile ? 12 : 6}>
            <div className="form-wrapper">
              <h2 className="form-title">
                Fale Conosco
                <span className="title-underline"></span>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <FaUser className="input-icon" />
                  <input type="text" name="nome" placeholder="Seu Nome Completo" value={formData.nome} onChange={handleChange} className="form-input" required />
                </div>
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input type="email" name="email" placeholder="Seu Melhor E-mail" value={formData.email} onChange={handleChange} className="form-input" required />
                </div>
                <div className="input-group">
                  <FaPhone className="input-icon" />
                  <input type="tel" name="telefone" placeholder="Seu Número de Telefone" value={formData.telefone} onChange={handleChange} className="form-input" required />
                </div>
                <textarea name="mensagem" placeholder="Escreva sua mensagem aqui..." value={formData.mensagem} onChange={handleChange} className="form-textarea" required></textarea>
                
                <button type="submit" className="submit-button" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : <><FaPaperPlane style={{marginRight: '10px'}}/> Enviar Mensagem</>}
                </button>

                {feedback && (
                  <div className={`feedback-message ${feedback.type}`}>
                    {feedback.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
                    {feedback.message}
                  </div>
                )}
              </form>
            </div>
          </Col>
          
          {!isMobile && (
            <Col lg={6}>
              <div style={styles.imageContainer}>
                <Image 
                  src="/img/PHOTO-2024-03-31-16-05-40 2.jpg"
                  alt="Entre em contato com JE Calhas"
                  width={500}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                  style={styles.image}
                />
              </div>
            </Col>
          )}
        </Row>
      </Container>
      
      <div className="full-width-section">
        <SobreNos />
      </div>

      <div className="full-width-section">
        <Rodape />
      </div>

      <WhatsAppButton />

      <style jsx global>{`
          /* Estilos do hero e full-width */
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hero-section {
            background: linear-gradient(135deg, #1D3D52, #0095a4);
            color: white;
            padding: 80px 20px;
            text-align: center;
            margin-bottom: 50px;
          }
          .hero-title { font-size: 3rem; font-weight: 700; animation: fadeInUp 0.6s ease-out; }
          .hero-subtitle { font-size: 1.3rem; opacity: 0.9; animation: fadeInUp 0.8s ease-out; max-width: 800px; margin: 1rem auto 0; }
          .full-width-section {
            width: 100vw; position: relative; left: 50%; right: 50%;
            margin-left: -50vw; margin-right: -50vw;
          }
          .contact-container {
              animation: fadeInUp 1s ease-out;
          }
          
          /* --- ESTILOS DO FORMULÁRIO CORRIGIDO --- */
          .form-wrapper {
            background-color: #ffffff;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid #eee;
          }
          .form-title {
            color: #1D3D52; font-size: 2rem; font-weight: 700;
            margin-bottom: 30px; position: relative; padding-bottom: 15px;
          }
          .title-underline {
            position: absolute; bottom: 0; left: 0; width: 60px;
            height: 4px; background-color: #0095a4; border-radius: 2px;
          }
          
          .input-group {
            position: relative;
            margin-bottom: 20px;
          }
          .input-icon {
            position: absolute;
            left: 18px; /* Posição do ícone */
            top: 50%;
            transform: translateY(-50%);
            color: #aaa;
            transition: color 0.3s ease;
            z-index: 2; /* Para garantir que fique acima do input */
          }
          .form-input {
            background-color: #f8f9fa; border: 1px solid #ddd;
            border-radius: 8px;
            /* A MUDANÇA PRINCIPAL ESTÁ AQUI: */
            padding: 14px 18px 14px 50px; /* Padding à esquerda para o ícone */
            width: 100%; font-size: 1rem; transition: all 0.3s ease;
          }
          .form-input:focus {
            outline: none; border-color: #0095a4;
            box-shadow: 0 0 0 3px rgba(0, 149, 164, 0.15);
          }
          .form-input:focus ~ .input-icon {
            color: #0095a4;
          }

          .form-textarea {
            background-color: #f8f9fa; border: 1px solid #ddd;
            border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;
            width: 100%; font-size: 1rem; transition: all 0.3s ease;
            min-height: 150px; resize: vertical;
          }
          .form-textarea:focus {
            outline: none; border-color: #0095a4;
            box-shadow: 0 0 0 3px rgba(0, 149, 164, 0.15);
          }
          
          .submit-button {
            background: linear-gradient(45deg, #1D3D52, #2a5475);
            color: white; border: none; border-radius: 50px;
            padding: 14px 35px; font-size: 1rem; font-weight: 600;
            cursor: pointer; transition: all 0.3s ease;
            display: inline-flex; align-items: center; justify-content: center;
            width: 100%;
            box-shadow: 0 4px 15px rgba(29, 61, 82, 0.2);
          }
          .submit-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(29, 61, 82, 0.3);
          }
          .submit-button:disabled {
            background: #aaa; cursor: not-allowed;
          }
          
          .feedback-message {
            margin-top: 20px; font-weight: 500;
            padding: 12px 18px; border-radius: 8px;
            display: flex; align-items: center; gap: 10px;
          }
          .feedback-message.success {
            color: #0f5132; background-color: #d1e7dd; border: 1px solid #badbcc;
          }
          .feedback-message.error {
            color: #842029; background-color: #f8d7da; border: 1px solid #f5c2c7;
          }
      `}</style>
    </Pagina>
  );
};

export default Contato;