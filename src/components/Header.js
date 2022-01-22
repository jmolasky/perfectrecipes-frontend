import { Link } from "react-router-dom";
import { logout } from "../services/firebase";

export default function Header(props) {
  return (
    <header className="header">
      <h1 style={{ textAlign: "center" }}>PerfectRecipes</h1>
      <nav className="nav">
        <Link to="/">
          <div>Home</div>
        </Link>
        {props.user && (
          <>
            <Link to="/add">
              <div>Add Recipe</div>
            </Link>
            <Link to="/search">
              <div>Search for a Recipe</div>
            </Link>
            {props.user.displayName && (
              <p>Welcome, {props.user.displayName.split(" ")[0]}!</p>
            )}
            <img
              className="google-user-image"
              src={props.user.photoURL}
              alt={props.user.displayName}
            />
            <button onClick={logout}>Log Out</button>
          </>
        )}
      </nav>
    </header>
  );
}
