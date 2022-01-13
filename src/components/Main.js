import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

export default function Main(props) {
  const [recipes, setRecipes] = useState([]);
  const URL = "https://perfectrecipes-backend.herokuapp.com/";

  const getRecipes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data);
  };

  useEffect(() => getRecipes(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index recipes={recipes} />
        </Route>
        <Route
          path="/:id"
          render={(rp) => <Show {...rp} recipes={recipes} />}
        />
      </Switch>
    </main>
  );
}
