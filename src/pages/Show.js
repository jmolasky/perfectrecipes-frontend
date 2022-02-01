import { capitalizeFirstLtr } from "../services/helperFunctions";
import RecipeView from "../components/RecipeView";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

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

  const instructionsArray = recipe.instructions.split("\n");
  let instructions;
  // if (recipe.instructions.includes("<ol>")) {
  //   const innerHtml = recipe.instructions;
  //   instructions = <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>;
  // } else if (recipe.instructions.charAt(0) !== "1") {
  //   const instructionsArray = recipe.instructions.split("\n");
  //   instructions = instructionsArray.map((instruction, idx) => (
  //     <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
  //       {idx + 1}. {instruction}
  //     </p>
  //   ));
  // } else {
  //   const instructionsArray = recipe.instructions.split("\n");
  //   instructions = instructionsArray.map((instruction, idx) => (
  //     <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
  //       {instruction}
  //     </p>
  //   ));
  // }

  if (recipe.instructions.charAt(0) !== "1") {
    instructions = instructionsArray.map((instruction, idx) => {
      return (
        <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
          {idx + 1}. {instruction}
        </p>
      );
    });
  } else {
    instructions = instructionsArray.map((instruction, idx) => {
      return (
        <p key={idx} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
          {instruction}
        </p>
      );
    });
  }

  return (
    <div className="show" style={{ margin: "1.5rem", color: "white" }}>
      <RecipeView
        recipe={recipe}
        ingredients={ingredientList}
        instructions={instructions}
      />
      {/* <Row className="mt-4 justify-content-center" xs={1} sm={8}>
        <Col md={2} lg={1}>
          <Button
            as="div"
            className="fw-btn w-100 mb-4"
            variant="info"
            onClick={handleEditBtnClick}
          >
            Edit Recipe
          </Button>
        </Col>
        <Col md={2} lg={1}>
          <Button
            as="div"
            className="fw-btn w-100 mb-2"
            variant="outline-warning"
            onClick={handleDelete}
          >
            Delete Recipe
          </Button>
        </Col>
      </Row> */}
      <div className="btn-group">
        <div className="fw-btn">
          <Button variant="info" onClick={handleEditBtnClick}>
            Edit Recipe
          </Button>
        </div>
        <div className="fw-btn">
          <Button variant="outline-warning" onClick={handleDelete}>
            Delete Recipe
          </Button>
        </div>
      </div>
    </div>
  );
}
