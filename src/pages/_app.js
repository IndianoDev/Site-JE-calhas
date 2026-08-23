// src/pages/_app.js
// Ponto central para todos os imports de CSS global e Google Analytics
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/cabecalho.css';
import '@/styles/estilo.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-HL0B620BQV" />
    </>
  );
}
