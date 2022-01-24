export default function RecipeCard(props) {
  return (
    <div
      className="recipe"
      style={{
        border: "1px solid grey",
        textAlign: "center",
        margin: ".75rem",
        position: "relative",
        backgroundImage: `url(${props.recipe.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={(e) => {
        props.handleClick(props.recipe);
      }}
    >
      <div
        className="recipename-div"
        style={{
          position: "absolute",
          width: "100%",
          height: "30%",
          bottom: "0",
          textAlign: "center",
        }}
      >
        {props.recipeName}
      </div>
    </div>
  );
}
