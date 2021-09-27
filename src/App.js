import React, { useState, useEffect } from "react";
import "./App.css";
import FilterGoodDog from "./FilterGoodDog";
import DogBar from "./DogBar";
import Dog from "./Dog";

function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [filter, setFilter] = useState(false);
  const [currentDog, setCurrentDog] = useState({});
  const [tempDogs, setTempDogs] = useState([]);
  const url = "http://localhost:3000/pups";
  const fetchDogs = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setDogs(data);
        setTempDogs(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setCurrentDog(dogs[current]);
    console.log("current dog  ", dogs[current]);
    return () => {
      //clean up
    };
  }, [dogs, current]);
  useEffect(() => {
    setCurrentDog(tempDogs[0]);
    //console.log("current dog  ", dogs[current]);
    return () => {
      //clean up
    };
  }, [tempDogs]);
  useEffect(() => {
    fetchDogs(url);
    return () => {
      //clean up
    };
  }, []);
  useEffect(() => {
    filterGoodDogs();

    return () => {
      //clean up
    };
  }, [filter]);

  const showDog = (id) => {
    setCurrent(id);
  };

  const toggleGoodDog = (id, name, image, isGoodDog) => {
    console.log("toggle good pressed");
    const newDogs = dogs.map((dog) => {
      if (dog.id === id) {
        return { id: id, name: name, isGoodDog: !isGoodDog, image: image };
      }
      return dog;
    });
    setDogs(newDogs);

    console.log(dogs);
  };
  const filterGoodDogs = () => {
    if (filter) {
      setTempDogs(
        dogs.filter((dog) => {
          return dog.isGoodDog === true;
        })
      );
      setCurrentDog(tempDogs[0]);
    } else {
      setTempDogs(dogs);
    }
  };
  const toggleFilter = () => {
    console.log("filtered good dog press");
    setFilter((prevState) => {
      return !prevState;
    });

    console.log("dog filter  ", filter, dogs);
  };

  if (loading) {
    return (
      <div className="container">
        <h2>Loading ...</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <FilterGoodDog filter={filter} toggleFilter={toggleFilter} />
      <DogBar dogs={tempDogs} showDog={showDog} />
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <Dog {...currentDog} toggleGoodDog={toggleGoodDog} />
      </div>
    </div>
  );
}

export default App;
