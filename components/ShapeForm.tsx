"use client";
import React, { useState } from "react";

export default function ShapeForm({
  fields,
  shapeName,
  loading,
  setResult,
  setDxfBase64,
  setMessage,
  setLoading,
}: {
  fields: { label: string; key: string; type?: string }[];
  shapeName: string;
  loading: boolean;
  setResult: React.Dispatch<React.SetStateAction<Record<string, number> | null>>;
  setDxfBase64: React.Dispatch<React.SetStateAction<string | null>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const initialValues: Record<string, string> =
    shapeName === "frustum-cone" ? { calc_type: "H" } : {};
  const [values, setValues] = useState<Record<string, string>>(initialValues);

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
            <label className="block font-medium mb-1 text-slate-200">{label}</label>
            <div className="relative">
              <input
                type="number"
                step="any"
                placeholder={`Enter ${label.toLowerCase()}`}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full border border-slate-700 rounded-lg pl-3 pr-14 py-2
                           text-slate-100 placeholder-slate-400 bg-slate-800/60
                           focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm select-none">mm</span>
            </div>
          </div>
        ))}

        {/* 🔹 Champs dynamiques */}
        {shapeName === "frustum-cone" && values.calc_type === "H" && (
          <div>
            <label className="block font-medium mb-1 text-slate-200">Height (H)</label>
            <div className="relative">
              <input
                type="number"
                step="any"
                placeholder="Enter height (H)"
                onChange={(e) => handleChange("height", e.target.value)}
                className="w-full border border-slate-700 rounded-lg pl-3 pr-14 py-2 text-slate-100 bg-slate-800/60
                           focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm select-none">mm</span>
            </div>
          </div>
        )}

        {shapeName === "frustum-cone" && values.calc_type === "B" && (
          <div>
            <label className="block font-medium mb-1 text-slate-200">Bita (B)</label>
            <div className="relative">
              <input
                type="number"
                step="any"
                placeholder="Enter bita (B)"
                onChange={(e) => handleChange("bita", e.target.value)}
                className="w-full border border-slate-700 rounded-lg pl-3 pr-14 py-2 text-slate-100 bg-slate-800/60
                           focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm select-none">mm</span>
            </div>
          </div>
        )}

        {/* Optional checkboxes (visual only)
        <div className="mt-1 flex flex-col gap-2 text-slate-200">
          <label className="inline-flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-slate-200" />
            <span>Overlap (25mm)</span>
          </label>
          <label className="inline-flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-slate-200" />
            <span>Center lines</span>
          </label>
        </div> */}

        {/* 🔘 Bouton Generate */}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 py-2.5 rounded-lg font-semibold text-white
                     bg-slate-700 shadow-md transition-all duration-300
                     hover:scale-[1.02] disabled:opacity-70"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
   

      </form>
    </div>
  );
}
