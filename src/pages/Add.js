import { useState } from "react";
import IngredientInputs from "../components/IngredientInputs";
import { handleAddIngredient } from "../services/helperFunctions";
import ImagePreview from "../components/ImagePreview";

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
    props.createRecipes(recipeData);
    props.history.push("/");
  };

  return (
    <div className="add" style={{ margin: "1rem" }}>
      {recipeData.image && <ImagePreview recipe={recipeData} />}
      <form style={{ marginTop: "4rem" }} onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={recipeData.name}
          placeholder="name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image">Image URL: </label>
        <br />
        <input
          type="text"
          name="image"
          value={recipeData.image}
          placeholder="image url"
          onChange={handleChange}
        />
        <h3>Add Ingredients:</h3>
        <label htmlFor="ingredients">Ingredients: </label>
        <br />
        <IngredientInputs recipe={recipeData} setterFunction={setRecipeData} />
        <button
          onClick={(e) => {
            handleAddIngredient(e, recipeData, setRecipeData);
          }}
        >
          +
        </button>
        <br />
        <h3>Add Instructions:</h3>
        <label htmlFor="instructions">Instructions: </label>
        <br />
        <textarea
          name="instructions"
          value={recipeData.instructions}
          cols="60"
          rows="8"
          placeholder="instructions"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Add Recipe" />
      </form>
    </div>
  );
}
