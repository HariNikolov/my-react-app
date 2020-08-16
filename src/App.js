import React, { Component } from "react";
import Home from "./components/Home/Home";
import { withFirebase } from "./components/Firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }

  render() {
    return <Home authUser={this.state.authUser} />;
  }
}

export default withFirebase(App);
