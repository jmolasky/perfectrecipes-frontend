import { useState } from "react";
import IngredientInputs from "../components/IngredientInputs";
import { handleAddIngredient } from "../services/helperFunctions";
import ImagePreview from "../components/ImagePreview";
import InstructionsEdit from "../components/InstructionsEdit";
import Button from "react-bootstrap/Button";

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
    <div className="edit" style={{ margin: "1rem", color: "white" }}>
      {recipeToEdit.image && <ImagePreview recipe={recipeToEdit} />}
      <form className="add-edit-form">
        <label htmlFor="name">Recipe Name: </label>
        <input
          style={{ width: "100%", paddingLeft: ".75rem" }}
          type="text"
          name="name"
          value={recipeToEdit.name}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          style={{ width: "100%", paddingLeft: ".75rem" }}
          type="text"
          name="image"
          value={recipeToEdit.image}
          onChange={handleChange}
        />
        <label htmlFor="ingredients">Ingredients: </label>
        <IngredientInputs
          recipe={recipeToEdit}
          setterFunction={setRecipeToEdit}
        />
        <Button
          className="add-ingredient-button"
          variant="success"
          onClick={(e) => {
            handleAddIngredient(e, recipeToEdit, setRecipeToEdit);
          }}
        >
          +
        </Button>
        <label htmlFor="instructions">Instructions: </label>
        <InstructionsEdit recipe={recipeToEdit} handleChange={handleChange} />
        <Button className="add-btn" onClick={handleSubmit}>
          Submit Changes
        </Button>
        <input type="submit" value="Submit Changes" />
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
}
