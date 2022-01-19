import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Add from "../pages/Add";
import Edit from "../pages/Edit";

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
    getRecipes();
  };

  const deleteRecipes = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getRecipes();
  };

  const updateRecipes = async (recipe, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(recipe),
    });
    getRecipes();
  };

  useEffect(() => getRecipes(), []);

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => (
            <Index {...rp} recipes={recipes} getRecipes={getRecipes} />
          )}
        />
        <Route
          path="/add"
          render={(rp) => <Add {...rp} createRecipes={createRecipes} />}
        ></Route>
        <Route
          path="/:id/edit"
          render={(rp) => (
            <Edit {...rp} recipes={recipes} updateRecipes={updateRecipes} />
          )}
        />
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
