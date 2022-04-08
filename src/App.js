import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AnimesPage from "./pages/AnimesPage/AnimesPage";
import AnimesDetailPage from "./pages/AnimesDetailPage/AnimesDetailPage";
import Menu from "./components/Menu/Menu";
import ContactPage from "./pages/ContactPage/ContactPage";
import { LoadingContext } from "./contexts/LoadingContext";
import Loading from "./components/Loading/Loading";
import { useState } from "react";
import BackgroundPlayer from "./components/BackgroundPlayer/BackgroundPlayer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <Menu />
      <Loading isLoading={isLoading} />

      <div className="mt-5 container">
        <LoadingContext.Provider value={{ setIsLoading }}>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/animes" element={<AnimesPage />} />
            <Route path="/animes/:idAnime" element={<AnimesDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </LoadingContext.Provider>
      </div>
    </Router>
  );
}

export default App;
