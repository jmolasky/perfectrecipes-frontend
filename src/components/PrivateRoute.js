import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(rp) => {
        return user ? (
          <Component user={user} {...rest} {...rp} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
