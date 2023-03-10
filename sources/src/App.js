import { useState } from "react";
import "./App.css";
import { Recipes } from "./components/fetch";
import Home from "./components/Home";

function App() {
  const [recipeData, setRecipesData] = useState([]);

  return (
    <div>
      <Home setRecipesData={setRecipesData} recipeData={recipeData}/>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
