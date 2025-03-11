import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtGallery from "./components/ArtGallery";
import BrushContainer from "./components/BrushContainer";
import "./App.css";

export default function App() {
  return (
    <Router basename="/ArtGaleryVite">
      <Routes>
        <Route path="/" element={<ArtGallery />} />
        <Route path="/about" element={<BrushContainer />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}
