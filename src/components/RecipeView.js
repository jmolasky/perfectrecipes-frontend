import ImagePreview from "./ImagePreview";

export default function RecipeView(props) {
  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "1rem", marginBottom: "2rem" }}
      >
        {props.recipe.name}
      </h1>
      {props.recipe.image && <ImagePreview recipe={props.recipe} />}
      <div className="ing-inst-div">
        <div style={{ marginTop: "1rem" }} className="ingredients">
          <h3>Ingredients</h3>
          <ul>{props.ingredients}</ul>
        </div>
        <div style={{ width: "100%" }} className="instructions">
          <h3>Instructions</h3>
          {props.instructions}
        </div>
      </div>
    </>
  );
}
