"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import LandingPage from "@/components/shared/LandingPage";

export default function Home() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");

  const systems = [
    {
      name: "Ecossistema do Pão da Stella Maris",
      description:
        "Obtenha a receita, acesse a calculadora e um temporizador para fabricação do nosso pão",
      image: "/bread.jpg", // Placeholder, substitua por imagem real
      link: "/pao-da-stella-maris",
    },
    {
      name: "Inventário",
      description: "Sistema completo para inventário de bens móveis",
      image: "/inventory.jpg", // Placeholder
      link: "/inventario",
    },
    {
      name: "Guarda Memória",
      description: "Fórum para guardar memórias de pessoas, lugares e eventos",
      image: "/memory.jpg", // Placeholder
      link: "/guarda-memoria",
    },
    {
      name: "Conexão Futuro",
      description:
        "Um Ambiente Virtual de Aprendizagem para a criação de cursos e Objetos Digitais Educacionais",
      image: "/conexao.jpg", // Placeholder
      link: "/conexao-futuro",
    },
  ];

  if (!session) {
    return <LandingPage />;
  }

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "24px",
        paddingBottom: "4rem",
      }}
    >
      <h1>Portal de Sistemas ADM Programador</h1>

      <p>
        Bem-vindo,{" "}
        {session.user?.fullName || session.user?.name || session.user?.email}
      </p>
      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <Link href="/profile">
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Atualizar Cadastro
          </button>
        </Link>
        <button
          onClick={() => signOut()}
          style={{
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Sair
        </button>
      </div>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginTop: 24,
        }}
      >
        {systems.map((system, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16,
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              backgroundColor: "white",
            }}
          >
            <h3>{system.name}</h3>
            <p style={{ color: "#666", marginBottom: 16 }}>
              {system.description}
            </p>
            {system.name === "Ecossistema do Pão da Stella Maris" ? (
              <a
                href="https://pao-da-stella-maris.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                >
                  Acessar Sistema ↗
                </button>
              </a>
            ) : system.name === "Inventário" ? (
              <a
                href="https://inventario-tiago.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                >
                  Acessar Sistema ↗
                </button>
              </a>
            ) : system.name === "Guarda Memória" ? (
              <a
                href="https://www.guardamemoria.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                >
                  Acessar Sistema ↗
                </button>
              </a>
            ) : system.name === "Conexão Futuro" ? (
              <a
                href="https://www.conexaofuturo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                >
                  Acessar Sistema ↗
                </button>
              </a>
            ) : (
              <Link href={system.link}>
                <button
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                >
                  Acessar Sistema
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
