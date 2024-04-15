import "./App.css";

import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();

  const isResumePage = location.pathname === "/resume";

  return (
    <div className="min-h-screen">
      {!isResumePage && <Header />}
      <Outlet />
      {!isResumePage && <Footer />}
    </div>
  );
}

export default App;
