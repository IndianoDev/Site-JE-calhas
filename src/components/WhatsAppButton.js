import React, { useState, useEffect } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

const WhatsAppButton = () => {
  const phoneNumber = '5561991530796';
  const message = 'Olá, gostaria de um orçamento!';
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detecta se é mobile via userAgent (mais confiável que só largura de tela)
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Aparece com delay suave para não competir com carregamento da página
    const timer = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`wa-btn ${isVisible ? 'wa-btn--visible' : ''} ${isMobile ? 'wa-btn--mobile' : 'wa-btn--desktop'}`}
        aria-label="Fale conosco pelo WhatsApp"
        title="Fale Conosco pelo WhatsApp"
      >
        <span className="wa-btn__icon" aria-hidden="true">
          <IoLogoWhatsapp />
        </span>
        {/* Texto só renderiza no DOM para desktop, evitando qualquer problema de hover no touch */}
        {!isMobile && (
          <span className="wa-btn__text">Fale Conosco!</span>
        )}
      </a>

      <style jsx global>{`
        /* ====================================================
           WhatsApp Button — versão robusta mobile/desktop
           ==================================================== */

        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0   rgba(37, 211, 102, 0.55); }
          70%  { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);   }
          100% { box-shadow: 0 0 0 0   rgba(37, 211, 102, 0);    }
        }

        @keyframes wa-fadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.85); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }

        /* --- Base --- */
        .wa-btn {
          /* Posição fixa com suporte a safe-area do iOS/Android */
          position: fixed;
          bottom: calc(22px + env(safe-area-inset-bottom, 0px));
          right: 22px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0;

          background: linear-gradient(135deg, #25D366 0%, #1ebe5d 100%);
          color: #fff;
          border-radius: 50px;
          text-decoration: none;

          /* Tamanho padrão: círculo */
          width: 58px;
          height: 58px;
          padding: 0;
          overflow: hidden;

          /* z-index alto o suficiente mas sem quebrar modais (geralmente 1050+) */
          z-index: 1040;

          /* Sombra base */
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.22);

          /* Transição suave de tudo */
          transition:
            width       0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
            gap         0.35s ease,
            padding     0.35s ease,
            background  0.25s ease,
            box-shadow  0.25s ease,
            transform   0.25s ease;

          /* Escondido inicialmente para o fade-in */
          opacity: 0;
          pointer-events: none;
        }

        /* Visível após delay */
        .wa-btn--visible {
          animation: wa-fadeIn 0.5s ease forwards;
          pointer-events: auto;
        }

        /* Pulso roda apenas quando visível e sem hover (desktop) */
        .wa-btn--desktop.wa-btn--visible {
          animation: wa-fadeIn 0.5s ease forwards, wa-pulse 2.8s 1.8s infinite ease-out;
        }

        /* --- Ícone --- */
        .wa-btn__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          line-height: 1;
          flex-shrink: 0;
          /* garante que o ícone nunca some durante transição de largura */
          min-width: 32px;
        }

        /* --- Texto (só no desktop) --- */
        .wa-btn__text {
          font-size: 0.95rem;
          font-weight: 700;
          white-space: nowrap;
          /* Clipping para animação de reveal */
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          transition:
            max-width 0.3s ease,
            opacity   0.25s ease;
        }

        /* ====================================================
           DESKTOP: hover expande com texto
           ==================================================== */
        @media (hover: hover) and (pointer: fine) {
          .wa-btn--desktop:hover {
            width: auto;
            gap: 10px;
            padding: 0 22px 0 18px;
            background: linear-gradient(135deg, #1fba58 0%, #128C7E 100%);
            box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
            transform: translateY(-3px);
            /* Para o pulso durante o hover */
            animation-play-state: paused;
          }

          .wa-btn--desktop:hover .wa-btn__text {
            max-width: 180px;
            opacity: 1;
          }
        }

        /* ====================================================
           MOBILE: círculo fixo, sem texto, sem hover expandido
           Apenas feedback visual de pressionar (active)
           ==================================================== */
        .wa-btn--mobile {
          width: 58px;
          height: 58px;
          padding: 0;
          /* Pulso mais discreto no mobile */
          animation: wa-fadeIn 0.5s ease forwards, wa-pulse 3s 2s infinite ease-out;
        }

        /* Feedback ao toque (active) — substitui :hover no touch */
        .wa-btn--mobile:active {
          transform: scale(0.93);
          background: linear-gradient(135deg, #1fba58 0%, #128C7E 100%);
          box-shadow: 0 2px 10px rgba(37, 211, 102, 0.3);
          transition: transform 0.1s ease, background 0.1s ease;
        }

        /* Dispositivos muito pequenos (< 360px) */
        @media (max-width: 359px) {
          .wa-btn {
            width: 50px;
            height: 50px;
            right: 14px;
            bottom: calc(14px + env(safe-area-inset-bottom, 0px));
          }
          .wa-btn--mobile {
            width: 50px;
            height: 50px;
          }
          .wa-btn__icon {
            font-size: 26px;
            min-width: 26px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;