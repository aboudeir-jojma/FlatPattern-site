import React from "react";

const inoxCards = [
  {
    title: "Cone – Simplicité et efficacité",
    description:
      "Générez instantanément le patron plat d’un cône complet à partir de vos dimensions. Idéal pour les applications en ventilation, tuyauterie ou chaudronnerie."
  },
  {
    title: "Bend – Coudes et segments de tube",
    description:
      "Développez des coudes multi-segments, parfaits pour les conduits d’air, tuyaux et installations industrielles."
  },


  {
    title: "Frustum Cone – Cône tronqué précis",
    description:
      "Créez des développés de cônes tronqués parfaits, adaptés aux jonctions, transitions ou embouts métalliques."
  },  {
    title: "Offset Cone – Ajustement asymétrique",
    description:
      "Nos algorithmes calculent les cônes décentrés avec une grande précision, utilisés pour les raccords complexes et les pièces d’assemblage personnalisées."
  },

];

export default function InoxSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-4/5 max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {inoxCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-b from-gray-50 to-white p-10 shadow-inner">
          <h2 className="text-4xl font-bold text-gray-900">
          Les Formes 3D que Nous Développons en Flat Patterns
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
          Chez Sheet Metal Development, nous transformons vos formes 3D complexes en patrons plats (flat patterns) prêts pour la découpe laser, le pliage CNC ou la fabrication industrielle.
Notre générateur calcule automatiquement le développement exact de chaque géométrie, qu’il s’agisse d’un cône, cylindre, coude, tronc ou pièce sur mesure.
Grâce à notre moteur basé sur la géométrie paramétrique, chaque fichier DXF est précis, optimisé et prêt pour la production.
          </p>
  
          <a
            href="#top"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gray-800 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-slate-300/60 transition hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
          >
            Choose Shape
          </a>
          </div>
        </div>
      </section>
    );
  }
