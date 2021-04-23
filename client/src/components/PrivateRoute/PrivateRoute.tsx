import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getIsLoggedIn } from "~src/utils/auth";

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, path, exact }) => {
  return getIsLoggedIn() ? <Route path={path} exact={exact} component={Component} /> : <Redirect to="/login" />;
};
