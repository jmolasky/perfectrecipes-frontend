export default function Show(props) {
  const id = props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe._id === id);

  const capitalizeFirstLtr = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleClick = () => {
    props.deleteRecipes(id);
    props.history.push("/");
  };

  const ingredientList = recipe.ingredients.map((ingredient, idx) => {
    let fullIngredient = ingredient.name;

    if (ingredient.measurement)
      fullIngredient = `${ingredient.measurement} ${fullIngredient}`;

    if (ingredient.amount)
      fullIngredient = `${ingredient.amount} ${fullIngredient}`;

    fullIngredient = capitalizeFirstLtr(fullIngredient);
    return <li key={idx}>{fullIngredient}</li>;
  });

  const instructions = recipe.instructions.map((instruction, idx) => (
    <li key={idx}>{capitalizeFirstLtr(instruction)}</li>
  ));

  return (
    <div className="recipe">
      <h1>{recipe.name}</h1>
      {recipe.image && <img src={recipe.image} alt={recipe.name} />}
      <h3>Ingredients</h3>
      <ul>{ingredientList}</ul>
      <br />
      <h3>Instructions</h3>
      <ol>{instructions}</ol>
      <button id="delete" onClick={handleClick}>
        Delete Recipe
      </button>
    </div>
  );
}
