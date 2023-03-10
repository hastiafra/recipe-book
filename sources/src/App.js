import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [recipeData, setRecipesData] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home setRecipesData={setRecipesData} recipeData={recipeData} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
