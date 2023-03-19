import React from "react";
import { Route, Routes } from "react-router";
import MobilePage from "../../Pages/MobilePage/MobilePage";
import MobileProduct from "../../Pages/MobileProduct/MobileProduct";
import Home from "../HomePage/Home";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const AppRoutes = () => {
  return (
    <Routes>
      <ScrollToTop>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/mobile/:nokiaId" element={<MobileProduct />} />
      </ScrollToTop>
    </Routes>
  );
};

export default AppRoutes;
