// import { useEffect } from "react";
// import { Link } from "react-router-dom";

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
        width: "10rem",
        height: "8rem",
        textAlign: "center",
        margin: ".75rem",
        position: "relative",
        backgroundImage: `url(${recipe.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      /> */}
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
        {/* <h3
          style={{
            margin: ".25rem",
            fontSize: ".75rem",
          }}
        > */}
        {recipe.name}
        {/* </h3> */}
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
          border: "1px solid black",
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
