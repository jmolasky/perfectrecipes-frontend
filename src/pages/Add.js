import { useState } from "react";
import update from "immutability-helper";

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

  const handleAddIngredient = (evt) => {
    evt.preventDefault();
    let ingredients = recipeData.ingredients;
    ingredients.push("");
    setRecipeData({
      ...recipeData,
      ingredients: ingredients,
    });
  };

  const handleRemove = (evt) => {
    evt.preventDefault();
    const ingredients = recipeData.ingredients;
    const i = evt.target.name;
    console.log(i);
    const newIngredients = update(ingredients, { $splice: [[i, 1]] });
    setRecipeData({
      ...recipeData,
      ingredients: newIngredients,
    });
  };

  const handleIngredientChange = (evt) => {
    const oldArray = recipeData.ingredients;
    const i = evt.target.name;
    const newValue = evt.target.value;
    const newArray = update(oldArray, { [i]: { $set: newValue } });
    setRecipeData({
      ...recipeData,
      ingredients: newArray,
    });
  };

  const ingredientInputs = recipeData.ingredients.map((ingredient, idx) => {
    return (
      <div key={idx}>
        <input
          type="text"
          name={idx}
          value={ingredient}
          placeholder="ingredient"
          onChange={handleIngredientChange}
        />
        <button name={idx} onClick={handleRemove}>
          -
        </button>
      </div>
    );
  });

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
        <label htmlFor="ingredients">Ingredients: </label>
        <br />
        {ingredientInputs}
        <button onClick={handleAddIngredient}>+</button>
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
