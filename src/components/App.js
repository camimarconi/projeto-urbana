import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import NavbarModel from "./NavbarModel";
import Outra from "../pages/Outra";
import Serviços from "../pages/Serviços";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
