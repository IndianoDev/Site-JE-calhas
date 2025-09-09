import React from 'react';
// AQUI ESTÁ A MUDANÇA PRINCIPAL: Importando o ícone do Ionicons 5
import { IoLogoWhatsapp } from 'react-icons/io5';

const WhatsAppButton = () => {
  const phoneNumber = '5561991530796'; // Seu número aqui
  const message = 'Olá, gostaria de um orçamento!'; // Mensagem padrão

  return (
    <>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        title="Fale Conosco pelo WhatsApp"
      >
        {/* Usamos o novo ícone IoLogoWhatsapp */}
        <IoLogoWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">Fale Conosco!</span>
      </a>

      <style jsx>{`
        /* Animação de pulsação */
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
        }

        .whatsapp-button {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background-color: #25D366;
          color: white;
          border-radius: 50px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          z-index: 1000;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          animation: pulse 2.5s infinite ease-in-out;
          
          /* Estado inicial como um círculo perfeito */
          width: 60px;
          padding: 0;
          overflow: hidden;
        }

        .whatsapp-icon {
          /* Tamanho ideal para o novo ícone */
          font-size: 34px;
          flex-shrink: 0;
        }

        .whatsapp-text {
          font-size: 1rem;
          font-weight: 600;
          white-space: nowrap;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        /* Efeitos ao passar o mouse no Desktop */
        .whatsapp-button:hover {
          animation-play-state: paused;
          transform: scale(1.05);
          background-color: #128C7E;
          /* Expande a largura para mostrar o texto */
          width: auto;
          padding: 0 25px 0 20px;
        }

        .whatsapp-button:hover .whatsapp-text {
          max-width: 200px;
          opacity: 1;
        }

        /* Ajuste para Mobile */
        @media (max-width: 768px) {
            .whatsapp-text {
                display: none;
            }
            .whatsapp-button {
                width: 60px;
                height: 60px;
                padding: 0;
            }
            .whatsapp-button:hover {
              transform: scale(1.1);
              background-color: #128C7E;
            }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;