import React from "react";
import ClientShapePage from "./ClientShapePage";

/* -----------------------------------------------
   🔹 FORM PARAMETERS LINKED TO BACKEND KEYS
------------------------------------------------- */
const shapeForms: Record<string, { label: string; key: string }[]> = {
  // ✅ Cone
  cone: [
    { label: "Base Diameter (diameter)", key: "diameter" },
    { label: "Height (height)", key: "height" },
  ],

  // ✅ Offset Cone
  "offset-cone": [
    { label: "Base Diameter (D)", key: "D" },
    { label: "Height (H)", key: "H" },
    { label: "Offset (X)", key: "X" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Frustum Cone
  "frustum-cone": [
    { label: "Large Diameter (D1)", key: "D1" },
    { label: "Small Diameter (D2)", key: "D2" },
  ],

  // ✅ Frustum Cone (Triangulation)
  "frustum-cone-triangulation": [
    { label: "Large Diameter (D1)", key: "D1" },
    { label: "Small Diameter (D2)", key: "D2" },
    { label: "Height (H)", key: "H" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Truncated Cylinder
  "truncated-cylinder": [
    { label: "Diameter (diameter)", key: "diameter" },
    { label: "Height (height)", key: "height" },
    { label: "Angle (angle)", key: "angle" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Pyramid
  pyramid: [
    { label: "Base Side (AA)", key: "AA" },
    { label: "Top Side (AB)", key: "AB" },
    { label: "Height (H)", key: "H" },
  ],

  // ✅ Rectangle → Rectangle
  "rectangle-to-rectangle": [
    { label: "Bottom Length (ab)", key: "ab" },
    { label: "Bottom Width (bc)", key: "bc" },
    { label: "Height (H)", key: "H" },
    { label: "Top Length (AB)", key: "AB" },
    { label: "Top Width (BC)", key: "BC" },
  ],

  // ✅ Bend / Elbow
  bend: [
    { label: "Radius (R)", key: "R" },
    { label: "Angle (α)", key: "alpha" },
    { label: "Diameter (D)", key: "D" },
    { label: "N° of Sections (N)", key: "N" },
    { label: "N° of Divisions (n)", key: "n" },
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

  // ✅ Frustum Eccentric (Parallel)
  "frustum-ecc-paral": [
    { label: "Large Diameter (D1)", key: "D1" },
    { label: "Small Diameter (D2)", key: "D2" },
    { label: "Height (H)", key: "H" },
    { label: "Offset (X)", key: "X" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Frustum Eccentric (Angular)
  "frustum-ecc-angle": [
    { label: "Large Diameter (D1)", key: "D1" },
    { label: "Small Diameter (D2)", key: "D2" },
    { label: "Height (H)", key: "H" },
    { label: "Offset (X)", key: "X" },
    { label: "Angle (a)", key: "alpha" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Rectangle → Circle
  "rectangle-to-circle": [
    { label: "Diameter (D)", key: "D" },
    { label: "Height (H)", key: "H" },
    { label: "Rectangle Length (A)", key: "A" },
    { label: "Rectangle Width (B)", key: "B" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Rectangle → Circle (Eccentric)
  "rectangle-to-circle-ecc": [
    { label: "Diameter (D)", key: "D" },
    { label: "Height (H)", key: "H" },
    { label: "Rectangle Length (A)", key: "A" },
    { label: "Rectangle Width (B)", key: "B" },
    { label: "Offset X", key: "X" },
    { label: "Offset Y", key: "Y" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Circle → Rectangle
  "circle-to-rectangle": [
    { label: "Diameter (D)", key: "D" },
    { label: "Height (H)", key: "H" },
    { label: "Rectangle Length (A)", key: "A" },
    { label: "Rectangle Width (B)", key: "B" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Pants
  pants: [
    { label: "Main Diameter (D1)", key: "D1" },
    { label: "Branch Diameter (D2)", key: "D2" },
    { label: "Height (H)", key: "H" },
    { label: "Offset (X)", key: "X" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Pants 2
  "pants-2": [
    { label: "Main Diameter (D1)", key: "D1" },
    { label: "Branch Diameter (D2)", key: "D2" },
    { label: "Height (H)", key: "H" },
    { label: "Offset (X)", key: "X" },
    { label: "Angle (a)", key: "a" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Pants Eccentric
  "pants-ecc": [
    { label: "Main Diameter (D1)", key: "D1" },
    { label: "Branch Diameter (D2)", key: "D2" },
    { label: "Height (H)", key: "H" },
    { label: "Offset X (X)", key: "X" },
    { label: "Offset Y (Y)", key: "Y" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Breeches
  "breeches": [
    { label: "Diameter (D)", key: "D" },
    { label: "Left Length (L1)", key: "L1" },
    { label: "Right Length (L2)", key: "L2" },
    { label: "Angle (a)", key: "a" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Offset Tee
  "offset-tee": [
    { label: "Main Diameter (D)", key: "D" },
    { label: "Branch Diameter (d)", key: "d" },
    { label: "Length (L)", key: "L" },
    { label: "Offset (X)", key: "X" },
    { label: "Angle (a)", key: "a" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Tee
  tee: [
     { label: "Main Diameter (D)", key: "D" },
  { label: "Branch Diameter (d)", key: "d" },
  { label: "Branch Length (L1)", key: "L1" },
  { label: "Angle (a°)", key: "a" },
  { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Tee Eccentric
  "tee-eccentric": [
    { label: "Main Diameter (D)", key: "D" },
     { label: "Height (H)", key: "H" },
    { label: "Branch Diameter (d)", key: "d" },
    { label: "Offset (X)", key: "X" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Tee on Bend
  "tee-on-bend": [
    { label: "Main Diameter (D)", key: "D" },
    { label: "Branch Diameter (d)", key: "d" },
    { label: "Bend Radius (R)", key: "R" },
    { label: "Height (H)", key: "H" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Tee on Cone
  "tee-on-cone": [
    { label: "Large Diameter (D1)", key: "D1" },
    { label: "Small Diameter (D2)", key: "D2" },
    { label: "Length (L)", key: "L" },
    { label: "Angle (A)", key: "A" },
    { label: "Branch Diameter (d)", key: "d" },
    { label: "Height (H)", key: "H" },
    { label: "Offset (X)", key: "X" },
    { label: "Number of Divisions (n)", key: "n" },
  ],

  // ✅ Auger
  auger: [
    { label: "Inner Diameter (d)", key: "d" },
    { label: "Outer Diameter (D)", key: "D" },
    { label: "Pitch (S)", key: "S" },
  ],

  // ✅ Sphere
  sphere: [
    { label: "Diameter (D)", key: "D" },
    { label: "Number of Meridians (N)", key: "N" },
    { label: "Number of Parallels (n)", key: "n" },
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

// Affichage images (display images to the left of results) - mapping for mismatched filenames
const shapeAffichageImages: Record<string, string> = {
  "truncated-cylinder": "/affichage/Truncated-Cylinder-affichage.png",
  "rectangle-to-circle": "/affichage/rectongle-to-circle-affichage.png",
  "circle-to-rectangle": "/affichage/circle-to-rectongle-affichage.png",
  "rectangle-to-rectangle": "/affichage/rectongle-to-rectongle-affichage.png",
  "rectangle-to-circle-ecc": "/affichage/rectongle-to-cercle-ecc-affichage.png",
  "pants-2": "/affichage/pants2-affichage.png",
  "tee-eccentric": "/affichage/tee-eccentric-affichage.png",
  pyramid: "/affichage/piramid-affichage.png",
  // Add other shapes that match the default pattern
  cone: "/affichage/cone-affichage.png",
  "offset-cone": "/affichage/offset-cone-affichage.png",
  "frustum-cone": "/affichage/frustum-cone-affichage.png",
  "frustum-cone-triangulation": "/affichage/frustum-cone-triangulation-affichage.png",
  "frustum-ecc-paral": "/affichage/frustum-ecc-paral-affichage.png",
  "frustum-ecc-angle": "/affichage/frustum-ecc-angle-affichage.png",
  bend: "/affichage/bend-affichage.png",
  pants: "/affichage/pants-affichage.png",
  "pants-ecc": "/affichage/pants-ecc-affichage.png",
  breeches: "/affichage/breeches-affichage.png",
  tee: "/affichage/tee-affichage.png",
  "tee-on-cone": "/affichage/tee-on-cone-affichage.png",
  "offset-tee": "/affichage/offset-tee-affichage.png",
  "tee-on-bend": "/affichage/tee-on-bend-affichage.png",
  auger: "/affichage/auger-affichage.png",
  sphere: "/affichage/sphere-affichage.png",
  flange: "/affichage/flange-affichage.png",
};

/* -----------------------------------------------
   🔹 SHAPE TITLES & DESCRIPTIONS (custom per slug)
------------------------------------------------- */
const shapeMeta: Record<string, { title: string; description: string }> = {
  cone: {
    title: "Cone",
    description:
      "A sheet metal cone is a conical structure crafted from a flat sheet of metal. It is commonly used in various industrial applications, including ductwork, funnels, and hoppers. The manufacturing process involves cutting a precise, sector-shaped piece of metal, which is then rolled and joined to form the cone shape. This process can be achieved through welding, riveting, or other joining methods. Sheet metal cones are valued for their versatility, strength, and durability. They can be made from aluminum, stainless steel, or galvanized steel, each offering specific advantages like corrosion resistance or lightweight properties. Cones are essential in HVAC systems, ventilation, and material transport, and their sheet metal can be generated accurately for laser cutting and DXF fabrication.",
  },

  "offset-cone": {
    title: "Offset Cone",
    description:
      "An offset cone, also called an eccentric cone, is a sheet metal shape where the apex is shifted from the centerline. This geometry is used for transitions between pipes or ducts with misaligned axes. The sheet metal is developed by projecting the eccentric profile, allowing accurate cutting and bending during fabrication. Offset cones are widely used in ventilation ducts, exhaust systems, and process piping. They can be produced from mild steel, stainless steel, or aluminum, and are ideal for applications requiring smooth airflow transitions with minimal turbulence.",
  },

  "frustum-cone": {
    title: "Frustum Cone",
    description:
      "A frustum cone, also known as a truncated cone, is created by cutting the top of a cone parallel to its base. It is one of the most common shapes in sheet metal fabrication, used for hoppers, reducers, nozzles, and dust collectors. The sheet metal of a truncated cone is a sector of an annulus calculated from the large and small diameters and the cone height or angle. This development is essential in DXF sheet metal design for accurate laser cutting, ensuring perfect fit-up during assembly or welding.",
  },

  "frustum-cone-triangulation": {
    title: "Frustum Cone (Triangulation)",
    description:
      "A frustum cone developed through triangulation offers superior accuracy in fabrication. The surface is divided into small triangles to precisely calculate each segment’s true length. This method is used for complex cones or when exact curvature is required in large industrial ducts or architectural elements. It provides detailed DXF layouts for laser cutting, improving assembly precision and minimizing welding distortion in sheet metal fabrication.",
  },

  "frustum-ecc-paral": {
    title: "Frustum Eccentric (Parallel)",
    description:
      "A parallel eccentric frustum cone connects two circular sections of different diameters with parallel but offset axes. It is used for ducts, reducers, and pipeline transitions where centers are misaligned but parallel. The sheet metal is derived using geometric projection methods to achieve an accurate layout. This type of sheet metal part is widely employed in industrial ventilation, energy plants, and process industries, ensuring smooth flow with minimal pressure loss.",
  },

  "frustum-ecc-angle": {
    title: "Frustum Eccentric (Angular)",
    description:
      "An angular eccentric frustum is a truncated cone where the branch or outlet is angled relative to the main axis. It is often used in piping systems and HVAC branches where angular transitions are required. The sheet metal pattern is calculated based on the offset angle, providing a precise DXF development for fabrication. This shape is particularly useful in constrained layouts or custom ducting where direction changes are integrated within the reducer component.",
  },

  "truncated-cylinder": {
    title: "Truncated Cylinder",
    description:
      "A truncated cylinder is a cylindrical section cut by an oblique plane. Its sheet metal represents the true shape of the slanted surface, used in tanks, chimneys, and pressure vessels. By providing the cylinder diameter, height, and cut angle, fabricators can generate an accurate DXF layout for laser or plasma cutting. Truncated cylinders are essential in architectural metalwork and industrial duct transitions requiring smooth directional flow or inclined joints.",
  },

  bend: {
    title: "Bend (Elbow)",
    description:
      "A sheet metal elbow or bend is formed by connecting a series of cylindrical segments to achieve a desired bend angle and radius. This shape is essential in ducting, piping, and exhaust systems where smooth direction changes are needed. The sheet metal is developed by dividing the bend into equal segments and projecting each profile. Accurate DXF layouts ensure easy fabrication and assembly of elbows in steel, stainless steel, or aluminum.",
  },

  "rectangle-to-circle": {
    title: "Rectangle → Circle",
    description:
      "The rectangle-to-circle transition connects a rectangular duct to a circular pipe. It is widely used in HVAC systems, industrial ventilation, and exhaust lines. The sheet metal is created by interpolating between the rectangle and circle profiles, ensuring a smooth transformation. This component reduces airflow turbulence and improves efficiency. Fabricators can generate accurate DXF developments for laser cutting and assembly alignment.",
  },

  "circle-to-rectangle": {
    title: "Circle → Rectangle",
    description:
      "A circle-to-rectangle transition is the reverse of the rectangle-to-circle, used to connect circular pipes to rectangular ducts. It is vital in HVAC design, dust collection systems, and material conveyors. The shape is calculated to maintain equal surface area and smooth airflow. Its DXF sheet metal provides precision during laser cutting, bending, and welding of sheet metal parts.",
  },

  "rectangle-to-rectangle": {
    title: "Rectangle → Rectangle",
    description:
      "A rectangular transition connects two rectangular sections of different dimensions or orientations. It is used in ductwork and hoppers where inlet and outlet sizes vary. The sheet metal pattern is generated by unfolding the four connecting faces based on width, height, and length parameters. The DXF output ensures exact fit during fabrication and reduces waste in laser cutting operations.",
  },

  "rectangle-to-circle-ecc": {
    title: "Rectangle → Circle (Eccentric)",
    description:
      "An eccentric rectangle-to-circle transition features a circular outlet offset from the rectangle’s center. This geometry is used in systems where the circular duct does not align with the rectangular inlet. It requires precise development using projection techniques to maintain a smooth transition. DXF sheet metals allow manufacturers to cut, roll, and weld the parts with high accuracy.",
  },

  pants: {
    title: "Y-Branch (Pants)",
    description:
      "A Y-branch, also called a pants fitting, connects one main duct or pipe into two equal branches at a specified angle. Common in air distribution and exhaust systems, it ensures balanced flow and minimal resistance. The sheet metal is computed by intersecting cylindrical surfaces and flattening the development for DXF export. Made from galvanized steel, stainless steel, or aluminum, Y-branches are crucial in HVAC and industrial ventilation networks.",
  },

  "pants-ecc": {
    title: "Y-Branch Eccentric",
    description:
      "An eccentric Y-branch divides a main pipe into two branches with offset or unequal centerlines. This configuration allows for custom duct routing or flow optimization. The sheet metal layout involves complex intersection geometry, triangulated to create accurate DXF developments. Used in dust extraction systems, process plants, and industrial exhausts, it provides smooth flow transitions with minimal pressure loss.",
  },

  "pants-2": {
    title: "Y-Branch 2 (Asymmetric)",
    description:
      "An asymmetric Y-branch connects one main inlet to two outlets with different diameters or unequal angles. This shape is often required in custom duct installations or process piping systems. Its triangulated sheet metal ensures precision during fabrication, minimizing fit-up errors and welding adjustments. The DXF development enables accurate cutting, saving time and material during production.",
  },

  breeches: {
    title: "Double Y (Breeches)",
    description:
      "A breeches piece, or double Y-branch, connects a single inlet to two symmetric or asymmetric outlets. Common in HVAC, dust collection, and ventilation, it divides airflow evenly between two paths. The sheet metal sheet metal is developed by combining two Y-branches into one model. DXF layouts help manufacturers achieve consistent accuracy for laser cutting and assembly.",
  },

  tee: {
    title: "Tee",
    description:
      "A tee fitting connects a branch pipe at a right angle to the main pipe. It is widely used in HVAC, water distribution, and process piping. The sheet metal development involves calculating the intersection curve between two cylinders. The resulting DXF sheet metal provides an accurate template for laser cutting, ensuring perfect joint alignment during welding or assembly.",
  },

  "tee-eccentric": {
    title: "Tee Eccentric",
    description:
      "An eccentric tee is similar to a standard tee but with the branch offset from the main pipe’s centerline. This configuration allows for smoother flow or alignment with existing duct layouts. The sheet metal is generated from the true intersection curve, providing a precise DXF for fabrication. Ideal for exhaust, ventilation, and fluid systems requiring non-symmetric connections.",
  },

  "tee-on-cone": {
    title: "Tee on Cone",
    description:
      "A tee on cone represents a cylindrical branch intersecting a conical surface. It is used in hoppers, cyclone separators, and dust extraction units. The intersection curve is geometrically complex and requires triangulated development to generate an accurate DXF pattern. This shape is critical in custom metal fabrication where precision fit and weld quality are essential.",
  },

  "offset-tee": {
    title: "Offset Tee",
    description:
      "An offset tee connects a branch pipe to a main pipe with both angular and parallel offsets. It allows flexible routing in constrained environments. The sheet metal is produced using triangulated projections to capture the true surface geometry. Offset tees are common in chemical plants, refineries, and ventilation systems where space optimization and fluid dynamics matter.",
  },

  "tee-on-bend": {
    title: "Tee on Bend",
    description:
      "A tee on bend connects a branch pipe onto a curved elbow section. It is a challenging geometry involving double curvature. The DXF sheet metal is calculated through triangulation and projection techniques to maintain precise intersection fit. Used in high-performance piping, ventilation, and exhaust systems, this shape ensures seamless connections and efficient fabrication.",
  },

  pyramid: {
    title: "Pyramid",
    description:
      "A sheet metal pyramid is a four-sided tapered structure with a square or rectangular base. It is commonly used in architectural cladding, hoppers, and decorative metalwork. The sheet metal consists of four triangular faces unfolded from the apex. DXF layouts allow for precision cutting and easy assembly by welding or bending, making pyramids a versatile component in fabrication and design.",
  },

  auger: {
    title: "Auger (Helix)",
    description:
      "An auger or helical flight is a spiral blade used in conveyors, feeders, and mixers. The sheet metal sheet metal is generated from the outer and inner diameters, pitch, and number of turns. Augers are critical in material handling systems for transporting powders, grains, or liquids. Accurate DXF layouts simplify fabrication, ensuring consistent pitch and smooth performance.",
  },

  sphere: {
    title: "Sphere",
    description:
      "A sphere in sheet metal is developed into multiple gores or petal-shaped segments that form a full spherical surface when assembled. This design is used for decorative domes, tanks, and artistic sculptures. The sheet metal of each gore is calculated based on the sphere’s diameter and number of divisions. DXF developments enable high precision in cutting and forming operations for architectural and industrial use.",
  },

  flange: {
    title: "Flange",
    description:
      "A sheet metal flange is a circular component featuring an inner and outer diameter with evenly spaced bolt holes. It serves as a connection element between pipes, valves, or equipment. The sheet metal layout is defined by the bolt circle diameter, hole size, and number of holes. Flanges are typically made from stainless steel, aluminum, or carbon steel and are essential in mechanical, plumbing, and industrial fabrication. The DXF pattern ensures precise drilling and cutting for perfect assembly fit.",
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
        `Generate a sheet metal for ${pretty.toLowerCase()}. Enter dimensions and export DXF in seconds.`,
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
  const affichageImageSrc = shapeAffichageImages[slug] || `/affichage/${slug}-affichage.png`;
  const meta = shapeMeta[slug] || { title: slug, description: "" };

  return (
    <ClientShapePage slug={slug} fields={fields} imageSrc={imageSrc} techImageSrc={techImageSrc} affichageImageSrc={affichageImageSrc} title={meta.title} description={meta.description} />
  );
}
