export default function Index(props) {
  const handleClick = (recipe) => {
    props.history.push(`/${recipe._id}`);
  };

  const recipes = props.recipes.map((recipe) => (
    <div
      key={recipe._id}
      className="recipe"
      onClick={() => handleClick(recipe)}
      title={recipe.name}
      style={{
        textAlign: "center",
        margin: ".75rem",
        position: "relative",
        backgroundImage: `url(${recipe.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        {recipe.name}
      </div>
    </div>
  ));

  const loaded = () => {
    return (
      <div
        id="recipes-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {recipes}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.recipes ? loaded() : loading();
}
