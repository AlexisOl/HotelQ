import "./App.css";
import Principal from "./paginas/Principal";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import VistaImagenes from "./utils/VistaImagenes";
import Ubicacione from "./utils/Ubicacione";
import { Routes, Route } from "react-router-dom";
import Historia from "./paginas/Historia";
import Habitaciones from "./paginas/Habitaciones";
import Galeria from "./paginas/Galeria";
import Carusel from "./paginas/Comentarios";
import Comentarios from "./paginas/Comentarios";
import Contacto from "./paginas/Contacto";
function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Header />
              <VistaImagenes />
              <div className="divider mx-auto mt-15"></div>
              <Principal />
              <div className="divider"></div>
              <Comentarios />
              <div className="divider"></div>

              <Ubicacione />
              <Footer />
            </>
          }
        />
        <Route
          path={"/historia"}
          element={
            <div>
              <Header />

              <Historia />
              <Footer />
            </div>
          }
        />
        <Route
          path={"/habitaciones"}
          element={
            <div>
              <Header />

              <Habitaciones />
              <Footer />
            </div>
          }
        />
        <Route
          path={"/galeria"}
          element={
            <div>
              <Header />

              <Galeria />
              <Footer />
            </div>
          }
        />
        <Route
          path={"/contacto"}
          element={
            <div>
              <Header />

              <Contacto />
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
