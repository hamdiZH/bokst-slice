import { useSelector } from "react-redux";
import { Component } from "react";
import { Redirect, BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import Login from "../Screens/Auth/Login/Login";
import Dashboard from "../Screens/Admin/Dashboard/Dashboard";
import Events from "../Screens/Admin/Events/Events";
import SignupPromoter from "../Screens/Auth/Promoter/SignupPromoter/SignupPromoter";
import SignupCoach from "../Screens/Auth/Coach/SignupCoach/SignupCoach";
import Layout from "../Components/Layout/Layout";
import Cookies from "js-cookie";
import AllEvents from "../Screens/Admin/Events/AllEvents";
import ClosedEvents from "../Screens/Admin/Events/ClosedEvents";
const Router = () => {
  const user = useSelector((store) => store.login.loginDataComes.data);

  const GraduatedRoute = ({
    component: Component,
    authorizedRoles,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) =>
        authorizedRoles.includes(user?.user_role) ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );

  return (
    <Switch>
      {!Cookies.get("accessToken") ? (
        <Switch>
          <Route path={"/login"} exact component={Login} />
          <Route path={"/signup-promoter"} component={SignupPromoter} />
          <Route path={"/signup-coach"} component={SignupCoach} />
        </Switch>
      ) : (
        <Layout>
          <Switch>
            <Route
              path={"/"}
              exact
              component={Dashboard}
              authorizedRoles={["F", "C"]}
            />
            <Route
              path={"/events"}
              component={Events}
              authorizedRoles={["F", "C"]}
            />
            <Route
              path={"all-events"}
              component={AllEvents}
              authorizedRoles={["F", "C"]}
            />
            <Route path={"closed-events"} component={ClosedEvents} />
          </Switch>
        </Layout>
      )}
    </Switch>
  );
};

export default Router;
