export default function RecipeView(props) {
  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        {props.recipe.name}
      </h1>
      {props.recipe.image && (
        <div className="show-img-container">
          <div
            className="show-img"
            style={{
              position: "relative",
              backgroundImage: `url(${props.recipe.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      )}
      <div className="ing-inst-div">
        <div style={{ marginTop: "1.5rem" }} className="ingredients">
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
