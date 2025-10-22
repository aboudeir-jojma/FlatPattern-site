"use client";
import React, { useState, useEffect } from "react";
import ShapeForm from "@/components/ShapeForm";

interface ClientShapePageProps {
  slug: string;
  fields: { label: string; key: string }[];
  imageSrc: string;
  techImageSrc?: string;
  affichageImageSrc?: string;
  title?: string;
  description?: string;
}

export default function ClientShapePage({
  slug,
  fields,
  imageSrc,
  techImageSrc,
  affichageImageSrc,
  title,
  description,
}: ClientShapePageProps) {
  const [result, setResult] = useState<Record<string, number> | null>(null);
  const [dxfBase64, setDxfBase64] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDescription, setShowDescription] = useState(false); // ✅ nouveau

  // Helper function to get unit for a key
  const getUnit = (key: string): string => {
    const angleKeys = ["angle", "beta", "bita"];
    if (angleKeys.some(angleKey => key.toLowerCase().includes(angleKey))) {
      return "°";
    }
    return "mm";
  };

  // ✅ Scroll auto vers résultats après génération
  useEffect(() => {
    if (result) {
      const resultsSection = document.getElementById("results-section");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [result]);

  // ✅ Afficher description quand on scroll vers le bas
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.body.scrollHeight - 400; // seuil d'apparition
      if (scrollPosition >= threshold) {
        setShowDescription(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    if (!dxfBase64) return;

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

      {/* Form + Technical Drawing */}
      <div className="flex flex-col md:flex-row items-start justify-start gap-6 md:gap-10 w-full mt-3">
        {/* Left: Form */}
        <div className="w-full md:w-1/2">
          <div
            id="shape-form"
            className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl p-5 md:p-6 sticky top-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4 capitalize text-orange-500 tracking-tight">
              {slug.replace(/-/g, " ")} parameters
            </h2>

            {/* ✅ Client-side Form */}
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

        {/* Right: Technical Drawing */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full rounded-xl border border-slate-200 bg-white p-4 flex flex-col items-center justify-center gap-4">
              <h3 className="text-slate-900 text-lg">Technical drawings</h3>
              <img
                src={techImageSrc || imageSrc}
                alt={slug}
                className="w-full max-h-[26rem] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Results Section */}
      {result && (
        <div
          id="results-section"
          className="flex flex-col md:flex-row items-stretch justify-start gap-6 md:gap-10 w-full mt-20"
        >
          {/* Left: Affichage Image */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full rounded-xl border border-slate-200 bg-white p-4 flex justify-center min-h-[28rem]">
              <img
                src={affichageImageSrc}
                alt={`${slug} affichage`}
                className="w-full h-auto max-h-[26rem] object-contain"
              />
            </div>
          </div>

          {/* Right: Results */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl shadow-xl p-6 flex flex-col md:flex-row justify-between items-center mt-0 min-h-[28rem] text-slate-200">
              <div>
                <h3 className="font-semibold text-xl mb-2 text-orange-500">
                  Results:
                </h3>
                <ul className="text-slate-200 text-base">
                  {Object.entries(result).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium text-white">{key}:</span>{" "}
                      {value} {getUnit(key)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download DXF */}
              {dxfBase64 && (
                <button
                  onClick={handleDownload}
                  className="bg-white text-slate-900 px-4 py-2 rounded-md font-medium hover:bg-slate-100 transition-all duration-200 mt-2 border border-slate-300"
                >
                  ⬇️ Download DXF
                </button>
              )}
            </div>

            {/* Message */}
            {message && (
              <p
                className={`text-sm mt-4 flex justify-between ${
                  message.startsWith("✅")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ✅ Intro Section (hidden until scroll) */}
      {showDescription && (
        <div
          className="w-full flex flex-col md:flex-row items-start justify-start gap-6 md:gap-10 mt-20 font-inter text-black mt-40 opacity-0 animate-fadeIn"
          style={{
            animation: "fadeIn 1s ease-in-out forwards",
          }}
        >
          <div className="w-full md:w-3/5">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4 capitalize text-orange-500 tracking-tight">
              {slug.replace(/-/g, " ")}
            </h1>

            {description && (
              <p className="text-base md:text-lg font-medium leading-relaxed mb-6 text-gray-800">
                {description}
              </p>
            )}

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-5 py-3 rounded-md shadow-md transition-all hover:bg-orange-600 hover:shadow-lg"
            >
              Customize parameters
            </a>
          </div>

          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-full rounded-xl border border-gray-300 bg-white p-4 flex justify-center shadow-sm">
              <img
                src={imageSrc}
                alt={slug}
                className="w-full h-auto max-h-[26rem] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
