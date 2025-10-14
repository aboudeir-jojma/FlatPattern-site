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

  // 🔗 URL backend Flask
  const API_URL = "https://flat-pattern-production.up.railway.app/generate_dxf";
  // const API_URL = "http://127.0.0.1:5000/generate_dxf"; // pour test local

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // ✅ Construire le JSON avec "params"
      const payload = {
        shape: shapeName.replace(/-/g, "_"),
        params: Object.fromEntries(
          Object.entries(values).map(([k, v]) => [k, parseFloat(v)])
        ),
      };

      // 🟦 Log clair dans la console
      console.log("🚀 JSON envoyé au backend:");
      console.log(JSON.stringify(payload, null, 2));

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erreur ${response.status}: ${errorText}`);
      }

      // 🟢 Si succès → téléchargement DXF
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
      console.error("❌ Erreur:", error);
      setMessage("❌ Échec de la génération du DXF. Vérifiez le backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-0 cursor-default">
      {fields.map(({ label, key }, i) => (
        <div key={i}>
          <label
            className="block font-medium mb-1 bg-gradient-to-r 
                       from-blue-400 via-cyan-300 to-yellow-400 
                       bg-clip-text text-transparent"
          >
            {label}
          </label>
          <input
            type="number"
            step="any"
            placeholder={`Enter ${label.toLowerCase()}`}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       appearance-none bg-white"
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
