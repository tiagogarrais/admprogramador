"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    problema: "",
  });

  const phrases = [
    "Problemas de Gestão?",
    "Planilhas que não se conectam?",
    "Relatórios que chegam atrasados?",
    "Problemas com Direção?",
    "Problemas com Organização?",
    "Problemas com Automatização?",
    "Problemas com Controles?",
  ];
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 2;

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isTyping) {
          if (typingText.length < phrases[typingIndex].length) {
            setTypingText(phrases[typingIndex].slice(0, typingText.length + 1));
          } else {
            setTimeout(() => setIsTyping(false), 2000); // pause before erasing
          }
        } else {
          if (typingText.length > 0) {
            setTypingText(typingText.slice(0, -1));
          } else {
            setTypingIndex((prev) => (prev + 1) % phrases.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? 100 : 50
    );
    return () => clearTimeout(timeout);
  }, [typingText, typingIndex, isTyping, phrases]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { nome, email, problema } = formData;
    const message = `Olá, meu nome é ${nome}.\nEmail: ${email}\nProblema: ${problema}`;
    const url = `https://wa.me/5588997230866?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = url;
  };

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = totalItems - 1;
      if (newIndex >= totalItems) newIndex = 0;
      return newIndex;
    });
  };

  const handleLogin = () => {
    signIn(); // Abre o modal/página de login do NextAuth
  };

  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>
          {typingText}
          <span className="cursor">|</span>
        </h1>
        <h1>Eu Resolvo com Tecnologia.</h1>
        <p className="subheadline">
          Sou Administrador e programador. Uso código como ferramenta para
          eliminar retrabalho, burocracia e perda de tempo na sua empresa.
        </p>
      </header>

      {/* Hero */}
      <section className="hero">
        <p>
          Com mais de{" "}
          <span className="highlight">10 anos atuando em gestão</span> (setor
          público e privado), vi de perto como processos manuais, planilhas
          descontroladas e sistemas genéricos{" "}
          <strong>consomem tempo, geram erros e esgotam equipes</strong>.
        </p>

        <p>
          Por isso, decidi ir além da análise:{" "}
          <strong>aprendi a desenvolver sistemas sob medida</strong> por paixão
          à tecnologia e compromisso com a <strong>eficiência da gestão</strong>
          .
        </p>

        <div className="value-badges">
          <div className="badge">📊 Entendo sua dor como gestor</div>
          <div className="badge">🛠️ Código é minha ferramenta, não meu fim</div>
          <div className="badge">🔒 Sistemas privados, seguros e com login</div>
        </div>

        <p>
          Cada projeto nasce de uma <strong>necessidade real de gestão.</strong>{" "}
          O resultado? Processos automatizados, dados confiáveis e equipes
          livres para focar no que realmente importa.
        </p>

        {/* Call to Action - Login Invitation */}
        <div className="cta-login">
          <p className="cta-text">
            💡 Quer ver na prática? Faça login e conheça alguns dos meus
            sistemas públicos.
          </p>
          <button className="cta-login-btn" onClick={handleLogin}>
            🔐 Fazer Login
          </button>
        </div>
      </section>

      {/* Cases */}
      <section className="cases-carousel">
        <h2>Casos Reais de Sucesso</h2>
        <div className="cases-list">
          <div className="case">
            <h3>📌 Caso Real: Digitação de Dados de Planilha</h3>
            <ul>
              <li>
                ⏱️ Eliminamos <strong>30 horas</strong> de digitação manual (950
                linhas digitadas em 100 minutos vs. 1900 minutos manuais)
              </li>
              <li>✅ Eliminação de erros humanos na transcrição de dados</li>
              <li>
                👥 Equipe administrativa recuperou tempo para tarefas
                estratégicas
              </li>
              <li>
                🔗{" "}
                <a
                  href="https://www.youtube.com/watch?v=VIDEO_ID"
                  target="_blank"
                  style={{ color: "#1a73e8", textDecoration: "none" }}
                >
                  Assista ao vídeo do caso
                </a>
              </li>
            </ul>
          </div>
          <div className="case">
            <h3>📌 Caso Real: Sistema de Inventário de Bens Patrimoniais</h3>
            <ul>
              <li>🔐 Sistema completo com login e controle de acesso seguro</li>
              <li>
                📊 Dashboard e relatórios para gestão profissional de inventário
              </li>
              <li>
                ✅ Simplificação e profissionalização do trabalho de inventário
                de bens
              </li>
              <li>
                🔗{" "}
                <a
                  href="https://youtu.be/h9szJJ0FOJ0"
                  target="_blank"
                  style={{ color: "#1a73e8", textDecoration: "none" }}
                >
                  Assista ao vídeo do caso
                </a>
              </li>
            </ul>
          </div>
          {/* Galeria de imagens ainda não tem fotos - ocultar temporariamente
          <div className="case">
            <h3>📌 Caso Real: Salvamento de Memórias em Grupo de WhatsApp</h3>
            <ul>
              <li>
                💾 Salvamento seguro de centenas de fotos e vídeos de amigos que
                não se viam há 45 anos
              </li>
              <li>✅ Criação de galeria informatizada permanente e acessível</li>
              <li>
                👥 Grupo pode continuar compartilhando memórias sem risco de
                perdas
              </li>
              <li>
                🔗{" "}
                <a
                  href="https://galeria.admtiago.com.br"
                  target="_blank"
                  style={{ color: "#1a73e8", textDecoration: "none" }}
                >
                  Acesse a galeria: galeria.admtiago.com.br
                </a>
              </li>
            </ul>
          </div>
          */}
        </div>
      </section>

      {false && (
        <section className="testimonials">
          <h2>Quem já resolveu sua dor de gestão comigo</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <blockquote>
                "Finalmente alguém que fala a minha língua! Não precisei
                explicar o que era um processo seletivo — ele já entendeu a dor
                da gestão de RH."
              </blockquote>
              <cite>
                Mariana Alves
                <br />
                Diretora de Pessoas – Empresa de Logística
              </cite>
            </div>
            <div className="testimonial-item">
              <blockquote>
                "Como gestor público, sofria com sistemas feitos por técnicos
                que não entendiam burocracia estatal. Ele resolveu com
                simplicidade e segurança."
              </blockquote>
              <cite>
                Carlos Eduardo
                <br />
                Coordenador Administrativo – Órgão Público
              </cite>
            </div>
            <div className="testimonial-item">
              <blockquote>
                "Os relatórios que levavam dias para serem gerados agora saem em
                minutos. Minha equipe voltou a focar no que realmente importa."
              </blockquote>
              <cite>
                Fernanda Costa
                <br />
                Gerente Administrativa – Clínica Médica
              </cite>
            </div>
          </div>
        </section>
      )}

      {false && (
        <section className="carousel">
          <div
            className="carousel-inner"
            style={{ transform: "translateX(0%)" }}
          >
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/400"
                alt="Sistema de Gestão Escolar"
              />
            </div>
            {/* Temporariamente oculto - Controle de Processos Internos
            <div className="carousel-item">
              <img src="https://via.placeholder.com/400" alt="Controle de Processos Internos" />
            </div>
            */}
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/400"
                alt="Plataforma de Atendimento Público"
              />
            </div>
          </div>
          <button className="carousel-btn prev" onClick={() => moveSlide(-1)}>
            ‹
          </button>
          <button className="carousel-btn next" onClick={() => moveSlide(1)}>
            ›
          </button>
        </section>
      )}

      {/* Form */}
      <section className="form-section">
        <h2>Descreva seu problema de gestão ou sua ideia de sistema.</h2>
        <form onSubmit={sendToWhatsApp}>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome"
            required
            value={formData.nome}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            placeholder="Seu e-mail profissional"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            id="problema"
            placeholder="Ex: 'Perco 15h por semana conferindo planilhas de estoque' ou 'Meu time gasta dias gerando relatórios manuais'..."
            required
            value={formData.problema}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn">
            Solicitar análise
          </button>
        </form>
      </section>

      {/* Footer */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          color: "#6c757d",
          fontSize: "14px",
          background: "white",
          padding: "15px 20px",
          borderRadius: "12px",
        }}
      >
        © 2025 AdmProgramador. Todos os direitos reservados.
        <br />
        Instagram:{" "}
        <a
          href="https://instagram.com/admprogramador"
          target="_blank"
          style={{ color: "#E4405F", textDecoration: "none" }}
        >
          @admprogramador
        </a>
      </div>
    </div>
  );
}
