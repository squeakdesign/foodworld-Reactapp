import React, { useEffect, useState } from "react";
import Mealitem from "./Mealitem";
import RecipeIndex from "./RecipeIndex";
const Meal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
          <h4>
            Hi Food lovers, and thanks for visiting this page! Explore the world
            of food.Enjoy the taste and share it with your friends.
          </h4>
        </div>

        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>

        <div className="container">
          {show ? <Mealitem data={item} /> : "Not found"}
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </>
  );
};
export default Meal;
