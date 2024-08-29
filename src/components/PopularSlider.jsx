import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function PopularSlider() {
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
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="slider-container  overflow-hidden">
        <Slider {...settings}>
          {data.map((v, i) => {
            return (
              <Link key={i} to={`/${v.idMeal}`}>
                <div className="rounded-md">
                  <img
                    key={i}
                    className="w-[400px] h-[400px]  mt-4 p-4 gap-3 overflow-hidden rounded-md hover:scale-105 shadow-2xl"
                    src={v.strMealThumb}
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
