import { useState, useEffect, useRef } from "react";
import { capitalizeFirstLtr } from "../services/helperFunctions";
import RecipeView from "../components/RecipeView";
import Button from "react-bootstrap/Button";

export default function RecipeDetails(props) {
  const id = props.match.params.id;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.spoonacular.com/recipes/${id}/`;

  const getRecipeRef = useRef();
  const [recipeData, setRecipeData] = useState("");

  const getRecipeInfo = async (id) => {
    const response = await fetch(`${url}information?apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    console.log(data.creditsText);
    console.log(data.sourceUrl);
    console.log(data.spoonacularSourceUrl);
    // console.log(data.cuisines);
    let instructions = "";
    data.analyzedInstructions[0].steps.forEach((step) => {
      instructions = instructions + step.step + "\n";
    });
    instructions = instructions.slice(0, -2);
    console.log(instructions);
    const ingredients = data.extendedIngredients.map((ingredient) => {
      return ingredient.original;
    });

    setRecipeData({
      name: data.title,
      ingredients: ingredients,
      instructions: instructions,
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
    // if (recipeData.instructions.includes("<ol>")) {
    //   const innerHtml = recipeData.instructions;
    //   instructions = (
    //     <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
    //   );
    // } else {
    //   const instructionsArray = recipeData.instructions.split("\n");
    //   instructions = instructionsArray.map((instruction, idx) => (
    //     <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
    //       {idx + 1}. {instruction}
    //     </p>
    //   ));
    // }
    const instructionsArray = recipeData.instructions.split("\n");
    instructions = instructionsArray.map((instruction, idx) => (
      <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
        {idx + 1}. {instruction}
      </p>
    ));
  } else {
    instructions = <div>Unable to parse instructions</div>;
  }

  const loading = () => {
    return (
      <h1 style={{ textAlign: "center", color: "white", marginTop: "5rem" }}>
        Loading...
      </h1>
    );
  };

  const loaded = () => {
    return (
      <div
        className="recipe-details"
        style={{ margin: "1.5rem", color: "white" }}
      >
        <RecipeView
          recipe={recipeData}
          ingredients={ingredientList}
          instructions={instructions}
        />
        <Button className="save-btn" onClick={handleSave}>
          Save Recipe
        </Button>
      </div>
    );
  };

  return recipeData ? loaded() : loading();
}
