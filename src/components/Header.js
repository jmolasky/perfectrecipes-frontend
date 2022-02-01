import { logout } from "../services/firebase";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function Header(props) {
  return (
    <Navbar
      // className="header"
      bg="dark"
      variant="dark"
      expand="sm"
      sticky="top"
      style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <Navbar.Brand>
        <img
          src="/measuring-spoons.png"
          alt="Measuring spoons logo"
          height="30rem"
          style={{ marginRight: ".5rem" }}
        />
        PerfectRecipes
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="justify-content-end">
          <NavLink className="nav-link" to="/" exact={true}>
            Home
          </NavLink>
          {props.user && (
            <>
              <NavLink className="nav-link" to="/add">
                Add Recipe
              </NavLink>
              <NavLink className="nav-link" to="/search">
                Search for Recipe
              </NavLink>
              {props.user.photoURL && (
                <Nav.Link>
                  <Image
                    roundedCircle
                    width="30rem"
                    height="30rem"
                    src={props.user.photoURL}
                    alt={props.user.displayName}
                  />
                </Nav.Link>
              )}
              <Nav.Link onClick={logout}>Log Out</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
