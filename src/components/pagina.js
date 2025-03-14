import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import Cabecalho from './cabecalho';


const Pagina = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const estiloTitulo = {
    fontFamily: 'Anta, sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anta&display=swap" />
      <div style={{ backgroundColor: '#1D3D52', fontSize: '1rem', paddingTop: '100px', marginBottom: '60px' }} className='text-white py-1 text-center mb-3'>
  <Container>
    <div className="row">
      <div className="col-sm">
        <div className="d-none d-md-block" style={estiloTitulo}>
          <BsFillTelephoneFill className='me-2' />
          (61) 99153-0796
        </div>
      </div>
      <div className="col-sm">
        <div className="d-none d-md-block" style={estiloTitulo}>
          <BsFillTelephoneFill className='me-2' />
          (61) 3273-3582
        </div>
      </div>
      <div className="col-sm">
        <div className="d-none d-md-block" style={estiloTitulo}>
          jecalhas@gmail.com
        </div>
      </div>
      <div className="col-sm">
        <div className="d-none d-md-block" style={estiloTitulo}>
          SHSN-Ceilandia
        </div>
      </div>
    </div>
  </Container>
  <h1 style={estiloTitulo}>{props.titulo}</h1>
</div>
<br>
</br>
<br>
</br>

      <Cabecalho />
      <Container className='mb-6'>{props.children}</Container>
    </>
  );
};

export default Pagina;