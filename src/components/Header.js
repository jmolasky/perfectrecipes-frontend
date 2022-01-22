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
            <button onClick={logout}>Log Out</button>
            <img
              className="google-user-image"
              src={props.user.photoURL}
              alt={props.user.displayName}
            />
          </>
        )}
      </nav>
    </header>
  );
}
