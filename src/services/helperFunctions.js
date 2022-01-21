import update from "immutability-helper";

function capitalizeFirstLtr(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const handleIngredientChange = (evt, recipe, setterFunction) => {
  const oldArray = recipe.ingredients;
  const i = evt.target.name;
  const newValue = evt.target.value;
  const newArray = update(oldArray, { [i]: { $set: newValue } });
  setterFunction({
    ...recipe,
    ingredients: newArray,
  });
};

const handleAddIngredient = (evt, recipe, setterFunction) => {
  evt.preventDefault();
  let ingredients = recipe.ingredients;
  ingredients.push("");
  setterFunction({
    ...recipe,
    ingredients: ingredients,
  });
};

const handleRemove = (evt, recipe, setterFunction) => {
  evt.preventDefault();
  const ingredients = recipe.ingredients;
  const i = evt.target.name;
  const newIngredients = update(ingredients, { $splice: [[i, 1]] });
  setterFunction({
    ...recipe,
    ingredients: newIngredients,
  });
};

export {
  capitalizeFirstLtr,
  handleIngredientChange,
  handleRemove,
  handleAddIngredient,
};
