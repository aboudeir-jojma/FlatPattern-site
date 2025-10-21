"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Loading map...</div>
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage("This is a demo form. Messages are not sent in the static version.");
    setMessageType("error");
  };

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

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Section: Info */}
          <div className="text-start">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 mb-8 text-left">
  <div className="flex items-center justify-start gap-3">
    <Mail className="text-orange-500 w-6 h-6" />
    <a
      href="mailto:contact@sheetmetaldevelopment.com"
      className="text-gray-800 hover:text-orange-500 transition font-bold text-lg"
    >
      contact@sheetmetaldevelopment.com
    </a>
  </div>

  <div className="flex items-center justify-start gap-3">
    <Phone className="text-orange-500 w-6 h-6" />
    <span className="text-gray-800 font-bold text-lg">
      +212 7 72 88 83 09
    </span>
  </div>

  <div className="flex items-center justify-start gap-3">
    <MapPin className="text-orange-500 w-6 h-6" />
    <span className="text-gray-800 font-bold text-lg">
      134 Rue Assouane, Casablanca 20250, Maroc
    </span>
  </div>
</div>

          </div>

          {/* Right Section: Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">
                Send us a message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1 text-sm font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 text-sm font-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 text-sm font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your project or need..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md flex justify-center items-center gap-2 hover:bg-orange-600 transition text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                {submitMessage && (
                  <p className={`mt-2 text-sm text-center ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
