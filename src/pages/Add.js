import { useState } from "react";

export default function Add(props) {
  const capitalizeFirstLtr = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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

  const ingredients = recipeData.ingredients.map((ingredient, idx) => {
    let fullIngredient;
    let prefix;
    if (ingredient.measurement || ingredient.amount) {
      prefix = ingredient.measurement
        ? ingredient.measurement
        : ingredient.amount;
      fullIngredient = capitalizeFirstLtr(`${prefix} ${ingredient.name}`);
    } else {
      fullIngredient = capitalizeFirstLtr(ingredient.name);
    }
    return <li key={idx}>{fullIngredient}</li>;
  });

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
        <h3>Add Ingredients:</h3>
        <label htmlFor="name">Ingredient name: </label>
        <input
          type="text"
          name="name"
          value={ingredientInput.name}
          placeholder="ingredient"
          onChange={handleIngredientChange}
        />
        <label htmlFor="measurement">Measurement</label>
        <input
          type="text"
          name="measurement"
          value={ingredientInput.measurement}
          placeholder="cups, oz etc."
          onChange={handleIngredientChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          value={ingredientInput.amount}
          placeholder="amount"
          onChange={handleIngredientChange}
        />
        <button onClick={handleAddIngredient}>Add Ingredient</button>
        <br />
        <h3>Add Instructions:</h3>
        <label htmlFor="instructions">Input Instructions: </label>
        <input type="text" name="instructions" placeholder="instruction" />
        <button>Add Instruction</button>
        <br />
        <input type="submit" value="Add Recipe" />
      </form>
      <h3>Ingredients:</h3>
      <ul>{ingredients}</ul>
      <h3>Instructions:</h3>
      <ol></ol>
    </div>
  );
}
