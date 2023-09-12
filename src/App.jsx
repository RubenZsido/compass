import "./App.css";

import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import CopyPage from "./pages/CopyGenerationPage/CopyPage";
import ImagePage from "./pages/ImageGenerationPage/ImagePage";
import { RecoilRoot } from "recoil";
import WebPage from "./pages/WebGenerationPage/WebPage";
import AdPostPage from "./pages/AdPostPage/AdPostPage";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <RecoilRoot>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/copy" element={<CopyPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/web" element={<WebPage />} />
        <Route path="/adpost" element={<AdPostPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
