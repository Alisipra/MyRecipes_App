import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";

export default function RecipeId() {
  let { idMeal } = useParams();
  const [data, setData] = useState([]);
  let [active, setActive] = useState("ingredients");

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      let data = await res.json();
      setData(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row justify-evenly items-center mt-6 p-4 gap-6">
        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={data.strMealThumb}
            alt={data.strMeal}
            loading="lazy"
            className="w-[220px] sm:w-[250px] md:w-[300px] h-auto rounded-lg border-2 border-white shadow-md"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              className={`p-2 rounded-md text-white font-semibold ${
                active === "ingredients" ? "bg-yellow-500" : "bg-yellow-400"
              }`}
              onClick={() => setActive("ingredients")}
            >
              Ingredients
            </button>
            <button
              className={`p-2 rounded-md text-white font-semibold ${
                active === "instructions" ? "bg-yellow-500" : "bg-yellow-400"
              }`}
              onClick={() => setActive("instructions")}
            >
              Instructions
            </button>
          </div>

          {/* Conditional Content */}
          {active === "ingredients" ? (
            <div>
              <h1 className="text-2xl sm:text-3xl text-orange-500 font-bold mb-4">Ingredients</h1>
              <ul className="space-y-2 text-base sm:text-lg font-medium">
                {[1, 2, 3, 4, 5, 6].map((num) => {
                  const ingredient = data[`strIngredient${num}`];
                  const measure = data[`strMeasure${num}`];
                  return (
                    ingredient && (
                      <li key={num}>
                        {ingredient} ~ {measure}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl sm:text-3xl text-orange-500 font-bold mb-4">Instructions</h1>
              <p className="text-justify text-base sm:text-lg leading-relaxed">
                {data.strInstructions}
              </p>
            </div>
          )}
        </div>
      </div>

      <TrendingSlider />
    </div>
  );
}
