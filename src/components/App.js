import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import Create from "./Create";
import Navigation from "./Navigation";
import Home from "./Home";
import View from "./View";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <PrivateRoute
            path="/users"
            render={() => {
              return <Users  />;
            }}
          />
          <PrivateRoute
            path="/create"
            render={({ history,match }) => {
              return <Create history={history} match={match} />;
            }}
          />
          <PrivateRoute
            path="/view/:id"
            render={({ history, match }) => {
              return <View history={history} match={match} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
