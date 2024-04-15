import "./App.css";
import React, { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();

  const isResumePage = location.pathname === "/resume";

  useEffect(() => {
    const currentPath = location.pathname;

    const titles = {
      '/': "Julia Pasquarella",
      '/work': "Work - Julia Pasquarella",
      '/resume': "Resume - Julia Pasquarella",
      '/work/sales-pitch-design-deck' : "Sales Pitch Deck Design - Julia Pasquarella",
      '/work/event-booth-and-collateral-design': "Event Booth And Collateral Design - Julia Pasquarella"
    };

    document.title = titles[currentPath] || "Julia Pasquarella";

  }, [location]);

  return (
    <div className="min-h-screen">
      {!isResumePage && <Header />}
      <Outlet />
      {!isResumePage && <Footer />}
    </div>
  );
}

export default App;
