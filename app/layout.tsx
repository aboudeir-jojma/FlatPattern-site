import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export const metadata = {
  title: "Sheet Metal – Générateur de patrons plats DXF pour tôlerie",
  description:
    "Outil en ligne pour créer et télécharger des patrons plats DXF pour cônes, tronc de cônes, cylindres, coudes, flasques, et autres formes de tôlerie.",
  keywords:
    "sheet metal, développé tôle, générateur DXF, découpe laser, chaudronnerie, cône, tronc de cône, pyramide, rectangle, transition, pliage tôle, dxf en ligne, sheet metal development, flat pattern generator, flat pattern calculator, sheet metal calculator, DXF generator online, DXF generator, sheet metal layout, sheet metal pattern development, flat pattern software, flat pattern app, sheet metal design software, LogiTRACE alternative, online sheet metal software, metal fabrication calculator, sheet metal DXF generator, unfold 3D to 2D sheet, cone development calculator, frustum cone layout generator, pyramid pattern generator, offset cone DXF generator, truncated cone development, elbow development tool, flange DXF generator, plate development drawing, HVAC duct development, sheet metal transition, Y-piece DXF generator, rectangle to round transition, eccentric cone development, truncated cylinder DXF, duct fitting pattern, transition duct DXF, 3D to DXF conversion, laser cutting pattern, CAD DXF generator, CNC cutting layout, sheet metal thickness chart, fabrication drawing generator, 2D pattern projection, sheet metal unfold, sheet metal bend allowance, K-factor calculator, bend deduction calculator, develop length calculation, sheet metal unfolding software, sheet metal transition calculator, sheet metal bend radius, sheet metal fabrication, metal fabrication, laser cutting, plasma cutting, waterjet cutting, metal forming, sheet metal forming, industrial sheet metal, boiler fabrication, pressure vessel development, custom metal fabrication, fabrication software, sheet metal engineering, HVAC fabrication software, industrial metal design, online CAD DXF generator, free sheet metal software, flat pattern online, DXF maker online, web-based metal calculator, sheet metal pattern designer, interactive DXF generator, instant DXF file download, browser-based CAD tool, 3D shape to DXF flat pattern, generate DXF online free, metal cutting DXF generator, sheet metal develop software, sheet metal CAD drawing, sheet metal pattern unfold, sheet metal tool online, metal fabrication design tool, sheet metal flange layout, free DXF generator for laser cutting, how to generate DXF flat pattern online, best LogiTRACE alternative, sheet metal layout generator, free sheet metal layout generator, how to calculate sheet metal cone, sheet metal workshop tool, sheet metal transition designer, DXF generator without installation, sheet metal fabrication tool online, flat pattern DXF software, sheet metal cone DXF, sheet metal pyramid DXF, sheet metal elbow DXF, sheet metal flange DXF, sheet metal offset cone DXF, rectangle to round DXF, flat pattern duct generator, pipe fitting DXF generator, custom sheet metal development, sheet metal construction software, DXF pattern for fabrication, sheet metal drawing generator, industrial fabrication calculator, sheet metal designer app, flat pattern laser DXF, metal flat layout generator, developed length calculator, fabrication drawing tool, DXF generator for workshop, sheet metal 3D model to DXF, sheet metal projection software, sheet metal dimension calculator, sheet metal designer online, sheet metal parts development, sheet metal unfolding 3D model, CAD to DXF flattening tool, développement de tôlerie, générateur de patrons plats, calcul de patrons en tôle, générateur DXF en ligne, logiciel de découpe laser, calculateur de cône tronqué, développement de cône excentré, développement de tôle, générateur de patrons de tôle, logiciel LogiTRACE gratuit, générateur DXF automatique, outil de calcul tôlerie, logiciel de développement de tôle, générateur de patrons de découpe, application de découpe métal, générateur de formes 3D en 2D, fabrication de conduits HVAC, générateur de transition rectangle-rond, découpe industrielle de tôle, outil de développement de tôle en ligne, logiciel de tôlerie en ligne, calcul développement tôle, générateur DXF Maroc, tôlerie industrielle Maroc, application tôlerie en ligne Maroc, calcul tôle CNC Maroc, générateur de patrons Maroc, découpe laser Maroc, découpe et pliage au laser Casablanca, logiciel de tôlerie gratuit, calcul de développement de tôle Maroc, générateur de cônes en tôle, fabrication de cônes en tôle, développement de conduits en tôle, calcul longueur développée tôle, calcul facteur K tôle, calcul rayon de pliage tôle, générateur de plans DXF, convertisseur 3D vers 2D, dessin industriel tôlerie, générateur de dessins DXF, générateur de pièces en tôle, calcul de cône en tôle, outil de fabrication en tôle, calcul de tronc de cône, générateur de cône tronqué DXF, patron plat tôle inox, générateur de tôle aluminium, calcul de pliage de tôle, logiciel de découpe plasma, logiciel de découpe jet d’eau, logiciel fabrication métallique, outil développement industriel, générateur patrons plats industriels, outil calcul de tuyauterie, développement Y-piece tôle, transition tôle rectangulaire-circulaire, calcul développement conduit HVAC, développement de tuyauterie industrielle, outil 3D vers DXF tôle, logiciel calcul tôlerie en ligne, outil professionnel de découpe métal, calculateur LogiTRACE en ligne, générateur DXF automatique Maroc, outil de conception tôlerie gratuit, application DXF professionnelle, calculateur en ligne pour tôle, calculateur de cône en ligne, outil de fabrication 3D en 2D, générateur de plans pour découpe laser, outil industriel DXF en ligne, générateur de tôle excentrée, développement de tôle acier inoxydable, outil de conception pour la tôlerie, calculateur de développement en ligne, calcul de tronc de cône tôle, calcul de pyramide en tôle, calcul de cylindre tronqué tôle, outil de projection tôle, générateur de plans de fabrication métal, convertisseur CAD vers DXF, générateur automatique de fichier DXF, calculateur de découpe industrielle, outil en ligne pour patrons plats, générateur dxf gratuit maroc, outil de tôlerie web, fabrication industrielle de tôle, calcul de surface de tôle, logiciel de calcul de tôlerie 3D, outil en ligne pour pliage tôle, calculateur pour découpe laser Maroc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KS2LXSBCS7"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KS2LXSBCS7');
            `,
          }}
        />
      </head>
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
