import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Announcement from "./pages/Announcement";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="appointment" element={<Appointment/>} />
          <Route path="announcement" element={<Announcement/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
