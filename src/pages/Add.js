import { useState } from "react";
import {
  capitalizeFirstLtr,
  getIngredientList,
} from "../services/helperFunctions";

export default function Add(props) {
  // creates object in state that will be sent to server to be added to database
  const [recipeData, setRecipeData] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    image: "",
  });

  // to initialize/reset ingredient form inputs
  const blankIngredient = {
    name: "",
    measurement: "",
    amount: "",
  };

  const [ingredientInput, setIngredientInput] = useState(blankIngredient);

  // array of ingredients to add to DOM
  const ingredients = getIngredientList(recipeData.ingredients);

  // controls input fields
  const handleChange = (evt) => {
    setRecipeData({
      ...recipeData,
      [evt.target.name]: evt.target.value,
    });
  };

  // controls ingredient fields
  const handleIngredientChange = (evt) => {
    setIngredientInput({
      ...ingredientInput,
      [evt.target.name]: evt.target.value,
    });
  };

  // adds ingredient to recipeData state
  const handleAddIngredient = (evt) => {
    evt.preventDefault();
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ingredientInput],
    });
    setIngredientInput(blankIngredient);
  };

  // adds new recipe to user's account and redirects to home page
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.createRecipes(recipeData);
    props.history.push("/");
  };

  return (
    <div className="add" style={{ margin: "1rem" }}>
      {recipeData.image && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              textAlign: "center",
              width: "35%",
              height: "auto",
              margin: "0 auto",
            }}
            src={recipeData.image}
            alt={recipeData.name}
          />
        </div>
      )}
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
        <label htmlFor="amount">Amount: </label>
        <br />
        <input
          type="number"
          name="amount"
          value={ingredientInput.amount}
          placeholder="amount"
          onChange={handleIngredientChange}
        />
        <br />
        <label htmlFor="measurement">Measurement: </label>
        <br />
        <input
          type="text"
          name="measurement"
          value={ingredientInput.measurement}
          placeholder="cups, oz etc."
          onChange={handleIngredientChange}
        />
        <br />
        <label htmlFor="name">Ingredient name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={ingredientInput.name}
          placeholder="ingredient"
          onChange={handleIngredientChange}
        />
        <br />
        <button onClick={handleAddIngredient}>Add Ingredient</button>
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
      <h3>Ingredients:</h3>
      <ul>{ingredients}</ul>
    </div>
  );
}
