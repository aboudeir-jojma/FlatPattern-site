"use client";
import React, { useState } from "react";

export default function ShapeForm({
  fields,
  shapeName,
}: {
  fields: { label: string; key: string; type?: string }[];
  shapeName: string;
}) {
  const initialValues: Record<string, string> =
    shapeName === "frustum-cone" ? { calc_type: "H" } : {};
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<Record<string, number> | null>(null);
  const [dxfBase64, setDxfBase64] = useState<string | null>(null);

  const API_URL = "https://flat-pattern-production.up.railway.app/generate_dxf";

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setResult(null);
    setDxfBase64(null);

    try {
      const params: Record<string, string | number> = { ...values };

      // 🔸 Frustum Cone → H ou B
      if (shapeName === "frustum-cone") {
        if (values.calc_type === "H" && values.height) {
          params.height = parseFloat(values.height);
          delete params.bita;
        } else if (values.calc_type === "B" && values.bita) {
          params.bita = parseFloat(values.bita);
          delete params.height;
        }
      }

      // 🔹 Conversion nombres
      Object.keys(params).forEach((k) => {
        if (typeof params[k] === "string" && !isNaN(Number(params[k]))) {
          params[k] = parseFloat(params[k] as string);
        }
      });

      const payload = {
        shape: shapeName.replace(/-/g, "_"),
        params,
      };

      console.log("🚀 Payload envoyé :", JSON.stringify(payload, null, 2));

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erreur ${response.status}: ${errorText}`);
      }

      const data = await response.json();

      // 🟢 Si backend renvoie "data" et "dxf_base64"
      if (data?.data) setResult(data.data);
      if (data?.dxf_base64) setDxfBase64(data.dxf_base64);

      setMessage("✅ Résultat généré avec succès");
    } catch (error: any) {
      console.error("❌ Erreur:", error);
      setMessage("❌ Échec de la génération du DXF.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!dxfBase64) return;

    // Convertir le Base64 en Blob et forcer le téléchargement
    const byteCharacters = atob(dxfBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/dxf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${shapeName}.dxf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div id={shapeName} className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-0 cursor-default"
      >
        {/* 🔹 Frustum Cone → Choix H ou B */}
        {shapeName === "frustum-cone" && (
          <div>
            <label className="block font-medium mb-1 text-black">
              Choose Calculation Type
            </label>
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

        {/* 🔹 Champs principaux */}
        {fields.map(({ label, key }, i) => (
          <div key={i}>
            <label className="block font-medium mb-1 text-black">{label}</label>
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
          </div>
        ))}

        {/* 🔹 Champs dynamiques */}
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

        {/* 🔘 Bouton Generate */}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 py-2.5 rounded-lg font-semibold text-white
                     bg-gray-600 shadow-md transition-all duration-300
                     hover:scale-[1.02] disabled:opacity-70"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {/* 🔹 Message */}
        {message && (
          <p
            className={`text-sm mt-3 text-center ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* 🔹 Résultats + bouton DXF */}
        {result && (
          <div className="mt-4 bg-gray-100 border border-gray-400 rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Résultats :
              </h3>
              <ul className="text-black text-sm">
                {Object.entries(result).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>

            {/* 🟢 Bouton DXF si base64 présent */}
            {dxfBase64 && (
              <button
                onClick={handleDownload}
                className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-900 transition-all duration-200"
              >
                ⬇️ Télécharger DXF
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
