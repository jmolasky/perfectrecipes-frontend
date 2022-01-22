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
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name: </label>
        <br />
        <input
          style={{ width: "100%" }}
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
          style={{ width: "100%" }}
          type="text"
          name="image"
          value={recipeData.image}
          placeholder="image url"
          onChange={handleChange}
        />
        <br />
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
        <label htmlFor="instructions">Instructions: </label>
        <br />
        <textarea
          style={{ width: "100%", height: "20rem" }}
          name="instructions"
          value={recipeData.instructions}
          placeholder="instructions"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Add Recipe" />
      </form>
    </div>
  );
}
