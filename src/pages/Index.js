import RecipeCard from "../components/RecipeCard";
import Container from "react-bootstrap/Container";
import BootstrapCard from "../components/BootstrapCard";

export default function Index(props) {
  const handleClick = (recipe) => {
    props.history.push(`/${recipe._id}`);
  };

  const recipes = props.recipes.map((recipe) => (
    // <RecipeCard
    //   key={recipe._id}
    //   recipe={recipe}
    //   handleClick={handleClick}
    //   recipeName={recipe.name}
    // />
    <BootstrapCard
      key={recipe._id}
      recipe={recipe}
      handleClick={handleClick}
      recipeName={recipe.name}
    />
  ));

  const loaded = () => {
    return (
      <Container>
        {props.user.displayName && (
          <h2 style={{ textAlign: "center" }}>
            Welcome, {props.user.displayName.split(" ")[0]}!
          </h2>
        )}
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
      </Container>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.recipes ? loaded() : loading();
}
