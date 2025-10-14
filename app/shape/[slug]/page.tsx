import ShapeForm from "@/components/ShapeForm";

/* -----------------------------------------------
   🔹 FORM PARAMETERS LINKED TO BACKEND KEYS
------------------------------------------------- */
const shapeForms: Record<
  string,
  { label: string; key: string }[]
> = {
  // ✅ Cone
  cone: [
    { label: "Base Diameter (D1)", key: "diameter" },
    { label: "Apex Height (H)", key: "height" },
  ],

  // ✅ Offset Cone
  "offset-cone": [
    { label: "Large Diameter (D1)", key: "diameter1" },
    { label: "Small Diameter (D2)", key: "diameter2" },
    { label: "Height (H)", key: "height" },
    { label: "Offset (Eccentricity)", key: "offset" },
  ],

  // ✅ Frustum Cone
  "frustum-cone": [
    { label: "Large Diameter (D1)", key: "diameter1" },
    { label: "Small Diameter (D2)", key: "diameter2" },
    { label: "Height (H)", key: "height" },
  ],

  // ✅ Frustum Cone (Triangulation)
  "frustum-cone-triangulation": [
    { label: "Large Diameter (D1)", key: "diameter1" },
    { label: "Small Diameter (D2)", key: "diameter2" },
    { label: "Height (H)", key: "height" },
    { label: "Number of Divisions", key: "divisions" },
  ],

  // ✅ Truncated Cylinder
  "truncated-cylinder": [
    { label: "Cylinder Diameter (D)", key: "diameter" },
    { label: "Cylinder Height (H)", key: "height" },
    { label: "Cut Angle (°)", key: "angle" },
  ],

  // ✅ Pyramid
  pyramid: [
    { label: "Base", key: "base" },
    { label: "Height (H)", key: "height" },
    { label: "Thickness (t)", key: "thickness" },
    { label: "Bend Radius (R)", key: "bend_radius" },
    { label: "K-Factor", key: "k_factor" },
    { label: "Bend Angle (°)", key: "bend_angle" },
    { label: "Number of Sides", key: "sides" },
  ],

  // ✅ Rectangle → Rectangle
  "rectangle-to-rectangle": [
    { label: "Inlet Width (W1)", key: "w1" },
    { label: "Inlet Height (H1)", key: "h1" },
    { label: "Outlet Width (W2)", key: "w2" },
    { label: "Outlet Height (H2)", key: "h2" },
    { label: "Transition Height", key: "height" },
  ],

  // ✅ Bend (Elbow)
  bend: [
    { label: "Pipe Diameter (D)", key: "diameter" },
    { label: "Bend Angle (°)", key: "bend_angle" },
    { label: "Centerline Radius (R)", key: "radius" },
    { label: "Divisions", key: "divisions" },
  ],

  // ✅ Flange
  flange: [
    { label: "Outer Diameter (D1)", key: "outer_d" },
    { label: "Inner Diameter (D2)", key: "inner_d" },
    { label: "Number of Holes", key: "holes" },
    { label: "Hole Diameter", key: "hole_d" },
  ],

  // ✅ Frustum Eccentric Parallel
  "frustum-ecc-paral": [
    { label: "Large Diameter (D1)", key: "diameter1" },
    { label: "Small Diameter (D2)", key: "diameter2" },
    { label: "Height (H)", key: "height" },
    { label: "Offset X", key: "offset_x" },
    { label: "Offset Y", key: "offset_y" },
  ],

  // ✅ Frustum Eccentric Angular
  "frustum-ecc-angle": [
    { label: "Large Diameter (D1)", key: "diameter1" },
    { label: "Small Diameter (D2)", key: "diameter2" },
    { label: "Height (H)", key: "height" },
    { label: "Angle (°)", key: "angle" },
  ],

  // ✅ Rectangle → Circle
  "rectangle-to-circle": [
    { label: "Rectangle Width (W)", key: "rect_width" },
    { label: "Rectangle Height (H)", key: "rect_height" },
    { label: "Circle Diameter (D)", key: "circle_diameter" },
    { label: "Transition Height", key: "height" },
  ],

  // ✅ Circle → Rectangle
  "circle-to-rectangle": [
    { label: "Circle Diameter (D)", key: "circle_diameter" },
    { label: "Rectangle Width (W)", key: "rect_width" },
    { label: "Rectangle Height (H)", key: "rect_height" },
    { label: "Transition Height", key: "height" },
  ],

  // ✅ Rectangle → Circle Eccentric
  "rectangle-to-circle-ecc": [
    { label: "Rectangle Width (W)", key: "rect_width" },
    { label: "Rectangle Height (H)", key: "rect_height" },
    { label: "Circle Diameter (D)", key: "circle_diameter" },
    { label: "Transition Height", key: "height" },
    { label: "Eccentricity (Offset)", key: "offset" },
  ],

  // ✅ Pants (Y-branch symmetric)
  pants: [
    { label: "Main Diameter (D1)", key: "main_diameter" },
    { label: "Branch Diameter (D2)", key: "branch_diameter" },
    { label: "Branch Angle (°)", key: "angle" },
    { label: "Intersection Height", key: "height" },
  ],

  // ✅ Pants Eccentric
  "pants-ecc": [
    { label: "Main Diameter (D1)", key: "main_diameter" },
    { label: "Branch Diameter (D2)", key: "branch_diameter" },
    { label: "Branch Offset (Eccentricity)", key: "offset" },
    { label: "Angle (°)", key: "angle" },
  ],

  // ✅ Pants 2 (asymmetric)
  "pants-2": [
    { label: "Main Diameter (D1)", key: "main_diameter" },
    { label: "Left Branch Diameter (D2)", key: "left_branch_d" },
    { label: "Right Branch Diameter (D3)", key: "right_branch_d" },
    { label: "Angle Between Branches (°)", key: "angle" },
  ],

  // ✅ Breeches (Double Y)
  breeches: [
    { label: "Main Diameter (D1)", key: "main_diameter" },
    { label: "Left Branch Diameter (D2)", key: "left_branch_d" },
    { label: "Right Branch Diameter (D3)", key: "right_branch_d" },
    { label: "Branch Angle (°)", key: "angle" },
  ],

  // ✅ Tee
  tee: [
    { label: "Main Diameter (D1)", key: "main_diameter" },
    { label: "Branch Diameter (D2)", key: "branch_diameter" },
    { label: "Branch Angle (°)", key: "angle" },
    { label: "Intersection Height", key: "height" },
  ],

  // ✅ Tee Eccentric
  "tee-eccentric": [
    { label: "Main Diameter (D1)", key: "main_diameter" },
    { label: "Branch Diameter (D2)", key: "branch_diameter" },
    { label: "Eccentricity (Offset)", key: "offset" },
    { label: "Branch Angle (°)", key: "angle" },
  ],

  // ✅ Tee on Cone
  "tee-on-cone": [
    { label: "Cone Base Diameter (D1)", key: "cone_diameter" },
    { label: "Cone Height (H)", key: "cone_height" },
    { label: "Branch Diameter (D2)", key: "branch_diameter" },
    { label: "Branch Angle (°)", key: "angle" },
  ],

  // ✅ Offset Tee
  "offset-tee": [
    { label: "Main Diameter (D1)", key: "main_diameter" },
    { label: "Branch Diameter (D2)", key: "branch_diameter" },
    { label: "Offset (Eccentricity)", key: "offset" },
    { label: "Branch Angle (°)", key: "angle" },
  ],

  // ✅ Tee on Bend
  "tee-on-bend": [
    { label: "Main Diameter (D1)", key: "main_diameter" },
    { label: "Branch Diameter (D2)", key: "branch_diameter" },
    { label: "Bend Radius (R)", key: "radius" },
    { label: "Bend Angle (°)", key: "angle" },
  ],

  // ✅ Auger (Helix)
  auger: [
    { label: "Outer Diameter (D)", key: "outer_d" },
    { label: "Inner Shaft Diameter (d)", key: "inner_d" },
    { label: "Pitch (P)", key: "pitch" },
    { label: "Length (L)", key: "length" },
  ],

  // ✅ Sphere
  sphere: [
    { label: "Sphere Diameter (D)", key: "diameter" },
  ],
};

