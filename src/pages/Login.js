import { loginWithGoogle, auth } from "../services/firebase";
import { useState } from "react";

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
      }}
      className="login"
    >
      <form
        style={{ display: "flex", flexDirection: "column", minWidth: "15rem" }}
      >
        <h1 style={{ textAlign: "center" }}>Sign In</h1>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={loginCredentials.email}
          type="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={loginCredentials.password}
          type="password"
          onChange={handleChange}
        />
        <button
          disabled={
            loginCredentials.email && loginCredentials.password ? false : true
          }
          onClick={login}
        >
          Sign In
        </button>
        <h6
          style={{
            textAlign: "center",
            padding: "none",
            backgroundColor: "none",
          }}
        >
          Not yet registered?{" "}
          <span>
            <button
              className="signup-btn"
              style={{ border: "none", background: "none", padding: "0" }}
              disabled={
                loginCredentials.email && loginCredentials.password
                  ? false
                  : true
              }
              onClick={signup}
            >
              Sign up
            </button>
          </span>
        </h6>
      </form>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  );
}
