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
              <Principal />
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
            </div>
          }
        />
        <Route
          path={"/habitaciones"}
          element={
            <div>
              <Header />

              <Habitaciones />
            </div>
          }
        />
        <Route
          path={"/galeria"}
          element={
            <div>
              <Header />

              <Galeria />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
