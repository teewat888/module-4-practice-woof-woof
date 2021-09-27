import React from "react";

function DogBar({ dogs, showDog }) {
  console.log("dogs come to dogs bar: ", dogs);
  return (
    <div id="dog-bar">
      {dogs.map((dog, idx) => (
        <span key={idx} onClick={() => showDog(idx)}>
          {dog.name}
        </span>
      ))}
    </div>
  );
}

export default DogBar;
