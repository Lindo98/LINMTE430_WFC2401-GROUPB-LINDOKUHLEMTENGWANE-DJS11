import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Carousel from "./Components/carousel";
import Login from "./Pages/LoginPage";
import MusicPlayer from "./Components/MusicPlayer";
import Layout from "./Components/layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Carousel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player" element={<MusicPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
