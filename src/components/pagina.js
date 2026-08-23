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
      <Cabecalho />
      <Container className='mb-6'>{props.children}</Container>
    </>
  );
};

export default Pagina;