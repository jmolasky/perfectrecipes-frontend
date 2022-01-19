import { useState } from "react";
import {
  capitalizeFirstLtr,
  getIngredientList,
} from "../services/helperFunctions";

export default function Edit(props) {
  const id = props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe._id === id);

  const [recipeToEdit, setRecipeToEdit] = useState(recipe);

  const ingredientList = getIngredientList(recipeToEdit.ingredients);

  const handleChange = (evt) => {
    setRecipeToEdit({
      ...recipeToEdit,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.updateRecipes(recipeToEdit, id);
    props.history.push(`/${id}`);
  };

  return (
    <div style={{ margin: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>{recipeToEdit.name}</h1>
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
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>{ingredientList}</ul>
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        <textarea
          name="instructions"
          id=""
          cols="50"
          rows="8"
          value={recipeToEdit.instructions}
          onChange={handleChange}
        ></textarea>
      </div>
      <button onClick={handleSubmit}>Submit Changes</button>
    </div>
  );
}
