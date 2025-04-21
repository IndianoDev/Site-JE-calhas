import React from 'react';
import BannerSobre from '../components/BannerSobre';
import Pagina from '@/components/pagina';
import Rodape2 from '@/components/Rodape2';

const Sobre = () => {
  return (
    <Pagina>
      {/* Remove qualquer padding/margem do container principal */}
      <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <BannerSobre />
      </div>

      {/* Conteúdo normal (centralizado) */}
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Nossa História</h2>
        <p>Texto sobre a empresa...</p>
      </div>

      {/* Seção de Contato com largura total */}
      <div style={{ 
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden'
      }}>
        <img 
          src='/img/call us.jpg' 
          alt='Ligue para nós' 
          style={{ 
            width: '100%',
            minHeight: '300px',
            objectFit: 'cover'
          }} 
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '10px',
          width: '90%',
          maxWidth: '600px',
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Entre em contato</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Oferecemos os melhores serviços em nosso campo. Sempre mantemos sua satisfação como principal prioridade.
          </p>
          <button
            style={{
              padding: '12px 25px',
              backgroundColor: '#1D3D52',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#0095a4',
                transform: 'translateY(-2px)'
              }
            }}
            onClick={() => window.location.href = '/contato'}
          >
            Contato
          </button>
        </div>
      </div>
      <Rodape2 />
    </Pagina>
  
  );
 
};

export default Sobre;