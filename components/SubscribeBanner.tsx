import React from "react";

export default function SubscribeBanner() {
  return (
    <section
      className="relative w-full py-20"
      style={{ backgroundImage: "url('/view.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60"></div>

      <div className="relative w-4/5 mx-auto text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Make <span className="text-orange-500">sheet metals</span> in seconds
        </h2>
        <p className="max-w-3xl text-lg opacity-95 mb-8">
          Enter your dimensions, preview the technical drawing, and download a ready-to-cut DXF.
          Choose from cones, transitions, tees, bends and more.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-5 py-3 rounded-md hover:bg-orange-600"
        >
          Choose shape
        </a>
      </div>
    </section>
  );
}


