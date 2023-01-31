import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import NavbarModel from "./NavbarModel";
import Footer from "./Footer";
import Outra from "../pages/Outra";
import Serviços from "../pages/Serviços";
import Consultoria from "../pages/Consultoria";
import Pesquisa from "../pages/Pesquisa";

function App() {
  return (
    <div>
      <NavbarModel />
      <div className="cover-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/outra" element={<Outra />} />
          <Route path="/serviços" element={<Serviços />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
