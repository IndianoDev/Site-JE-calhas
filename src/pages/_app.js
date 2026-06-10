// src/pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      {/* AQUI ESTÁ A MUDANÇA: O SEU ID REAL */}
      <GoogleAnalytics gaId="G-HL0B620BQV" /> 
    </>
  );
}