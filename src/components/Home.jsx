import React, { Fragment } from "react";
import NavigationBar from "./Header";
import ProductsCategories from "./ProductsCategories";
import Footer from "./Footer";
import { Component } from "react";
import ProductsOffers from "./ProductsOffers";
import Register from "./Register";
import Contacts from "./Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import cover from "../images/AdidasCover.jpg";
import Login from "./Login";
import Catalog from "./Catalog";
import * as ROUTES from "../constant/routes";
import ProductPage from "./ProductPage";

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
            <Route path={ROUTES.REGISTER} component={Register} exact />
            <Route path={ROUTES.LOGIN} component={Login} exact />
            <Route path={ROUTES.HOME} component={Content} exact />
            <Route path={ROUTES.CONTACT} component={Contacts} exact />
            <Route path={ROUTES.COLLECTIONS} component={ProductPage} exact />
            <Route path={ROUTES.CATALOG} component={Catalog} exact />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
