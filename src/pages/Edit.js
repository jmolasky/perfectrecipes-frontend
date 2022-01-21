import { useState } from "react";
import IngredientInputs from "../components/IngredientInputs";
import { handleAddIngredient } from "../services/helperFunctions";
import ImagePreview from "../components/ImagePreview";

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
      {recipeToEdit.image && <ImagePreview recipe={recipeToEdit} />}
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
        <IngredientInputs
          recipe={recipeToEdit}
          setterFunction={setRecipeToEdit}
        />
        <button
          onClick={(e) => {
            handleAddIngredient(e, recipeToEdit, setRecipeToEdit);
          }}
        >
          +
        </button>
        <br />
        <label htmlFor="instructions">Instructions: </label>
        <br />
        <textarea
          name="instructions"
          id=""
          cols="60"
          rows="8"
          placeholder="instructions"
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
