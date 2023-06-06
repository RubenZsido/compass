import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import CopyPage from "./components/CopyGenerationPage/CopyPage";
import ImagePage from "./components/ImageGenerationPage/ImagePage";
function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/copy">Copy Generator</Link>
          </li>
          <li>
            <Link to="/image">Image Generator</Link>
          </li>
          <li>
            <Link to="/web">Website Generator</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/copy" element={<CopyPage />} />
        <Route path="/image" element={<ImagePage />} />
      </Routes>
    </>
  );
}
export default App;
