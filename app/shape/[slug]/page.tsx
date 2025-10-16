import React from "react";
import ClientShapePage from "./ClientShapePage";

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
  { label: "Small Diameter (D2)", key: "diameter2" },
  { label: "Large Diameter (D1)", key: "diameter1" },

  // le champ height/bita sera affiché dynamiquement selon la sélection
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
  { label: "Number of Segments (n)", key: "n" },
],


  // ✅ Pyramid
  pyramid: [
    { label: "AA", key: "AA" },
    { label: "AB", key: "AB" },
    { label: "H", key: "H" },
  
  ],

  // ✅ Rectangle → Rectangle
  "rectangle-to-rectangle": [
    { label: "ab", key: "ab" },
    { label: "bc", key: "bc" },
    { label: "H", key: "H" },
    { label: "AB", key: "AB" },
    { label: "BC", key: "BC" },
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
  { label: "Outer Diameter (D1)", key: "D1" },
  { label: "Inner Diameter (D2)", key: "D2" },
  { label: "Outer Circle Distance (D3)", key: "D3" },
  { label: "Inner Circle Distance (D4)", key: "D4" },
  { label: "Number of Outer Holes (N1)", key: "N1" },
  { label: "Outer Hole Diameter (d1)", key: "d1" },
  { label: "Number of Inner Holes (N2)", key: "N2" },
  { label: "Inner Hole Diameter (d2)", key: "d2" },
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

// Generate static params for all shape slugs
export function generateStaticParams() {
  const slugs = Object.keys(shapeForms);
  return slugs.map(slug => ({ slug }));
}

/* -----------------------------------------------
   🔹 IMAGE MAP PER SHAPE
------------------------------------------------- */
// Preview images (same as ShapeList)
const shapeImages: Record<string, string> = {
  cone: "/shapes/cone.png",
  "offset-cone": "/shapes/offset-cone.png",
  "frustum-cone": "/shapes/frustum-cone.png",
  "frustum-cone-triangulation": "/shapes/frustum-cone-triangulation.png",
  "frustum-ecc-paral": "/shapes/frustum-ecc-paral.png",
  "frustum-ecc-angle": "/shapes/frustum-ecc-angle.png",
  "truncated-cylinder": "/shapes/truncated-cylinder.png",
  bend: "/shapes/bend.png",
  "rectangle-to-circle": "/shapes/rectangle-to-circle.png",
  "circle-to-rectangle": "/shapes/circle-rectangle.png",
  "rectangle-to-rectangle": "/shapes/rectangle-to-rectangle.png",
  "rectangle-to-circle-ecc": "/shapes/rectangle-to-circle-ecc.png",
  pants: "/shapes/pants.png",
  "pants-ecc": "/shapes/pants-ecc.png",
  "pants-2": "/shapes/pants-2.png",
  breeches: "/shapes/breeches.png",
  tee: "/shapes/tee.png",
  "tee-eccentric": "/shapes/tee-eccentric.png",
  "tee-on-cone": "/shapes/tee-on-cone.png",
  "offset-tee": "/shapes/offset-tee.png",
  "tee-on-bend": "/shapes/tee-on-bend.png",
  pyramid: "/shapes/pyramid.png",
  auger: "/shapes/auger.png",
  sphere: "/shapes/sphere.png",
  flange: "/shapes/flange.png",
};

// Detailed technical drawing images
const shapeTechImages: Record<string, string> = {
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
   🔹 SHAPE TITLES & DESCRIPTIONS (custom per slug)
------------------------------------------------- */
const shapeMeta: Record<string, { title: string; description: string }> = {
  cone: {
    title: "Cone",
    description:
      "A sheet metal cone is a conical structure crafted from a flat sheet of metal. It is commonly used in various industrial applications, including ductwork, funnels, and hoppers. The manufacturing process involves cutting a precise, sector-shaped piece of metal, which is then rolled and joined to form the cone shape. This process can be achieved through welding, riveting, or other joining methods.Sheet metal cones are valued for their versatility, strength, and durability. They can be made from various metals such as aluminum, stainless steel, and galvanized steel, each offering specific advantages like corrosion resistance or lightweight properties. The design of the cone can be customized to meet specific requirements, including dimensions and thickness, depending on the intended use. In addition to industrial applications, sheet metal cones are also used in art, architecture, and design, showcasing their broad utility and adaptability.",
  },
  "offset-cone": {
    title: "Offset Cone",
    description:
      "Generate an eccentric cone where the apex is shifted from center. Useful for transitions with offset axes.",
  },
  "frustum-cone": {
    title: "Frustum Cone",
    description:
      "Flat pattern for a truncated cone using large/small diameters with height or cone angle.",
  },
  "frustum-cone-triangulation": {
    title: "Frustum Cone (Triangulation)",
    description:
      "Triangulated development for high accuracy with optional divisions for layout.",
  },
  "frustum-ecc-paral": {
    title: "Frustum Eccentric (Parallel)",
    description:
      "Eccentric truncated cone with parallel axes and X/Y offsets.",
  },
  "frustum-ecc-angle": {
    title: "Frustum Eccentric (Angular)",
    description:
      "Eccentric truncated cone where the branch is angled relative to the main axis.",
  },
  "truncated-cylinder": {
    title: "Truncated Cylinder",
    description:
      "Cylinder cut by an oblique plane. Provide diameter and cut angle to get the wrap development.",
  },
  bend: {
    title: "Bend (Elbow)",
    description:
      "Segmented pipe bend by given angle, radius and number of divisions for fabrication.",
  },
  "rectangle-to-circle": {
    title: "Rectangle → Circle",
    description:
      "Transition piece from rectangular to circular section with adjustable height.",
  },
  "circle-to-rectangle": {
    title: "Circle → Rectangle",
    description:
      "Circular to rectangular transition for ducts and ventilation components.",
  },
  "rectangle-to-rectangle": {
    title: "Rectangle → Rectangle",
    description:
      "Rectangular transition with different inlet/outlet sizes and height.",
  },
  "rectangle-to-circle-ecc": {
    title: "Rectangle → Circle (Eccentric)",
    description:
      "Eccentric rectangle to circle transition including offset control.",
  },
  pants: {
    title: "Y-Branch (Pants)",
    description:
      "Symmetric Y-branch joining one inlet to two outlets at a set angle.",
  },
  "pants-ecc": {
    title: "Y-Branch Eccentric",
    description:
      "Asymmetric branch with offset between main and branch centerlines.",
  },
  "pants-2": {
    title: "Y-Branch 2 (Asymmetric)",
    description:
      "Two different branch diameters and a configurable included angle.",
  },
  breeches: {
    title: "Double Y (Breeches)",
    description:
      "Dual-branch connection for splitting a main pipeline into two.",
  },
  tee: {
    title: "Tee",
    description:
      "Orthogonal tee connection; set diameters, angle and intersection height.",
  },
  "tee-eccentric": {
    title: "Tee Eccentric",
    description:
      "Tee with eccentric branch position for offset hookups.",
  },
  "tee-on-cone": {
    title: "Tee on Cone",
    description:
      "Branch connection intersecting a conical surface.",
  },
  "offset-tee": {
    title: "Offset Tee",
    description:
      "Main and branch with defined eccentricity and connection angle.",
  },
  "tee-on-bend": {
    title: "Tee on Bend",
    description:
      "Branch intersecting a curved elbow; specify bend radius and angle.",
  },
  pyramid: {
    title: "Pyramid",
    description:
      "Four-sided pyramid development using base edges and height.",
  },
  auger: {
    title: "Auger (Helix)",
    description:
      "Helical flight layout from outer/inner diameters, pitch and length.",
  },
  sphere: {
    title: "Sphere",
    description:
      "Gore-based spherical layout from overall diameter.",
  },
  flange: {
    title: "Flange",
    description:
      "Bolt circle layout with inner/outer diameters, hole size and count.",
  },
};

// Fallback defaults for any missing slug keys
Object.keys(shapeImages).forEach((slug) => {
  if (!shapeMeta[slug]) {
    const pretty = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    shapeMeta[slug] = {
      title: pretty,
      description:
        `Generate a flat pattern for ${pretty.toLowerCase()}. Enter dimensions and export DXF in seconds.`,
    };
  }
});
/* -----------------------------------------------
   🔹 PAGE COMPONENT (Server Component)
------------------------------------------------- */
export default function ShapePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fields = shapeForms[slug] || [];
  const imageSrc = shapeImages[slug] || "/shapes/default.jpg";
  const techImageSrc = shapeTechImages[slug] || imageSrc;
  const meta = shapeMeta[slug] || { title: slug, description: "" };

  return (
    <ClientShapePage slug={slug} fields={fields} imageSrc={imageSrc} techImageSrc={techImageSrc} title={meta.title} description={meta.description} />
  );
}
