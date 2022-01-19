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

  // const [instructionsInput, setInstructionsInput] = useState("");

  // array of ingredients to add to DOM
  const ingredients = getIngredientList(recipeData.ingredients);

  // array of instruction sto add to DOM
  // const instructions = recipeData.instructions.map((instruction, idx) => (
  //   <li key={idx}>{capitalizeFirstLtr(instruction)}</li>
  // ));

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

  // controls instruction fields
  // const handleInstructionsChange = (evt) => {
  //   setInstructionsInput(evt.target.value);
  // };

  // adds ingredient to recipeData state
  const handleAddIngredient = (evt) => {
    evt.preventDefault();
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ingredientInput],
    });
    setIngredientInput(blankIngredient);
  };

  // adds instruction to recipeData state
  // const handleAddInstruction = (evt) => {
  //   evt.preventDefault();
  //   setRecipeData({
  //     ...recipeData,
  //     instructions: [...recipeData.instructions, instructionsInput],
  //   });
  //   setInstructionsInput("");
  // };

  // adds new recipe to user's account and redirects to home page
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
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          name="image"
          value={recipeData.image}
          placeholder="image url"
          onChange={handleChange}
        />
        <h3>Add Ingredients:</h3>
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          name="amount"
          value={ingredientInput.amount}
          placeholder="amount"
          onChange={handleIngredientChange}
        />
        <br />
        <label htmlFor="measurement">Measurement: </label>
        <input
          type="text"
          name="measurement"
          value={ingredientInput.measurement}
          placeholder="cups, oz etc."
          onChange={handleIngredientChange}
        />
        <br />
        <label htmlFor="name">Ingredient name: </label>
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
        <label htmlFor="instructions">Input Instructions: </label>
        <textarea
          name="instructions"
          // value={instructionsInput}
          value={recipeData.instructions}
          cols="60"
          rows="8"
          placeholder="instructions"
          onChange={handleChange}
        ></textarea>
        {/* <button onClick={handleAddInstruction}>Add Instruction</button> */}
        <br />
        <input type="submit" value="Add Recipe" />
      </form>
      <h3>Ingredients:</h3>
      <ul>{ingredients}</ul>
    </div>
  );
}
