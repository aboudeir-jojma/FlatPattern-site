"use client";
import React, { useState } from "react";

export default function ShapeForm({
  fields,
  shapeName,
}: {
  fields: string[];
  shapeName: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const normalizeKey = (label: string) => {
    return label
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "_") // espaces → _
      .replace(/[()°]/g, "") // supprime () et °
      .replace(/\//g, "_") // remplace / par _
      .replace(/[^a-z0-9_]/g, ""); // garde seulement les caractères sûrs
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 🔹 On crée un nouvel objet avec les clés normalisées
      const normalizedParams: Record<string, string> = {};
      Object.entries(values).forEach(([key, value]) => {
        normalizedParams[normalizeKey(key)] = value;
      });

      console.log("🔹 Données envoyées au backend :", normalizedParams);

      const response = await fetch(
        "https://flat-pattern-production.up.railway.app/generate_dxf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            shape: shapeName, // 👈 identifie le shape
            params: normalizedParams, // 👈 contient les valeurs prêtes pour Flask
          }),
        }
      );

      if (!response.ok) throw new Error(`Erreur serveur : ${response.status}`);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${shapeName}.dxf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      setMessage(`✅ DXF pour ${shapeName} généré avec succès !`);
    } catch (error: any) {
      console.error("Erreur :", error);
      setMessage("❌ Échec de l’envoi au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {fields.map((field, i) => (
        <div key={i}>
          <label
            className="block font-medium mb-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 bg-clip-text text-transparent"
          >
            {field}
          </label>
          <input
            type="number"
            placeholder={`Enter ${field.toLowerCase()}`}
            onChange={(e) => handleChange(field, e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="
          mt-4 py-2.5 rounded-lg font-semibold text-gray-900
          bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400
          shadow-md transition-all duration-300
          hover:from-blue-500 hover:via-cyan-400 hover:to-yellow-500
          hover:scale-[1.02] disabled:opacity-70
        "
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {message && (
        <p className="text-sm mt-2 text-center text-gray-700">{message}</p>
      )}
    </form>
  );
}
