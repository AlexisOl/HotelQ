import React from "react";

function Historia() {
  return (
    <div>
      <section className=" py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nuestra Historia
          </h2>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-lg leading-relaxed mb-6">
                Hotel del Quetzal fue fundado en el corazón de Quetzaltenango
                hace más de 50 años. Desde sus inicios, ha sido un símbolo de
                hospitalidad y excelencia en el servicio, proporcionando a
                nuestros huéspedes experiencias inolvidables en un entorno
                acogedor.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                La historia del hotel comenzó como un pequeño albergue familiar,
                pero con el tiempo y el esfuerzo, creció hasta convertirse en
                uno de los lugares más emblemáticos de la región. Cada rincón
                del hotel cuenta con historias de viajeros de todo el mundo que
                han dejado su huella.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <img
                className="w-full h-auto rounded-lg shadow-md"
                src="https://storage.googleapis.com/imageneshotel/img/imagenesPasado/img9.png"
                alt="Historia del hotel 1"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="col-span-12 lg:col-span-6 order-last lg:order-first">
              <img
                className="w-full h-auto rounded-lg shadow-md"
                src="https://storage.googleapis.com/imageneshotel/img/imagenesPasado/img8.png"
                alt="Historia del hotel 2"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <p className="text-lg leading-relaxed mb-6">
                Con el paso de los años, Hotel del Quetzal ha mantenido su
                esencia familiar, pero ha sabido adaptarse a los nuevos tiempos.
                Se han realizado varias renovaciones para modernizar las
                instalaciones sin perder el encanto original que tanto atrae a
                nuestros huéspedes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Desde los impresionantes jardines hasta nuestras cómodas
                habitaciones, cada detalle del hotel ha sido cuidadosamente
                diseñado para ofrecer a nuestros visitantes una experiencia
                única en medio de la naturaleza y la cultura de la región.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-lg leading-relaxed mb-6">
                Hoy en día, seguimos siendo el lugar favorito para los turistas
                que desean conocer Quetzaltenango y su maravillosa naturaleza.
                La combinación de confort moderno y tradición nos ha convertido
                en una opción inigualable.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Nos sentimos orgullosos de lo que hemos logrado y estamos
                emocionados por lo que depara el futuro, siempre manteniendo
                nuestra promesa de ofrecer lo mejor a nuestros huéspedes.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <img
                className="w-full h-80 rounded-lg shadow-md object-cover"
                src="https://storage.googleapis.com/imageneshotel/img/imagenesPasado/img1.png"
                alt="Historia del hotel 3"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="col-span-12 lg:col-span-3">
              <img
                className="w-full h-80 rounded-lg shadow-md object-cover"
                src="https://storage.googleapis.com/imageneshotel/img/imagenesPasado/img2.png"
                alt="Historia del hotel 3"
                width={"300px"}
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <img
                className="w-full h-80 rounded-lg shadow-md object-cover"
                src="https://storage.googleapis.com/imageneshotel/img/imagenesPasado/img4.png"
                alt="Historia del hotel 3"
                width={"300px"}
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <img
                className="w-full h-80 rounded-lg shadow-md object-cover"
                src="https://storage.googleapis.com/imageneshotel/img/imagenesPasado/img5.png"
                alt="Historia del hotel 3"
                width={"300px"}
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <img
                className="w-full h-80 rounded-lg shadow-md object-cover"
                src="https://storage.googleapis.com/imageneshotel/img/imagenesPasado/img6.png"
                alt="Historia del hotel 3"
                width={"300px"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Historia;
