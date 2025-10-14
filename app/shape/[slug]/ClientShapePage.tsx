"use client";
import React, { useState } from "react";
import ShapeForm from "@/components/ShapeForm";

interface ClientShapePageProps {
  slug: string;
  fields: { label: string; key: string }[];
  imageSrc: string;
}

export default function ClientShapePage({ slug, fields, imageSrc }: ClientShapePageProps) {
  const [result, setResult] = useState<Record<string, number> | null>(null);
  const [dxfBase64, setDxfBase64] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
    a.download = `${slug}.dxf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center gap-0 p-10 mt-10">
      {/* 🔙 Back Button */}
      <a
        href="/"
        className="self-start w-auto px-5 py-2 rounded-lg font-semibold text-white bg-gray-600 shadow-md transition-all duration-300 hover:scale-[1.02]"
      >
        ← Back to Home
      </a>

      {/* 🧾 Form + Image + Results */}
      <div className="flex flex-col md:flex-row items-start justify-start gap-10 w-full mt-1">
        {/* Form - Left Column */}
        <div className="bg-white rounded-xl shadow-xl p-6 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 capitalize text-black">
            {slug.replace(/-/g, " ")} Parameters
          </h2>
          {/* ✅ Client-side Form Component */}
          <ShapeForm
            fields={fields}
            shapeName={slug}
            loading={loading}
            setResult={setResult}
            setDxfBase64={setDxfBase64}
            setMessage={setMessage}
            setLoading={setLoading}
          />
        </div>

        {/* Right Column: Image + Results */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Image */}
          <div className="w-full flex justify-center">
            <img src={imageSrc} alt={slug} className="w-full h-auto max-h-96 object-contain" />
          </div>

          {/* Placeholder for Results to prevent layout shift - only when no results */}
          {!result && <div className="w-full min-h-[150px]"></div>}

          {/* 🔹 Résultats + bouton DXF */}
          {result && (
            <div className="w-full bg-white rounded-xl shadow-xl p-6 flex justify-between items-center mt-0">
              <div>
                <h3 className="font-semibold text-xl mb-2 text-black">
                  Results:
                </h3>
                <ul className="text-black text-base">
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
                  ⬇️ Download DXF
                </button>
              )}
            </div>
          )}

          {/* 🔹 Message - directly below results */}
          {result && message && (
            <p
              className={`text-sm mt-4 flex justify-between ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
