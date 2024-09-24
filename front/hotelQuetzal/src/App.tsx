import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Principal from "./paginas/Principal";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import VistaImagenes from "./utils/VistaImagenes";
import Ubicacione from "./utils/Ubicacione";
function App() {
  return (
    <>
      <Header />
      <VistaImagenes />
      <Principal />
      <Ubicacione />
      <Footer />
    </>
  );
}

export default App;
