import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home/>
            }
          />
          <Route
            path="/recipesList"
            element={<ProductList/>}
          />
          <Route path="/recipesList/:recipeId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
