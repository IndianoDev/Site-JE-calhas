import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Image from 'next/image';

const SobreNos = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      padding: isMobile ? '40px 20px' : '60px 20px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        gap: isMobile ? '0' : '50px'
      }}>
        {!isMobile && (
          <div style={{
            flex: 1,
            minWidth: '300px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <Image 
              src="/img/PHOTO-2024-03-31-16-05-40 2.jpg"
              alt="Equipe JE Calhas"
              width={600}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        )}
        
        <div style={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'left',
          padding: isMobile ? '0' : '0 20px'
        }}>
          <div style={{
            color: '#0095a4',
            fontSize: isMobile ? '0.9rem' : '1rem',
            fontWeight: 600,
            letterSpacing: '2px',
            marginBottom: '15px',
            textTransform: 'uppercase'
          }}>
            Sobre Nós
          </div>
          
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            fontWeight: 700,
            color: '#1D3D52',
            margin: '0 0 20px 0',
            lineHeight: '1.2'
          }}>
            Somos a JE Calhas
          </h2>
          
          <p style={{
            color: '#555',
            fontSize: isMobile ? '1rem' : '1.1rem',
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>
            Especialistas em soluções para coberturas e sistemas de drenagem há mais de 10 anos...
          </p>
          
          <div style={{ 
            textAlign: isMobile ? 'center' : 'left',
            marginTop: isMobile ? '20px' : '0'
          }}>
            <Link 
              href="/sobre"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: '#1D3D52',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
            >
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;