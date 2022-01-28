import RecipeCard from "../components/RecipeCard";
import Container from "react-bootstrap/Container";
import BootstrapCard from "../components/BootstrapCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    // <Col key={recipe._id} className="mb-4 recipe-card" sm={4} md={3} lg={2}>
    <BootstrapCard
      key={recipe._id}
      recipe={recipe}
      handleClick={handleClick}
      recipeName={recipe.name}
    />
    // </Col>
  ));

  const loaded = () => {
    return (
      // <Container>
      //   {props.user.displayName && (
      //     <h2 style={{ textAlign: "center" }}>
      //       Welcome, {props.user.displayName.split(" ")[0]}!
      //     </h2>
      //   )}
      //   <div
      //     id="recipes-container"
      //     style={{
      //       display: "flex",
      //       flexWrap: "wrap",
      //       alignItems: "center",
      //       justifyContent: "center",
      //     }}
      //   >
      //     {recipes}
      //   </div>
      // </Container>
      <Container>
        {props.user.displayName && (
          <h2 style={{ textAlign: "center" }}>
            Welcome, {props.user.displayName.split(" ")[0]}!
          </h2>
        )}
        {/* <Container className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {recipes}
        </Container> */}
        <Row>{recipes}</Row>
      </Container>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.recipes ? loaded() : loading();
}
