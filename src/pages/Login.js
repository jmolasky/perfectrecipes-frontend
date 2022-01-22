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
      <form style={{ display: "flex", flexDirection: "column", width: "50%" }}>
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
        <button
          disabled={
            loginCredentials.email && loginCredentials.password ? false : true
          }
          onClick={signup}
        >
          Sign Up
        </button>
      </form>
      <br />
      <button onClick={loginWithGoogle}>Log in with Google</button>
    </div>
  );
}
