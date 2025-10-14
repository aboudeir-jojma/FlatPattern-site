import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export const metadata = {
  title: "Flat Pattern – Générateur de patrons plats DXF pour tôlerie",
  description:
    "Outil en ligne pour créer et télécharger des patrons plats DXF pour cônes, tronc de cônes, cylindres, coudes, flasques, et autres formes de tôlerie.",
  keywords:
    "flat pattern, développé tôle, générateur DXF, découpe laser, chaudronnerie, cône, tronc de cône, pyramide, rectangle, transition, pliage tôle, dxf en ligne",
};
// ✅ on définit le type de props pour le layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
