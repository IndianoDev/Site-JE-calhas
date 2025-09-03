import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pagina from '@/components/pagina';
import SobreNos from '@/components/SobreNos';
import Rodape from '@/components/Rodape';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';

const Contato = () => {
  // Estado do formulário e feedback
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Estilos
  const styles = {
    formContainer: {
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    },
    title: {
      color: '#1D3D52',
      fontSize: '2.2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      position: 'relative',
      paddingBottom: '15px'
    },
    underline: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '80px',
      height: '4px',
      backgroundColor: '#0095a4',
      borderRadius: '2px'
    },
    input: {
      backgroundColor: '#fff',
      border: '1px solid #ced4da',
      borderRadius: '5px',
      padding: '12px 15px',
      marginBottom: '20px',
      width: '100%',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    },
    textarea: {
      minHeight: '150px',
      resize: 'vertical'
    },
    button: {
      backgroundColor: '#1D3D52',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '12px 30px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    },
    feedbackSuccess: {
      color: '#0095a4',
      marginTop: '15px',
      fontWeight: '600'
    },
    feedbackError: {
      color: '#dc3545',
      marginTop: '15px',
      fontWeight: '600'
    }
  };

  // Função para atualizar os campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso!' });
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' }); // Limpa o form
      } else {
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
        marginRight: '-50vw',
        marginBottom: '50px'
      }}>
        <Container>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '15px'
          }}>
            Entre em Contato
          </h1>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            Estamos prontos para atender suas necessidades em estruturas metálicas e sistemas de cobertura
          </p>
        </Container>
      </div>

      {/* Formulário de Contato */}
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Coluna do Formulário */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div style={styles.formContainer}>
              <h2 style={styles.title}>
                ENTRE EM CONTATO PELO FORMULÁRIO
                <div style={styles.underline}></div>
              </h2>
              
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu Nome Completo"
                  value={formData.nome}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Melhor E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Seu Número de Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                
                <textarea
                  name="mensagem"
                  placeholder="Escreva sua mensagem aqui..."
                  value={formData.mensagem}
                  onChange={handleChange}
                  style={{...styles.input, ...styles.textarea}}
                  required
                ></textarea>
                
                <button 
                  type="submit" 
                  style={styles.button}
                  disabled={isLoading}
                >
                  {isLoading ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                </button>

                {/* Feedback após envio */}
                {feedback && (
                  <p style={feedback.type === 'success' ? styles.feedbackSuccess : styles.feedbackError}>
                    {feedback.message}
                  </p>
                )}
              </form>
            </div>
          </Col>
          
          {/* Coluna da Imagem */}
          <Col lg={6}>
            <div style={styles.imageContainer}>
              <Image 
                src="/img/PHOTO-2024-03-31-16-05-40 2.jpg"
                alt="Entre em contato"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                style={styles.image}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Seção SobreNos - LARGURA TOTAL */}
      <div style={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <SobreNos />
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
    </Pagina>
  );
};

export default Contato;