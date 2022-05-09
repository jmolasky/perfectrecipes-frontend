import { Route, Redirect } from "react-router-dom";
import Loading from "../pages/Loading";

export default function PrivateRoute({ component: Component, user, isLoading, ...rest }) {
  if(isLoading) return <Loading />;
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
