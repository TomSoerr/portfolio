import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import ContactPage from "./components/ContactPage/ContactPage.js";
import ScrollToTop from "./components/Effects/ScrollToTop.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Nav from "./components/Nav/Nav.js";
import Projects from "./components/ProjectsPage/Projects.js";
import { useRef } from "react";

const RouteSwitch = () => {
  const navRef = useRef(null);
  const getNavHeight = () => {
    return navRef.current.clientHeight;
  };
  return (
    <HashRouter>
      <Nav navRef={navRef} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage navHeight={getNavHeight} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/projects"
          element={<Projects navHeight={getNavHeight} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
