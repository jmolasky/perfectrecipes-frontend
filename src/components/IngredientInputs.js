import {
  handleIngredientChange,
  handleRemove,
} from "../services/helperFunctions";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function IngredientInputs(props) {
  const ingredientsArray = props.recipe.ingredients.map((ingredient, idx) => {
    return (
      <Col style={{ display: "flex" }} className="mb-2" sm={6} lg={4} key={idx}>
        <input
          className="ingredient-input"
          style={{
            width: "85%",
            borderRadius: "4px",
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
            as="button"
            variant="outline-danger"
            className="remove-btn"
            name={idx}
            onClick={(e) => {
              handleRemove(e, props.recipe, props.setterFunction);
            }}
          >
            -
          </Button>
        </div>
      </Col>
    );
  });
  return <Row>{ingredientsArray}</Row>;
}
