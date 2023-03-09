import React, { useEffect, useState } from "react";

const { REACT_APP_SPOONACULAR, REACT_APP_SPOONACULAR_URL } = process.env;
export const Recipes = () => {
  const recipesAPI = `${REACT_APP_SPOONACULAR_URL}recipes/716429/information?apiKey=${REACT_APP_SPOONACULAR}&includeNutrition=true`;
  let [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRecipesData(data));
  }, []);

  console.log(recipesData);
};
