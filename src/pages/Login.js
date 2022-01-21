import { login } from "../services/firebase";

export default function Login(props) {
  return (
    <div className="login">
      <button onClick={login}>Log in with Google</button>
    </div>
  );
}
