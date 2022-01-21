import { Link } from "react-router-dom";
import { logout } from "../services/firebase";

export default function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>PerfectRecipes</div>
      </Link>
      {props.user && (
        <>
          <Link to="/add">
            <div>Add Recipe</div>
          </Link>
          <img
            style={{
              height: "3.125rem",
              width: "3.125rem",
              borderRadius: "50%",
            }}
            src={props.user.photoURL}
            alt={props.user.displayName}
          />
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </nav>
  );
}
