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
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-2/3 p-4">
        <div className="w-2/3 mr-10">
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
        <div className="w-1/3 p-4 flex flex-col items-center">
          <h2 className="text-xl font-bold">Información del Hotel</h2>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-800 border-0 rounded md:my-10 dark:bg-gray-800" />
          <p>
            Nos econtramos ubicados en el centro historico de Quetzalantenango,
            Guatemala.
          </p>
          <p>La direccion es 13 avenida 3-27 zona 1, a </p>
        </div>
      </div>
    </div>
  );
}

export default Ubicacione;
