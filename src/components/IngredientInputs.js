import {
  handleIngredientChange,
  handleRemove,
} from "../services/helperFunctions";

export default function IngredientInputs(props) {
  const ingredientsArray = props.recipe.ingredients.map((ingredient, idx) => {
    return (
      <div style={{ width: "100%" }} key={idx}>
        <input
          style={{ width: "90%" }}
          type="text"
          name={idx}
          value={ingredient}
          onChange={(e) => {
            handleIngredientChange(e, props.recipe, props.setterFunction);
          }}
        />
        <button
          style={{ width: "10%" }}
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
  return <div style={{ width: "100%" }}>{ingredientsArray}</div>;
}
