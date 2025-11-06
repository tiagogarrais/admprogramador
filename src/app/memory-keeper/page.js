"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function MemoryKeeper() {
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
      <h1>Guarda Memória</h1>
      <p>Fórum para guardar memórias de pessoas, lugares e eventos.</p>

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
          <h3>Pessoas</h3>
          <p>Memórias sobre pessoas</p>
          <Link href="/memory-keeper/people">
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
              Ver Pessoas
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
          <h3>Lugares</h3>
          <p>Memórias sobre lugares</p>
          <Link href="/memory-keeper/places">
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
              Ver Lugares
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
          <h3>Eventos</h3>
          <p>Memórias sobre eventos</p>
          <Link href="/memory-keeper/events">
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
              Ver Eventos
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
