import React, { Component } from "react";
import { getJwt } from "../helpers/jwt";
import axios from "axios";
import cookies from "react-cookies";
import { withRouter } from "react-router-dom";

class AuthenticationComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      userId: undefined
    };
  }
  componentDidMount() {
    const jwt = getJwt();
    console.log(jwt);
    if (!jwt) {
      this.props.history.push("./LoginPage");
    }
    axios
      .post("http://localhost:5000/verify", {jwt} )
      .then(res => {
          console.log(res.data);
        this.setState({ userId: res.data });
      })
      .catch(err => {
        console.log(err);
        cookies.remove("user_token");
        this.props.history.push("./LoginPage");
      });
  }

  render() {
    if (this.state.userId === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(AuthenticationComponent);
