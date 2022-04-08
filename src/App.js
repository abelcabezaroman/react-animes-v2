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

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // const name = "Abel";
  // const profe = {name}
  // const profe = {name: name}
  return (
    <Router>
      <Menu />

      <div className="mt-5 container">
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
          <Loading />

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
