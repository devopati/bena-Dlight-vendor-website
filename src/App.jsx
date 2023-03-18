import { BrowserRouter } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <AnimatePresence>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
