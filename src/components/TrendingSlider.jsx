import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TrendingSlider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      let data = await res.json();
      setData(data.meals);
    };
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider-container overflow-hidden">
        <Slider {...settings}>
          {data.map((v, i) => {
            return (
              <div key={i} className="rounded-md">
                <img
                  key={i}
                  className="w-[180px] h-[180px]  mt-4 p-4 gap-3 overflow-hidden rounded-md hover:scale-105 shadow-2xl"
                  src={v.strMealThumb}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
