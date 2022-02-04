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
    url: "",
    image: "",
  });

  // controls input fields
  const handleChange = (evt) => {
    setRecipeData({
      ...recipeData,
      [evt.target.name]: evt.target.value,
    });
  };

  // Form Population
  const handlePopulate = async (evt) => {
    evt.preventDefault();
    if (!props.user) return;
    const token = await props.user.getIdToken();
    const response = await fetch(`${props.url}add`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ url: recipeData.url }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      let populatedInstructions = "";
      data.instructions.forEach((instruction) => {
        populatedInstructions = populatedInstructions + instruction + "\n";
      });
      populatedInstructions = populatedInstructions.slice(0, -2);
      setRecipeData({
        ...recipeData,
        name: data.name,
        ingredients: data.ingredients,
        instructions: populatedInstructions,
        image: data.image,
      });
    }
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
      <h1 style={{ textAlign: "center", marginTop: "1.5rem" }}>Add a Recipe</h1>
      {recipeData.image && <ImagePreview recipe={recipeData} />}
      <form className="add-edit-form">
        <label htmlFor="url">
          Recipe URL: (Populate will not work for all websites)
        </label>
        <input
          style={{ width: "100%", paddingLeft: ".75rem" }}
          type="text"
          name="url"
          value={recipeData.url}
          placeholder="recipe url"
          onChange={handleChange}
        />
        <Button
          className="populate-btn"
          variant="info"
          onClick={handlePopulate}
          disabled={recipeData.url ? false : true}
        >
          Populate
        </Button>
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
        <div className="btn-group">
          <div className="fw-btn">
            <Button
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
          </div>
        </div>
      </form>
    </div>
  );
}
