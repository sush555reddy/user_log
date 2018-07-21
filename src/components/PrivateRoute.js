import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import {authService} from "../service/authService";
class PrivateRoute extends Component {
  render() {
    return (
      <span>
        {authService.checkUserStatus() ? 
          <Route path={this.props.path} render={this.props.render} />
         : <Redirect to="/" />
        }
      </span>
    );
  }
}

export default PrivateRoute;
