import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/productList/ProductList";

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
           <Route
            path="/recipesList"
            element={
              <ProductList recipeData={recipeData} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
