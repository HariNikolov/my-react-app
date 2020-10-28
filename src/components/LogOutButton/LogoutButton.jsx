import React from "react";
import { withFirebase } from "../Firebase";
import Link from "../Link/Link";
import "./logOutBtn.css";

const SignOutButton = ({ firebase }) => (
  <Link
    route="/home"
    doSomething={firebase.doSignOut}
    title="Sign Out"
    cName="logOutBtn"
  />
);

export default withFirebase(SignOutButton);
