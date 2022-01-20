import { useState } from "react";
import update from "immutability-helper";
import {
  capitalizeFirstLtr,
  getIngredientList,
} from "../services/helperFunctions";

export default function Edit(props) {
  const id = props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe._id === id);

  const [recipeToEdit, setRecipeToEdit] = useState(recipe);

  const handleChange = (evt) => {
    setRecipeToEdit({
      ...recipeToEdit,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleIngredientChange = (evt) => {
    const oldArray = recipeToEdit.ingredients;
    const i = evt.target.name;
    const newValue = evt.target.value;
    const newArray = update(oldArray, { [i]: { $set: newValue } });
    setRecipeToEdit({
      ...recipeToEdit,
      ingredients: newArray,
    });
  };

  const ingredientsArray = recipeToEdit.ingredients.map((ingredient, idx) => {
    return (
      <input
        type="text"
        key={idx}
        name={idx}
        value={ingredient}
        onChange={handleIngredientChange}
      />
    );
  });

  const handleCancel = (evt) => {
    evt.preventDefault();
    props.history.push(`/${id}`);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.updateRecipes(recipeToEdit, id);
    props.history.push(`/${id}`);
  };

  return (
    <div className="edit" style={{ margin: "1rem" }}>
      {recipeToEdit.image && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              textAlign: "center",
              width: "35%",
              height: "auto",
              margin: "0 auto",
            }}
            src={recipeToEdit.image}
            alt={recipeToEdit.name}
          />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={recipeToEdit.name}
          onChange={handleChange}
        />
        <br />
        {}
        <label htmlFor="image">Image URL: </label>
        <br />
        <input
          type="text"
          name="image"
          value={recipeToEdit.image}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="ingredients">Ingredients: </label>
        <br />
        {/* <input
          type="text"
          name="ingredients"
          value={recipeToEdit.ingredients}
          onChange={handleChange}
        /> */}
        {ingredientsArray}
        <br />
        <label htmlFor="instructions">Instructions: </label>
        <br />
        <textarea
          name="instructions"
          id=""
          cols="50"
          rows="8"
          value={recipeToEdit.instructions}
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit Changes" />
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}
