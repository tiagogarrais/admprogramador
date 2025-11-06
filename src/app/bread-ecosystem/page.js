"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function BreadEcosystem() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading
    if (!session) router.push("/"); // Redirect to home if not logged in
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (!session) {
    return null; // Will redirect
  }

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <h1>Ecossistema de Pão</h1>
      <p>Bem-vindo ao sistema de fabricação de pão!</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          marginTop: 24,
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            textAlign: "center",
          }}
        >
          <h3>Receitas</h3>
          <p>Gerencie suas receitas de pão</p>
          <Link href="/bread-ecosystem/recipes">
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
              Ver Receitas
            </button>
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            textAlign: "center",
          }}
        >
          <h3>Calculadora</h3>
          <p>Calcule ingredientes e proporções</p>
          <Link href="/bread-ecosystem/calculator">
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
              Abrir Calculadora
            </button>
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            textAlign: "center",
          }}
        >
          <h3>Temporizador</h3>
          <p>Auxiliar com tempos de preparo</p>
          <Link href="/bread-ecosystem/timer">
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
              Iniciar Temporizador
            </button>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/">
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Voltar ao Portal
          </button>
        </Link>
      </div>
    </div>
  );
}
