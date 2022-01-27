import { useState, useEffect } from "react";
import { auth } from "./services/firebase";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //useEffect only runs once but it sets a subscription that sets the user whenever auth state changes
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} />
    </div>
  );
}

export default App;
