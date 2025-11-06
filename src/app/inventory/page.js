"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Inventory() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/");
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <h1>Inventário</h1>
      <p>Sistema completo de controle de estoque e inventário.</p>

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
          <h3>Produtos</h3>
          <p>Gerencie seus produtos</p>
          <Link href="/inventory/products">
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
              Ver Produtos
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
          <h3>Estoque</h3>
          <p>Controle de entradas e saídas</p>
          <Link href="/inventory/stock">
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
              Gerenciar Estoque
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
          <h3>Relatórios</h3>
          <p>Relatórios de inventário</p>
          <Link href="/inventory/reports">
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
              Ver Relatórios
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
