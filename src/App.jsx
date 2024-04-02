import "./App.css";

import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();

  const isResumePage = location.pathname === "/resume";

  return (
    <>
      {!isResumePage && <Header />}
      <Outlet />
      {!isResumePage && <Footer />}
    </>
  );
}

export default App;
