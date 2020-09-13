import React from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

import Home from "./Home/pages/home";
import Navbar from "./Shared/Navbar/navbar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Navbar />
        <Route path="/" render={() => <Home />} />
        {/* <Route path="*" render={<Home />} /> */}
        {/* <Route path="customers/*" element={<Customers />} /> */}
      </Routes>
    </div>
  );
}

export default App;
