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
        <form className="space-y-4">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Nombre" required />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow" placeholder="Email" required />
          </label>
          {/* <label className="input input-bordered flex items-center gap-2">
            <textarea
              className="textarea textarea-bordered w-1/2 h-32 p-2"
              placeholder="Bio"
            ></textarea>
          </label> */}

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Principal;
