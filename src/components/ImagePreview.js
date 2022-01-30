export default function ImagePreview(props) {
  const handleError = (evt) => {
    evt.target.src = "https://spoonacular.com/recipeImages/157093-556x370.jpg";
  };
  return (
    <div className="img-preview">
      <img
        onError={(e) => {
          handleError(e);
        }}
        src={props.recipe.image}
        alt={props.recipe.name}
      />
    </div>
  );
}
