"use client";
import { useState } from 'react';

export default function Home() {
  const [contrato, setContrato] = useState('');
  const [resultado, setResultado] = useState('');
  const [cargando, setCargando] = useState(false);

  const analizarConIA = async () => {
    if (!contrato) return alert("Pega un contrato");
    setCargando(true);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: contrato }),
      });
      const data = await res.json();
      setResultado(data.result || "Error en respuesta");
    } catch (e) {
      alert("Error en la web");
    }
    setCargando(false);
  };

  return (
    <main className="p-10 bg-white min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Analizador de Contratos</h1>
      <textarea 
        className="w-full h-64 p-4 border mb-4" 
        onChange={(e) => setContrato(e.target.value)} 
      />
      <button 
        onClick={analizarConIA} 
        className="bg-black text-white p-4 w-full font-bold"
      >
        {cargando ? "ANALIZANDO..." : "ANALIZAR"}
      </button>
      {resultado && <div className="mt-10 p-4 bg-gray-100">{resultado}</div>}
    </main>
  );
}