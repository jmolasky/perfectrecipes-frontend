export default function RecipeCard(props) {
  return (
    <div
      className="recipe"
      style={{
        border: "1px solid grey",
        margin: ".75rem",
        textAlign: "center",
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "30%",
          paddingTop: ".025rem",
          paddingBottom: ".025rem",
          bottom: "0",
        }}
      >
        <div
          style={{
            paddingLeft: ".5rem",
            paddingRight: ".5rem",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {props.recipeName}
        </div>
      </div>
    </div>
  );
}
