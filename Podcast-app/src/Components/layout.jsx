import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Carousel from "./carousel";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <Carousel />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
