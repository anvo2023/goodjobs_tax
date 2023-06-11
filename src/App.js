import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Social from "./pages/Social";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="social" element={<Social />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
