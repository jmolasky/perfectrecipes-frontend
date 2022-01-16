import { useState } from "react";

export default function Add(props) {
  const capitalizeFirstLtr = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // creates object in state that will be sent to server to be added to database
  const [recipeData, setRecipeData] = useState({
    name: "",
    ingredients: [],
    instructions: [],
    image: "",
  });

  // to initialize/reset ingredient form inputs
  const blankIngredient = {
    name: "",
    measurement: "",
    amount: "",
  };

  const [ingredientInput, setIngredientInput] = useState(blankIngredient);

  const [instructionInput, setInstructionInput] = useState("");

  const ingredients = recipeData.ingredients.map((ingredient, idx) => {
    let fullIngredient = ingredient.name;

    if (ingredient.measurement)
      fullIngredient = `${ingredient.measurement} ${fullIngredient}`;

    if (ingredient.amount)
      fullIngredient = `${ingredient.amount} ${fullIngredient}`;

    fullIngredient = capitalizeFirstLtr(fullIngredient);
    return <li key={idx}>{fullIngredient}</li>;
  });

  const instructions = recipeData.instructions.map((instruction, idx) => (
    <li key={idx}>{capitalizeFirstLtr(instruction)}</li>
  ));

  const handleNameOrImageChange = (evt) => {
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

  const handleInstructionChange = (evt) => {
    setInstructionInput(evt.target.value);
  };

  const handleAddIngredient = (evt) => {
    evt.preventDefault();
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ingredientInput],
    });
    setIngredientInput(blankIngredient);
  };

  const handleAddInstruction = (evt) => {
    evt.preventDefault();
    setRecipeData({
      ...recipeData,
      instructions: [...recipeData.instructions, instructionInput],
    });
    setInstructionInput("");
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
          onChange={handleNameOrImageChange}
        />
        <br />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          name="image"
          value={recipeData.image}
          placeholder="image url"
          onChange={handleNameOrImageChange}
        />
        <h3>Add Ingredients:</h3>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          value={ingredientInput.amount}
          placeholder="amount"
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
        <label htmlFor="name">Ingredient name: </label>
        <input
          type="text"
          name="name"
          value={ingredientInput.name}
          placeholder="ingredient"
          onChange={handleIngredientChange}
        />
        <button onClick={handleAddIngredient}>Add Ingredient</button>
        <br />
        <h3>Add Instructions:</h3>
        <label htmlFor="instructions">Input Instructions: </label>
        <textarea
          name="instructions"
          value={instructionInput}
          cols="60"
          rows="5"
          placeholder="instruction"
          onChange={handleInstructionChange}
        ></textarea>
        <button onClick={handleAddInstruction}>Add Instruction</button>
        <br />
        <input type="submit" value="Add Recipe" />
      </form>
      <h3>Ingredients:</h3>
      <ul>{ingredients}</ul>
      <h3>Instructions:</h3>
      <ol>{instructions}</ol>
    </div>
  );
}