/* -----------------------------------------------
   🔹 IMAGE MAP PER SHAPE
------------------------------------------------- */
const shapeImages: Record<string, string> = {
  cone: "/shapes/cone2.png",
  "offset-cone": "/shapes/offset-cone2.png",
  "frustum-cone": "/shapes/frustum-cone2.png",
  "frustum-cone-triangulation": "/shapes/frustum-cone-triangulation2.png",
  "frustum-ecc-paral": "/shapes/frustum-ecc-paral2.png",
  "frustum-ecc-angle": "/shapes/frustum-ecc-angle2.png",
  "truncated-cylinder": "/shapes/truncated-cylinder2.png",
  bend: "/shapes/bend2.png",
  "rectangle-to-circle": "/shapes/rectangle-to-circle2.png",
  "circle-to-rectangle": "/shapes/circle-to-rectangle2.png",
  "rectangle-to-rectangle": "/shapes/rectangle-to-rectangle2.png",
  "rectangle-to-circle-ecc": "/shapes/rectangle-to-circle-ecc-2.png",
  pants: "/shapes/pants2.png",
  "pants-ecc": "/shapes/pants-ecc2.png",
  "pants-2": "/shapes/pants22.png",
  breeches: "/shapes/breeches2.png",
  tee: "/shapes/tee2.png",
  "tee-eccentric": "/shapes/tee-ecc2.png",
  "tee-on-cone": "/shapes/tee-on-cone2.png",
  "offset-tee": "/shapes/offset-tee2.png",
  "tee-on-bend": "/shapes/tee-on-bend2.png",
  pyramid: "/shapes/pyramid2.png",
  auger: "/shapes/auger2.png",
  sphere: "/shapes/sphere2.png",
  flange: "/shapes/flange2.png",
};
/* -----------------------------------------------
   🔹 PAGE COMPONENT (Server Component)
------------------------------------------------- */
export default async function ShapePage({ params }: { params: { slug: string } })
{
  const { slug } = params;
  const fields = shapeForms[slug] || [];
  const imageSrc = shapeImages[slug] || "/shapes/default.jpg";

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10 mt-12">
      {/* 🔙 Back Button */}
      <a
        href="/"
        className="self-start mb-6 w-auto px-5 py-2 rounded-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 shadow-md transition-all duration-300 hover:from-blue-500 hover:via-cyan-400 hover:to-yellow-500 hover:scale-[1.02]"
      >
        ← Back to Home
      </a>

      {/* 🧾 Form + Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* Form */}
        <div className="bg-white rounded-xl shadow-xl p-6 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 capitalize bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 bg-clip-text text-transparent">
            {slug.replace(/-/g, " ")} Parameters
          </h2>
          {/* ✅ Client-side Form Component */}
          <ShapeForm fields={fields} shapeName={slug} />
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={imageSrc} alt={slug} className="w-100 h-100 object-contain" />
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------
   🔹 STATIC GENERATION
------------------------------------------------- */
export async function generateStaticParams() {
  return Object.keys(shapeForms).map((slug) => ({ slug }));
}
