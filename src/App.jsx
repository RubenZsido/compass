import "./App.css";

import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import CopyPage from "./pages/CopyGenerationPage/CopyPage";
import ImagePage from "./pages/ImageGenerationPage/ImagePage";
import { RecoilRoot } from "recoil";
import WebPage from "./pages/WebGenerationPage/WebPage";
import AdPostPage from "./pages/AdPostPage/AdPostPage";
import Navbar from "./components/Navbar/Navbar";
import QuickGenPage from "./pages/QuickGeneratePage/QuickGenPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import GeneratePage from "./pages/Generate/GeneratePage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d97059",
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: "#E0C2FF",
        light: "#F5EBFF",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#47008F",
      },
    },
  });
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/copy" element={<CopyPage />} />
          <Route path="/image" element={<ImagePage />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/adpost" element={<AdPostPage />} />
          <Route path="/quickGen" element={<QuickGenPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
