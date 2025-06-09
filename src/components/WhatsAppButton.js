import React from 'react';
import Head from 'next/head';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '5561991530796'; // Substitua pelo seu número
  const message = 'Olá, gostaria de informações sobre...'; // Mensagem padrão

  return (
    <>
      <Head>
        {/* Adicione isso no Head para melhorar o ícone no iOS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          ':hover': {
            backgroundColor: '#128C7E',
            transform: 'scale(1.1)'
          }
        }}
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsAppButton;