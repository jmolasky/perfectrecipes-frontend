import {
  handleIngredientChange,
  handleRemove,
} from "../services/helperFunctions";

export default function IngredientInputs(props) {
  const ingredientsArray = props.recipe.ingredients.map((ingredient, idx) => {
    return (
      <div key={idx}>
        <input
          type="text"
          name={idx}
          value={ingredient}
          onChange={(e) => {
            handleIngredientChange(e, props.recipe, props.setterFunction);
          }}
        />
        <button
          name={idx}
          onClick={(e) => {
            handleRemove(e, props.recipe, props.setterFunction);
          }}
        >
          -
        </button>
      </div>
    );
  });
  return <>{ingredientsArray}</>;
}
