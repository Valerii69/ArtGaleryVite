import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtGallery from "./components/ArtGallery";
import BrushContainer from "./components/BrushContainer";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <Router basename="/ArtGaleryVite">
      <Routes>
        <Route path="/" element={<ArtGallery />} />
        <Route path="/brush" element={<BrushContainer />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}
