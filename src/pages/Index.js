// import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index(props) {
  // useEffect(() => props.getRecipes(), []);

  const loaded = () => {
    return props.recipes.map((recipe) => (
      <div key={recipe._id} className="recipe">
        <Link to={`/${recipe._id}`}>
          <h1>{recipe.name}</h1>
        </Link>
        <img src={recipe.image} alt={recipe.name} />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.recipes ? loaded() : loading();
}
