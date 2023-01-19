import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "./Navbar";
import Outra from "../pages/Outra";

function App() {
  return (
    <div>
      <Navbar />
      <div className="cover-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/outra" element={<Outra />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
