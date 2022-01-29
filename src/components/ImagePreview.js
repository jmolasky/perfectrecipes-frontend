export default function ImagePreview(props) {
  const handleError = (evt) => {
    evt.target.src = "https://spoonacular.com/recipeImages/157093-556x370.jpg";
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        onError={(e) => {
          handleError(e);
        }}
        style={{
          textAlign: "center",
          width: "75%",
          maxWidth: "30rem",
          height: "auto",
          margin: "0 auto",
          marginBottom: "1.5rem",
        }}
        src={props.recipe.image}
        alt={props.recipe.name}
      />
    </div>
  );
}
