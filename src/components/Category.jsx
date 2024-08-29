import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Category() {
  let { catName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${catName}`
      );
      let data = await res.json();
      // console.log(data);
      setData(data.meals);
    };
    fetchData();
  }, [catName]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 overflow-hidden">
        {data.map((v, i) => {
          return (
            <>
              <Link key={i} to={`/${v.idMeal}`}>
                <div className=" p-5" key={i}>
                  <img
                    className="w-[200px] h-[200px]  "
                    src={v.strMealThumb}
                    alt=""
                  />
                  <div className="text-center font-bold p-2">{v.strMeal}</div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
