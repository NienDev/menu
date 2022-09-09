import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  return (
    <div className="container mx-auto text-center my-6 bg-white rounded-xl p-8">
      <div className="relative mb-12">
        <h2 className="font-bold">Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories />
    </div>
  );
}

export default App;
