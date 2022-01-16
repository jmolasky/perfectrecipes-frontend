function capitalizeFirstLtr(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getIngredientList(ingredients) {
  return ingredients.map((ingredient, idx) => {
    let fullIngredient = ingredient.name;

    if (ingredient.measurement)
      fullIngredient = `${ingredient.measurement} ${fullIngredient}`;

    if (ingredient.amount)
      fullIngredient = `${ingredient.amount} ${fullIngredient}`;

    fullIngredient = capitalizeFirstLtr(fullIngredient);
    return <li key={idx}>{fullIngredient}</li>;
  });
}

export { capitalizeFirstLtr, getIngredientList };
