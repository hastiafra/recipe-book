import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

const Product = () => {
  const { REACT_APP_SPOONACULAR, REACT_APP_SPOONACULAR_URL } = process.env;
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState([]);

  const dummyData = [
    {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: true,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 1,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 4,
      healthScore: 60,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 219.13,
      extendedIngredients: [
        {
          id: 11119,
          aisle: "Produce",
          image: "napa-cabbage.jpg",
          consistency: "SOLID",
          name: "napa cabbage",
          nameClean: "napa cabbage",
          original: "6 pounds Napa cabbage",
          originalName: "Napa cabbage",
          amount: 6,
          unit: "pounds",
          meta: [],
          measures: {
            us: {
              amount: 6,
              unitShort: "lb",
              unitLong: "pounds",
            },
            metric: {
              amount: 2.722,
              unitShort: "kgs",
              unitLong: "kgs",
            },
          },
        },
        {
          id: 2047,
          aisle: "Spices and Seasonings",
          image: "salt.jpg",
          consistency: "SOLID",
          name: "salt",
          nameClean: "table salt",
          original: "3 tablespoons salt",
          originalName: "salt",
          amount: 3,
          unit: "tablespoons",
          meta: [],
          measures: {
            us: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
        {
          id: 11291,
          aisle: "Produce",
          image: "spring-onions.jpg",
          consistency: "SOLID",
          name: "scallions",
          nameClean: "spring onions",
          original: "2 cups sliced scallions",
          originalName: "sliced scallions",
          amount: 2,
          unit: "cups",
          meta: ["sliced"],
          measures: {
            us: {
              amount: 2,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 473.176,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
        },
        {
          id: 10211215,
          aisle: "Produce",
          image: "garlic.jpg",
          consistency: "SOLID",
          name: "garlic cloves",
          nameClean: "whole garlic cloves",
          original: "3 minced garlic cloves",
          originalName: "minced garlic cloves",
          amount: 3,
          unit: "",
          meta: ["minced"],
          measures: {
            us: {
              amount: 3,
              unitShort: "",
              unitLong: "",
            },
            metric: {
              amount: 3,
              unitShort: "",
              unitLong: "",
            },
          },
        },
        {
          id: 2021,
          aisle: "Spices and Seasonings",
          image: "ginger.png",
          consistency: "SOLID",
          name: "ginger root",
          nameClean: "ginger powder",
          original: "1 tablespoon ginger root minced or 2 tsp. ginger powder",
          originalName: "ginger root minced or 2 tsp. ginger powder",
          amount: 1,
          unit: "tablespoon",
          meta: ["minced"],
          measures: {
            us: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
            metric: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
        },
        {
          id: 1052009,
          aisle: "Spices and Seasonings",
          image: "chili-powder.jpg",
          consistency: "SOLID",
          name: "ground chili pepper",
          nameClean: "ground chipotle chile pepper",
          original: "4 tablespoons dried ground chili pepper",
          originalName: "dried ground chili pepper",
          amount: 4,
          unit: "tablespoons",
          meta: ["dried"],
          measures: {
            us: {
              amount: 4,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 4,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
        {
          id: 19335,
          aisle: "Baking",
          image: "sugar-in-bowl.png",
          consistency: "SOLID",
          name: "sugar",
          nameClean: "sugar",
          original: "2 tablespoons sugar",
          originalName: "sugar",
          amount: 2,
          unit: "tablespoons",
          meta: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
      ],
      id: 648910,
      title: "Kimchi",
      readyInMinutes: 45,
      servings: 6,
      sourceUrl: "https://www.foodista.com/recipe/KPSCVHD5/kimchi",
      image: "https://spoonacular.com/recipeImages/648910-556x370.jpg",
      imageType: "jpg",
      summary:
        'If you have about <b>45 minutes</b> to spend in the kitchen, Kimchi might be an amazing <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe to try. One serving contains <b>119 calories</b>, <b>7g of protein</b>, and <b>2g of fat</b>. For <b>$2.19 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. 4 people were impressed by this recipe. If you have napa cabbage, ginger root, scallions, and a few other ingredients on hand, you can make it. This recipe is typical of Korean cuisine. It works well as an affordable side dish. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 90%</b>, which is spectacular. Try <a href="https://spoonacular.com/recipes/red-curry-mussels-with-kimchi-puree-from-the-kimchi-cookbook-202500">Red Curry Mussels with Kimchi Puree from \'The Kimchi Cookbook</a>, <a href="https://spoonacular.com/recipes/kimchi-stew-with-pork-belly-and-tofu-kimchi-jjigae-1679959">Kimchi Stew with Pork Belly and Tofu (Kimchi-jjigae)</a>, and <a href="https://spoonacular.com/recipes/steamed-kimchi-dumplings-jjin-kimchi-mandu-567494">Steamed Kimchi Dumplings (Jjin Kimchi Mandu)</a> for similar recipes.',
      cuisines: ["Korean", "Asian"],
      dishTypes: ["side dish"],
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      occasions: [],
      winePairing: {
        pairedWines: ["riesling", "gewurztraminer", "chenin blanc"],
        pairingText:
          "Riesling, Gewurztraminer, and Chenin Blanc are my top picks for Kimchi. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. The Schloss Vollrads Riesling QbA with a 4.4 out of 5 star rating seems like a good match. It costs about 17 dollars per bottle.",
        productMatches: [
          {
            id: 447134,
            title: "Schloss Vollrads Riesling QbA",
            description:
              "This Riesling has an exotic bouquet of mango, peach and ripe apple and has noticeable, natural residual sugar.You can enjoy this wine to accompany food, with friends, or simply by yourself to unwind.This wine is an ideal accompaniment to Asian spices such as curry, ginger, or lemon grass. It has perfect balance of acidity and natural sweetness and has the right characteristics to stand up to such exciting dishes.",
            price: "$16.99",
            imageUrl:
              "https://spoonacular.com/productImages/447134-312x231.jpg",
            averageRating: 0.8800000000000001,
            ratingCount: 7,
            score: 0.8345454545454547,
            link: "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fschloss-vollrads-riesling-qba-2008%2F102850",
          },
        ],
      },
      instructions:
        "Shred cabbage in 2 inch strips. Mix with half the salt. Let stand 30 minutes. Wash and drain.   \nMix the scallions, garlic, ginger, chili pepper, cabbage and the rest of salt. Pack into a crock or glass jar.\nPut the containers aside for three or four days in a cool location. After that, store it in the refrigerator.",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Shred cabbage in 2 inch strips.",
              ingredients: [
                {
                  id: 11109,
                  name: "cabbage",
                  localizedName: "cabbage",
                  image: "cabbage.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 2,
              step: "Mix with half the salt.",
              ingredients: [
                {
                  id: 2047,
                  name: "salt",
                  localizedName: "salt",
                  image: "salt.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 3,
              step: "Let stand 30 minutes. Wash and drain.",
              ingredients: [],
              equipment: [],
              length: {
                number: 30,
                unit: "minutes",
              },
            },
            {
              number: 4,
              step: "Mix the scallions, garlic, ginger, chili pepper, cabbage and the rest of salt. Pack into a crock or glass jar.",
              ingredients: [
                {
                  id: 11819,
                  name: "chili pepper",
                  localizedName: "chili pepper",
                  image: "red-chili.jpg",
                },
                {
                  id: 11291,
                  name: "green onions",
                  localizedName: "green onions",
                  image: "spring-onions.jpg",
                },
                {
                  id: 11109,
                  name: "cabbage",
                  localizedName: "cabbage",
                  image: "cabbage.jpg",
                },
                {
                  id: 11215,
                  name: "garlic",
                  localizedName: "garlic",
                  image: "garlic.png",
                },
                {
                  id: 11216,
                  name: "ginger",
                  localizedName: "ginger",
                  image: "ginger.png",
                },
                {
                  id: 2047,
                  name: "salt",
                  localizedName: "salt",
                  image: "salt.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 5,
              step: "Put the containers aside for three or four days in a cool location. After that, store it in the refrigerator.",
              ingredients: [],
              equipment: [],
            },
          ],
        },
      ],
    },
  ];

  const getRecipeDetail = async () => {
    const recipeURL = `${REACT_APP_SPOONACULAR_URL}recipes/${recipeId}/information?apiKey=${REACT_APP_SPOONACULAR}`;
    try {
      const response = await fetch(recipeURL);
      const data = await response.json();
      setRecipe(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //  getRecipeDetail();
  }, []);

  return (
    <>
      <div>
        {dummyData.map((item, index) => {
          return (
            <div className="productContainer" key={index}>
              <h1>{item.title}</h1>
              <div className="headerContainer">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>Health Information:</h4>
                  {item.diets.map((diet, i) => {
                    return (
                      <ul>
                        <li key={i}>{diet}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
              <h4>Ingredients</h4>
              {item.extendedIngredients.map((ingr, i) => {
                return (
                  <div key={i}>
                    <p>{ingr.name}</p>
                    <p>{ingr.measures.metric.amount}</p>
                    <p>{ingr.measures.metric.unitLong}</p>
                  </div>
                );
              })}

              <h4>Cooking Instructions</h4>
              <p>{item.instructions}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
