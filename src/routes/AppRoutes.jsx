import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
