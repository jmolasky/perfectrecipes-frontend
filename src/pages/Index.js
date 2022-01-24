import RecipeCard from "../components/RecipeCard";

export default function Index(props) {
  const handleClick = (recipe) => {
    props.history.push(`/${recipe._id}`);
  };

  const recipes = props.recipes.map((recipe) => (
    <RecipeCard
      key={recipe._id}
      recipe={recipe}
      handleClick={handleClick}
      recipeName={recipe.name}
    />
    // <div
    //   key={recipe._id}
    //   className="recipe"
    //   style={{
    //     border: "1px solid grey",
    //     textAlign: "center",
    //     margin: ".75rem",
    //     position: "relative",
    //     backgroundImage: `url(${recipe.image})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    //   onClick={(e) => {
    //     handleClick(recipe);
    //   }}
    // >
    //   <div
    //     className="recipename-div"
    //     style={{
    //       position: "absolute",
    //       width: "100%",
    //       height: "30%",
    //       bottom: "0",
    //       textAlign: "center",
    //     }}
    //   >
    //     {recipe.name}
    //   </div>
    // </div>
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
