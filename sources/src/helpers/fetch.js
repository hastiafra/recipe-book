import { useEffect, useState } from "react";

const { REACT_APP_SPOONACULAR, REACT_APP_SPOONACULAR_URL } = process.env;
export const Recipes = () => {
  const recipesAPI = `${REACT_APP_SPOONACULAR_URL}recipes/716429/information?apiKey=${REACT_APP_SPOONACULAR}&includeNutrition=true`;

  console.log(recipesAPI);

  useEffect(() => {}, []);
};
