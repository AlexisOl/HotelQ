import React from "react";

const Elementos: number[] = [1, 2, 3, 4, 5, 6, 7];

function Habitaciones() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Elementos.map((valor: number) => (
        <div className="card bg-base-100 w-96 shadow-xl" key={valor}>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Habitación {valor}</h2>
            <p>Descripción de la habitación {valor}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Habitaciones;
