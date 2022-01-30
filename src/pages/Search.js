import { useState, useEffect } from "react";
import BootstrapCard from "../components/BootstrapCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Search(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = "https://api.spoonacular.com/recipes/complexSearch";

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState("");

  const handleClick = (recipe) => {
    props.history.push(`/search/${recipe.id}`);
  };

  useEffect(() => {
    const storage = JSON.parse(window.localStorage.getItem("storage"));
    storage != null ? setResults(storage) : setResults([]);
  }, []);

  const recipeResults = results.map((result) => (
    <BootstrapCard
      key={result.id}
      recipe={result}
      handleClick={handleClick}
      recipeName={result.title}
    />
  ));

  const handleSearch = async (evt) => {
    evt.preventDefault();
    const response = await fetch(`${url}?apiKey=${API_KEY}&query=${query}`);
    const data = await response.json();
    data.results.length === 0 ? setNoResults("No Results") : setNoResults("");
    window.localStorage.setItem("storage", JSON.stringify(data.results));
    setResults(data.results);
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <Container>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginTop: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        Search for a Recipe
      </h1>
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" name="query" value={query} onChange={handleChange} />
        <br />
        <Button type="submit" disabled={query ? false : true}>
          Search
        </Button>
      </form>
      {noResults && (
        <div style={{ textAlign: "center", marginTop: "1rem", color: "white" }}>
          {noResults}
        </div>
      )}
      <Row style={{ justifyContent: "center" }}>{recipeResults}</Row>
    </Container>
  );
}
