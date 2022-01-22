import { loginWithGoogle, auth } from "../services/firebase";
import { useRef } from "react";

export default function Login(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const login = (evt) => {
    evt.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  const signup = (evt) => {
    evt.preventDefault();
    try {
      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <form>
        <h1>Sign In</h1>
        <label htmlFor="email">Email</label>
        <br />
        <input ref={emailRef} type="email" placeholder="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input ref={passwordRef} type="password" placeholder="password" />
        <br />
        <button onClick={login}>Sign In</button>
        <button onClick={signup}>Sign Up</button>
      </form>
      <button onClick={loginWithGoogle}>Log in with Google</button>
    </div>
  );
}
