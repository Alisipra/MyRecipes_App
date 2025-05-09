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

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // for tablets and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-4 md:px-8 lg:px-16 py-6">
      <Slider {...settings}>
        {data.map((v, i) => (
          <Link key={i} to={`/${v.idMeal}`}>
            <div className="p-2">
              <img
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                src={v.strMealThumb}
                alt={v.strMeal}
                loading="lazy"
              />
              <h3 className="text-center mt-2 font-semibold text-lg text-white">{v.strMeal}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
