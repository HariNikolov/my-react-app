import React, { Fragment } from "react";
import NavigationBar from "./Header";
import ProductsCategories from "./ProductsCategories";
import Footer from "./Footer";
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
import Blog from "./BlogPage";
import CheckoutPage from "./Checkout/CheckoutPage";
import { withAuthentication } from "./Session";

const Cover = () => {
  return (
    <CardMedia>
      <img
        style={{ display: "block", height: 800, width: "100%" }}
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

const Home = () => (
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
              <Route path={ROUTES.BLOG} component={Blog} exact />
              <Route path={ROUTES.CHECKOUT} component={CheckoutPage} exact />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
    );
  

export default withAuthentication(Home);
