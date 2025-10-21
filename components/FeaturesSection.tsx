import React from "react";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-4/5 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-800/80 border border-slate-800 rounded-2xl p-10 text-center text-slate-200 flex flex-col items-center justify-center gap-4 min-h-[280px]">
          <div className="text-5xl">🌐</div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">100% online</h3>
          <p className="max-w-[36ch] opacity-90">Generate sheet metals directly in your browser. No installs.</p>
        </div>
        <div className="bg-gradient-to-b from-slate-900 to-slate-800/80 border border-slate-800 rounded-2xl p-10 text-center text-slate-200 flex flex-col items-center justify-center gap-4 min-h-[280px]">
          <div className="text-5xl">⬇️</div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Download DXF files</h3>
          <p className="max-w-[38ch] opacity-90">Use DXF for laser cutting or further CAD editing.</p>
        </div>
        <div className="bg-gradient-to-b from-slate-900 to-slate-800/80 border border-slate-800 rounded-2xl p-10 text-center text-slate-200 flex flex-col items-center justify-center gap-4 min-h-[280px]">
          <div className="text-5xl">⚡</div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready within seconds</h3>
          <p className="max-w-[36ch] opacity-90">Get results fast after entering your parameters.</p>
        </div>
        <div className="bg-gradient-to-b from-slate-900 to-slate-800/80 border border-slate-800 rounded-2xl p-10 text-center text-slate-200 flex flex-col items-center justify-center gap-4 min-h-[280px]">
          <div className="text-5xl">🛠️</div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Customize parameters</h3>
          <p className="max-w-[44ch] opacity-90">A preview of the sheet metal will be displayed once parameters are entered.</p>
        </div>
        <div className="bg-gradient-to-b from-slate-900 to-slate-800/80 border border-slate-800 rounded-2xl p-10 text-center text-slate-200 flex flex-col items-center justify-center gap-4 min-h-[280px]">
          <div className="text-5xl">🧩</div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">No CAD software required</h3>
          <p className="max-w-[38ch] opacity-90">Create patterns without complex desktop tools.</p>
        </div>
        <div className="bg-gradient-to-b from-slate-900 to-slate-800/80 border border-slate-800 rounded-2xl p-10 text-center text-slate-200 flex flex-col items-center justify-center gap-4 min-h-[280px]">
          <div className="text-5xl">👤</div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Subscribe now</h3>
          <p className="max-w-[44ch] opacity-90">Unlock more generators and features with membership.</p>
        </div>
      </div>
    </section>
  );
}


