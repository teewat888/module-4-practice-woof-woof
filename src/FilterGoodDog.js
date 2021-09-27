import React from "react";

function FilterGoodDog({ filter, toggleFilter }) {
  console.log("filter now: ", filter);
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={() => toggleFilter()}>
        Filter good dogs: {filter ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default FilterGoodDog;
