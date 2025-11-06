"use client";

import { useState } from "react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    problema: "",
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 2;

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

  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>Problemas de Gestão? Eu Resolvo com Tecnologia.</h1>
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
          Cada projeto nasce de uma <strong>necessidade real de gestão</strong>{" "}
          . O resultado? Processos automatizados, dados confiáveis e equipes
          livres para focar no que realmente importa.
        </p>

        {/* Call to Action - Login Invitation */}
        <div className="cta-login">
          <p className="cta-text">
            💡 Quer ver na prática? Faça login e conheça alguns dos meus
            sistemas públicos.
          </p>
          <button className="cta-login-btn">🔐 Fazer Login</button>
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

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Quem já resolveu sua dor de gestão comigo</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <blockquote>
              "Finalmente alguém que fala a minha língua! Não precisei explicar
              o que era um processo seletivo — ele já entendeu a dor da gestão
              de RH."
            </blockquote>
            <cite>
              Mariana Alves
              <br />
              Diretora de Pessoas – Empresa de Logística
            </cite>
          </div>
          <div className="testimonial-item">
            <blockquote>
              "Como gestor público, sofria com sistemas feitos por técnicos que
              não entendiam burocracia estatal. Ele resolveu com simplicidade e
              segurança."
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

      {/* Screens Carousel */}
      <section className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
      <footer>
        <p>
          © 2025 — Adm. Tiago das Graças Arrais, CRA/CE 11660, Administrador &
          Solucionador de Problemas de Gestão. Todos os direitos reservados.
        </p>
        <p>
          Instagram:{" "}
          <a
            href="https://instagram.com/admprogramador"
            target="_blank"
            style={{ color: "#1a73e8", textDecoration: "none" }}
          >
            @admprogramador
          </a>
        </p>
      </footer>
    </div>
  );
}
