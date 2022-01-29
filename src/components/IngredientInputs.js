import {
  handleIngredientChange,
  handleRemove,
} from "../services/helperFunctions";
import Button from "react-bootstrap/Button";

export default function IngredientInputs(props) {
  const ingredientsArray = props.recipe.ingredients.map((ingredient, idx) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space evenly",
          width: "100%",
          marginBottom: "1rem",
        }}
        key={idx}
      >
        <input
          style={{
            width: "85%",
            borderRadius: "4px",
            height: "3rem",
            paddingLeft: ".75rem",
          }}
          type="text"
          name={idx}
          value={ingredient}
          onChange={(e) => {
            handleIngredientChange(e, props.recipe, props.setterFunction);
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "15%",
          }}
        >
          <Button
            variant="outline-danger"
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
            }}
            name={idx}
            onClick={(e) => {
              handleRemove(e, props.recipe, props.setterFunction);
            }}
          >
            -
          </Button>
        </div>
      </div>
    );
  });
  return <div style={{ width: "100%" }}>{ingredientsArray}</div>;
}
