import "./App.css";

import { Recipes } from "./helpers/fetch";

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
        <p className="title">Please search for your recipes</p>
        <div className="searchWrapper">
          <input
            className="search"
            type="search"
            placeholder="e.g., pasta, cake and soup"
          ></input>
          <button className="searchButton">go!</button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
