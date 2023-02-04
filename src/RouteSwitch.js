import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage/ContactPage.js";
import ScrollToTop from "./components/Effects/ScrollToTop.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Nav from "./components/Nav/Nav.js";
import Projects from "./components/ProjectsPage/Projects.js";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
