import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Add from "../pages/Add";

export default function Main(props) {
  const [recipes, setRecipes] = useState([]);
  const URL = "https://perfectrecipes-backend.herokuapp.com/";

  const getRecipes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data);
  };

  const createRecipes = async (recipe) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(recipe),
    });
  };

  const deleteRecipes = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getRecipes();
  };

  useEffect(() => getRecipes(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index recipes={recipes} />
        </Route>
        <Route path="/add">
          <Add createRecipes={createRecipes} />
        </Route>
        <Route
          path="/:id"
          render={(rp) => (
            <Show {...rp} recipes={recipes} deleteRecipes={deleteRecipes} />
          )}
        />
      </Switch>
    </main>
  );
}
