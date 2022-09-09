import React from "react";
import Menu from "./Menu";
import { useState } from "react";
const Categories = () => {
  const [page, setPage] = useState("all");
  const log = console.log;
  function handleClick(e) {
    const page = e.target.id;
    setPage(page);
  }

  return (
    <div className="">
      <div className="flex gap-12 justify-center text-price text-lg mb-12">
        <button
          id="all"
          onClick={handleClick}
          className=" hover-effect px-4 rounded-lg"
        >
          All
        </button>
        <button
          id="breakfast"
          onClick={handleClick}
          className=" hover-effect px-4 rounded-lg"
        >
          Breakfast
        </button>
        <button
          id="lunch"
          onClick={handleClick}
          className=" hover-effect px-4 rounded-lg"
        >
          Lunch
        </button>
        <button
          id="shakes"
          onClick={handleClick}
          className=" hover-effect px-4 rounded-lg"
        >
          Shakes
        </button>
      </div>
      <Menu page={page} />
    </div>
  );
};

export default Categories;
