function Contacto() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <form className="bg-base-200 p-4 rounded-lg shadow-md">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Nombre</span>
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Tu email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Mensaje</span>
            </label>
            <textarea
              placeholder="Tu mensaje"
              className="textarea textarea-bordered"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Enviar
          </button>
        </form>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src="https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-25%20at%2011.17.16%20PM/WhatsApp%20Image%202024-09-25%20at%2011.16.47%20PM%20(4).jpeg" // Reemplaza con la URL de tu imagen
          alt="Imagen de contacto"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Contacto;
