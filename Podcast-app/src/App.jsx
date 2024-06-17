import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Layout from "./Components/layout";
import Carousel from "./Components/carousel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<Carousel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
