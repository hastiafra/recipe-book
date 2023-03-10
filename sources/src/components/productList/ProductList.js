import { useState } from "react";

import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import "./style.css";

const ProductList = ({ recipeData }) => {
  const data = [
    {
      id: 648910,
      title: "Kimchi",
      image: "https://spoonacular.com/recipeImages/648910-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 632017,
      title: "Agedashi Tofu",
      image: "https://spoonacular.com/recipeImages/632017-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 665379,
      title: "Winter Kimchi",
      image: "https://spoonacular.com/recipeImages/665379-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 648506,
      title: "Japanese Sushi",
      image: "https://spoonacular.com/recipeImages/648506-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 648746,
      title: "Karahi Chicken",
      image: "https://spoonacular.com/recipeImages/648746-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 632021,
      title: "Ahi Tuna Ceviche",
      image: "https://spoonacular.com/recipeImages/632021-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 652672,
      title: "Mushroom Gnocchi",
      image: "https://spoonacular.com/recipeImages/652672-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 13073,
      title: "Seared Ahi Tuna Salad",
      image: "https://spoonacular.com/recipeImages/13073-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 649002,
      title: "Kogi Kimchi Quesadillas",
      image: "https://spoonacular.com/recipeImages/649002-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 640377,
      title: "Hibiscus Cranberry Sauce",
      image: "https://spoonacular.com/recipeImages/640377-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 644885,
      title: "Gluten Free Vegan Gnocchi",
      image: "https://spoonacular.com/recipeImages/644885-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 644917,
      title: "Gnocchi and Wilted Spinach Salad",
      image: "https://spoonacular.com/recipeImages/644917-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 650632,
      title: "Mahi-Mahi With Lemon Caper Sauce",
      image: "https://spoonacular.com/recipeImages/650632-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 646778,
      title: "Hidden Veggie Chipotle Taco Meat",
      image: "https://spoonacular.com/recipeImages/646778-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 1096217,
      title: "Healthy Cabbage Soup with Spicy Kimchi",
      image: "https://spoonacular.com/recipeImages/1096217-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 657312,
      title: "Pumpkin gnocchi with basil and Parmesan",
      image: "https://spoonacular.com/recipeImages/657312-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 632026,
      title: "Ahi Tuna with Sweet and Spicy Asian Slaw",
      image: "https://spoonacular.com/recipeImages/632026-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716198,
      title: "Tart Raspberry Sorbet with a Hint of Heat",
      image: "https://spoonacular.com/recipeImages/716198-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 157089,
      title: "5 Ingredient High Protein Pumpkin Pancakes",
      image: "https://spoonacular.com/recipeImages/157089-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 656544,
      title: "Polenta gnocchi with savoy cabbage and cheese",
      image: "https://spoonacular.com/recipeImages/656544-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 634779,
      title: "Beet Gnocchi With Steak and Brown Butter Sauce",
      image: "https://spoonacular.com/recipeImages/634779-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 660493,
      title: "Soba Noodle In Kombu Dashi With Teriyaki Salmon",
      image: "https://spoonacular.com/recipeImages/660493-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 636599,
      title: "Butternut Squash Gnocchi With Whiskey Cream Sauce",
      image: "https://spoonacular.com/recipeImages/636599-312x231.jpg",
      imageType: "jpg",
    },
  ];

  const [result, setResult] = useState(data.slice(0, 40));

  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 5;
  const visitedPage = pageNumber * dataPerPage;

  const pageCount = Math.ceil(result.length / dataPerPage);

  const displayData = result.slice(visitedPage, visitedPage + dataPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log(pageCount);

  return (
    <>
      <p className="welcomeTitle">Here you go!</p>
      <div className="productListWrapper">
        {/* {recipeData &&
        recipeData.map((recipe) => {
          return (
            <Link className="productLinkContainer" key={recipe.id}>
              <h3 className="listName">{recipe.title}</h3>
              <img
                className="listImage"
                src={recipe.image}
                alt={recipe.title}
              />
            </Link>
          );
        })} */}

        {displayData.map((recipe) => {
          return (
            <Link className="productLinkContainer" key={recipe.id}>
              <h3 className="listName">{recipe.title}</h3>
              <img
                className="listImage"
                src={recipe.image}
                alt={recipe.title}
              />
            </Link>
          );
        })}
      </div>
      <div className="paginationContainer">
        <ReactPaginate
          activeClassName={"paginationActive"}
          containerClassName={"paginationBtn"}
          nextLabel={"Next"}
          nextLinkClassName={"nextBtn"}
          onPageChange={changePage}
          pageCount={pageCount}
          previousLabel={"Previous"}
          previousLinkClassName={"preBtn"}
        />
      </div>
    </>
  );
};

export default ProductList;
