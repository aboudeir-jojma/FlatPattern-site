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
        <div className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 p-6 mx-auto max-w-md">
          <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">
            Contact Information
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Ready to start your project? Contact us directly using the information below.
          </p>
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <Mail className="text-orange-500 w-6 h-6" />
              <a
                href="mailto:contact@sheetmetaldevelopment.com"
                className="text-gray-800 hover:text-orange-500 transition font-bold"
              >
                contact@sheetmetaldevelopment.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="text-orange-500 w-6 h-6" />
              <span className="text-gray-800 font-bold">
                +212 7 72 88 83 09
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-orange-500 w-6 h-6" />
              <span className="text-gray-800 font-bold">
                134 Rue Assouane, Casablanca 20250, Maroc
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
