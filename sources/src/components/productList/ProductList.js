import "./style.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ProductList = ({ recipeData }) => {
  return (
    <div className="productListWrapper">
      <p className="welcomeTitle">Here you go!</p>
      {recipeData &&
        recipeData.map((recipe) => {
         return( <Link key={recipe.id}>
            <div className="productContainer">
              <h3 className="listName">{recipe.title}</h3>
              <img
                className="listImage"
                src={recipe.title}
                alt={recipe.title}
              />
            </div>
          </Link>)
        })}
    </div>
  );
};

export default ProductList;
