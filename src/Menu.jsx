import React from "react";
import data from "./data";
import FoodCard from "./FoodCard";
const log = console.log;
log(data);
const Menu = (props) => {
  const dataFilter =
    props.page == "all"
      ? data
      : data.filter((item) => item.category == props.page);
  log(dataFilter[0].img);
  return (
    <div className="grid grid-cols-2 max-w-6xl mx-auto gap-8">
      {dataFilter.map((data) => (
        <FoodCard
          key={data.id}
          title={data.title}
          price={data.price}
          img={data.img}
          desc={data.desc}
        />
      ))}
    </div>
  );
};

export default Menu;
