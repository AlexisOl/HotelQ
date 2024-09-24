import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-between dow-lg p-4">
        <div className="navbar bg-emerald-500 text-primary-content rounded-box">
          <div className="flex-1 flex items-center">
            <img
              src="https://images.vexels.com/content/229291/preview/quetzal-guatemala-cut-out-b922bb.png"
              alt="Logo Quetzal"
              className="h-20 w-20 mr-2"
            />
            <Link to="/" className="btn btn-ghost text-xl">
              Hotel del Quetzal
            </Link>
          </div>
          <div className="flex-none">
            <ul className="flex space-x-6 mr-4">
              <li>
                <a
                  className="text-white hover:text-emerald-300"
                  href="\historia"
                >
                  Historia
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-emerald-300"
                  href="/habitaciones"
                >
                  Habitaciones
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-emerald-300"
                  href="/galeria"
                >
                  Galería
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Perfil</a>
                </li>
                <li>
                  <a>Configuracion</a>
                </li>
                <li>
                  <a>Cerrar Sesion</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
