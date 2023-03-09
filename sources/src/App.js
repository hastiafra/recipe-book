import { useState } from "react";
import "./App.css";
import { Recipes } from "./helpers/fetch";

function App() {
  const { REACT_APP_SPOONACULAR, REACT_APP_SPOONACULAR_URL } = process.env;
  const [searchFieldValue, setSearchFieldValue] = useState(null);
  const handleSearch = async () => {
    if (searchFieldValue) {
      const searchUrl = `${REACT_APP_SPOONACULAR_URL}recipes/complexSearch?apiKey=${REACT_APP_SPOONACULAR}&query=${searchFieldValue}`;
    }
  };

  return (
    <div className="App">
      <div className="appWrapper">
        <p className="title">Please search for your recipes</p>
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
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
