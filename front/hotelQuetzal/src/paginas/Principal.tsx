import React from "react";
import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { MdLocalLaundryService } from "react-icons/md";

function Principal() {
  return (
    <div className="max-w-[1200px] mx-auto mt-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            className="w-full h-full rounded-lg shadow-md object-cover"
            src="https://storage.googleapis.com/imageneshotel/img/imagenesPasado/img7.png"
            alt="Descripción de la imagen"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          <ul className="list-disc pl-5">
            <li className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-xl">Servicio de hospedaje</span>
            </li>
            <li className="flex items-center mb-2">
              <IoIosBed className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl">Habitaciones cómodas</span>
            </li>
            <li className="flex items-center mb-2">
              <FaShower className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl">Agua caliente</span>
            </li>
            <li className="flex items-center mb-2">
              <FaWifi className="h-6 w-6 text-primary mr-2" />

              <span className="text-xl">Servicio de internet</span>
            </li>
            <li className="flex items-center mb-2">
              <TbToolsKitchen2 className="h-6 w-6 text-primary mr-2" />

              <span className="text-xl">Cocina</span>
            </li>
            <li className="flex items-center mb-2">
              <MdLocalLaundryService className="h-6 w-6 text-primary mr-2" />

              <span className="text-xl">Lavanderia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Formulario de Contacto</h2>
        <div className="w-full p-6 bg-white bg-opacity-80 rounded-lg mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Deja tu comentario
          </h2>
          <hr className="w-20 h-1 mx-auto my-4 bg-gray-800 border-0 rounded" />

          {/* Formulario de comentario */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tu nombre
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Escribe tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tu comentario
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Escribe tu comentario aquí"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Calificación
              </label>
              <select className="select select-bordered w-full">
                <option value="5">5 estrellas - Excelente</option>
                <option value="4">4 estrellas - Muy bueno</option>
                <option value="3">3 estrellas - Bueno</option>
                <option value="2">2 estrellas - Regular</option>
                <option value="1">1 estrella - Malo</option>
              </select>
            </div>

            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full">
              Enviar comentario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Principal;
