import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Search(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = "https://api.spoonacular.com/recipes/complexSearch";

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState("");

  const handleClick = (id) => {
    props.history.push(`/search/${id}`);
  };

  const recipeResults = results.map((result) => {
    return (
      <RecipeCard
        key={result.id}
        handleClick={handleClick}
        recipe={result}
        recipeName={result.title}
      />
    );
  });

  const handleSearch = async (evt) => {
    evt.preventDefault();
    const response = await fetch(`${url}?apiKey=${API_KEY}&query=${query}`);
    const data = await response.json();
    data.results.length === 0 ? setNoResults("No Results") : setNoResults("");
    setResults(data.results);
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <div id="search">
      <h1 style={{ textAlign: "center" }}>Search for a recipe</h1>
      <form style={{ textAlign: "center" }}>
        <input type="text" name="query" value={query} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </form>
      {noResults && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          {noResults}
        </div>
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
        {recipeResults}
      </div>
    </div>
  );
}
