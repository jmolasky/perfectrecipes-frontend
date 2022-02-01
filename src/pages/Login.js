import { loginWithGoogle, auth } from "../services/firebase";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Login(props) {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.name]: evt.target.value,
    });
  };

  const login = (evt) => {
    evt.preventDefault();
    try {
      auth.signInWithEmailAndPassword(
        loginCredentials.email,
        loginCredentials.password
      );
    } catch (err) {
      console.log(err);
    }
  };

  const signup = (evt) => {
    evt.preventDefault();
    try {
      auth.createUserWithEmailAndPassword(
        loginCredentials.email,
        loginCredentials.password
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        color: "white",
      }}
      className="login"
    >
      <form
        id="login-form"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "22rem",
          width: "100%",
          marginTop: "2rem",
          fontSize: "1.5rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Sign In</h1>
        <label htmlFor="email">Email</label>
        <input
          className="mb-2"
          style={{ borderRadius: "4px", paddingLeft: ".75rem" }}
          name="email"
          value={loginCredentials.email}
          placeholder="email"
          type="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="mb-2"
          style={{ borderRadius: "4px", paddingLeft: ".75rem" }}
          name="password"
          value={loginCredentials.password}
          placeholder="password"
          type="password"
          onChange={handleChange}
        />
        <Button
          style={{ height: "3rem", fontSize: "1.5rem", marginTop: "1rem" }}
          disabled={
            loginCredentials.email && loginCredentials.password ? false : true
          }
          onClick={login}
        >
          Sign In
        </Button>
        <h5
          style={{
            textAlign: "center",
            padding: "none",
            backgroundColor: "none",
            marginTop: ".75rem",
            marginBottom: ".75rem",
          }}
        >
          Not yet registered?{" "}
          <span>
            <Button
              variant="link"
              style={{
                padding: "0",
                fontsize: "1.5rem",
                color: "white",
              }}
              disabled={
                loginCredentials.email && loginCredentials.password
                  ? false
                  : true
              }
              onClick={signup}
            >
              Sign Up
            </Button>
          </span>
        </h5>
      </form>
      <Button
        style={{ padding: ".75rem" }}
        variant="outline-light"
        onClick={loginWithGoogle}
      >
        Sign in with Google
      </Button>
      <br />
    </div>
  );
}
