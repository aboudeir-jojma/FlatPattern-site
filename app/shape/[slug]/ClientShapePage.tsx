"use client";
import React, { useState, useEffect } from "react";
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

  // Generate affichage image path based on slug
  const affichageImageSrc = `/affichage/${slug}-affichage.png`;

  // Scroll to bottom when result is set
  useEffect(() => {
    if (result) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [result]);

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
    <div className="flex flex-col items-center gap-0 p-6 md:p-10 mt-6 md:mt-10">
      {/* 🔙 Back Button */}
      <a
        href="/"
        className="self-start w-auto px-5 py-2 rounded-lg font-semibold text-white bg-gray-700 shadow-md transition-all duration-300 hover:scale-[1.02]"
      >
        ← Back to Home
      </a>

      {/* Form and Shape Image at Top */}
      <div className="flex flex-col md:flex-row items-start justify-start gap-6 md:gap-10 w-full mt-3">
        {/* Form - Left Column */}
        <div className="w-full md:w-1/2">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl p-5 md:p-6 sticky top-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 capitalize text-white tracking-tight">
              {slug.replace(/-/g, " ")} parameters
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
        </div>

        {/* Right Column: Shape Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full rounded-xl border border-slate-200 bg-white p-4 flex flex-col items-center justify-center gap-4">
              <h3 className="text-slate-900 text-lg">Technical drawings</h3>
              <img src={imageSrc} alt={slug} className="w-full max-h-[26rem] h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Affichage Image and Results at Bottom - Only when results are available */}
      {result && (
        <div className="flex flex-col md:flex-row items-stretch justify-start gap-6 md:gap-10 w-full mt-10">
          {/* Left Column: Affichage Image */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full rounded-xl border border-slate-200 bg-white p-4 flex justify-center min-h-[28rem]">
              <img src={affichageImageSrc} alt={`${slug} affichage`} className="w-full h-auto max-h-[26rem] object-contain" />
            </div>
          </div>

          {/* Right Column: Results */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            {/* 🔹 Résultats + bouton DXF */}
            <div className="w-full bg-white rounded-xl shadow-xl p-6 flex flex-col md:flex-row justify-between items-center mt-0 min-h-[28rem]">
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
                  className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-900 transition-all duration-200 mt-2"
                >
                  ⬇️ Download DXF
                </button>
              )}
            </div>

            {/* 🔹 Message - directly below results */}
            {message && (
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
      )}
    </div>
  );
}
