import { useState } from "react";

import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import "./style.css";

const ProductList = () => {
  let sessionData = sessionStorage.getItem("searchedData");
  let rawData = JSON.parse(sessionData);

  const [result, setResult] = useState(rawData?.slice(0, 40));

  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 5;
  const visitedPage = pageNumber * dataPerPage;

  const pageCount = Math.ceil(result.length / dataPerPage);

  const displayData = result.slice(visitedPage, visitedPage + dataPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <p className="welcomeTitle">Here you go!</p>
      <div className="productListWrapper">
        {displayData.map((recipe) => {
          return (
            <Link
              to={`/recipesList/${recipe.id}`}
              className="productLinkContainer"
              key={recipe.id}
            >
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
