"use client";

import React from "react";
import { useRouter } from "next/navigation";

const shapes = [
  { name: "Cone", img: "/shapes/cone.png" },
  { name: "Offset Cone", img: "/shapes/offset-cone.jpg" },
  { name: "Frustum Cone", img: "/shapes/frustum-cone.jpg" },
  { name: "Frustum Cone (Triangulation)", img: "/shapes/frustum-triangulation.jpg" },
  { name: "Frustum Ecc Paral", img: "/shapes/frustum-ecc-paral.jpg" },
  { name: "Frustum Ecc Angle", img: "/shapes/frustum-ecc-angle.jpg" },
  { name: "Truncated Cylinder", img: "/shapes/truncated-cylinder.jpg" },
  { name: "Bend", img: "/shapes/bend.jpg" },
  { name: "Rectangle to Circle", img: "/shapes/rectangle-circle.jpg" },
  { name: "Circle to Rectangle", img: "/shapes/circle-rectangle.jpg" },
  { name: "Rectangle to Rectangle", img: "/shapes/rectangle-rectangle.jpg" },
  { name: "Pants", img: "/shapes/pants.jpg" },
  { name: "Pants Ecc", img: "/shapes/pants-ecc.jpg" },
  { name: "Pants 2", img: "/shapes/pants2.jpg" },
  { name: "Breeches", img: "/shapes/breeches.jpg" },
  { name: "Tee", img: "/shapes/tee.jpg" },
  { name: "Tee Eccentric", img: "/shapes/tee-ecc.jpg" },
  { name: "Tee on Cone", img: "/shapes/tee-on-cone.jpg" },
  { name: "Offset Tee", img: "/shapes/offset-tee.jpg" },
  { name: "Tee on Bend", img: "/shapes/tee-on-bend.jpg" },
  { name: "Pyramid", img: "/shapes/pyramid.jpg" },
  { name: "Auger", img: "/shapes/auger.jpg" },
  { name: "Sphere", img: "/shapes/sphere.jpg" },
  { name: "Flange", img: "/shapes/flange.jpg" },
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8">
      {shapes.map((shape, i) => (
        <div
          key={i}
          onClick={() => handleClick(shape.name)}
          className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all duration-300 p-5 cursor-pointer"
        >
          {/* Image */}
          <img
            src={shape.img}
            alt={shape.name}
            className="w-20 h-20 object-contain mb-3"
          />

          {/* Ligne décorative */}
          <hr className="w-16 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 border-0 rounded-full my-2" />

          {/* Nom du shape */}
          <p className="font-semibold text-gray-700 text-center text-sm">
            {shape.name}
          </p>
        </div>
      ))}
    </div>
  );
}
