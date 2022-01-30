import Container from "react-bootstrap/Container";
import BootstrapCard from "../components/BootstrapCard";
import Row from "react-bootstrap/Row";

export default function Index(props) {
  const handleClick = (recipe) => {
    props.history.push(`/${recipe._id}`);
  };

  const recipes = props.recipes.map((recipe) => (
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
          <h2
            style={{
              textAlign: "center",
              color: "white",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            Welcome, {props.user.displayName.split(" ")[0]}!
          </h2>
        )}
        <Row style={{ justifyContent: "center" }}>{recipes}</Row>
      </Container>
    );
  };

  const loading = () => {
    return <h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>;
  };
  return props.recipes ? loaded() : loading();
}
