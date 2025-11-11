import nodemailer from "nodemailer";

export async function sendVerificationRequest({
  identifier: email,
  url,
  provider,
}) {
  // provider contains server config passed from NextAuth options
  const { server, from } = provider;

  const transporter = nodemailer.createTransport(server);

  const message = {
    to: email,
    from,
    subject: "Seu link mágico de login",
    text: `Use este link para entrar: ${url}`,
    html: `<p>Use este link para entrar:</p><p><a href="${url}">${url}</a></p>`,
  };

  await transporter.sendMail(message);
}

export async function sendLoginNotification({ userEmail, provider }) {
  // provider contains server config passed from NextAuth options
  const { server, from } = provider;

  const transporter = nodemailer.createTransport(server);

  const message = {
    to: from, // Enviar para o próprio administrador
    from,
    subject: "Novo login no ADM Programador",
    text: `O usuário ${userEmail} acabou de fazer login no site admprogramador.com.br`,
    html: `<p><strong>Novo login detectado:</strong></p>
           <p>O usuário <strong>${userEmail}</strong> acabou de fazer login no site <strong>admprogramador.com.br</strong></p>
           <p>Data/Hora: ${new Date().toLocaleString('pt-BR')}</p>`,
  };

  await transporter.sendMail(message);
}
