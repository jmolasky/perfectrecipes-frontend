import { useEffect, useState, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Search from "../pages/Search";
import RecipeDetails from "../pages/RecipeDetails";

export default function Main(props) {
  const [recipes, setRecipes] = useState([]);
  const getRecipesRef = useRef();

  const URL = "https://perfectrecipes-backend.up.railway.app/";
  // const URL = "https://perfectrecipes-backend.herokuapp.com/";
  // const URL = "http://localhost:3001/";

  const getRecipes = async () => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setRecipes(data);
    // window.localStorage.setItem("recipes", JSON.stringify(data));
  };

  const createRecipes = async (recipe) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(recipe),
    });
    getRecipes();
  };

  const deleteRecipes = async (id) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    await fetch(URL + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    getRecipes();
  };

  const updateRecipes = async (recipe, id) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(recipe),
    });
    getRecipes();
  };

  useEffect(() => {
    getRecipesRef.current = getRecipes;
  });

  // is this code ok?
  useEffect(() => {
    if (props.user) {
      getRecipesRef.current();
    }
  }, [props.user]);

  return (
    <main>
      <Switch>
        <Route
          path="/login"
          render={(rp) => (props.user ? <Redirect to="/" /> : <Login />)}
        />
        <PrivateRoute
          exact
          path="/"
          user={props.user}
          recipes={recipes}
          isLoading={props.isLoading}
          component={Index}
        />
        <PrivateRoute
          path="/add"
          user={props.user}
          url={URL}
          isLoading={props.isLoading}
          createRecipes={createRecipes}
          component={Add}
        />
        <PrivateRoute
          exact
          path="/search"
          user={props.user}
          isLoading={props.isLoading}
          component={Search}
        />
        <PrivateRoute
          path="/search/:id"
          user={props.user}
          isLoading={props.isLoading}
          createRecipes={createRecipes}
          component={RecipeDetails}
        />
        <PrivateRoute
          path="/:id/edit"
          user={props.user}
          recipes={recipes}
          isLoading={props.isLoading}
          updateRecipes={updateRecipes}
          component={Edit}
        />
        <PrivateRoute
          path="/:id"
          user={props.user}
          recipes={recipes}
          isLoading={props.isLoading}
          deleteRecipes={deleteRecipes}
          component={Show}
        />
      </Switch>
    </main>
  );
}
