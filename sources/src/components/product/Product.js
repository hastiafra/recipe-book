import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

const Product = () => {
  const { REACT_APP_SPOONACULAR, REACT_APP_SPOONACULAR_URL } = process.env;
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState([]);

  const getRecipeDetail = async () => {
    const recipeURL = `${REACT_APP_SPOONACULAR_URL}recipes/${recipeId}/information?apiKey=${REACT_APP_SPOONACULAR}`;
    try {
      const response = await fetch(recipeURL);
      const data = await response.json();
      setRecipe([data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
     getRecipeDetail();
  }, []);
  return (
    <>
      <div>
        {recipe?.map((item, index) => {
          return (
            <div className="productContainer" key={index}>
              <h1>{item.title}</h1>
              <div className="headerContainer">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>Health Information:</h4>
                  {item.diets.map((diet, i) => {
                    return (
                      <ul>
                        <li className="diet" key={i}>{diet}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
              <h4>Ingredients</h4>
              <div className="ingredient">
                {item.extendedIngredients.map((ingr, i) => {
                  return (
                    <div className="ingredientWrapper" key={i}>
                      <ul>
                        <li className="ingrTitle">{ingr.name}</li>
                      </ul>
                      <p className="ingrMeasure">
                        {ingr.measures.metric.amount}
                      </p>
                      <p className="ingrMetric">{ingr.measures.metric.unitLong}</p>
                    </div>
                  );
                })}
              </div>
                <h4>Cooking Instructions</h4>
              <div className="instructionWrapper">
                <p className="wrapper">{item.instructions}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
