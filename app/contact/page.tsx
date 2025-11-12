"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Loading map...</div>
});

export default function ContactPage() {

  return (
    <section className="min-h-screen bg-white text-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-500 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Do you have a sheet metal cutting, design, or manufacturing project?
            We are here to assist you with your calculations, DXF files, and prototypes.
          </p>
        </div>

        {/* Map Section - First */}
        <div className="mb-12">

          <div className="max-w-8xl  mx-auto bg-gray-50 rounded-xl shadow-lg border border-gray-200 p-2">
            <MapComponent />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            134 Rue Assouane, Casablanca 20250 - Click on the map to see more details
          </p>
        </div>

        {/* Contact Info Section */}
        <section className="mt-16 bg-gradient-to-b from-slate-900 to-slate-800/80 border border-gray-200 rounded-3xl p-12 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Have Questions?</h2>
          <p className="text-lg mb-8 text-white">
            We're here to help with any privacy concerns or inquiries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📧</div>
              <div className="text-left">
                <p className="font-semibold text-white">Email Us</p>
                <a
                  href="mailto:contact@sheetmetaldevelopment.com"
                  className="text-white underline-offset-4 hover:underline"
                >
                  contact@sheetmetaldevelopment.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">🌐</div>
              <div className="text-left">
                <p className="font-semibold text-white">Visit Our Site</p>
                <a
                  href="https://sheetmetaldevelopment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline-offset-4 hover:underline"
                >
                  sheetmetaldevelopment.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">📞</div>
              <div className="text-left">
                <p className="font-semibold text-white">Call Us</p>
                <a
                  href="tel:+212772888309"
                  className="text-white underline-offset-4 hover:underline"
                >
                  +212 7 72 88 83 09
                </a>
              </div>
            </div>
          </div>
        </section>


        
      </div>
    </section>
  );
}
