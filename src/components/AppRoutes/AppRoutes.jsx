import React from "react";
import { Route, Routes } from "react-router";
import About from "../../Pages/AboutPage/About";
import MobilePage from "../../Pages/MobilePage/MobilePage";
import MobileProduct from "../../Pages/MobileProduct/MobileProduct";
import SolarPage from "../../Pages/SolarPage/SolarPage";
import Home from "../HomePage/Home";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import SolarProduct from "../SolarProduct/SolarProduct";
import Contact from "../../Pages/ContactPage/Contact";

const AppRoutes = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/mobile/:name/:prodId" element={<MobileProduct />} />
        <Route path="/solar" element={<SolarPage />} />
        <Route path="/solar/:brand/:solarId" element={<SolarProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ScrollToTop>
  );
};

export default AppRoutes;
