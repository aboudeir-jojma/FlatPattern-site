"use client";
import React, { useState } from "react";

export default function ShapeForm({
  fields,
  shapeName,
}: {
  fields: { label: string; key: string; type?: string }[];
  shapeName: string;
}) {
  const initialValues: Record<string, string> = shapeName === "frustum-cone" ? { calc_type: "H" } : {};
  const [values, setValues] = useState<Record<string, string>>(initialValues);
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
      // ✅ Construire le JSON dynamique
      const params: Record<string, string | number> = { ...values };

      // 🔸 Si c'est un frustum cone → utiliser H ou B
      if (shapeName === "frustum-cone") {
        if (values.calc_type === "H" && values.height) {
          params.height = parseFloat(values.height);
          delete params.bita;
        } else if (values.calc_type === "B" && values.bita) {
          params.bita = parseFloat(values.bita);
          delete params.height;
        }
      }

      // 🔹 Conversion des valeurs numériques
      Object.keys(params).forEach((k) => {
        if (typeof params[k] === "string" && !isNaN(Number(params[k]))) {
          params[k] = parseFloat(params[k] as string);
        }
      });

      const payload = {
        shape: shapeName.replace(/-/g, "_"),
        params,
      };

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

      // 🟢 Téléchargement DXF
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
      {shapeName === "frustum-cone" && (
        <div>
          <label className="block font-medium mb-1 text-black">Choose Calculation Type</label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="calc_type"
                value="H"
                checked={values.calc_type === "H"}
                onChange={(e) => handleChange("calc_type", e.target.value)}
                className="mr-2 text-black focus:ring-black"
              />
              Height (H)
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="calc_type"
                value="B"
                checked={values.calc_type === "B"}
                onChange={(e) => handleChange("calc_type", e.target.value)}
                className="mr-2 text-black focus:ring-black"
              />
              Bita (B)
            </label>
          </div>
        </div>
      )}

      {fields.map(({ label, key, type }, i) => (
        <div key={i}>
          <label className="block font-medium mb-1 text-black">{label}</label>

          {type === "select" ? (
            <select
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full border border-black rounded-lg px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">-- Select H or B --</option>
              <option value="H">Height (H)</option>
              <option value="B">Bita (B)</option>
            </select>
          ) : (
            <input
              type="number"
              step="any"
              placeholder={`Enter ${label.toLowerCase()}`}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full border border-black rounded-lg px-3 py-2 
                         text-black placeholder-black
                         focus:outline-none focus:ring-2 focus:ring-black
                         appearance-none bg-white"
              required
            />
          )}
        </div>
      ))}

      {/* ✅ Champs dynamiques pour Frustum Cone */}
      {shapeName === "frustum-cone" && values.calc_type === "H" && (
        <div>
          <label className="block font-medium mb-1 text-black">Height (H)</label>
          <input
            type="number"
            step="any"
            placeholder="Enter height (H)"
            onChange={(e) => handleChange("height", e.target.value)}
            className="w-full border border-black rounded-lg px-3 py-2 text-black
                       focus:outline-none focus:ring-2 focus:ring-black bg-white"
            required
          />
        </div>
      )}

      {shapeName === "frustum-cone" && values.calc_type === "B" && (
        <div>
          <label className="block font-medium mb-1 text-black">Bita (B)</label>
          <input
            type="number"
            step="any"
            placeholder="Enter bita (B)"
            onChange={(e) => handleChange("bita", e.target.value)}
            className="w-full border border-black rounded-lg px-3 py-2 text-black
                       focus:outline-none focus:ring-2 focus:ring-black bg-white"
            required
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 py-2.5 rounded-lg font-semibold text-white
                   bg-gray-600
                   shadow-md transition-all duration-300
                   hover:scale-[1.02] disabled:opacity-70"
      >
        {loading ? "Generating..." : "Generate DXF"}
      </button>

      {message && (
        <p
          className={`text-sm mt-3 text-center ${
            message.startsWith("✅") ? "text-black" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
