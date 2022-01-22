import { useEffect, useState, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import Login from "../pages/Login";

export default function Main(props) {
  const [recipes, setRecipes] = useState([]);
  const getRecipesRef = useRef();

  const URL = "https://perfectrecipes-backend.herokuapp.com/";

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

  // useEffect(() => getRecipes(), []);
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
        <Route
          exact
          path="/"
          render={(rp) =>
            props.user ? (
              <Index {...rp} recipes={recipes} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/add"
          render={(rp) =>
            props.user ? (
              <Add {...rp} user={props.user} createRecipes={createRecipes} />
            ) : (
              <Redirect to="/login" />
            )
          }
        ></Route>
        <Route
          path="/:id/edit"
          render={(rp) =>
            props.user ? (
              <Edit
                {...rp}
                recipes={recipes}
                user={props.user}
                updateRecipes={updateRecipes}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/:id"
          render={(rp) =>
            props.user ? (
              <Show
                {...rp}
                recipes={recipes}
                user={props.user}
                deleteRecipes={deleteRecipes}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </main>
  );
}
