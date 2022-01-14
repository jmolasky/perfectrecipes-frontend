export default function Show(props) {
  const id = props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe._id === id);
  function capitalizeFirstLtr(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const ingredientList = recipe.ingredients.map((ingredient) => {
    let fullIngredient;
    let prefix;
    if (ingredient.measurement || ingredient.amount) {
      prefix = ingredient.measurement
        ? ingredient.measurement
        : ingredient.amount;
      fullIngredient = capitalizeFirstLtr(`${prefix} ${ingredient.name}`);
    } else {
      fullIngredient = capitalizeFirstLtr(ingredient.name);
    }
    return <li>{fullIngredient}</li>;
  });

  const instructions = recipe.instructions.map((instruction) => (
    <li>{capitalizeFirstLtr(instruction)}</li>
  ));

  return (
    <div classaName="recipe">
      <h1>{recipe.name}</h1>
      {recipe.image && <img src={recipe.image} alt={recipe.name} />}
      <h3>Ingredients</h3>
      <ul>{ingredientList}</ul>
      <br />
      <h3>Instructions</h3>
      <ol>{instructions}</ol>
    </div>
  );
}
