import {
  capitalizeFirstLtr,
  getIngredientList,
} from "../services/helperFunctions";

export default function Edit(props) {
  const id = props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe._id === id);

  const ingredientList = getIngredientList(recipe.ingredients);

  const instructions = recipe.instructions.map((instruction, idx) => (
    <li key={idx}>{capitalizeFirstLtr(instruction)}</li>
  ));

  return (
    <div style={{ margin: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>{recipe.name}</h1>
      {recipe.image && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              textAlign: "center",
              width: "35%",
              height: "auto",
              margin: "0 auto",
            }}
            src={recipe.image}
            alt={recipe.name}
          />
        </div>
      )}
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>{ingredientList}</ul>
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        <ol>{instructions}</ol>
      </div>
    </div>
  );
}