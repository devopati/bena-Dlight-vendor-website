import React from "react";
import { Route, Routes } from "react-router";
import MobilePage from "../../Pages/MobilePage/MobilePage";
import MobileProduct from "../../Pages/MobileProduct/MobileProduct";
import Home from "../HomePage/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobile" element={<MobilePage />} />
      <Route path="/mobile/:nokiaId" element={<MobileProduct />} />
    </Routes>
  );
};

export default AppRoutes;
