"use client";

import React from "react";
import { useRouter } from "next/navigation";

const shapes = [
  { name: "Cone", img: "/shapes/cone.png" },
  { name: "Offset Cone", img: "/shapes/offset-cone.png" },
  { name: "Frustum Cone", img: "/shapes/frustum-cone.png" },
  { name: "Frustum Cone (Triangulation)", img: "/shapes/frustum-triangulation.jpg" },
  { name: "Frustum Ecc Paral", img: "/shapes/frustum-ecc-paral.png" },
  { name: "Frustum Ecc Angle", img: "/shapes/frustum-ecc-angle.png" },
  { name: "Truncated Cylinder", img: "/shapes/truncated-cylinder.png" },
  { name: "Bend", img: "/shapes/bend.png" },
  { name: "Rectangle to Circle", img: "/shapes/rectangle-to-circle.png" },
  { name: "Circle to Rectangle", img: "/shapes/circle-rectangle.png" },
  { name: "Rectangle to Rectangle", img: "/shapes/rectangle-to-rectangle.png" },
  { name: "Rectangle to Circle Ecc", img: "/shapes/rectangle-to-circle-ecc.png" },
  { name: "Pants", img: "/shapes/pants.jpg" },
  { name: "Pants Ecc", img: "/shapes/pants-ecc.png" },
  { name: "Pants 2", img: "/shapes/pants-2.png" },
  { name: "Breeches", img: "/shapes/breeches.png" },
  { name: "Tee", img: "/shapes/tee.png" },
  { name: "Tee Eccentric", img: "/shapes/tee-eccentric.png" },
  { name: "Tee on Cone", img: "/shapes/tee-on-cone.png" },
  { name: "Offset Tee", img: "/shapes/offset-tee.png" },
  { name: "Tee on Bend", img: "/shapes/tee-on-bend.png" },
  { name: "Pyramid", img: "/shapes/pyramid.png" },
  { name: "Auger", img: "/shapes/auger.png" },
  { name: "Sphere", img: "/shapes/sphere.png" },
  { name: "Flange", img: "/shapes/flange.png" },
];

export default function ShapeList() {
  const router = useRouter();

  // ✅ Nettoyage complet pour correspondre aux clés shapeForms
  const handleClick = (name) => {
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // espaces → tirets
      .replace(/[()]/g, "") // supprime les parenthèses
      .replace(/\./g, "") // supprime les points
      .replace(/&/g, "and") // remplace & par "and"
      .replace(/[^a-z0-9-]/g, ""); // supprime tout autre caractère spécial

    router.push(`/shape/${slug}`);
  };
  return (
    <div className="w-full py-10 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full">
        {shapes.map((shape, i) => (
          <div
            key={i}
            onClick={() => handleClick(shape.name)}
            className="relative flex flex-col items-center justify-end bg-white rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all duration-300 p-5 cursor-pointer h-56 overflow-hidden"
          >
            {/* 🖼️ Image centrée derrière le contenu */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <img
                src={shape.img}
                alt={shape.name}
                className="w-[60%] h-[50%] object-contain opacity-100"
              />
            </div>

            {/* 🌈 Ligne décorative colorée (toujours visible) */}
            <hr className="w-16 h-[4px] bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 border-0 rounded-full my-2 relative z-10" />

            {/* 🔤 Nom du shape */}
            <p className="font-semibold text-gray-700 text-center text-sm relative z-10 bg-white bg-opacity-70 px-2 rounded-md">
              {shape.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
