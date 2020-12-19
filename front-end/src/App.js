import React, { Fragment, useEffect } from "react";
import AdminHome from "./components/Admin"
import SignIn from "./components/Admin/SingIn"
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './config/routes';
import './App.scss';


const App = () => {

  const RouteWithSubRoutes = (route) => {
    // const { route } = props;
    console.log(route);
    console.log("Hola mudo");
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props, component) => (
          <component {...props} routes={route.routes} />
        )}
      />
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          //<RouteWithSubRoutes key={index} route={route} />
          RouteWithSubRoutes(route);
        })}
      </Switch>
    </BrowserRouter>
  );
}


export default App;
