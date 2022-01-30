import { capitalizeFirstLtr } from "../services/helperFunctions";
import RecipeView from "../components/RecipeView";
import Button from "react-bootstrap/Button";

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
    <div style={{ margin: "1.5rem", color: "white" }}>
      <RecipeView
        recipe={recipe}
        ingredients={ingredientList}
        instructions={instructions}
      />
      <div id="edit-delete">
        <Button variant="info" id="edit" onClick={handleEditBtnClick}>
          Edit Recipe
        </Button>
        <Button variant="outline-warning" id="delete" onClick={handleDelete}>
          Delete Recipe
        </Button>
      </div>
    </div>
  );
}
