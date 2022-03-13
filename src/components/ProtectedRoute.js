import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ ...props }) {
  return (
    <Route {...props}>
      {() => (props.loggedInSavedNews ? props.children : <Redirect to="./" />)}
    </Route>
  );
}

export default ProtectedRoute;
