import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helper/auth";

import { Provider } from "react-redux";
import store from "./store1";

import AppNavbar from "./components/layout/AppNavbar";
import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import ClientDetail from "./components/clients/ClientDetail";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";
import Settings from "./components/setting/Settings";
import Register from "./components/auth/Register";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                component={UserIsAuthenticated(Dashboard)}
              />
              <Route
                exact
                path="/client/add"
                component={UserIsAuthenticated(AddClient)}
              />
              <Route
                exact
                path="/client/:id"
                component={UserIsAuthenticated(ClientDetail)}
              />
              <Route
                exact
                path="/client/edit/:id"
                component={UserIsAuthenticated(EditClient)}
              />
              <Route
                exact
                path="/login"
                component={UserIsNotAuthenticated(Login)}
              />
              <Route
                exact
                path="/register"
                component={UserIsNotAuthenticated(Register)}
              />
              <Route
                exact
                path="/settings"
                component={UserIsAuthenticated(Settings)}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
