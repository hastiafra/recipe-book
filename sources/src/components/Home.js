import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = ({ setRecipesData, recipeData }) => {
  const { REACT_APP_SPOONACULAR, REACT_APP_SPOONACULAR_URL } = process.env;

  const navigate = useNavigate();

  const [searchFieldValue, setSearchFieldValue] = useState(null);

  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (searchFieldValue) {
      const searchUrl = `${REACT_APP_SPOONACULAR_URL}recipes/complexSearch?apiKey=${REACT_APP_SPOONACULAR}&query=${searchFieldValue.toLowerCase()}`;
      try {
        const response = await fetch(searchUrl);
        const data = await response.json();
        setRecipesData(data.results);
        resultNavigate();
      } catch (er) {
        console.log(er);
      }
    } else {
      setError(true);
    }
  };

  const resultNavigate = () => {
    if (!recipeData || recipeData === undefined) {
      setError(true);
    } else {
      navigate("/recipesList");
    }
  };
  return (
    <>
      <div className="homeWrapper">
        <p className="homeTitle">Please search for your recipes</p>
        <div className="searchWrapper">
          <input
            className="search"
            type="search"
            onChange={(e) => setSearchFieldValue(e.target.value)}
            placeholder="e.g., pasta, cake and soup"
          ></input>
          <button className="searchButton" onClick={handleSearch}>
            go!
          </button>
        </div>
        {error && <p className="error">Please enter a valid keyword</p>}
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Home;
