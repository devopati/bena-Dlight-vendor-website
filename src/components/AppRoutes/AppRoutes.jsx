import React from "react";
import { Route, Routes } from "react-router";
import MobilePage from "../../Pages/MobilePage/MobilePage";
import MobileProduct from "../../Pages/MobileProduct/MobileProduct";
import SolarPage from "../../Pages/SolarPage/SolarPage";
import Home from "../HomePage/Home";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import SolarProduct from "../SolarProduct/SolarProduct";

const AppRoutes = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/mobile/:name/:prodId" element={<MobileProduct />} />
        <Route path="/solar" element={<SolarPage />} />
        <Route path="/solar/:brand/:solarId" element={<SolarProduct />} />
      </Routes>
    </ScrollToTop>
  );
};

export default AppRoutes;
