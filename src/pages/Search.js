import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = "https://api.spoonacular.com/recipes/complexSearch";

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const recipeResults = results.map((result, idx) => {
    return (
      <div style={{ width: "100%" }} key={result.id}>
        <img src={result.image} alt="" />
        <Link to={`/search/${result.id}`}>{result.title}</Link>
      </div>
    );
  });
  const handleSearch = async (evt) => {
    evt.preventDefault();
    const response = await fetch(`${url}?apiKey=${API_KEY}&query=${query}`);
    const data = await response.json();
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
      <div>{recipeResults}</div>
    </div>
  );
}
