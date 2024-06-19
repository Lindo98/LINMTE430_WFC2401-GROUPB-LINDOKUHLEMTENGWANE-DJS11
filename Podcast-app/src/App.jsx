import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import MusicPlayer from "./Components/MusicPlayer";
import Layout from "./Components/layout";
import Favorites from "./Pages/Favorites";
import Seasons from "./Pages/Seasons";
import Episodes from "./Pages/Episodes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path=":id" element={<Episodes />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="player" element={<MusicPlayer />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
