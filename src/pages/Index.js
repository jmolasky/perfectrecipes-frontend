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
