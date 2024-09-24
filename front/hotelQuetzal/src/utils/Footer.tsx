import React from "react";

function Footer() {
  return (
    <footer className="footer p-10 bg-emerald-500 text-primary-content">
      <div>
        <h2 className="font-bold text-xl">Hotel del Quetzal</h2>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
      <div>
        <span className="footer-title">Redes Sociales</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Instagram
          </a>
        </div>
      </div>
      <div>
        <span className="footer-title">Contacto</span>
        <a className="link link-hover" href="mailto:info@hoteldelquetzal.com">
          info@hoteldelquetzal.com
        </a>
        <p>Teléfono: +502 1234-5678</p>
      </div>
    </footer>
  );
}

export default Footer;
