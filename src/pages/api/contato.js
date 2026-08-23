// src/pages/api/contato.js
import nodemailer from 'nodemailer';

// ✅ Transporter instanciado FORA do handler para reutilizar a conexão SMTP
// (evita criar uma nova conexão a cada requisição)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    // Desabilita verificação SSL apenas em desenvolvimento local
    rejectUnauthorized: process.env.NODE_ENV !== 'development',
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { nome, email, telefone, mensagem } = req.body;

  // ✅ Validação dos campos obrigatórios
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes: nome, email e mensagem.' });
  }

  const mailOptions = {
    // ✅ Remetente usa e-mail do servidor (evita bloqueio do Gmail)
    from: `"Site JE Calhas" <${process.env.EMAIL_USER}>`,
    replyTo: email, // Responder vai diretamente para o e-mail do cliente
    to: process.env.EMAIL_USER,
    subject: `Nova mensagem de ${nome} - Site JE Calhas`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Novo contato via site JE Calhas:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <hr>
        <h3>Mensagem:</h3>
        <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
          ${mensagem.replace(/\n/g, '<br>')}
        </p>
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