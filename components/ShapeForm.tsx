"use client";
import React, { useState } from "react";

export default function ShapeForm({ fields }: { fields: string[] }) {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", values);
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {fields.map((field, i) => (
        <div key={i}>
          <label className="block font-medium text-gray-700 mb-1">
            {field}
          </label>
          <input
            type="number"
            placeholder={`Enter ${field.toLowerCase()}`}
            onChange={(e) => handleChange(field, e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ))}

      {/* ✅ Nouveau bouton cohérent avec la charte Flat Pattern */}
      <button
        type="submit"
        className="
          mt-4 py-2.5 rounded-lg font-semibold text-gray-900
          bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400
          shadow-md transition-all duration-300
          hover:from-blue-500 hover:via-cyan-400 hover:to-yellow-500
          hover:scale-[1.02]
        "
      >
        Generate
      </button>
    </form>
  );
}
