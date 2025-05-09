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
  
  const [showMore, setShowmore] = useState(false);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <>
      <div className="bg-green-500 text-white w-full sticky top-0 z-50">
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
          {/* Logo */}
          <Link to={"/"} className="mb-2 md:mb-0">
            <h1 className="font-bold text-2xl md:text-3xl">Tasty Foods</h1>
          </Link>

          {/* Search Input */}
          <form
            onSubmit={handleSubmit}
            className="mb-2 md:mb-0 w-full md:w-auto"
          >
            <input
              type="text"
              placeholder="Search Food"
              className="w-full md:w-auto p-2 rounded-lg text-black"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          {/* Categories Navigation */}
          <ul className="hidden md:flex space-x-4">
            {options.map((v, i) => (
              <Link to={`/category/${v.path}`} key={i}>
                <li className="p-2 font-bold hover:underline cursor-pointer">
                  {v.title}
                </li>
              </Link>
            ))}
          </ul>

          {/* Dropdown for 'More' */}
          <div className="relative">
            <span
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => setShowmore(!showMore)}
            >
              <IoMdArrowDropdown className="text-xl" />
              <span className="font-bold">More</span>
            </span>
            <ul
              className={`absolute bg-blue-800 right-0 mt-2 p-2 rounded shadow-lg z-50 ${
                showMore ? "block" : "hidden"
              }`}
            >
              {areas.map((v, i) => (
                <Link key={i} to={`/category/${v.path}`}>
                  <li className="p-1 hover:underline">{v.strArea}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-4 pb-2">
          <ul className="flex flex-wrap justify-center space-x-2">
            {options.map((v, i) => (
              <Link to={`/category/${v.path}`} key={i}>
                <li className="p-1 font-semibold hover:underline">{v.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
