"use client";

import { useRouter } from "next/navigation";
import ShapeForm from "@/components/ShapeForm";

/* -----------------------------------------------
   🔹 FORM PARAMETERS PER SHAPE (Industry Accurate)
------------------------------------------------- */
const shapeForms: Record<string, string[]> = {
  // ✅ Cone
  cone: [
    "Base Diameter (D1)",
    "Apex Height (H)",
  ],

  // ✅ Offset Cone
  "offset-cone": [
    "Large Diameter (D1)",
    "Small Diameter (D2)",
    "Height (H)",
    "Offset (Eccentricity)",
  ],

  // ✅ Frustum Cone
  "frustum-cone": [
    "Large Diameter (D1)",
    "Small Diameter (D2)",
    "Height (H)",
  ],

  // ✅ Frustum Cone (Triangulation)
  "frustum-cone-triangulation": [
    "Large Diameter (D1)",
    "Small Diameter (D2)",
    "Height (H)",
    "Number of Divisions (Segments)",
  ],

  // ✅ Frustum Eccentric Parallel
  "frustum-ecc-paral": [
    "Large Diameter (D1)",
    "Small Diameter (D2)",
    "Height (H)",
    "Offset X",
    "Offset Y",
  ],

  // ✅ Frustum Eccentric Angular
  "frustum-ecc-angle": [
    "Large Diameter (D1)",
    "Small Diameter (D2)",
    "Height (H)",
    "Angle (°)",
  ],

  // ✅ Truncated Cylinder
  "truncated-cylinder": [
    "Cylinder Diameter (D)",
    "Cylinder Height (H)",
    "Cut Angle (°)",
  ],

  // ✅ Bend (Elbow)
  bend: [
    "Pipe Diameter (D)",
    "Centerline Radius (R)",
    "Bend Angle (°)",
    "Thickness (t)",
  ],

  // ✅ Rectangle → Circle Transition
  "rectangle-to-circle": [
    "Rectangle Width (W)",
    "Rectangle Height (H)",
    "Circle Diameter (D)",
    "Transition Height",
  ],

  // ✅ Circle → Rectangle Transition
  "circle-to-rectangle": [
    "Circle Diameter (D)",
    "Rectangle Width (W)",
    "Rectangle Height (H)",
    "Transition Height",
  ],

  // ✅ Rectangle → Rectangle Transition
  "rectangle-to-rectangle": [
    "Inlet Width (W1)",
    "Inlet Height (H1)",
    "Outlet Width (W2)",
    "Outlet Height (H2)",
    "Transition Height",
  ],

  // ✅ Pants (Y-branch symmetric)
  pants: [
    "Main Diameter (D1)",
    "Branch Diameter (D2)",
    "Branch Angle (°)",
    "Intersection Height",
  ],

  // ✅ Pants Eccentric
  "pants-ecc": [
    "Main Diameter (D1)",
    "Branch Diameter (D2)",
    "Branch Offset (Eccentricity)",
    "Angle (°)",
  ],

  // ✅ Pants 2 (asymmetric)
  "pants-2": [
    "Main Diameter (D1)",
    "Left Branch Diameter (D2)",
    "Right Branch Diameter (D3)",
    "Angle Between Branches (°)",
  ],

  // ✅ Breeches (Double Y)
  breeches: [
    "Main Diameter (D1)",
    "Left Branch Diameter (D2)",
    "Right Branch Diameter (D3)",
    "Branch Angle (°)",
  ],

  // ✅ Tee
  tee: [
    "Main Diameter (D1)",
    "Branch Diameter (D2)",
    "Branch Angle (°)",
    "Intersection Height",
  ],

  // ✅ Tee Eccentric
  "tee-eccentric": [
    "Main Diameter (D1)",
    "Branch Diameter (D2)",
    "Eccentricity (Offset)",
    "Branch Angle (°)",
  ],

  // ✅ Tee on Cone
  "tee-on-cone": [
    "Cone Base Diameter (D1)",
    "Cone Height (H)",
    "Branch Diameter (D2)",
    "Branch Angle (°)",
  ],

  // ✅ Offset Tee
  "offset-tee": [
    "Main Diameter (D1)",
    "Branch Diameter (D2)",
    "Offset (Eccentricity)",
    "Branch Angle (°)",
  ],

  // ✅ Tee on Bend
  "tee-on-bend": [
    "Main Diameter (D1)",
    "Branch Diameter (D2)",
    "Bend Radius (R)",
    "Bend Angle (°)",
  ],

  // ✅ Pyramid
  pyramid: [
    "Base Width (W)",
    "Base Depth (L)",
    "Apex Height (H)",
  ],

  // ✅ Auger (Helix)
  auger: [
    "Outer Diameter (D)",
    "Inner Shaft Diameter (d)",
    "Pitch (P)",
    "Length (L)",
  ],

  // ✅ Sphere
  sphere: [
    "Sphere Diameter (D)",
  ],

  // ✅ Flange
  flange: [
    "Outer Diameter (D1)",
    "Inner Diameter (D2)",
    "Bolt Circle Diameter (BCD)",
    "Number of Holes",
    "Thickness (t)",
  ],
};

/* -----------------------------------------------
   🔹 IMAGE MAP PER SHAPE
------------------------------------------------- */
const shapeImages: Record<string, string> = {
  cone: "/shapes/cone.jpg",
  "offset-cone": "/shapes/offset-cone.jpg",
  "frustum-cone": "/shapes/frustum-cone.jpg",
  "frustum-cone-triangulation": "/shapes/frustum-triangulation.jpg",
  "frustum-ecc-paral": "/shapes/frustum-ecc-paral.jpg",
  "frustum-ecc-angle": "/shapes/frustum-ecc-angle.jpg",
  "truncated-cylinder": "/shapes/truncated-cylinder.jpg",
  bend: "/shapes/bend.jpg",
  "rectangle-to-circle": "/shapes/rectangle-circle.jpg",
  "circle-to-rectangle": "/shapes/circle-rectangle.jpg",
  "rectangle-to-rectangle": "/shapes/rectangle-rectangle.jpg",
  pants: "/shapes/pants.jpg",
  "pants-ecc": "/shapes/pants-ecc.jpg",
  "pants-2": "/shapes/pants2.jpg",
  breeches: "/shapes/breeches.jpg",
  tee: "/shapes/tee.jpg",
  "tee-eccentric": "/shapes/tee-ecc.jpg",
  "tee-on-cone": "/shapes/tee-on-cone.jpg",
  "offset-tee": "/shapes/offset-tee.jpg",
  "tee-on-bend": "/shapes/tee-on-bend.jpg",
  pyramid: "/shapes/pyramid.jpg",
  auger: "/shapes/auger.jpg",
  sphere: "/shapes/sphere.jpg",
  flange: "/shapes/flange.jpg",
};

/* -----------------------------------------------
   🔹 PAGE COMPONENT
------------------------------------------------- */
export default function ShapePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { slug } = params;

  const fields = shapeForms[slug] || ["Dimension 1", "Dimension 2"];
  const imageSrc = shapeImages[slug] || "/shapes/default.jpg";

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10">
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.push("/")}
        className="self-start mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition"
      >
        ← Back to Home
      </button>

      {/* 🧾 Form + Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* Form */}
        <div className="bg-white rounded-xl shadow-xl p-6 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 capitalize">
            {slug.replace(/-/g, " ")} Parameters
          </h2>
          <ShapeForm fields={fields} />
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imageSrc}
            alt={slug}
            className="w-80 h-80 object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
