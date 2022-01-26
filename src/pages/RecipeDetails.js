import { useState, useEffect, useRef } from "react";
import { capitalizeFirstLtr } from "../services/helperFunctions";

export default function RecipeDetails(props) {
  const id = props.match.params.id;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.spoonacular.com/recipes/${id}/`;

  //   const [recipeInfo, setRecipeInfo] = useState("");
  const getRecipeRef = useRef();
  const [recipeData, setRecipeData] = useState("");

  const getRecipeInfo = async (id) => {
    const response = await fetch(`${url}information?apiKey=${API_KEY}`);
    const data = await response.json();
    const ingredients = data.extendedIngredients.map((ingredient, idx) => {
      return ingredient.original;
    });
    // setRecipeInfo(data);
    setRecipeData({
      name: data.title,
      ingredients: ingredients,
      instructions: data.instructions,
      image: data.image,
    });
  };

  const handleSave = (evt) => {
    evt.preventDefault();
    props.createRecipes(recipeData);
    props.history.push("/");
  };

  useEffect(() => {
    getRecipeRef.current = getRecipeInfo;
  });

  useEffect(() => {
    getRecipeRef.current();
  }, []);

  //   let ingredientList;
  //   if (recipeInfo.extendedIngredients) {
  //     ingredientList = recipeInfo.extendedIngredients.map((ingredient, idx) => {
  //       return (
  //         <li key={ingredient.id}>{capitalizeFirstLtr(ingredient.original)}</li>
  //       );
  //     });
  //   } else {
  //     ingredientList = <li>Unable to parse ingredient list</li>;
  //   }

  //   let instructions;
  //   if (recipeInfo.instructions) {
  //     if (recipeInfo.instructions.includes("<ol>")) {
  //       const innerHtml = recipeInfo.instructions;
  //       instructions = (
  //         <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
  //       );
  //     } else {
  //       const instructionsArray = recipeInfo.instructions.split("\n");
  //       instructions = instructionsArray.map((instruction, idx) => (
  //         <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
  //           {idx + 1}. {instruction}
  //         </p>
  //       ));
  //     }
  //   } else {
  //     instructions = <div>Unable to parse instructions</div>;
  //   }

  let ingredientList;
  if (recipeData.ingredients) {
    ingredientList = recipeData.ingredients.map((ingredient, idx) => {
      return <li key={idx}>{capitalizeFirstLtr(ingredient)}</li>;
    });
  } else {
    ingredientList = <li>Unable to parse ingredient list</li>;
  }

  let instructions;
  if (recipeData.instructions) {
    if (recipeData.instructions.includes("<ol>")) {
      const innerHtml = recipeData.instructions;
      instructions = (
        <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
      );
    } else {
      const instructionsArray = recipeData.instructions.split("\n");
      instructions = instructionsArray.map((instruction, idx) => (
        <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
          {idx + 1}. {instruction}
        </p>
      ));
    }
  } else {
    instructions = <div>Unable to parse instructions</div>;
  }

  const loading = () => {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <div style={{ margin: "1rem" }}>
        {/* <h1 style={{ textAlign: "center" }}>{recipeInfo.title}</h1>
        {recipeInfo.image && ( */}
        <h1 style={{ textAlign: "center" }}>{recipeData.name}</h1>
        {recipeData.image && (
          <div className="show-img-container">
            <div
              className="show-img"
              style={{
                position: "relative",
                // backgroundImage: `url(${recipeInfo.image})`,
                backgroundImage: `url(${recipeData.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        )}
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>{ingredientList}</ul>
        </div>
        <div style={{ width: "100%" }} className="instructions">
          <h3>Instructions</h3>
          {instructions}
        </div>
        <button onClick={handleSave}>Save Recipe</button>
      </div>
    );
  };

  //   return recipeInfo ? loaded() : loading();
  return recipeData ? loaded() : loading();
}
