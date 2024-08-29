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
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      let data = await res.json();
      console.log(data.meals[0]);
      setData(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly mt-5 p-4">
        <div>
          <img
            src={data.strMealThumb}
            alt=""
            className="w-[250px] h-[250px] p-4 border-white border-2
          "
          />
        </div>

        <div>
          <button
            className="bg-yellow-400 p-2 m-2"
            onClick={() => setActive("ingredients")}
          >
            Ingredients
          </button>
          <button
            className="bg-yellow-400 p-2 m-2"
            onClick={() => setActive("instructions")}
          >
            Instructions
          </button>

          {active === "ingredients" ? (
            <>
              <div className="font-bold p-4 m-4 text-[30px]">
                <h1 className="text-3xl text-orange-500">Ingredients</h1>
                <h2>
                  {data.strIngredient1} ~ {data.strMeasure1}
                </h2>
                <h2>
                  {data.strIngredient2} ~ {data.strMeasure2}
                </h2>
                <h2>
                  {data.strIngredient3} ~ {data.strMeasure3}
                </h2>
                <h2>
                  {data.strIngredient4} ~ {data.strMeasure4}
                </h2>
                <h2>
                  {data.strIngredient5} ~ {data.strMeasure5}
                </h2>
                <h2>
                  {data.strIngredient6} ~ {data.strMeasure6}
                </h2>
              </div>
            </>
          ) : (
            <>
              <div className="font-bold ">
                <h1 className="text-3xl text-orange-500">Instruction</h1>
                <p className="w-[300px]">{data.strInstructions}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <TrendingSlider />
    </div>
  );
}
