import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = () => {

  const { REACT_APP_SPOONACULAR, REACT_APP_SPOONACULAR_URL } = process.env;

  const [recipeData, setRecipesData] = useState([]);

  const navigate = useNavigate();

  const [searchFieldValue, setSearchFieldValue] = useState(null);

  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (searchFieldValue) {
      const searchUrl=`${REACT_APP_SPOONACULAR_URL}recipes/complexSearch?apiKey=${REACT_APP_SPOONACULAR}&query=${searchFieldValue.toLowerCase()}&number=100`;
      try {
        const response = await fetch(searchUrl);
        const data = await response.json();
        setRecipesData(data.results);
        sessionStorage.setItem("searchedData", JSON.stringify(data.results));
        resultNavigate();
      } catch (err) {
        console.log(err);
      }
    } else {
      setError(true);
    }
  };

  const resultNavigate = () => {
    if (recipeData.length === 0 || recipeData === undefined) {
      setError(true);
    } else {
      navigate("/recipesList");
    }
  };
  return (
    <>
      <div className="homeWrapper">
        <p className="homeTitle">
          Please search for the origin country of the cuisine
        </p>
        <div className="searchWrapper">
          <input
            className="search"
            type="search"
            onChange={(e) => setSearchFieldValue(e.target.value)}
            placeholder="e.g., African, Korean and French"
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
