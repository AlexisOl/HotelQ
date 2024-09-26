import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

// Configuración del contenedor del mapa
const mapContainerStyle = {
  width: "800px",
  height: "400px",
};

// Coordenadas centrales
const center = {
  lat: 14.835840303354635, // Latitud
  lng: -91.5187169883897, // Longitud
};

function Ubicacione() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APIKEY,
  });

  // Mensaje de carga mientras se carga el mapa
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="relative w-full h-100">
      <img
        src="https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-25%20at%2011.17.16%20PM/WhatsApp%20Image%202024-09-25%20at%2011.16.47%20PM%20(1).jpeg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center flex w-full max-w-screen-xl p-4">
          {/* Contenedor del mapa */}
          <div className="w-2/3 p-4">
            <GoogleMap
              zoom={16}
              center={center}
              mapContainerStyle={mapContainerStyle}
            >
              <MarkerF
                onClick={() => console.log("my location")}
                position={center}
              />
            </GoogleMap>
          </div>

          <div className="w-1/3 p-6 bg-white bg-opacity-80 rounded-lg flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Información del Hotel</h2>
            <hr className="w-20 h-1 mx-auto my-2 bg-gray-800 border-0 rounded" />

            <p className="text-sm text-gray-700 mb-4">
              Nos encontramos ubicados en el centro histórico de Quetzaltenango,
              Guatemala.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              La dirección es 13 avenida 3-27 zona 1.
            </p>

            <p className="text-sm text-gray-700">Teléfono: +502 1234-5678</p>
            <p className="text-sm text-gray-700 mb-4">
              Correo: info@hotelquetzaltenango.com
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Horarios:</h3>
              <p className="text-sm text-gray-700">Check-in: 3:00 PM</p>
              <p className="text-sm text-gray-700">Check-out: 11:00 AM</p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Atracciones cercanas:
              </h3>
              <p className="text-sm text-gray-700">
                A solo 5 minutos del Parque Central de Quetzaltenango y 10
                minutos del Museo de Historia Natural.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ubicacione;
