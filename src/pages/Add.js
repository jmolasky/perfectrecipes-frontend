import { useState } from "react";
import IngredientInputs from "../components/IngredientInputs";
import { handleAddIngredient } from "../services/helperFunctions";
import ImagePreview from "../components/ImagePreview";
import InstructionsEdit from "../components/InstructionsEdit";
import Button from "react-bootstrap/Button";

export default function Add(props) {
  // creates object in state that will be sent to server to be added to database
  const [recipeData, setRecipeData] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    image: "",
  });

  // controls input fields
  const handleChange = (evt) => {
    setRecipeData({
      ...recipeData,
      [evt.target.name]: evt.target.value,
    });
  };

  // adds new recipe to user's account and redirects to home page
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let recipe = recipeData;
    recipe.image
      ? (recipe.image = recipeData.image)
      : (recipe.image =
          "https://spoonacular.com/recipeImages/157093-556x370.jpg");
    props.createRecipes(recipe);
    props.history.push("/");
  };

  return (
    <div className="add" style={{ margin: "1rem", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Add a Recipe</h1>
      {recipeData.image && <ImagePreview recipe={recipeData} />}
      <form className="add-edit-form">
        <label htmlFor="name">Recipe Name: </label>
        <input
          style={{ width: "100%", paddingLeft: ".75rem" }}
          type="text"
          name="name"
          value={recipeData.name}
          placeholder="name"
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          style={{ width: "100%", paddingLeft: ".75rem" }}
          type="text"
          name="image"
          value={recipeData.image}
          placeholder="image url"
          onChange={handleChange}
        />
        <label htmlFor="ingredients">Ingredients: </label>
        <IngredientInputs recipe={recipeData} setterFunction={setRecipeData} />
        <Button
          className="add-ingredient-button"
          variant="success"
          onClick={(e) => {
            handleAddIngredient(e, recipeData, setRecipeData);
          }}
        >
          +
        </Button>
        <label htmlFor="instructions">Instructions: </label>
        <InstructionsEdit recipe={recipeData} handleChange={handleChange} />
        <Button
          className="add-btn"
          onClick={handleSubmit}
          disabled={
            recipeData.name &&
            recipeData.ingredients.length > 0 &&
            recipeData.instructions
              ? false
              : true
          }
        >
          Add Recipe
        </Button>
      </form>
    </div>
  );
}
