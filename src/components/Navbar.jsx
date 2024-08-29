import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { areas } from "./Countries";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Navbar() {
  let options = [
    {
      title: "Indian",
      path: "indian",
    },
    {
      title: "Thai",
      path: "thai",
    },
    {
      title: "American",
      path: "american",
    },
    {
      title: "Chinese",
      path: "chinese",
    },
  ];

  let { catName } = useParams();
  let navigate = useNavigate();
  // console.log(useParams());
  const [showMore, setShowmore] = useState(false);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <>
      <div className="bg-blue-800 text-white flex justify-evenly items-center p-4 w-full sticky top-0">
        <Link to={"/"} className="cursor-pointer">
          {" "}
          <h1 className="font-bold text-[28px]">Tasty Foods</h1>
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Food"
            className="p-2 rounded-lg text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <ul className="flex justify-evenly">
          {options.map((v, i) => {
            return (
              <Link to={`/category/${v.path}`} key={i}>
                <li
                  key={i}
                  className="p-2 font-bold hover:underline hover:cursor-pointer"
                >
                  {v.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className=" w-[100px] text-center absolute right-1 top-6 ">
        <span
          className="fixed cursor-pointer"
          onClick={() => setShowmore(!showMore)}
        >
          <IoMdArrowDropdown
            className={` text-[20px] font-bold absolute right-10 top-1 cursor-pointer 
          
          }`}
            onClick={() => setShowmore(!showMore)}
          />
          More
        </span>
        <ul
          className={`bg-blue-800 p-2 inline right-0 top-12 z-50  ${
            showMore ? "block" : "hidden"
          } fixed`}
        >
          {areas.map((v, i) => {
            return (
              <Link key={i} to={`/category/${v.path}`}>
                <li>{v.strArea}</li>{" "}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
