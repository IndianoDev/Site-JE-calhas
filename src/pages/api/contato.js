import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, telefone, mensagem } = req.body;

    // 1. Configuração do transporte (Gmail exemplo)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_USER,
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN
        }
      });
    // 2. Conteúdo do e-mail
    const mailOptions = {
      from: email,
      to: 'seu-email@dominio.com',
      subject: `Nova mensagem de ${nome} - JE Calhas`,
      html: `
        <h3>Novo contato via site:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    };

    // 3. Envio
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Erro no envio:', error);
      return res.status(500).json({ error: 'Falha ao enviar e-mail' });
    }
  }
  return res.status(405).json({ error: 'Método não permitido' });
}

