import React, { Fragment } from "react";
import NavigationBar from "./Header";
import ProductsCategories from "./ProductsCategories";
import Footer from "./Footer";
import { Component } from "react";
import ProductsOffers from "./ProductsOffers";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import cover from "../images/AdidasCover.jpg";
import Login from "./Login"


const Cover = () => {
  return (
    <CardMedia>
      <img
        style={{ display: "block", height: 800, width: 1663 }}
        src={cover}
        alt="increase priority"
      ></img>
    </CardMedia>
  );
};

const Content = () => {
  return (
    <Fragment>
      <Cover />
      <ProductsCategories />
      <ProductsOffers />
    </Fragment>
  );
};

export class Home extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar />
          <Switch>
            <Route path="/register" component={Register} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Content} exact />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
