import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NoMatchPage from "./components/common/NoMatchPage";
import DashBoard from "./containers/DashBoard";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <DashBoard />} />
        <Route exact path="/login" render={() => <div>Loginnnn</div>} />
        <Route component={NoMatchPage} />
      </Switch>
    );
  }
}
