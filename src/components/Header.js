import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>PerfectRecipes</div>
      </Link>
      <Link to="/add">
        <div>Add Recipe</div>
      </Link>
    </nav>
  );
}
