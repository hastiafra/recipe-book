import { useParams } from "react-router-dom";

import "./style.css";

const Product = () => {
  const { recipeId } = useParams();

  console.log(recipeId)
  return (
    <>
      <p>hi</p>
    </>
  );
};

export default Product;
