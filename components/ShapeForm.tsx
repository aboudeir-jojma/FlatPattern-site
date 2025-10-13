"use client";
import React, { useState } from "react";

export default function ShapeForm({
  fields,
  shapeName,
}: {
  fields: { label: string; key: string }[];
  shapeName: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🟢 Détection automatique : local ou production
  const API_BASE_URL =
    typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://192.168.100.134:5000" // 👉 backend local
      : "https://semigeometric-vern-nonmineralogically.ngrok-free.dev"; // 👉 backend prod

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("🟦 Shape envoyé :", shapeName);
      console.log("🟨 Params envoyés :", JSON.stringify(values, null, 2));
      console.log("🌍 URL API utilisée :", `${API_BASE_URL}/generate_dxf`);

      const response = await fetch(`${API_BASE_URL}/generate_dxf`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shape: shapeName.replace(/-/g, "_"), // ex: frustum-cone → frustum_cone
          params: values,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Erreur ${response.status} : ${errText}`);
      }

      // 🟩 Si OK → Téléchargement DXF
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
      console.error("❌ Erreur d’envoi :", error);
      setMessage("❌ Échec de la génération du DXF. Vérifiez le backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mt-0 cursor-default"
    >
      {fields.map(({ label, key }, i) => (
        <div key={i} className="relative">
          {/* Le label ne capte plus le clic */}
          <label
            className="block font-medium mb-1 bg-gradient-to-r 
                       from-blue-400 via-cyan-300 to-yellow-400 
                       bg-clip-text text-transparent pointer-events-none"
          >
            {label}
          </label>

          {/* Input cliquable uniquement à l’intérieur */}
          <input
            type="number"
            step="any"
            placeholder={`Enter ${label.toLowerCase()}`}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       pointer-events-auto"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 py-2.5 rounded-lg font-semibold text-gray-900
                   bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400
                   shadow-md transition-all duration-300
                   hover:from-blue-500 hover:via-cyan-400 hover:to-yellow-500
                   hover:scale-[1.02] disabled:opacity-70"
      >
        {loading ? "Generating..." : "Generate DXF"}
      </button>

      {message && (
        <p
          className={`text-sm mt-3 text-center ${
            message.startsWith("✅") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
