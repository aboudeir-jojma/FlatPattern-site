"use client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState } from "react";

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Loading Google Maps...</div>;
    case Status.FAILURE:
      return <div className="h-64 bg-red-100 rounded-lg flex items-center justify-center text-red-600">Error loading map</div>;
    case Status.SUCCESS:
      return <MyMapComponent />;
  }
};

function MyMapComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center: { lat: 33.5928, lng: -7.6158 }, // Jojma Group coordinates
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      // Add marker
      const marker = new google.maps.Marker({
        position: { lat: 33.5928, lng: -7.6158 },
        map: newMap,
        title: "Jojma Group",
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="text-align: center; font-family: Arial, sans-serif;">
            <strong>Jojma Group</strong><br />
            134 Rue Assouane<br />
            Casablanca 20250, Maroc<br />
            <a href="https://www.google.com/maps/dir/?api=1&destination=33.5928,-7.6158"
               target="_blank"
               style="color: #2563eb; text-decoration: underline; font-size: 14px;">
              Obtenir l'itinéraire
            </a>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(newMap, marker);
      });

      setMap(newMap);
    }
  }, [ref, map]);

  return <div ref={ref} className="h-64 w-full rounded-lg" />;
}

const MapComponent = () => {
  return (
    <div className="h-64 w-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.9150321147856!2d-7.597825141139225!3d33.58376122739201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd75571e498f%3A0xa52c7f9d9aa67a13!2sJOJMA!5e0!3m2!1sfr!2sma!4v1761045214182!5m2!1sfr!2sma"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default MapComponent;
