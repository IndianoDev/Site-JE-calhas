# 🚀 Relatório de Análise e Otimização do Projeto (Site JE Calhas)

Este documento apresenta uma análise detalhada sobre os pontos de **desempenho, otimização de pacotes, estrutura de código, SEO e boas práticas de desenvolvimento** para o projeto Next.js.

---

## 📋 Sumário Executivo

| Categoria | Nível de Impacto | Descrição Resumida |
| :--- | :--- | :--- |
| **Limpeza de Dependências** | 🔴 Alto | Duplicidade massiva de bibliotecas CSS/UI e componentes duplicados. |
| **Arquitetura & Roteamento** | 🔴 Alto | Uso inadequado de `react-router-dom` dentro do framework Next.js. |
| **Desempenho & Renderização** | 🟡 Médio | Layout shifts (CLS) provocados por checagem de `window.innerWidth` via JS no Slider. |
| **Otimização de API (Email)** | 🟡 Médio | Instanciação redundante do `nodemailer` a cada requisição HTTP. |
| **SEO & Acessibilidade** | 🟡 Médio | Ausência da tag `lang="pt-BR"` no HTML e fontes externas não otimizadas. |

---

## 1. 📦 Limpeza e Redução de Dependências (Bundle Size)

Atualmente, o arquivo `package.json` possui diversos pacotes redundantes e conflitantes que aumentam desnecessariamente o tamanho do bundle final e o tempo de carregamento da aplicação.

### ⚠️ Problemas Encontrados:
1. **Múltiplas Bibliotecas de Bootstrap**:
   - `bootstrap`, `react-bootstrap` e `reactstrap` estão instalados simultaneamente. O projeto deve padronizar apenas um (recomendado: `react-bootstrap` ou migração para Tailwind CSS).
2. **Conflito de Design Systems**:
   - Estão instalados ao mesmo tempo: `@mui/material`, `@emotion/react`, `@emotion/styled`, `theme-ui`, `@hackclub/theme` e `tailwindcss`.
3. **Múltiplos Sliders/Carrosséis**:
   - `react-slick`, `slick-carousel` e `swiper` estão instalados simultaneamente.
4. **Dependência Incompatível (`react-router-dom`)**:
   - O `react-router-dom` está instalado em um projeto **Next.js**. O Next.js possui seu próprio sistema de roteamento baseado em arquivos (`next/router` ou App Router).
5. **Biblioteca Pesada no Frontend (`googleapis`)**:
   - A biblioteca `googleapis` é extremamente pesada (~50MB+ em `node_modules`). Se importada no lado do cliente por engano, ela infla o bundle. Deve ser mantida estritamente para endpoints de API backend.
6. **Duplicidade de Botão do WhatsApp**:
   - `react-whatsapp` e `react-whatsapp-widget` estão instalados juntos.

### 💡 Ação Recomendada:
Remover os pacotes obsoletos e não utilizados executando:
```bash
npm uninstall react-router-dom reactstrap theme-ui @hackclub/theme @hackclub/icons swiper react-whatsapp @mui/material @emotion/react @emotion/styled
```

---

## 2. ⚡ Desempenho e Renderização React / Next.js

### ⚠️ Problemas Encontrados:
1. **Hydration Shifts (CLS) no Hero Slider (`src/pages/index.js`)**:
   - O componente verifica `window.innerWidth` dentro de `useEffect` para alternar entre imagem desktop e mobile. Isso faz com que a página seja renderizada primeiro de um jeito no servidor e re-renderizada de outro no cliente, gerando alteração visual perceptível (Cumulative Layout Shift - CLS).
   - **Solução**: Utilizar CSS Media Queries (`display: block` / `display: none`) ou o atributo `sizes` do `next/image`.
2. **CSS Global Dentro de Componente (`src/components/cabecalho.js`)**:
   - Uso de `<style jsx global>` dentro do componente `Cabecalho`. O CSS é re-analisado e injetado repetidamente a cada re-renderização.
   - **Solução**: Mover o CSS para um arquivo CSS Module (`Cabecalho.module.css`) ou para `src/styles/globals.css`.
3. **Importação de CSS Global fora do `_app.js` (`src/components/pagina.js`)**:
   - Importar `import 'bootstrap/dist/css/bootstrap.min.css';` diretamente dentro de um componente (`pagina.js`) viola as boas práticas do Next.js.
   - **Solução**: Mover todas as importações globais de CSS para o arquivo central `src/pages/_app.js`.

---

## 3. 📧 Otimização da API de Contato (`src/pages/api/contato.js`)

### ⚠️ Problemas Encontrados:
1. **Criação Repetida de Transporter**:
   - O `nodemailer.createTransport({...})` é executado a cada requisição recebida no endpoint `/api/contato`.
2. **Configuração de TLS (`rejectUnauthorized: false`)**:
   - A opção desabilita a validação de certificados SSL localmente, devendo ser parametrizada por variável de ambiente para não permanecer hardcoded em produção.

### 💡 Código Otimizado Sugerido:
```javascript
// src/pages/api/contato.js
import nodemailer from 'nodemailer';

// Instanciar fora da função handler para reutilizar a conexão (Connection Pooling)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'development' ? false : true,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { nome, email, telefone, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
  }

  const mailOptions = {
    from: `"${nome}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Nova mensagem de ${nome} - Site JE Calhas`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Novo contato via site JE Calhas:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <hr>
        <h3>Mensagem:</h3>
        <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${mensagem.replace(/\n/g, '<br>')}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro no envio do e-mail:', error);
    return res.status(500).json({ error: 'Falha ao enviar e-mail. Tente novamente mais tarde.' });
  }
}
```

---

## 4. 🔍 SEO e Acessibilidade (A11y)

### ⚠️ Problemas Encontrados:
1. **Idioma do Documento HTML**:
   - No arquivo `src/pages/_document.js`, a tag `<Html>` não possui o atributo `lang="pt-BR"`. Motores de busca (Google) e leitores de tela precisam desse atributo.
2. **Carregamento de Fontes**:
   - Há declarações de `font-family: 'Anta', sans-serif`, porém a fonte não é importada no `<Head>` nem via `next/font/google`.
3. **Links com Sintaxe Legada do Next.js**:
   - Estão sendo usados `<Link passHref legacyBehavior><a ...></Link>`. No Next.js 13+, a tag `<a>` interna é desnecessária e o atributo `legacyBehavior` pode ser removido para simplificar a árvore DOM.

---

## 5. 🛠️ Plano de Ação Recomendado (Passo a Passo)

1. **Remover pacotes não utilizados**:
   - Rodar o comando `npm uninstall` sugerido na Seção 1.
2. **Criar / Ajustar o `src/pages/_app.js`**:
   - Centralizar lá o `import 'bootstrap/dist/css/bootstrap.min.css';` e os estilos globais.
3. **Ajustar `src/pages/_document.js`**:
   - Adicionar `<Html lang="pt-BR">`.
4. **Otimizar o Handler da API**:
   - Aplicar a reutilização do `transporter` do Nodemailer conforme Seção 3.
5. **Atualizar Sintaxe dos Componentes `<Link>`**:
   - Substituir `<Link href="/..." passHref legacyBehavior><a>...</a></Link>` por `<Link href="/...">...</Link>`.

---
*Relatório gerado automaticamente para otimização do projeto JE Calhas.*
