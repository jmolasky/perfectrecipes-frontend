import { capitalizeFirstLtr } from "../services/helperFunctions";

export default function Show(props) {
  const id = props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe._id === id);

  const handleDelete = () => {
    props.deleteRecipes(id);
    props.history.push("/");
  };

  const handleEditBtnClick = () => {
    props.history.push(`/${id}/edit`);
  };

  const ingredientList = recipe.ingredients.map((ingredient, idx) => (
    <li key={idx}>{capitalizeFirstLtr(ingredient)}</li>
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
        <p style={{ whiteSpace: "pre" }}>{recipe.instructions}</p>
      </div>
      <button id="delete" onClick={handleDelete}>
        Delete Recipe
      </button>
      <button id="edit" onClick={handleEditBtnClick}>
        Edit Recipe
      </button>
    </div>
  );
}
