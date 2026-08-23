// src/pages/_app.js
// Ponto central para todos os imports de CSS global do projeto
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/cabecalho.css';
import '@/styles/estilo.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
