import { logout } from "../services/firebase";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";

export default function Header(props) {
  return (
    <header className="header">
      <h1 style={{ textAlign: "center" }}>PerfectRecipes</h1>
      <Navbar bg="light" expand="md" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              {props.user && (
                <>
                  <LinkContainer to="/add">
                    <Nav.Link>Add Recipe</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/search">
                    <Nav.Link>Search for Recipe</Nav.Link>
                  </LinkContainer>
                  <Nav.Link>
                    <Image
                      // className="google-user-image"
                      // className="d-inline-block align-top"
                      roundedCircle
                      // borderradius="50%"
                      width="30rem"
                      height="30rem"
                      src={props.user.photoURL}
                      alt={props.user.displayName}
                    />
                  </Nav.Link>
                  <Nav.Link onClick={logout}>Log Out</Nav.Link>
                  {/* <button onClick={logout}>Log Out</button> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
