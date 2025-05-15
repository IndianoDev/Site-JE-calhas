import React from 'react';

const FaixaContato = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      margin: '50px 0',
      padding: '0',
      overflow: 'hidden',
      borderRadius: '0',
    }}>
      {/* Container da imagem de fundo */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(300px, 50vh, 600px)',
        overflow: 'hidden'
      }}>
        {/* Imagem de fundo */}
        <img 
          src='/img/call us.jpg' 
          alt='Ligue para nós' 
          style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
            transition: 'transform 0.5s ease, filter 0.5s ease',
          }}
        />
        
        {/* Overlay escuro */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}></div>
        
        {/* Card de contato */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '600px',
          padding: '30px',
          backgroundColor: 'rgba(29, 61, 82, 0.95)',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          color: 'white',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Barra superior decorativa */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #0095a4, #1D3D52)',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          }} />
          
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            marginBottom: '20px',
            fontWeight: '700',
            color: 'white',
            lineHeight: '1.3'
          }}>
            Entre em contato
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            lineHeight: '1.6',
            marginBottom: '30px',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Oferecemos os melhores serviços em nosso campo. Sempre mantemos sua satisfação como principal prioridade.
          </p>
          
          <button
            style={{
              padding: '12px 30px',
              fontSize: '1rem',
              backgroundColor: '#0095a4',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1D3D52';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#0095a4';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => window.location.href = '/contato'}
          >
            <span>✉</span> Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaixaContato;