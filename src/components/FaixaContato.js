import React from 'react'

const FaixaContato = () => {
  return (
    <div style={{ 
      position: 'relative', 
      textAlign: 'center', 
      color: 'white',
      marginTop: '80px',
      marginBottom: '80px',
      padding: '0 20px'
    }}>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '20px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
        transform: 'translateY(0)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
      }}>
        <img 
          src='/img/call us.jpg' 
          alt='Ligue para nós' 
          style={{ 
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
            transition: 'transform 0.5s ease, filter 0.5s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.filter = 'brightness(0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'brightness(0.5)';
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(135deg, rgba(29, 61, 82, 0.97) 0%, rgba(42, 84, 117, 0.97) 100%)',
          padding: '50px',
          borderRadius: '20px',
          width: '90%',
          maxWidth: '700px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #4a90e2, #357abd)',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }} />
          <h2 style={{
            fontSize: '2.8rem',
            marginBottom: '25px',
            fontWeight: '700',
            background: 'linear-gradient(45deg, #fff, #e6e6e6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>Entre em contato</h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '35px',
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '90%',
            margin: '0 auto 35px',
          }}>
            Oferecemos os melhores serviços em nosso campo. Sempre mantemos sua satisfação 
            como principal prioridade. É assim que nós somos e nos orgulhamos disso.
          </p>
          <button
            style={{
              padding: '18px 45px',
              fontSize: '1.2rem',
              backgroundColor: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
              fontWeight: '600',
              letterSpacing: '0.5px',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#357abd';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(74, 144, 226, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#4a90e2';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(74, 144, 226, 0.3)';
            }}
            onClick={() => window.location.href = '/contato'}
          >
            <span style={{ marginRight: '10px' }}>✉</span>
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  )
}

export default FaixaContato