import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./Preview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
