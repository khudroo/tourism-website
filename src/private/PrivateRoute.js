import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isPending } = useAuth();

  if (isPending) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mt-3">
              <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
