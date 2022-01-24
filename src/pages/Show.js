import { capitalizeFirstLtr } from "../services/helperFunctions";

export default function Show(props) {
  const id = props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe._id === id);
  // const instructionsArray = recipe.instructions.split("\n");

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

  let instructions;
  if (recipe.instructions.includes("<ol>")) {
    const innerHtml = recipe.instructions;
    instructions = <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>;
  } else if (recipe.instructions.charAt(0) !== "1") {
    const instructionsArray = recipe.instructions.split("\n");
    instructions = instructionsArray.map((instruction, idx) => (
      <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
        {idx + 1}. {instruction}
      </p>
    ));
  } else {
    const instructionsArray = recipe.instructions.split("\n");
    instructions = instructionsArray.map((instruction, idx) => (
      <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
        {instruction}
      </p>
    ));
  }

  return (
    <div style={{ margin: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>{recipe.name}</h1>
      {recipe.image && (
        <div className="show-img-container">
          <div
            className="show-img"
            style={{
              position: "relative",
              backgroundImage: `url(${recipe.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      )}
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>{ingredientList}</ul>
      </div>
      <div style={{ width: "100%" }} className="instructions">
        <h3>Instructions</h3>
        {instructions}
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
