import React from "react";
import Navbar from "./Navbar";
import PopularSlider from "./PopularSlider";
import TrendingSlider from "./TrendingSlider";

export default function Home() {
  return (
    <>
      <Navbar />
      <PopularSlider />
      <TrendingSlider />
    </>
  );
}
