import React, { useState, useEffect } from "react";

function Dog({ id, name, isGoodDog, image, toggleGoodDog }) {
  return (
    <div id="dog-info">
      <img src={image} width="300" height="300" alt={name} />
      <h2>{name}</h2>
      <button onClick={() => toggleGoodDog(id, name, image, isGoodDog)}>
        {isGoodDog ? "Good Dog!" : "Bad Dog!"}
      </button>
    </div>
  );
}

export default Dog;
