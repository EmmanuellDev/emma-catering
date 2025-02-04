import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import PageTransition from "./components/PageTransition";
import Loader from "./components/Loader";
import Ch from "../src/pages/Ch"

const AnimatedRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // Adjust as needed
  };

  return (
    <>
    {loading && <Loader onComplete={() => setLoading(false)} />}
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname} onChange={handleLoading}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Service /></PageTransition>} />
        <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
