import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import CopyPage from "./components/CopyGenerationPage/CopyPage";
import ImagePage from "./components/ImageGenerationPage/ImagePage";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import WebPage from "./components/WebGenerationPage/WebPage";
import Navbar from "./components/Navbar/Navbar";
import AdPostPage from "./components/AdPostPage/AdPostPage";

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
