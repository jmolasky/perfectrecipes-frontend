import ImagePreview from "./ImagePreview";

export default function RecipeView(props) {
  return (
    <>
      <h1 className="show-h1">
        <a
          target="_blank"
          rel="noreferrer"
          href={props.recipe.url}
          alt={`URL for ${props.recipe.name}`}
        >
          {props.recipe.name}
        </a>
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
