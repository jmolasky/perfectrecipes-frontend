import { useState, useRef } from "react";

export default function Add(props) {
  const [recipeData, setRecipeData] = useState({
    name: "",
    ingredients: [],
    instructions: [],
    image: "",
  });

  const blankIngredient = {
    name: "",
    measurement: "",
    amount: "",
  };

  const [ingredientInput, setIngredientInput] = useState(blankIngredient);

  const handleNameChange = (evt) => {
    setRecipeData({
      ...recipeData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleIngredientChange = (evt) => {
    setIngredientInput({
      ...ingredientInput,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleAddIngredient = (evt) => {
    evt.preventDefault();
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ingredientInput],
    });
    setIngredientInput(blankIngredient);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.createRecipes(recipeData);
    props.history.push("/");
  };

  return (
    <div className="add">
      <form
        style={{ textAlign: "center", marginTop: "4rem" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Recipe Name: </label>
        <input
          type="text"
          name="name"
          value={recipeData.name}
          placeholder="name"
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="ingredients">Input Ingredient name: </label>
        <input
          type="text"
          name="name"
          value={ingredientInput.name}
          placeholder="ingredient"
          onChange={handleIngredientChange}
        />
        <button onClick={handleAddIngredient}>Add Ingredient</button>
        <br />
        <label htmlFor="instructions">Input Instructions: </label>
        <input type="text" name="instructions" placeholder="instruction" />
        <button>Add Instruction</button>
        <br />
        <input type="submit" value="Add Recipe" />
      </form>
      <h3>Ingredients:</h3>
      <ul></ul>
      <h3>Instructions:</h3>
      <ol></ol>
    </div>
  );
}
