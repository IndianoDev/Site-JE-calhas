import React from 'react';

const BannerSobre = () => {
  return (
    <div style={{
      backgroundImage: 'url(/img/fundo-sobre.jpg)', // Substitua pela sua imagem
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '220px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
     
    }}>
      {/* Overlay escuro para melhor contraste do texto */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}></div>
      
      {/* Mensagem centralizada */}
      <h2 style={{
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        padding: '0 20px',
      }}>
        Conheca a JE Calhas
      </h2>
    </div>
  );
};

export default BannerSobre;