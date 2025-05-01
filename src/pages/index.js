import React, { useState, useEffect } from 'react';
import Pagina from '../components/pagina';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rodape from '@/components/Rodape'
import FaixaContato from '@/components/FaixaContato';

const Index = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = [
    { id: '1', image: '/img/carrosel imagem 1 (1).png' },
    { id: '2', image: '/img/carrosel imagem 1 (2) (1).png' },
    { id: '3', image: '/img/carrosel imagem 1 (3) (1).png' },
  ];

  // Configurações do carrossel
  const settings = {
    dots: true, // Mostra os pontos de navegação
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides a rolar por vez
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 4000, // Intervalo de 4 segundos
    pauseOnHover: false, // Não pausa ao passar o mouse
  };

  return (
    <>
      <Pagina />
      {isClient && (
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt='Slider'
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </Slider>
      )}
     <div style={{ 
  backgroundColor: '#1D3D52', 
  fontSize: '1.5rem', 
  textAlign: 'center', 
  color: 'white', 
  padding: '10px 0', // Adiciona um pequeno padding interno
  position: 'relative', // Permite ajustar a posição
  top: '-20px', // "Puxa" o texto 20px para cima
  zIndex: 1, // Garante que o texto fique acima do carrossel
}}>
  Bem-vindos à JE Calhas
</div>
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>
  <div style={{
     fontSize: '1.0rem', // Tamanho da fonte para "# Produtos"
     color: '#0095a4', // Cor do texto (ajuste conforme necessário)
  }}>
     DESTAQUES
  </div>
  <div style={{
    
    fontSize: '2rem', // Tamanho da fonte para "DESTAQUES"
    fontWeight: 'bold', // Texto em negrito
    color: '#1D3D52', // Cor do texto (ajuste conforme necessário)
    marginBottom: '10px', // Espaçamento entre "DESTAQUES" e "# Produtos"
  }}>
    Produtos
  </div>
</div>

<FaixaContato/>

<Rodape />
    </>
  );
};

export default Index;