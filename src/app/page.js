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
      name: "Ecossistema de Pão",
      description:
        "Gerencie receitas, calculadoras e temporizadores para fabricação de pão",
      image: "/bread.jpg", // Placeholder, substitua por imagem real
      link: "/bread-ecosystem",
    },
    {
      name: "Inventário",
      description: "Sistema completo de inventário e controle de estoque",
      image: "/inventory.jpg", // Placeholder
      link: "/inventory",
    },
    {
      name: "Guarda Memória",
      description: "Fórum para guardar memórias de pessoas, lugares e eventos",
      image: "/memory.jpg", // Placeholder
      link: "/memory-keeper",
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

      <h2>Seus Sistemas</h2>
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
            }}
          >
            <img
              src={system.image}
              alt={system.name}
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 16,
              }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150?text=Imagem"; // Fallback
              }}
            />
            <h3>{system.name}</h3>
            <p style={{ color: "#666", marginBottom: 16 }}>
              {system.description}
            </p>
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
          </div>
        ))}
      </div>
    </div>
  );
}
