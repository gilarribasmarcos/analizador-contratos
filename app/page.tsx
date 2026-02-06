"use client";
import { useState } from "react";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [cargando, setCargando] = useState(false);

  const irAPagar = () => {
    if (!texto.trim()) {
      alert("Por favor, pega un contrato primero.");
      return;
    }
    // Guardamos el contrato en la memoria del navegador para que no se pierda al pagar
    localStorage.setItem("contrato_pendiente", texto);
    // Redirigimos a tu Stripe
    window.location.href = "https://buy.stripe.com/fZu28k2jv3nM01mdyG28800";
  };

  return (
    <main className="p-10 bg-white min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-5">Analizador de Contratos IA</h1>
      <textarea
        className="w-full h-64 p-4 border border-gray-300 rounded mb-4"
        placeholder="Pega aquí tu contrato..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      
      <div className="bg-blue-50 p-6 border-l-4 border-blue-500 mb-6">
        <p className="text-lg mb-4">
          Nuestro sistema analizará las cláusulas de tu contrato para detectar riesgos legales.
        </p>
        <button
          onClick={irAPagar}
          className="bg-black text-white px-8 py-4 rounded font-bold text-xl hover:bg-gray-800 w-full"
        >
          ANALIZAR AHORA (9€)
        </button>
      </div>

      <p className="text-sm text-gray-500 text-center">
        Pago seguro procesado por Stripe. Obtén tu análisis profesional al instante.
      </p>
    </main>
  );
}